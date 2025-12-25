# MIMESIS - Digital Experience Studio

An immersive and complete portfolio website for a fictional digital creative studio based in Paris. The MIMESIS project embodies the excellence of modern digital design with a dark and elegant aesthetic, smooth animations, and a carefully crafted user experience. The slogan "We shape digital chaos" reflects the studio's innovative creative approach, transforming complex concepts into memorable and functional visual experiences.

This project represents far more than a simple portfolio: it is a complete technical demonstration of modern frontend development capabilities. Each section was designed with particular attention to detail, from subtle micro-interactions to spectacular animations that captivate visitors' attention. The site uses a carefully orchestrated combination of modern technologies to create an experience that is both visually impressive and perfectly functional on all devices.

### 🎯 Development Context

This project was developed as part of an innovative **vibe coding** experiment to rigorously test and evaluate the capabilities of the **MiniMax M2.1** AI model. Vibe coding represents a new paradigm in software development where the AI model is given high-level creative direction and user intent, then autonomously generates, refines, and optimizes the codebase while maintaining stylistic coherence and technical excellence.

The development process leveraged MiniMax M2.1's advanced reasoning capabilities to:
- Generate complex React component architectures with clean separation of concerns
- Implement sophisticated animation systems using Framer Motion
- Design and apply a comprehensive design system with consistent visual language
- Optimize performance through careful state management and code splitting
- Create responsive layouts that adapt seamlessly across all device sizes

This approach demonstrates that modern AI models can effectively translate abstract creative concepts into production-ready code, handling everything from structural planning to micro-interaction details. The project serves as both a functional portfolio and a benchmark for evaluating AI-assisted development workflows.

---

## 📋 Table of Contents

