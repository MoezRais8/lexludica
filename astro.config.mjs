import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Configuration du site Lex Ludica
export default defineConfig({
  site: 'https://lexludica.com',
  trailingSlash: 'never',
  integrations: [sitemap({ filter: (page) => !['/admin', '/jurisprudence', '/glossaire', '/dossiers', '/breves', '/medias', '/en', '/comite-editorial', '/newsletter-confirmee'].some((m) => { const p = new URL(page).pathname; return p === m || p.startsWith(m + '/') || p.startsWith(m + '.'); }) })],
  build: {
    // Génère /articles/mon-article.html, servi comme /articles/mon-article
    format: 'file',
  },
  markdown: {
    // Libellés des notes de bas de page en français
    remarkRehype: {
      footnoteLabel: 'Notes',
      footnoteBackLabel: 'Retour au texte',
    },
    shikiConfig: { theme: 'github-light' },
  },
});
