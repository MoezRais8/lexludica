import { getCollection, type CollectionEntry } from 'astro:content';

export const formatDate = (d: Date) =>
  d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

// « 10 avril 2026 » en version courte pour les cartes
export const formatDateCourte = (d: Date) =>
  d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });

// Environ 230 mots par minute pour un texte d'analyse
// Temps de lecture du corps de l'article seul : sans sources, bibliographie ni notes de bas de page
export const tempsDeLecture = (texte = '') => {
  const corps = texte
    .split(/^#{2,3}\s*(?:Sources|Bibliographie|Références|Notes)\b.*$/im)[0]
    .replace(/^\[\^[^\]]+\]:.*$/gm, '')
    .replace(/\[\^[^\]]+\]/g, '')
    .replace(/<[^>]+>/g, ' ');
  return Math.max(1, Math.round(corps.split(/\s+/).filter(Boolean).length / 230));
};

// « droit d'auteur » → « droit-dauteur »
export const slugTag = (t: string) =>
  t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Articles publiés dans une langue (français par défaut), du plus récent au plus ancien
export async function articlesPublies(langue: 'fr' | 'en' | 'toutes' = 'fr') {
  const tous = await getCollection('articles', ({ data }) => !data.brouillon && (langue === 'toutes' || data.langue === langue));
  return tous.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function auteursDe(article: CollectionEntry<'articles'>) {
  const tous = await getCollection('auteurs');
  return article.data.auteurs
    .map((ref) => tous.find((a) => a.id === ref.id))
    .filter(Boolean) as CollectionEntry<'auteurs'>[];
}

// Sépare prénom et nom de famille : le nom de famille est écrit en majuscules (« Moez RAIS », « YAO Baba Ange Emmanuel »)
export function decouperNom(complet: string) {
  const mots = complet.split(' ');
  const estNom = (m: string) => m.length > 1 && m === m.toLocaleUpperCase('fr') && m !== m.toLocaleLowerCase('fr');
  const nom = mots.filter(estNom);
  if (!nom.length) return { prenom: mots[0], nom: mots.slice(1).join(' ') };
  return { prenom: mots.filter((m) => !estNom(m)).join(' '), nom: nom.join(' ') };
}

// Référence à la manière d'une citation de doctrine
export function citation(article: CollectionEntry<'articles'>, auteurs: CollectionEntry<'auteurs'>[]) {
  const noms = auteurs
    .map((a) => {
      const { prenom, nom } = decouperNom(a.data.nom);
      return `${prenom[0]}. ${nom}`;
    })
    .join(' et ');
  return `${noms}, « ${article.data.titre} », Lex Ludica, ${formatDate(article.data.date)}`;
}

// Format court d'une décision : « Cass. 1re civ., 25 juin 2009, n° 07-20.387 »
export const refDecision = (d: CollectionEntry<'decisions'>) =>
  `${d.data.juridiction}, ${formatDate(d.data.date)}, ${d.data.numero}`;

// Métadonnées bibliographiques communes (BibTeX, RIS, Google Scholar)
export function biblio(article: CollectionEntry<'articles'>, auteurs: CollectionEntry<'auteurs'>[], url: string, issn = '') {
  const d = article.data.date;
  const an = d.getFullYear();
  const iso = d.toISOString().slice(0, 10);
  const noms = auteurs.map((a) => {
    return decouperNom(a.data.nom);
  });
  const cle = `${(noms[0]?.nom ?? 'lexludica').toLowerCase().replace(/[^a-z]/g, '')}${an}${article.id.split('-')[0]}`;
  const bibtex = [
    `@article{${cle},`,
    `  author  = {${noms.map((n) => `${n.nom}, ${n.prenom}`).join(' and ')}},`,
    `  title   = {${article.data.titre}},`,
    `  journal = {Lex Ludica},`,
    `  year    = {${an}},`,
    `  date    = {${iso}},`,
    issn ? `  issn    = {${issn}},` : '',
    `  url     = {${url}},`,
    `  langid  = {${article.data.langue === 'en' ? 'english' : 'french'}}`,
    `}`,
  ].filter(Boolean).join('\n');
  const ris = [
    'TY  - JOUR',
    ...noms.map((n) => `AU  - ${n.nom}, ${n.prenom}`),
    `TI  - ${article.data.titre}`,
    'JO  - Lex Ludica',
    `PY  - ${an}`,
    `DA  - ${iso.replaceAll('-', '/')}`,
    issn ? `SN  - ${issn}` : '',
    `UR  - ${url}`,
    `AB  - ${article.data.chapo}`,
    `LA  - ${article.data.langue}`,
    'ER  - ',
  ].filter(Boolean).join('\r\n');
  return { bibtex, ris, noms, iso };
}
