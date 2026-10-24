# Lex Ludica, site Astro

## Lancer le site sur son ordinateur
1. Installer Node.js (version 22 ou plus) depuis nodejs.org
2. Dans ce dossier : `npm install` puis `npm run dev`
3. Ouvrir http://localhost:4321

## Écrire et relire avec l'espace contributeurs
L'espace contributeurs (Decap CMS) est à l'adresse `/admin`.
- **En local** : lancer `npm run cms` dans un terminal et `npm run dev` dans un autre, puis ouvrir http://localhost:4321/admin
- **En ligne** : renseigner le dépôt GitHub et le service de connexion dans `public/admin/config.yml`
  (sur Cloudflare, un petit service de connexion GitHub pour Decap se déploie en quelques minutes).
- Flux de relecture : un contributeur crée un brouillon, le passe « En relecture », un éditeur le publie.

## Ce que l'on peut créer
| Contenu | Dossier |
|---|---|
| Articles | `src/content/articles/` |
| Brèves | `src/content/breves/` |
| Décisions (jurisprudence) | `src/content/decisions/` |
| Dossiers thématiques | `src/content/dossiers/` |
| Auteurs et comité éditorial | `src/content/auteurs/` |
| Glossaire | `src/content/glossaire.json` |
| Vidéos et podcasts | `src/data/site.ts` |
| Rubriques, hashtags, réseaux sociaux | `src/data/rubriques.ts` |

Dans un article :
- notes de bas de page : `texte[^1]` puis, en bas, `[^1]: Cass. 1re civ., ...`
- définition au survol : `[œuvre complexe](/glossaire#oeuvre-complexe)`
- références juridiques mises en valeur : `` `Art. L. 113-2 CPI` ``

## Réglages à compléter (src/data/site.ts)
- `issn` : numéro attribué par la BnF, affiché en pied de page et dans les métadonnées
- `matomo` : adresse de l'instance et identifiant du site, pour la mesure d'audience sans cookie

## Mettre en ligne
`npm run build` produit le dossier `dist/`, à déployer sur Cloudflare Pages
(commande de build : `npm run build`, dossier de sortie : `dist`).
