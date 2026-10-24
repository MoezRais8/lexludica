import { getCollection, type CollectionEntry } from 'astro:content';

export const formatDate = (d: Date) =>
  d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

// « 10 avril 2026 » en version courte pour les cartes
export const formatDateCourte = (d: Date) =>
  d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });

// Environ 230 mots par minute pour un texte d'analyse
export const tempsDeLecture = (texte = '') =>
  Math.max(1, Math.round(texte.split(/\s+/).filter(Boolean).length / 230));

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

// Référence à la manière d'une citation de doctrine
export function citation(article: CollectionEntry<'articles'>, auteurs: CollectionEntry<'auteurs'>[]) {
  const noms = auteurs
    .map((a) => {
      const parts = a.data.nom.split(' ');
      return `${parts[0][0]}. ${parts.slice(1).join(' ')}`;
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
    const p = a.data.nom.split(' ');
    return { prenom: p[0], nom: p.slice(1).join(' ') };
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
