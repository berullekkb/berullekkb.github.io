/**
 * ============================================================
 *  TOUTES TES INFOS PERSONNELLES SONT ICI
 * ============================================================
 *  Modifie ce fichier pour mettre à jour le site.
 *  Les projets et articles de blog sont dans src/content/.
 *
 *  ⚠️ Règle d'or : un texte qui contient une apostrophe (') doit être
 *  entouré de guillemets doubles ("...") et pas de guillemets simples.
 */

export const site = {
  // Texte du logo dans la barre de navigation
  logo: 'BK.',
  // URL finale du site (sert au SEO et au sitemap)
  url: 'https://berullekkb.github.io',
  // Description utilisée par Google et les aperçus LinkedIn
  description:
    "Portfolio de Berulle KAMDEM KAMDEM : élève ingénieur IA & Data (UTC) et apprenti chez EDF. Projets, parcours et compétences.",
};

export const profile = {
  firstName: 'Berulle',
  lastName: 'KAMDEM KAMDEM',
  fullName: 'Berulle KAMDEM KAMDEM',
  initials: 'BK',
  title: 'Apprenti ingénieur IA & Data',
  tagline: "Du NLP aux agents IA : je transforme des données complexes en outils utiles aux métiers.",
  // Petit badge au-dessus du nom. Mets `null` pour le cacher.
  availability: 'Recherche une alternance dès septembre 2027',
  location: 'Île-de-France',
  // Photo : remplace public/photo.svg par ta photo (ex. public/photo.jpg) et change ce chemin
  photo: '/photo.jpg',
  cv: '/cv.pdf', // À COMPLÉTER : mets ton CV général dans public/cv.pdf
};

export const links = {
  github: 'https://github.com/berullekkb',
  linkedin: 'https://www.linkedin.com/in/berulle-kamdem-kamdem-79859a27a',
  email: 'berullekkb@gmail.com',
};

// Les 3 chiffres clés de la page d'accueil (animés au scroll)
export const stats = [
  { value: 8, suffix: '+', label: 'Projets IA & Data' },
  { value: 2, suffix: '+', label: "Ans d'alternance" },
  { value: 7, suffix: '', label: 'Certifications' },
];

// Présentation de l'onglet « À propos » (un paragraphe par élément)
export const about = [
  "Élève ingénieur IA & Data à l'UTC (diplôme en août 2027), je suis apprenti ingénieur chez EDF, au sein de la Division Production Nucléaire, depuis septembre 2024.",
  "J'y conçois des solutions qui transforment des données hétérogènes (constats terrain, documents, tableurs) en outils explicables et utiles aux experts : NLP, systèmes experts, LLM et agents IA. J'aime aussi piloter les projets de bout en bout, de la note de cadrage aux ateliers avec les utilisateurs.",
  "Je recherche une alternance de 12 mois à partir de septembre 2027, pour mettre mes compétences en IA et en data au service des besoins métiers.",
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
    title: 'Apprenti ingénieur IA & Data',
    org: 'EDF, Division Production Nucléaire, Île-de-France',
    period: 'Depuis sept. 2024',
    description:
      "Réduction de 50 000 à 2 000 constats terrain à analyser (135 K€/an économisés) grâce au NLP et à une ontologie. Conception d'un système expert de 36 règles de décision explicables. Fiabilisation du suivi de conformité des 19 centrales nucléaires. Classification des contrôles de conformité par LLM et prompt engineering. Pilotage du planning, notes de cadrage et ateliers avec les experts.",
  },
  {
    type: 'formation',
    title: "Diplôme d'ingénieur, spécialité IA & Data",
    org: 'UTC, Université de technologie de Compiègne',
    period: 'Sept. 2024 à août 2027',
    description: 'Cours clés : Machine Learning, moteurs de recherche et RAG, statistiques, cloud.',
  },
  {
    type: 'formation',
    title: 'Classe préparatoire CPGE MPSI / MP',
    org: 'Lycée Notre-Dame de Grâce',
    period: '2022 à 2024',
  },
];

// Compétences regroupées par catégorie
export const skills: { category: string; items: string[] }[] = [
  {
    category: 'IA & agents',
    items: ['LangChain', 'LangGraph', 'MCP', 'CrewAI', 'API Mistral', 'Ollama', 'Hugging Face', 'n8n', 'Microsoft Copilot'],
  },
  {
    category: 'Data & cloud',
    items: ['Python', 'SQL', 'Streamlit', 'Docker', 'Snowflake', 'dbt', 'Airflow', 'AWS', 'Power BI', 'Git / GitHub / GitLab'],
  },
  { category: 'Librairies', items: ['pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'spaCy'] },
  { category: 'Collaboration', items: ['Microsoft 365 (SharePoint, Excel, PowerPoint)', 'Méthode Agile'] },
];

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Professionnel (B2)' },
];

// Certifications (onglet « À propos »), de la plus récente à la plus ancienne.
// Pour en ajouter une : copie un bloc { ... }, colle-le en haut de la liste et change les textes.
// `url` = lien de vérification officiel (facultatif : supprime la ligne s'il n'y en a pas).
export const certifications: {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
  kind?: string;
  image?: string; // image dans public/cert-
}[] = [
  {
    name: 'Agile Project Management',
    issuer: 'Google',
    date: 'Août 2026',
    url: 'https://coursera.org/verify/D079UPLOYZ55',
    image: '/cert-agile-project-management.jpg',
  },
  {
    name: 'Agentic AI with LangChain and LangGraph',
    issuer: 'IBM',
    date: 'Août 2026',
    url: 'https://coursera.org/verify/H8U5T2BN1R1I',
    image: '/cert-agentic.jpg',
  },
  {
    name: 'Fundamentals of Building AI Agents',
    issuer: 'IBM',
    date: 'Août 2026',
    url: 'https://coursera.org/verify/CE124SGZOTNN',
    image: '/cert-agents-fundamentals.jpg',
  },
  {
    name: 'Introduction to Generative AI Learning Path',
    issuer: 'Google Cloud',
    date: 'Août 2026',
    url: 'https://coursera.org/verify/specialization/8M6ZKRZQRWKL',
    image: '/cert-google-genai.jpg',
  },
  {
    name: 'Machine Learning with Python: Build Real-World ML Models',
    issuer: 'IBM',
    date: 'Juil. 2026',
    url: 'https://coursera.org/verify/X1TT7K5SH6OI',
    image: '/cert-machine-learning-python.jpg',
  },
  {
    name: 'MOOC Intelligence Artificielle Responsable',
    issuer: 'Institut du Numérique Responsable',
    date: 'Mai 2026',
    kind: 'Attestation de suivi',
    image: '/cert-inr-ia-responsable.jpg',
  },
  {
    name: 'Data Analysis with Python',
    issuer: 'IBM',
    date: 'Déc. 2025',
    url: 'https://coursera.org/verify/MXC12ULEROGG',
    image: '/cert-data-analysis-python.jpg',
  },
];

// Engagements associatifs (onglet « À propos »)
export const engagements = [
  {
    role: 'Président',
    org: 'Association ANECC',
    period: '2024 à 2026',
    description: '', // À COMPLÉTER (facultatif) : une phrase sur l'association et ce que tu y as fait
  },
  {
    role: 'Responsable communication',
    org: 'Club DECIDE',
    period: '', // À COMPLÉTER (facultatif) : ex. '2025 à 2026'
    description: '', // À COMPLÉTER (facultatif)
  },
];

// Catégories utilisées pour filtrer la page Projets
export const projectCategories = ['IA', 'Data', 'Web', 'Autre'] as const;
