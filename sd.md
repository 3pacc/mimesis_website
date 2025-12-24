# 🎨 PROMPT DE CRÉATION - SITE WEB MIMESIS

## 📋 INFORMATIONS GÉNÉRALES

**Nom du Projet** : MIMESIS - Agence Créative Digitale
**Technologies** : React 18 + Vite + Tailwind CSS + Framer Motion
**Langue** : Anglais (tous les contenus)
**Style** : Moderne, Minimaliste, Dark Mode, Glassmorphism, Gradients Violet/Pink

---

## 🏗️ ARCHITECTURE DU PROJET

```
project 2/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx    # Fond animé avec orbes
│   │   ├── BookingModal.jsx          # Modal de réservation (réutilisable)
│   │   ├── Chatbot.jsx               # Chatbot interactif
│   │   ├── Contact.jsx               # Page Contact
│   │   ├── CustomCursor.jsx          # Curseur personnalisé
│   │   ├── Hero.jsx                  # Page d'accueil
│   │   ├── LogoDesign.jsx            # Page détail Logo Design
│   │   ├── Services.jsx              # Page Services
│   │   └── Studio.jsx                # Page Studio (Équipe + Portfolio)
│   ├── App.jsx                       # Point d'entrée principal
│   ├── index.css                     # Styles globaux + Tailwind
│   └── main.jsx                      # Bootstrap React
├── img/                              # Images du portfolio
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🎨 SYSTÈME DE DESIGN

### Palette de Couleurs

```css
/* Dans tailwind.config.js */
colors: {
  'mimesis-black': '#000000'    /* Fond principal */
  'mimesis-white': '#ffffff'    /* Texte principal */
  'mimesis-gray': '#a3a3a3'     /* Texte secondaire */
}

/* Gradients principaux */
bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400
bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10
```

### Typographie

```css
.font-display {
  font-family: 'Display Font' (pour les headings)
}

.font-body {
  font-family: 'Body Font' (pour le texte)
}

/* Tracking pour les labels */
tracking-[0.2em] / [0.3em] (uppercase)
```

### Style de Composants

```css
/* Cards */
bg-white/5 border border-white/10 rounded-3xl

/* Boutons primaires */
bg-white text-black rounded-full px-8 py-4
hover: bg-white/90

/* Boutons secondaires */
bg-transparent border border-white/30 text-white rounded-full

/* Inputs */
bg-white/5 border border-white/10 rounded-2xl
focus:border-white/30 focus:bg-white/10
```

---

## 📦 DÉTAILS DES COMPOSANTS

### 1. **CustomCursor.jsx** - Curseur Personnalisé
- Remplace le curseur par défaut
- Suit la souris avec un léger retard
- Change d'état au survol des éléments interactifs
- Effet de "blending" avec le contenu

### 2. **AnimatedBackground.jsx** - Fond Animé
- Orbes animés qui flottent en arrière-plan
- Couleurs : Violet, Purple, Pink avec opacité réduite
- Animations de rotation et scale infinies
- `pointer-events: none` pour ne pas interferer

### 3. **Hero.jsx** - Page d'Accueil
```
Structure:
├── Titre principal (DynamicColorText)
│   - Change de couleur selon la position X de la souris
│   - Effet de glow au survol
│   - Texte: "We shape digital chaos"
│
├── Sous-titre
│   - "Digital experiences that inspire"
│   - Ligne décorative gradient
│
└── Deux boutons CTA
    ├── "Start a Project" → navigate('services')
    └── "View Portfolio" → navigate('studio')
```

### 4. **Services.jsx** - Page Services

**Données des services :**
```javascript
const services = [
  {
    id: 1,
    title: 'Brand Identity',
    description: 'We design brands that resonate...',
    icon: '◆',
    price: 'Starting at $8,000',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    features: ['Logo Design', 'Brand Strategy', 'Visual Systems', 'Brand Guidelines']
  },
  // ... 3 autres services (Digital Experience, Motion Design, Art Direction)
]

const pricingPlans = [
  { name: 'Starter', price: '$5,000', highlight: false },
  { name: 'Professional', price: '$15,000', highlight: true },  // Mis en évidence
  { name: 'Enterprise', price: '$45,000', highlight: false }
]

const offers = [
  { title: 'Early Bird', discount: '20% OFF' },
  { title: 'Bundle & Save', discount: '15% OFF' },
  { title: 'Referral Bonus', discount: '$2,000' }
]
```

**Sections :**
- Hero avec titre et description
- Grille des 4 services (cartes avec icônes animées)
- Section Process (Discover → Define → Create → Deliver)
- Section Pricing (3 plans)
- Section Special Offers
- CTA avec deux boutons

### 5. **Studio.jsx** - Page Studio

**Données de l'équipe :**
```javascript
const team = [
  {
    id: 1,
    name: 'Anas Tribak',
    role: 'Creative Director',
    bio: 'Award-winning designer with 15 years...',
    image: 'img/Anas.png',  // Import d'image locale
    gradient: 'from-violet-500 to-purple-600'
  },
  // ... 3 autres membres (Marcus Webb, Yuki Tanaka, James Okon)
]
```

**Données du portfolio :**
```javascript
const works = [
  {
    id: 1,
    title: 'Ethereal Cosmetics',
    category: 'Brand Identity',
    image: 'img/face-care-gua-sha-stone-product.jpg',
    color: 'from-pink-300 to-rose-400',
    description: 'A luxury beauty brand reimagined...'
  },
  // ... 5 autres projets
]
```

**Données des valeurs :**
```javascript
const values = [
  { id: 1, title: 'Authenticity', icon: '✦', description: '...' },
  { id: 2, title: 'Innovation', icon: '◈', description: '...' },
  { id: 3, title: 'Excellence', icon: '◆', description: '...' },
  { id: 4, title: 'Collaboration', icon: '◇', description: '...' }
]
```

**Sections :**
- Hero avec titre animé
- Statistics avec compteurs animés (150+ Projects, 50+ Clients, etc.)
- Values (4 cartes avec icônes)
- Team (4 cartes avec photos/avatares)
- Portfolio Gallery (6 projets en grille)
- Studio Space (texte + élément décoratif animé)
- CTA Section

### 6. **Contact.jsx** - Page Contact

**Informations de contact :**
```javascript
const contactInfo = [
  { icon: <EmailIcon />, title: 'Email', value: 'hello@mimesis.studio', description: 'We reply within 24 hours' },
  { icon: <PhoneIcon />, title: 'Phone', value: '+33 1 23 45 67 89', description: 'Mon-Fri, 9am-6pm' },
  { icon: <LocationIcon />, title: 'Address', value: '123 Creativity Street', description: '75001 Paris, France' }
]
```

**Formulaire :**
```javascript
const formData = {
  name: '',
  email: '',
  company: '',
  service: '',      // Select dropdown
  message: ''
}

