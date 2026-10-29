import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { statSync } from 'node:fs';

// Flux RSS lu par Brevo pour envoyer chaque nouvel article aux abonnés de la newsletter
const typeImage = (f) => (f.endsWith('.png') ? 'image/png' : f.endsWith('.webp') ? 'image/webp' : 'image/jpeg');

export async function GET(context) {
  const articles = (await getCollection('articles', ({ data }) => !data.brouillon && data.langue === 'fr'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const auteurs = await getCollection('auteurs');
  const nomAuteur = (ref) => { const id = typeof ref === "string" ? ref : ref.id; return auteurs.find((x) => x.id === id)?.data.nom ?? id; };
  return rss({
    title: 'Lex Ludica',
    description: "Revue pluridisciplinaire d'analyse de l'industrie du jeu vidéo",
    site: context.site,
    trailingSlash: false,
    customData: '<language>fr-fr</language>',
    items: articles.map((a) => {
      const item = {
        title: a.data.titre,
        description: a.data.chapo,
        pubDate: a.data.date,
        link: `/articles/${a.id}`,
        customData: `<dc:creator><![CDATA[${(a.data.auteurs ?? []).map(nomAuteur).join(', ')}]]></dc:creator>`,
      };
      if (a.data.image) {
        try {
          const taille = statSync(`public${a.data.image}`).size;
          item.enclosure = { url: new URL(a.data.image, context.site).href, length: taille, type: typeImage(a.data.image) };
        } catch {}
      }
      return item;
    }),
    xmlns: { dc: 'http://purl.org/dc/elements/1.1/' },
  });
}
