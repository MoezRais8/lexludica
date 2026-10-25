# Lex Ludica, site Astro

## Lancer le site sur son ordinateur
1. Installer Node.js (version 22 ou plus) depuis nodejs.org
2. Dans ce dossier : `npm install` puis `npm run dev`
3. Ouvrir http://localhost:4321

## Publier sans développeur : l'espace d'édition
Adresse : **https://lexludica.com/admin**

Première connexion (une fois par personne) :
1. Avoir un compte GitHub invité sur le dépôt `MoezRais8/lexludica` (Settings › Collaborators).
2. Créer un jeton : GitHub › Settings › Developer settings › Personal access tokens › Fine-grained tokens › Generate new token.
   Repository access : « Only select repositories » › `lexludica`. Permissions › Contents : « Read and write ». Copier le jeton.
3. Sur /admin, cliquer sur « Se connecter avec un jeton » (Sign In with Token) et coller le jeton.

Publier : choisir une collection (Articles, Brèves…), « Nouveau », remplir, « Enregistrer ».
Le site se met à jour tout seul en une à deux minutes.

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
