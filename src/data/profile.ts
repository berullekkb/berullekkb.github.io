/**
 * ============================================================
 *  TOUTES TES INFOS PERSONNELLES SONT ICI
 * ============================================================
 *  Modifie ce fichier pour mettre à jour le site.
 *  Tout ce qui est marqué « À COMPLÉTER » est provisoire.
 *  Les projets et articles de blog sont dans src/content/.
 */

export const site = {
  // Texte du logo dans la barre de navigation
  logo: 'BK.',
  // URL finale du site (sert au SEO et au sitemap)
  url: 'https://berullekamdem.tech', // À COMPLÉTER : ton vrai domaine
  // Description utilisée par Google et les aperçus LinkedIn
  description:
    "Portfolio de Berulle KAMDEM KAMDEM — étudiant en Data Science & IA. Projets, parcours et articles.",
};

export const profile = {
  firstName: 'Berulle',
  lastName: 'KAMDEM KAMDEM',
  fullName: 'Berulle KAMDEM KAMDEM',
  initials: 'BK',
  title: 'Étudiant en Data Science & IA', // À COMPLÉTER
  tagline: 'Je transforme les données en solutions concrètes.', // À COMPLÉTER
  // Petit badge au-dessus du nom. Mets `null` pour le cacher.
  availability: 'Disponible pour un stage — 2027', // À COMPLÉTER
  location: 'France', // À COMPLÉTER
  // Photo : remplace public/photo.svg par ta photo (ex. public/photo.jpg) et change ce chemin
  photo: '/photo.svg',
  cv: '/cv.pdf', // Mets ton CV dans public/cv.pdf
};

export const links = {
  github: 'https://github.com/', // À COMPLÉTER
  linkedin: 'https://www.linkedin.com/', // À COMPLÉTER
  email: 'ton.email@exemple.com', // À COMPLÉTER
};

// Les 3 chiffres clés de la page d'accueil (animés au scroll)
export const stats = [
  { value: 5, suffix: '+', label: 'Projets réalisés' }, // À COMPLÉTER
  { value: 2, suffix: '+', label: 'Expériences pro' }, // À COMPLÉTER
  { value: 4, suffix: '+', label: 'Années en informatique' }, // À COMPLÉTER
];

// Présentation de l'onglet « À propos » (un paragraphe par élément)
export const about = [
  "À COMPLÉTER — Je suis étudiant en [formation] à [école], passionné par l'intelligence artificielle et l'analyse de données.",
  "À COMPLÉTER — Ce qui me motive : [ce qui te passionne, le type de problèmes que tu aimes résoudre].",
  "À COMPLÉTER — Je recherche actuellement [un stage / une alternance] en [domaine] à partir de [date].",
];

// Frise chronologique : formation + expériences (du plus récent au plus ancien)
export type TimelineItem = {
  type: 'formation' | 'experience';
  title: string;
  org: string;
  period: string;
  description?: string;
};

export const timeline: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Stagiaire Data Analyst', // À COMPLÉTER
    org: 'Entreprise', // À COMPLÉTER
    period: '2026', // À COMPLÉTER
    description: 'À COMPLÉTER — Ce que tu as fait et le résultat obtenu, en une ou deux phrases.',
  },
  {
    type: 'formation',
    title: 'Master / Licence — Data Science', // À COMPLÉTER
    org: 'Nom de l’école', // À COMPLÉTER
    period: '2024 — 2027', // À COMPLÉTER
    description: 'À COMPLÉTER — Spécialité, cours marquants.',
  },
  {
    type: 'experience',
    title: 'Premier stage', // À COMPLÉTER
    org: 'Entreprise', // À COMPLÉTER
    period: '2025', // À COMPLÉTER
    description: 'À COMPLÉTER — Missions et résultat.',
  },
  {
    type: 'formation',
    title: 'Baccalauréat', // À COMPLÉTER
    org: 'Lycée', // À COMPLÉTER
    period: '2022', // À COMPLÉTER
  },
];

// Compétences regroupées par catégorie
export const skills: { category: string; items: string[] }[] = [
  { category: 'Langages', items: ['Python', 'SQL', 'Java', 'JavaScript'] }, // À COMPLÉTER
  { category: 'IA / Data', items: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'Power BI'] }, // À COMPLÉTER
  { category: 'Outils', items: ['Git', 'Docker', 'Jupyter', 'Linux', 'VS Code'] }, // À COMPLÉTER
  { category: 'Soft skills', items: ['Curiosité', 'Travail en équipe', 'Rigueur', 'Communication'] }, // À COMPLÉTER
];

export const languages = [
  { name: 'Français', level: 'Langue maternelle' }, // À COMPLÉTER
  { name: 'Anglais', level: 'Courant (B2)' }, // À COMPLÉTER
];

// Catégories utilisées pour filtrer la page Projets
export const projectCategories = ['IA', 'Data', 'Web', 'Autre'] as const;
