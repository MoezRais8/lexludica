import type { APIRoute } from 'astro';
import { articlesPublies, auteursDe, biblio } from '../../lib/utils';
import { site } from '../../data/site';

// Fichier RIS de chaque article, importable dans Zotero, EndNote ou Mendeley
export async function getStaticPaths() {
  const articles = await articlesPublies('toutes');
  return articles.map((article) => ({ params: { slug: article.id }, props: { article } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { article } = props as { article: Awaited<ReturnType<typeof articlesPublies>>[number] };
  const auteurs = await auteursDe(article);
  const { ris } = biblio(article, auteurs, `${site.url}/articles/${article.id}`, site.issn);
  return new Response(ris, { headers: { 'Content-Type': 'application/x-research-info-systems; charset=utf-8' } });
};