- [Features](#-features)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Main Components](#-main-components)
- [Design System](#-design-system)
- [Animations and Interactions](#-animations-and-interactions)
- [Responsive Design](#-responsive-design)
- [Available Scripts](#-available-scripts)
- [Future Development](#-future-development)

---


## ✨ Features

### Intelligent Navigation

The navigation system of the MIMESIS site is designed to provide an optimal user experience on all screen sizes. The navigation bar is persistent and intelligent: it remains visible at the top of the screen when the user scrolls up or is near the top, and automatically hides when scrolling down to maximize visible content area. This feature is implemented with a scroll tracking system that compares the current position with the previous position to determine scroll direction. A blur effect (backdrop-blur-2xl) activates when the page has scrolled more than 50 pixels, creating a frosted glass effect that improves content readability while maintaining the visual elegance of the design.

The navigation offers links to four main sections: Home, Services, Studio, and Contact. Each link has sophisticated visual indicators for the active page, with an animated line that deploys fully under the text when hovering. On mobile, links are displayed directly in the header instead of a hamburger menu, ensuring quick access without additional interaction. The MIMESIS logo, integrated directly into the App component, is also clickable and returns to the home page with spectacular hover animations including a rainbow gradient, an animated line, and floating particles.

### Hero Section (Homepage)

The Hero section is designed to create an immediate and memorable visual impact upon page loading. The main title "We shape digital chaos" uses an innovative DynamicColorText component that dynamically changes color based on the horizontal mouse position, transitioning from cyan on the left to pink on the right with a corresponding glow effect that enhances immersion. This subtle but captivating interaction invites users to explore the site playfully and creates an immediate connection between the visitor and the brand. The title is animated with a progressive appearance effect from the bottom with sequential delay for each word, creating an elegant cascade effect.

The Hero section background includes several animated orbs that rotate and breathe slowly, creating an ethereal and mysterious atmosphere. Three main orbs in violet, purple, and pink colors move with different animation durations (30s, 25s, 35s) for an organic and non-repetitive effect. Floating geometric elements (bordered circles) are strategically positioned to add visual depth, with a floating animation that makes them gently oscillate up and down with different delays. A subtle grid overlay at very low opacity (2%) gives a technical texture to the design while remaining discreet and elegant.

The call-to-action buttons are styled with a progressive fill effect on hover: a violet-pink-pink gradient deploys from left to right when hovering over the button, transforming the transparent or white background into a rich and engaging color. The site also features a 3-second initial loading screen that temporarily blocks scrolling to allow entry animations to unfold without interruption, creating a professional and polished first impression.

### Services and Pricing

The Services page presents the studio's four main offerings in a modern and engaging grid layout. Each service is represented by a detailed card including an animated icon that cycles through rotation and scaling, a title, an in-depth description with a decorative sidebar, a 2x2 grid displaying sub-services (features) with color-coordinated frames, and a starting price. The four services offered are: Brand Identity with ◆ symbols and violet-purple colors, Digital Experience with ◇ symbols and cyan-blue colors, Motion Design with ○ symbols and pink-red colors, and Art Direction with ● symbols and amber-orange colors. Each card has sophisticated hover animations including a 10-pixel upward shift, a progressively activating background gradient, and amplifying light elements to create a virtual tactile experience.

The Process section presents the working methodology in four steps (Discover, Define, Create, Deliver) with visual connections between steps on medium and large screens, using gradient lines that guide the user's gaze. The Pricing section offers three plans (Starter at $5,000, Professional at $15,000, Enterprise at $45,000) with differentiated features and a visual highlight (badge "Most Popular") for the Professional plan. Special offers (Early Bird -20%, Bundle & Save -15%, Referral Bonus $2,000) are presented in animated cards with a pulsing percentage badge to draw attention to savings opportunities.

### Portfolio and Team

The Studio page combines team presentation, completed projects, and a description of values and creative space. The Stats section displays four animated counters (150+ projects, 50+ clients, 12 awards, 8 years experience) that progressively increment with a smooth quart-out easing animation when they enter the user's viewport. The Values section presents four core principles (Authenticity, Innovation, Excellence, Collaboration) with animated icons that gently pivot in a 4-second cycle, creating a sense of life and movement even in static elements.

The team is presented as cards for four members: Anas Tribak (Creative Director), Marcus Webb (Lead Designer), Yuki Tanaka (Motion Designer), and James Okon (Brand Strategist). Each card displays a photo or generated avatar with initials, the name, the role underlined in violet, a biography, and links to social networks with minimalist icons. Anas Tribak's card uses a real photo imported from the img/ folder, while other members have generated avatars with different color gradients (pink-rose, blue-cyan, amber-orange) that match their supposed personalities. A subtle gradient overlay appears on hover of each card, adding visual depth.

The Portfolio section presents six projects in a responsive grid: Ethereal Cosmetics (cosmetics), Nexus Tech (technology), Artisan Coffee (coffee), Velvet Nightclub (club), Zen Wellness (wellness), and Urban Edge (fashion). Each project is displayed in a card with the image at the top (45% of the card) and a gradient background matching the project at the bottom, with text overlays for name and description. A "View Project" button appears on hover with a reveal animation, and a decorative circle with an expanding arrow reinforces the interactive aspect.

### Contact Form and FAQ

The Contact page offers multiple communication and interaction methods with the studio. Contact information is presented in three cards (Email, Phone, Address) with custom SVG icons and hover animations that reveal a subtle violet-pink gradient and rotate the icon by 5 degrees. A complete form collects full name, email, company, desired service via an elegant dropdown, and message with a resizable text area. The form has a submission state with loading animation (circular spinner), required field validation, and a success message with animated checkmark icon and violet-pink gradient background.

The Business Hours section displays schedules for each day of the week in aligned cards with sequential entry animation. The FAQ section presents five frequently asked questions with comprehensive answers about response times, video calls, international clients, collaboration process, and volume discounts. Each FAQ item can be expanded or collapsed with smooth height animation using AnimatePresence from Framer Motion, creating natural and elegant content expansion.

### Interactive Chatbot Alfredo

The "Alfredo" chatbot is an interactive virtual assistant that appears after 3 seconds on the site to not interrupt the initial experience but be available for exploring visitors. It appears as a floating button in the bottom right corner, initially semi-transparent (40% opacity) and becomes fully visible with a more intense violet glow effect on hover. The button displays a chat icon that transforms into a close (X) icon when the chat is open, with a smooth 90-degree rotation animation in each direction.

The chat window offers four quick questions: "What services?", "Pricing?", "Timeline?", and "Let's talk". Each question can be clicked to automatically send a pre-defined message, allowing visitors to quickly obtain information without typing. Bot and user messages are displayed with differentiated styles and entry animations: bot messages have a semi-transparent purple background with glassmorphism effect (backdrop-blur), while user messages use a violet-fuchsia gradient with colored drop shadow. The interface uses a visual theme consistent with the main site's purple palette, creating visual continuity.

### Booking System

The BookingModal is a four-step appointment booking system with a modern and intuitive interface that guides the user through the booking process. The first step allows selecting a date from the next 14 business days (Monday to Friday), displaying the day of the week, day number, and month in clickable cards with hover animations. The second step selects a time slot from eight options from 9 AM to 5 PM. The third step collects personal information (name, email, company, optional notes) with styled fields. The fourth step confirms the booking with a complete summary and success message.

Each step displays a visual progress bar with four connected circles: completed steps show a white checkmark icon, the active step is highlighted in white on black, and future steps remain grayed with semi-transparent background. The modal can be closed at any time with a close button in the top right corner, and all data is reset on closure to protect user privacy. The design uses semi-transparent borders (white/10 to white/30), subtle violet-pink gradients on headers and backgrounds, and smooth animations to create a premium experience consistent with the rest of the site.

---

## 🛠️ Technologies

### Frameworks and Libraries

The MIMESIS project uses a modern and carefully selected technology stack to ensure performance, maintainability, and user experience quality. **React 18** serves as the main framework, offering a component-based architecture that facilitates code maintenance and evolution. React 18's new features like concurrent rendering and automatic batching are used to optimize animation and state update performance. **Vite** is used as the bundler and development server, offering ultra-fast compilation times thanks to its native ES modules approach and instant Hot Module Replacement (HMR) system.

For animations, **Framer Motion** is the library of choice, offering an intuitive and powerful API for creating complex animations with minimal and readable code. Framer Motion manages all site animations, from the most subtle (color transitions) to the most spectacular (section entries with staggered children). Two additional utilities, **clsx** and **tailwind-merge**, are integrated to dynamically manage CSS classes and elegantly resolve style conflicts. Styling is managed by **Tailwind CSS**, a utility-first framework that allows rapid creation of personalized designs while maintaining visual consistency through its centralized configuration.

### Development Tools

**PostCSS** is configured to process CSS files with tailwindcss and autoprefixer plugins, enabling the use of the latest CSS features with maximum browser compatibility. **Autoprefixer** automatically adds necessary vendor prefixes for experimental CSS properties, ensuring the site works correctly on all modern browsers. The **Inter Tight** font from Google Fonts is used as the main font, chosen for its modernity, excellent screen readability, and wide range of weights (300-900) that allows creating a clear typographic hierarchy.

---

## 🚀 Installation

### Prerequisites

Before installing the project, ensure you have the following tools installed on your system: Node.js version 18 or higher (for compatibility with Vite 5 and the latest JavaScript features), and npm (included with Node.js) or an equivalent package manager like yarn or pnpm. You can check installed versions by running `node --version` and `npm --version` commands in your terminal.

### Installing Dependencies

Clone or download the project to a directory of your choice, then navigate to that directory in your terminal. Run the following command to install all dependencies defined in the package.json file. This command will download necessary packages from the npm registry and install them in the node_modules folder, also creating a package-lock.json file to ensure consistent installations across environments.

```bash
# Install project dependencies
npm install
```

This operation may take a few minutes depending on your internet connection and computer power. Once completed, you will have access to all packages needed to develop and build the project.

### Running Development Server

After installing dependencies, you can launch the local development server with the following command. Vite will compile files, start a local server, and automatically open your browser to http://localhost:5173/. The server has Hot Module Replacement (HMR), meaning code changes will be reflected immediately in the browser without requiring manual refresh.

```bash
# Run the development server
npm run dev
```

The server typically starts in under one second and will display the local URL in the terminal. You can access the site from multiple devices on the same network by using your machine's IP address instead of localhost.

### Building for Production

To create an optimized version of the site ready for deployment, use the build command. This command will run a complete compilation with asset optimization, code minification, and generation of static files optimized for production. The output files will be placed in the dist/ folder and ready to be deployed to any static web hosting service.

```bash
# Build for production
npm run build
```

### Previewing Production Build

You can preview the built version locally before deploying to verify that everything works correctly. This command will launch a local static server that serves files from the dist/ folder, allowing you to test the final user experience exactly as it will be for your visitors.

```bash
# Preview the production build
npm run preview
```

---

## 📁 Project Structure

```
mimesis_website/
├── index.html                      # HTML entry point with metadata and Google Fonts
├── package.json                    # Dependencies, scripts, and project metadata
├── vite.config.js                  # Vite bundler configuration
├── tailwind.config.js              # Tailwind configuration with custom color palette
├── postcss.config.js               # PostCSS configuration with Tailwind and Autoprefixer
├── README.md                       # Project documentation
├── Prompt.md                       # Development instructions
├── img/                            # Images and visual resources for the project
│   ├── Anas.png                    # Creative Director's photo
│   ├── face-care-gua-sha-stone-product.jpg  # Ethereal Cosmetics project
│   ├── hands-digital-universe-background.jpg # Nexus Tech project
│   ├── close-up-cup-filled-with-black-coffee.jpg  # Artisan Coffee project
│   ├── dancing-people-club.jpg     # Velvet Nightclub project
│   ├── stacked-zen-stones-sand-background-art-balance-concept.jpg  # Zen Wellness project
│   └── musician-walking-downstairs.jpg  # Urban Edge project
└── src/                            # Application source code
    ├── main.jsx                    # React entry point (app mount)
    ├── index.css                   # Global styles and Tailwind directives
    ├── App.jsx                     # Main component with navigation and routing
    └── components/                 # Reusable React components
        ├── AnimatedBackground.jsx  # Animated mesh gradient canvas background
        ├── BookingModal.jsx        # Appointment booking modal
        ├── Chatbot.jsx             # Virtual assistant Alfredo
        ├── Contact.jsx             # Contact page with form
        ├── CustomCursor.jsx        # Multi-layer custom cursor
        ├── Hero.jsx                # Homepage with animations
        ├── Services.jsx            # Services and pricing page
        └── Studio.jsx              # Studio page with team and portfolio
```

---

## 🧩 Main Components

### App.jsx - Main Orchestrator

The App.jsx component acts as the main application container and manages navigation between different pages along with global interface elements. It implements several key features that significantly enhance the user experience across all pages. The intelligent navigation system automatically hides the navigation bar when scrolling down and reveals it when scrolling up, with a blur effect that activates when the user has scrolled more than 50 pixels. This feature uses a scroll tracking system that compares the current position with the previous position via a useRef to avoid unnecessary re-renders.

State management uses multiple useState hooks to track the current page (currentPage), navigation bar visibility (isNavVisible), scroll state (isScrolled), and loading state (isLoaded). The MIMESIS logo is an inline component with sophisticated animations: on hover, the logo displays a rainbow gradient (violet-pink-violet), an animated line at the bottom that extends from 0 to 100%, and floating particles around it that pulse with different delays. The navigateTo function allows page changes and scrolls to the top of the page with window.scrollTo(0, 0). The initial loading screen blocks scrolling for 3 seconds via document.body.style.overflow = 'hidden', allowing entry animations to unfold without interruption.

### Hero.jsx - Homepage

The Hero.jsx component creates an immediate and memorable impression with the title "We shape digital chaos" that uses the DynamicColorText component. This innovative component uses Framer Motion's useMotionValue to track mouse X position, useSpring to smooth the movement, and useTransform to map position to dynamic color transitioning from cyan (left) to pink (right) with a corresponding glow effect. The title words are separated and wrapped in individual spans to allow granular animation control.

The background includes three animated orbs (motion.div) that use animate with array values to create continuous animation loops: scale (1 → 1.2/1.3/1.4 → 1) and rotate (0 → 180/120/240 → 360/-360). Each orb has a different duration and color (violet, purple, pink) for an organic effect. Floating geometric elements are circles with semi-transparent white borders that use the animate-float class defined in tailwind.config.js with 2-4 second delays for asynchronous movement. The grid overlay uses an inline SVG background-image with linear-gradient to create a subtle grid pattern at very low opacity.

### Services.jsx - Services Catalog

The Services.jsx component organizes services into cards with a 2x2 grid for each service's features. Service, pricing, and offer data is stored in constant arrays at the top of the file for easy maintenance. The component uses animation variants defined as objects (containerVariants, itemVariants) that are passed to motion components to create staggered animations with delayChildren and staggerChildren.

Service cards use whileHover for interactions and dynamic background gradients that match each service's color palette. FeatureFrames (the small 2x2 cards) use an index to apply different colors from each service's frameColors palette. The pricing section uses a highlight system for the Professional plan with a "Most Popular" badge absolutely positioned above the card. Special offers use animate with scale in a loop to create a pulsing effect on the percentage badge.

### Studio.jsx - Portfolio and Team

The Studio.jsx component combines multiple complex sections with specific animations for each. The Counter component uses IntersectionObserver to detect when the counter enters the viewport, then uses requestAnimationFrame for smooth counting animation with a quart-out easing function. Values include suffixes (+, years) that are preserved during animation.

Project cards use a structure with image at top (h-[45%]) and gradient background at bottom (top-[40%]) with a dark overlay for text readability. The image uses object-cover and a hover scale animation (scale: 1.1) with transition duration-700 ease-out. The team section uses generated avatars with initials for members without photos, using member.name.split(' ').map(n => n[0]).join('') to create initials. The Studio Space section uses CSS grids with individually animated cells via calculated delays (i * 0.1).

### Contact.jsx - Form and FAQ

The Contact.jsx component manages the contact form with field validation, submission states, and success messages. Form state is managed with a single formData object updated via handleChange that uses spread syntax to preserve other fields when updating. The submitStatus state can be null, 'submitting', or 'success' to control form or success message display.

The FAQ section uses openFaq state (null or index) to control which answer is displayed. The answer animation uses AnimatePresence with height and opacity as animated properties, creating smooth vertical expansion. Business hours are displayed in a grid with sequential animation based on index. The BookingModal is conditionally rendered with isBookingModalOpen state.

### Chatbot.jsx - Virtual Assistant

The Chatbot.jsx component implements an interactive chatbot with a message system and quick questions. The initial message is added to messages state on mount via useEffect with a 3-second setTimeout before setIsVisible(true). QuickQuestions are defined in an array and mapped to buttons that call handleSend with pre-defined text.

The chat window uses AnimatePresence for open and close animation with scale, opacity, and y as animated properties. Messages are differentiated by isBot: bot messages have semi-transparent purple background with border-purple-500/20, while user messages have violet-fuchsia gradient. The toggle button uses isHovered state to control halo opacity and button size itself.

### BookingModal.jsx - Booking System

The BookingModal.jsx component manages a 4-step booking process with a visual progression system. The bookingStep state (1-4) controls each step display, and data from each step is stored in separate states (selectedDate, selectedTime, bookingData). The getAvailableDates function generates the next 14 business days using a loop and filtering weekends (getDay() !== 0 && getDay() !== 6).

Each step has its own navigation logic: handleDateSelect moves to step 2, handleTimeSelect moves to step 3, and handleBookingSubmit simulates submission with setTimeout and moves to step 4. The progress bar uses a map on [1,2,3,4] to display circles, with a condition to show a checkmark icon (bookingStep > step) or step number. The resetModal function resets all states to initial values on closure.

### AnimatedBackground.jsx - Canvas Background

The AnimatedBackground.jsx component uses an HTML5 canvas to create an animated mesh gradient with slowly moving particles. The useEffect initializes the canvas 2D context and creates 6 points with random positions, velocities (vx, vy) between -0.5 and 0.5, radii between 300 and 700 pixels, and hues (hue) between 220 and 280 (blue-purple tones).

The animate function uses requestAnimationFrame for continuous looping. Each frame, the canvas is cleared with 0.1 opacity to create a trailing effect (ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'). Point positions are updated and points bounce off screen edges. Each point generates a RadialGradient with 4 semi-transparent color stops that overlap to create the mesh effect. The canvas is dynamically resized via resizeCanvas called on mount and on the resize event.

### CustomCursor.jsx - Custom Cursor

The CustomCursor.jsx component replaces the system cursor with three visual elements that follow mouse movements with spring effects. The isHovering state is updated via mouseover event on interactive elements (A, BUTTON, [role="button"], .interactive), using detection by tagName, closest(), or classList. The isVisible state is managed via mouseenter and mouseleave on the window to avoid displaying the cursor before the first movement.

Movement is managed by useMotionValue for mouse X and Y coordinates, and useSpring to create smooth movements with different damping and stiffness for each cursor layer. The small dot uses damping 25 and stiffness 700 for quick response, while larger circles use lower values (damping 50, stiffness 500) for an elegant trailing effect. The mix-blend-difference allows the cursor to be visible on all background colors. The negative offset (x: -8, y: -8 for the dot; x: -24, y: -24 for the circle; x: -40, y: -40 for the large circle) centers elements on the mouse pointer.

---

## 🎨 Design System

### Color Palette

The project uses a carefully designed color palette to create a dark and elegant atmosphere while maintaining excellent readability and visual impact. The main background color is mimesis-black (#0a0a0a), a deep and warm black that is more pleasant to the eye than pure black (#000000). Main text uses mimesis-white (#fafafa), a off-white that reduces visual fatigue during prolonged reading. Secondary elements use mimesis-gray (#888888), a medium gray that creates clear visual hierarchy without being too conspicuous.

Accent colors are managed by a variety of saturated colors, each with three brightness levels (400, 500, 600) for maximum flexibility in gradients and hovers. The violet palette (violet-400: #a78bfa, violet-500: #8b5cf6, violet-600: #7c3aed) is the primary color used for key interface elements like main buttons, background gradients, and highlights. The pink palette (pink-400: #f472b6, pink-500: #ec4899, pink-600: #db2777) complements violet to create harmoniously contrasting gradients. Other colors like cyan, amber, emerald, and rose are used in specific contexts: cyan for technological elements, amber for warm elements, emerald for growth and wellness.

### Typography

The project's main font is Inter Tight, a modern variant of the Inter Google font with slightly narrower design and balanced proportions for excellent screen readability. The font is configured in tailwind.config.js with two families: 'display' for titles and accent elements, and 'body' for running text. The display family uses Inter Tight explicitly, while the body family can fall back to standard Inter or sans-serif.

Weights used range from 300 (light) for secondary text and labels to 900 (black) for impactful titles, with a preference for 400 (regular) and 500 (medium) for running text. Tracking (letter-spacing) is generous in labels and subtitles (tracking-widest: 0.25em, tracking-wider: 0.15em) to create a modern and airy look, while titles use tight tracking (leading-tight: -0.025em to -0.05em) for maximum visual impact. Leading (line-height) is tight (leading-[0.95]) for large titles for dramatic effect, and more generous (leading-relaxed: 1.625) for paragraphs for comfortable reading.

### Custom Utility Classes

The tailwind.config.js file defines several custom theme extensions used throughout the project. The interactive class is applied to elements that should trigger cursor hover animation: buttons, links, and elements with role="button". This class is defined in the CSS styles and uses cursor: none !important to hide the system cursor on these elements.

Custom animations include breathe (oscillating scale and opacity), float (sinusoidal Y translation), pulse-slow (slow pulsing), spin-slow (continuous rotation), and bounce-slow (periodic bouncing). These animations are used in Hero, Services, and Studio components to keep the site alive even without user interaction. Custom keyframes define each animation frame's values with 0%, 50%, and 100% percentages for oscillating animations.

---

## 🎭 Animations and Interactions

### Animation Curves

All site animations use carefully calibrated animation curves to create natural and pleasing movements. The main curve used is [0.16, 1, 0.3, 1] (also called easeOutExpo or exponential ease), which starts quickly and gradually slows down with slight overshoot for entry animations. This curve is inspired by native iOS and Material Design animation systems, ensuring familiarity for users.

For hover and interaction animations, a more standard easeOut curve is often used (ease: 'easeOut') with short durations (0.2-0.3s) for quick and responsive feedback. Continuous animations (orbs, pulsations) use linear for constant rotation or easeInOut for more natural breathing movements. Spring animations (useSpring from Framer Motion) use damping (25-50) and stiffness (500-700) parameters that create satisfying elastic movement without excessive oscillation.

### Micro-interactions

Micro-interactions are subtle responses to user actions that reinforce visual feedback and create a more engaging experience. Buttons use Framer Motion's whileHover and whileTap to create virtual tactile responses: scale: 1.02 on hover and scale: 0.98 on click. Service and project cards use whileHover={{ y: -10 }} for a "lifting" effect that suggests the element is clickable.

Interactive elements (.interactive) trigger cursor hover animation: the small dot scales from 1 to 1.5, the outline circle from 1 to 2, and the large circle appears with scale 1.5 and opacity 0.3. This correlation between hover and cursor reinforces element affordability and creates a consistent experience. Navigation links have an underline line that extends from width 0 to width 100% on hover, using standard CSS transition or Framer Motion depending on context.

### Entry Animations

Entry animations generally use a stagger pattern where elements appear one after another with progressive delay. The containerVariants in Services.jsx uses staggerChildren: 0.12 and delayChildren: 0.3, meaning each child appears 120ms after the previous one, starting 300ms after the container animation begins. This pattern creates an engaging visual cascade that guides the user's eye through content.

Individual elements use variants like hidden: { opacity: 0, y: 30 } and visible: { opacity: 1, y: 0 } with 0.6-0.8s transition duration. This fade-in plus slide-up combination is more engaging than simple fade-in because it creates a sense of movement and dynamism. Sections sometimes use additional animations like scale (0.95 to 1) or rotate for more dramatic effect, like the Studio page hero title using scale and opacity in parallel.

### Continuous Animations

To keep the site alive without interaction, several elements use looping continuous animations. Hero section orbs use animate with value arrays to create scale (1 → 1.2/1.3/1.4 → 1) and rotate (0 → 180/120/360 → 360/-360) loops. These animations have long durations (25-35s) and repeat infinitely (repeat: Infinity) for subtle non-distracting effect.

Service icons (◆, ◇, ○, ●) use animate with rotate and scale in a loop for a "breathing" effect that draws attention without being intrusive. Special offer badges use a scale [1, 1.05, 1] animation with 2s duration and repeat: Infinity for a gentle pulsing effect. Studio floating elements use Y translation animations ([0, -20, 0]) with 6s durations and different delays for asynchronous organic movement.

---

## 📱 Responsive Design

### Breakpoints

The site uses Tailwind CSS standard breakpoints to adapt to different screen sizes. The sm breakpoint (640px) activates first adaptations for small phones, md (768px) for tablets and large phones in landscape, lg (1024px) for small laptops, xl (1280px) for standard screens, and 2xl (1536px) for large screens. These breakpoints are used to adjust spacing (padding, gap), text sizes, and grid column counts.

Service grids go from 1 column on mobile (grid-cols-1) to 2 columns on tablet and desktop (grid-cols-2) to充分利用 horizontal space. Project and team grids go from 1 column on mobile to 2 columns on tablet (md:grid-cols-2) then 3-4 columns on desktop (lg:grid-cols-3, lg:grid-cols-4) depending on content density. Mobile navigation doesn't use a hamburger menu but displays links directly in the header, simplifying interaction for touch devices.

### Adaptive Text Sizes

Titles use responsive text sizes that adapt to screen size to maintain appropriate visual impact. The main Hero title uses text-5xl on mobile (about 3rem/48px), text-7xl on tablet (about 4.5rem/72px), text-8xl on laptop (about 6rem/96px), and text-9xl on large screen (about 8rem/128px). This progression ensures the title remains imposing and readable on all devices without exceeding viewport on small screens.

Subtitles and secondary text use similar but more moderate progression, generally going from text-lg (1.125rem) on mobile to text-xl (1.25rem) or text-2xl (1.5rem) on desktop. Labels and technical text (tracking-widest, uppercase) use smaller sizes (text-xs, text-sm) to avoid dominating main content while maintaining their identification function.

### Spacing and Layout

Spacing uses responsive values that increase with screen size for appropriate visual breathing. Main section padding goes from p-8 (2rem/32px) on mobile to p-16 (4rem/64px) on tablet then p-24 (6rem/96px) on desktop. This progression allows content to breathe on large screens while remaining visible and accessible on small screens.

Grid gaps also increase: gap-4 (1rem) on mobile, gap-6 (1.5rem) on tablet, gap-8 (2rem) on desktop. Vertical margins (py, my) follow the same logic with values of 12, 16, or 24 depending on context and visual separation importance. Buttons use responsive internal padding (px-8 py-4 on mobile, subtle adjustments on desktop) and maximum widths to avoid excessive stretching on large screens.

---

## 📜 Available Scripts

The package.json file defines several scripts for different operations in the development lifecycle. These scripts can be executed with npm run followed by the script name. The main "dev" script launches the Vite development server with Hot Module Replacement enabled, allowing instant browser updates when code is modified. The "build" script runs a complete project compilation for production with asset optimization, JavaScript and CSS minification, and generation of deployment-ready files.

The "preview" script allows locally previewing the production build before deployment, which is useful for verifying that all optimizations work correctly and the user experience is consistent with local development. There is no test script configured at the moment, but the project structure would easily allow adding tests with Jest or Vitest for React code and end-to-end tests with Playwright or Cypress for user interactions.

---

## 🚀 Future Development

### Potential Improvements

The MIMESIS project has a solid foundation that could be extended with several features to enhance user experience and site capabilities. Adding a real backend for contact and booking forms would allow storing data and sending email notifications, transforming the site from a static portfolio into a functional commercial tool. Integration with a service like Formspree, Netlify Forms, or a custom API based on Node.js or serverless functions would be a simple first step.

Adding automated tests (unit tests with React Testing Library, integration tests, and e2e tests with Playwright) would improve project reliability and facilitate future refactorings. Internationalization (i18n) would allow offering the site in multiple languages (French, English, Spanish) to reach an international audience. Adding a light/dark mode option in addition to the current dark mode could offer users more choices, although the current design is optimized for the brand's dark aesthetic.

### Performance Optimizations

Several optimizations could improve site performance, particularly on mobile devices and slow connections. Image optimization with modern formats like WebP or AVIF, lazy loading off-screen images with loading="lazy" attribute or framer-motion's lazyAnimate, and asset compression with Brotli or Gzip would reduce loading times. Using React.lazy and Suspense for code splitting would load components only when needed, reducing initial bundle size.

Implementing a Service Worker with Workbox for caching and offline mode would improve experience on intermittent connections. Bundle analysis with rollup-plugin-visualizer would identify code size reduction opportunities. These optimizations are particularly important if the site experiences increased traffic or analytics show high loading times for certain user segments.

### Content Extensions

The site could be extended with additional sections to enrich visitor experience. A Blog section with articles on design, technology, and creative trends would position MIMESIS as an authoritative voice in the industry. Detailed Case Studies sections showcasing the creation process and results obtained for each project would strengthen studio credibility.

Adding a Careers section to attract talent or a Press section for media mentions would improve the studio's professional presence. A gallery of client testimonials with quotes and avatars would increase prospect confidence. A newsletter or notification system to stay in touch with visitors would be a powerful marketing tool for generating leads and maintaining community engagement.

---

## 📄 License

This project is a personal project created for demonstration and portfolio purposes. All design elements, source code, and contents are the property of their respective creators. Use, modification, or redistribution of this project for commercial purposes is subject to prior authorization. For any questions or collaboration requests, please contact the MIMESIS team via the contact form on the website.
