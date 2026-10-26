// Réglages généraux du site : à compléter au fil du lancement.
export const site = {
  nom: 'Lex Ludica',
  editeur: 'Cercle Vidéoludique',
  url: 'https://lexludica.com',
  email: 'contact@lexludica.com',
  // Passer à true le jour du lancement : tant que c'est false, les moteurs de recherche n'indexent pas le site
  indexation: true,
  // ISSN attribué par la BnF : il s'affiche dans le pied de page et les métadonnées dès qu'il est renseigné
  issn: '',
  // Mesure d'audience Matomo sans cookies : adresse de l'instance et identifiant du site
  matomo: { url: '', siteId: '' },
};

// Rubriques affichées dans les menus, le pied de page et l'accueil.
// Passer une valeur à true pour réactiver la rubrique dès qu'elle a du contenu.
export const sections = {
  jurisprudence: false,
  glossaire: false,
  dossiers: false,
  breves: false,
  medias: false,
  anglais: false,
  comite: false,
};

// Vidéos et podcasts de la page Médias. Renseigner l'adresse YouTube pour activer le lien.
export const medias = [
  {
    titre: 'Du Dev au Stream #7',
    format: 'Podcast vidéo',
    description: "Passage de Lex Ludica dans le podcast Twitch Du Dev au Stream. Rediffusion disponible sur la chaîne YouTube Lex Ludica.",
    url: '',
  },
];