// Services disponibles :
// - Brand Identity
// - Digital Experience
// - Motion Design
// - Art Direction
// - Other
```

**Sections :**
- Hero avec titre et boutons
- Contact Info Cards (3 cartes)
- Formulaire de contact avec validation
- Business Hours (7 jours)
- FAQ (5 questions avec accordéon)

### 7. **BookingModal.jsx** - Modal de Réservation (Réutilisable)

**Étapes de réservation :**
```
Step 1: Select Date
  - Grille de 14 jours ouvrables (hors week-ends)
  - Format: [Day] [Number] [Month]

Step 2: Select Time
  - 8 créneaux : 9AM, 10AM, 11AM, 12PM, 2PM, 3PM, 4PM, 5PM

Step 3: Your Information
  - Full Name *
  - Email *
  - Company
  - Notes (optional)

Step 4: Confirmation
  - Résumé du rendez-vous
  - Icône de succès animée
  - Bouton "Done"
```

**Indicateur de progression :**
- 4 cercles numérotés avec barre de connexion
- Couleur : Blanc quand actif, Blanc/10 quand inactif
- Checkmark quand l'étape est terminée

---

## 🖼️ IMAGES REQUISES

```
img/
├── Anas.png                          # Photo du Creative Director
├── face-care-gua-sha-stone-product.jpg    # Ethereal Cosmetics
├── hands-digital-universe-background.jpg  # Nexus Tech
├── close-up-cup-filled-with-black-coffee.jpg  # Artisan Coffee
├── dancing-people-club.jpg            # Velvet Nightclub
├── stacked-zen-stones-sand-background-art-balance-concept.jpg  # Zen Wellness
└── musician-walking-downstairs.jpg    # Urban Edge
```

---

## 🚀 DÉPLOIEMENT ET EXÉCUTION

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build pour production
npm run build
```

---

## 📝 POINTS D'ATTENTION PARTICULIERS

### Animations Framer Motion
```javascript
// Variantes d'animation standards
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
}

// Animations au hover
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Tailwind Utilities Personnalisées
```css
/* Dans index.css */
.cursor-none { cursor: none; }
.text-balance { text-wrap: balance; }

/* Scrollbar personnalisée */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { bg: mimesis-black; }
::-webkit-scrollbar-thumb { bg: mimesis-gray/30; border-radius: full; }
```

### Navigation (App.jsx)
```javascript
const navigateTo = (page) => {
  setCurrentPage(page)
  window.scrollTo(0, 0)  // Always scroll to top
}

const renderPage = () => {
  switch (currentPage) {
    case 'services': return <Services />
    case 'studio': return <Studio />
    case 'contact': return <Contact />
    case 'logo-design': return <LogoDesign />
    default: return <Hero onNavigate={navigateTo} />
  }
}
```

### Configuration Tailwind
```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'mimesis-black': '#000000',
        'mimesis-white': '#ffffff',
        'mimesis-gray': '#a3a3a3'
      },
      fontFamily: {
        display: ['Display Font', 'sans-serif'],
        body: ['Body Font', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

---

## ✅ CHECKLIST DE QUALITÉ

- [ ] Toutes les pages sont responsives (mobile, tablet, desktop)
- [ ] Les animations sont fluides (Framer Motion)
- [ ] Le design est cohérent sur toutes les pages
- [ ] Les images sont optimisées
- [ ] Le formulaire de contact fonctionne avec validation
- [ ] Le modal de réservation est centré et accessible
- [ ] Le scroll est smooth (scroll-behavior: smooth)
- [ ] Le curseur personnalisé ne gêne pas la navigation
- [ ] Les dégradés violet/pink sont harmonieux
- [ ] Le glassmorphism est bien implémenté (backdrop-blur)

---

## 📞 RÉSULTAT FINAL

Un site web、单页应用 moderne et professionnel pour une agence créative avec :
- **5 pages** : Home, Services, Studio, Contact, LogoDesign
- **Design unique** : Dark mode avec accents violet/rose
- **Animations** : Fluides et engageantes
- **Fonctionnalités** : Formulaire, Modal de réservation, FAQ
- **Portfolio** : Showcase de 6 projets

---

*Prompt généré pour la création du site MIMESIS avec React, Vite, Tailwind CSS et Framer Motion.*

