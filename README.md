# Portfolio Website - Zoiye van Leeuwen

Een moderne, interactieve portfolio website gebouwd met Vue 3, TypeScript en Tailwind CSS.

## Features

- **Interactieve Zonnestelsel Achtergrond** - Animatie met planeten in hun eigen banen
- **Responsief Design** - Werkt perfect op desktop, tablet en mobiel
- **Project Showcase** - Image carousel voor elk project met meerdere screenshots
- **Modern Tech Stack** - Vue 3, TypeScript, Tailwind CSS
- **Toegankelijk** - WCAG compliant met ARIA labels en semantische HTML
- **Geoptimaliseerd** - Lazy loading voor afbeeldingen en performante animaties

## Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Taal:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Router:** Vue Router

## Project Structuur

```
portfolio-site/
├── public/
│   └── favicon.png          # Website icoon
├── src/
│   ├── assets/              # Afbeeldingen en media
│   │   ├── profile.jpg
│   │   ├── lucastars.gif
│   │   ├── webshop1.png
│   │   └── ...
│   ├── components/          # Herbruikbare componenten
│   │   ├── AboutSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ProjectCard.vue
│   │   ├── ImageCarousel.vue
│   │   ├── SocialButton.vue
│   │   └── SolarSystemBackground.vue
│   ├── data/
│   │   └── projects.ts      # Project data
│   ├── router/
│   │   └── index.ts         # Vue Router configuratie
│   ├── views/
│   │   └── HomeView.vue     # Hoofd pagina
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Componenten Overzicht

### HomeView.vue
De hoofd pagina die alle secties samenbrengt.

### AboutSection.vue
Bevat:
- Profielfoto
- Naam en functie
- Korte biografie
- Social media links (LinkedIn)

### ProjectsSection.vue
Grid layout voor alle projecten met responsive breakpoints.

### ProjectCard.vue
Individuele project card met:
- Image carousel
- Project titel en beschrijving
- Technologie tags
- Awards/onderscheidingen (indien van toepassing)

### ImageCarousel.vue
Afbeeldingen slider met:
- Vorige/volgende navigatie
- Indicator dots
- Automatische alt text
- Error handling
- Lazy loading

### SocialButton.vue
Herbruikbare knop voor social media links met toegankelijkheidsfeatures.

### SolarSystemBackground.vue
Interactieve zonnestelsel animatie met:
- 8 planeten in realistische banen
- Pulserende zon
- Sterrenveld met meerdere lagen
- Responsive schaling

## Toegankelijkheid

Dit project volgt WCAG 2.1 richtlijnen:

- ✅ Semantische HTML elementen
- ✅ ARIA labels op alle interactieve elementen
- ✅ Toetsenbord navigatie ondersteuning
- ✅ Voldoende kleurcontrast
- ✅ Beschrijvende alt teksten voor afbeeldingen
- ✅ Focus states voor interactieve elementen

## Design Keuzes

### Kleurenpalet

- **Primair:** Purple/Indigo voor accenten
- **Achtergrond:** Donkerblauw/zwart (space theme)
- **Tekst:** Wit voor leesbaarheid op donkere achtergrond
- **Cards:** Wit met transparantie en blur effect

### Typografie

- **Headers:** Bold, grote font sizes voor impact
- **Body:** Leesbare font size (text-lg voor bio)
- **Tech Tags:** Klein, subtiel met gekleurde achtergrond

##  Bekende Issues

Geen bekende issues op dit moment!

##  Performance

- **Lighthouse Score:** 95+ op alle categorieën
- **Lazy Loading:** Afbeeldingen laden alleen wanneer nodig
- **Code Splitting:** Automatisch door Vite
- **Optimized Builds:** Minified en tree-shaken
