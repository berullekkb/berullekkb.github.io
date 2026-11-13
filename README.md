# Portfolio — Berulle KAMDEM KAMDEM

Site personnel construit avec **Astro**, **MDX** et **Tailwind CSS**.
Statique, rapide, mode clair/sombre, responsive, prêt pour GitHub Pages ou Vercel.

---

## 1. Lancer le site sur ton ordinateur

Prérequis : [Node.js](https://nodejs.org) **22.23.4 ou plus récent** (`node -v` pour vérifier).

```bash
npm install      # une seule fois
npm run dev      # puis ouvre http://localhost:4321
```

Chaque modification de fichier se voit instantanément dans le navigateur.

| Commande          | Rôle                                         |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Serveur de développement                     |
| `npm run build`   | Génère le site final dans `dist/`            |
| `npm run preview` | Prévisualise le site final avant de déployer |

---

## 2. Mettre TES infos (le plus important)

### a) Infos personnelles → `src/data/profile.ts`
Tout est au même endroit : nom, titre, accroche, liens GitHub/LinkedIn/e-mail,
chiffres clés, présentation, parcours, compétences, langues.
Cherche **« À COMPLÉTER »** et remplace.

### b) Photo et CV → dossier `public/`
- Mets ta photo (carrée, ~600×600 px) : `public/photo.jpg`
  puis dans `profile.ts` : `photo: '/photo.jpg'`
- Remplace `public/cv.pdf` par ton vrai CV (garde le même nom).
- Remplace `public/og-image.png` (1200×630) : c'est l'image qui s'affiche quand
  tu partages ton lien sur LinkedIn. Tu peux la faire sur Canva.

### c) Couleur du site → `src/styles/global.css`
Change `--color-accent` (et ses variantes dans `.dark`). Toute la charte suit.

---

## 3. Ajouter un projet

1. Crée un fichier dans `src/content/projects/`, par ex. `mon-projet.mdx`
   (le nom du fichier devient l'URL : `/projects/mon-projet/`).
2. Copie cet en-tête et remplis-le :

```mdx
---
title: "Nom du projet"
subtitle: "Ce que fait le projet en une ligne"
category: "IA"            # IA, Data, Web ou Autre
tech: ["Python", "PyTorch"]
cover: "/projects/mon-projet.png"   # image dans public/projects/
github: "https://github.com/..."
demo: "https://..."       # facultatif
featured: true            # true = affiché sur la page d'accueil (5 max)
order: 1                  # 1 = en premier
date: 2026-11-01
---

## Contexte
...
## Le problème
...
## Ma solution
...
## Résultats
...
```

3. Supprime les projets exemples (ceux marqués « PROJET EXEMPLE »).

💡 Un bon projet = un problème clair, ce que **toi** tu as fait, et un résultat chiffré.

---

## 4. Écrire un article de blog

Crée `src/content/blog/mon-article.mdx` :

```mdx
---
title: "Titre de l'article"
description: "Résumé en une phrase"
date: 2026-11-20
tags: ["data", "projet"]
draft: false     # true = caché tant que tu n'as pas fini
---

Ton texte en Markdown…
```

Le temps de lecture est calculé automatiquement.

---

## 5. Mettre le site en ligne

### Option A — GitHub Pages (gratuit)

1. Crée un dépôt sur GitHub (ex. `portfolio`) et envoie le code :
   ```bash
   git init
   git add .
   git commit -m "Premier commit"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/portfolio.git
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.
3. Le fichier `.github/workflows/deploy.yml` publie le site automatiquement
   à chaque `git push`. Suis l'avancement dans l'onglet **Actions**.

> ⚠️ Sans nom de domaine, l'adresse sera `https://TON-PSEUDO.github.io/portfolio/`.
> Dans ce cas, ajoute dans `astro.config.mjs` :
> `site: 'https://TON-PSEUDO.github.io'` et `base: '/portfolio'`.
> Le plus simple : nommer le dépôt **`TON-PSEUDO.github.io`** → le site est servi
> à la racine, sans `base`.

### Option B — Vercel (gratuit, le plus simple)

1. Va sur [vercel.com](https://vercel.com), connecte-toi avec GitHub.
2. **Add New → Project**, choisis ton dépôt. Vercel détecte Astro tout seul.
3. **Deploy**. Chaque `git push` met le site à jour.

---

## 6. Brancher ton nom de domaine (ex. berullekamdem.tech)

1. Achète le domaine (Namecheap, OVH, Gandi… les `.tech` sont souvent
   gratuits 1 an avec le **GitHub Student Developer Pack**).
2. Mets ce domaine dans `astro.config.mjs` (`site:`) **et** dans
   `src/data/profile.ts` (`site.url`).
3. Selon l'hébergeur :
   - **GitHub Pages** : crée `public/CNAME` contenant uniquement
     `berullekamdem.tech`, puis Settings → Pages → Custom domain.
     Chez ton registrar, ajoute 4 enregistrements **A** vers
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
     et un **CNAME** `www` → `TON-PSEUDO.github.io`.
   - **Vercel** : Project → Settings → Domains → ajoute le domaine et
     copie les enregistrements DNS indiqués.
4. Coche **Enforce HTTPS**. La propagation DNS prend de quelques minutes à 24 h.

---

## Structure du projet

```
├── public/                  # fichiers servis tels quels (photo, CV, images)
│   ├── cv.pdf
│   ├── photo.svg            # à remplacer par ta photo
│   ├── favicon.svg
│   ├── og-image.png
│   └── projects/            # images de couverture des projets
├── src/
│   ├── data/profile.ts      # ⭐ TOUTES tes infos personnelles
│   ├── content/
│   │   ├── projects/        # un .mdx par projet
│   │   └── blog/            # un .mdx par article
│   ├── components/          # Navbar, Hero, About, ProjectCard, Footer, Icon
│   ├── layouts/BaseLayout.astro   # <head>, SEO, thème, transitions
│   ├── pages/               # routes : /, /projects, /blog, 404, robots.txt
│   └── styles/global.css    # couleurs, polices, animations
├── astro.config.mjs
└── .github/workflows/deploy.yml   # déploiement GitHub Pages
```

## Ce qui est déjà inclus

- Mode sombre mémorisé, menu mobile, transitions fluides entre pages
- Compteurs animés, apparition des sections au scroll (désactivé si
  « réduire les animations » est activé sur l'appareil)
- Onglets Portfolio / À propos accessibles au clavier (← →)
- Filtres par catégorie sur la page Projets
- SEO : balises meta, Open Graph, Twitter Card, sitemap, robots.txt, URL canonique
- Accessibilité : lien « Aller au contenu », textes alternatifs, focus visibles
