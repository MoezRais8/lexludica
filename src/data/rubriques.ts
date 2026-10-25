// Les huit rubriques éditoriales de Lex Ludica.
// Pour en ajouter une : ajouter une ligne ici, sa page se crée toute seule.
export const rubriques = [
  {
    slug: 'droit',
    nom: 'Droit',
    description: "Propriété intellectuelle, contrats, régulation, jurisprudence ou intelligence artificielle : les enjeux juridiques qui accompagnent la création et l'exploitation des jeux vidéo.",
    tags: ["droit d'auteur", 'jurisprudence'],
  },
  {
    slug: 'economie',
    nom: 'Économie',
    description: "Le jeu vidéo est aussi une industrie. Cette rubrique analyse les modèles économiques, les stratégies des acteurs, les dynamiques de marché et les mutations qui façonnent l'écosystème vidéoludique.",
    tags: ['industrie', 'modèle économique', 'financement', 'édition'],
  },
  {
    slug: 'geopolitique',
    nom: '(Géo)politique',
    description: "Souveraineté numérique, politiques publiques et rapports de force internationaux autour d'une industrie devenue stratégique.",
    tags: ['souveraineté', 'politiques publiques'],
  },
  {
    slug: 'anatomie',
    nom: 'Anatomie du jeu',
    description: "Moteurs, machines, mécaniques et game design : ce qu'il y a sous le capot des jeux et comment ils sont construits.",
    tags: ['game design', 'technologies'],
  },
  {
    slug: 'culture',
    nom: 'Culture',
    description: "Œuvres, esthétiques et circulations entre le jeu vidéo, le cinéma, la littérature et les autres arts.",
    tags: ['transmédialité', 'communautés'],
  },
  {
    slug: 'histoire',
    nom: 'Histoire',
    description: "Des premiers laboratoires aux productions contemporaines, cette rubrique retrace l'histoire du jeu vidéo, de ses technologies, de ses créateurs et des œuvres qui ont marqué l'évolution du médium.",
    tags: ['rétrogaming', 'innovations', 'patrimoine'],
  },
  {
    slug: 'psychologie',
    nom: 'Psychologie',
    description: "Pourquoi jouons-nous ? Comment les jeux influencent-ils nos comportements, nos émotions et nos interactions ? Cette rubrique explore les mécanismes psychologiques qui façonnent l'expérience vidéoludique.",
    tags: ['comportement', 'cognition', 'communautés'],
  },
  {
    slug: 'regards-croises',
    nom: 'Regards croisés',
    description: "Un même sujet, plusieurs disciplines autour de la table : juristes, économistes, historiens et créateurs confrontent leurs lectures.",
    tags: ['pluridisciplinaire'],
  },
] as const;

export type RubriqueSlug = (typeof rubriques)[number]['slug'];
export const rubriqueSlugs = rubriques.map((r) => r.slug) as [RubriqueSlug, ...RubriqueSlug[]];
export const getRubrique = (slug: string) => rubriques.find((r) => r.slug === slug)!;

// Rubriques mises en avant sur l'accueil (colonne gauche, colonne droite)
export const accueilGauche: RubriqueSlug[] = ['economie', 'psychologie'];
export const accueilDroite: RubriqueSlug[] = ['droit', 'histoire'];

// Hashtags affichés dans la barre du haut et dans le pied de page
export const tagsEnTete = ['modding', "droit d'auteur", 'cluf', 'propriété intellectuelle'];
export const tagsPied = ['modding', "droit d'auteur", 'cluf', 'propriété intellectuelle'];

// Réseaux sociaux : renseigner l'adresse pour activer le lien
export const reseaux = [
  { nom: 'LinkedIn', url: '' },
  { nom: 'Instagram', url: '' },
  { nom: 'TikTok', url: '' },
  { nom: 'X', url: '' },
  { nom: 'Discord', url: '' },
];
