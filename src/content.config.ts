import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { rubriqueSlugs } from './data/rubriques';

// Un article = un fichier Markdown dans src/content/articles
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    titre: z.string(),
    chapo: z.string(),
    date: z.coerce.date(),
    maj: z.coerce.date().optional(),            // date de mise à jour
    majNote: z.string().optional(),             // ce qui a changé
    rubrique: z.enum(rubriqueSlugs),
    auteurs: z.array(reference('auteurs')),
    decisions: z.array(reference('decisions')).default([]),
    une: z.boolean().default(false),            // « En tendance » sur l'accueil
    populaire: z.number().optional(),           // rang 1, 2 ou 3 dans « Populaire »
    image: z.string().optional(),               // chemin d'une image dans /public
    imageAlt: z.string().optional(),            // description de l'image pour l'accessibilité
    imageCredit: z.string().optional(),         // crédit affiché sous l'image
    etiquettes: z.array(z.string()).default([]),
    langue: z.enum(['fr', 'en']).default('fr'),
    traduction: z.string().optional(),          // identifiant de l'autre version linguistique
    brouillon: z.boolean().default(false),
    demo: z.boolean().default(false),
  }),
});

// Un contributeur = une fiche Markdown dans src/content/auteurs (la bio est le texte)
const auteurs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/auteurs' }),
  schema: z.object({
    nom: z.string(),
    role: z.string(),
    disciplines: z.array(z.string()).default([]),
    initiales: z.string(),
    linkedin: z.string().optional(),
    photo: z.string().optional(),               // chemin d'une photo carrée dans /public
    comite: z.boolean().default(false),         // membre du comité éditorial
    ordre: z.number().default(99),
    fictif: z.boolean().default(false),
  }),
});

// Base de jurisprudence : une fiche par décision (le résumé est le texte)
const decisions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/decisions' }),
  schema: z.object({
    nom: z.string(),                            // nom d'usage : « Cryo »
    juridiction: z.string(),                    // « Cass. 1re civ. »
    ordre: z.enum(['France', 'Union européenne', 'États-Unis', 'Autre']),
    date: z.coerce.date(),
    numero: z.string(),                         // n° de pourvoi ou d'affaire
    parties: z.string().optional(),
    apport: z.string(),                         // l'apport en une phrase
    themes: z.array(z.string()).default([]),
  }),
});

// Dossiers thématiques : une introduction et une sélection d'articles dans l'ordre
const dossiers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dossiers' }),
  schema: z.object({
    titre: z.string(),
    accent: z.string().optional(),
    chapo: z.string(),
    rubrique: z.enum(rubriqueSlugs),
    articles: z.array(reference('articles')),
    date: z.coerce.date(),
  }),
});

// Glossaire : un fichier unique, une entrée par terme
const glossaire = defineCollection({
  loader: file('./src/content/glossaire.json', { parser: (texte) => JSON.parse(texte).termes }),
  schema: z.object({
    terme: z.string(),
    definition: z.string(),
    voir: z.string().optional(),               // référence textuelle (article de code, décision)
  }),
});

// Brèves : actualité courte
const breves = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/breves' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    rubrique: z.enum(rubriqueSlugs),
    source: z.string().optional(),
    sourceUrl: z.string().optional(),
    demo: z.boolean().default(false),
  }),
});

export const collections = { articles, auteurs, decisions, dossiers, glossaire, breves };
