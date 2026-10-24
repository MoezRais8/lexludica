import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = (await getCollection('articles', ({ data }) => !data.brouillon && data.langue === 'fr'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return rss({
    title: 'Lex Ludica',
    description: "Revue pluridisciplinaire d'analyse de l'industrie du jeu vidéo",
    site: context.site,
    customData: '<language>fr-fr</language>',
    items: articles.map((a) => ({
      title: a.data.titre,
      description: a.data.chapo,
      pubDate: a.data.date,
      link: `/articles/${a.id}`,
    })),
  });
}
