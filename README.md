# MIMESIS - Digital Experience Studio

Une Hero Section luxueuse et minimaliste pour un studio de design fictif, créée avec React, Framer Motion et Tailwind CSS.

## 🎨 Caractéristiques

### Design & Animation
- **Typographie**: Inter Tight (Google Fonts) avec une taille d'affichage imposante
- **Animation d'entrée**: Révélation mot par mot avec effet de masque (clipping mask)
- **Arrière-plan**: Mesh gradient animé avec effet de respiration
- **Curseur personnalisé**: Cercle inversé avec blend-mode: difference qui réagit aux éléments interactifs

### Technologies
- ⚛️ React 18
- 🎭 Framer Motion pour les animations
- 🎨 Tailwind CSS pour le style
- ⚡ Vite comme bundler

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

## 📁 Structure du Projet

```
project 2/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── index.css
    ├── main.jsx
    ├── App.jsx
    └── components/
        ├── AnimatedBackground.jsx  # Mesh gradient animé
        ├── CustomCursor.jsx        # Curseur personnalisé
        └── Hero.jsx                # Hero Section principale
```

## ✨ Détails des Animations

### Hero Section
- Le titre "We shape digital chaos" apparaît mot par mot avec un délai progressif
- Chaque mot utilise un clip-path pour créer un effet de révélateur fluide
- Le sous-titre apparaît lettre par lettre

### Arrière-plan
- Canvas-based mesh gradient avec 6 points qui se déplacent lentement
- Couleurs harmonieuses dans les tons bleu-violet
- Effet de traînée pour une sensation organique

### Curseur
- Petit point blanc (main cursor)
- Cercle plus grand avec contour (follower)
- Effet supplémentaire avec un troisième cercle sur survol
- Animation de grossissement sur les éléments interactifs (`.interactive`)

## 🎯 Éléments Interactifs

Les éléments avec la classe `interactive` déclenchent une animation de grossissement du curseur:
- Liens de navigation
- Boutons
- Éléments avec `role="button"`

