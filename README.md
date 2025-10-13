# CapeGo Website

A world-class, comprehensive, and interactive multi-page React website for CapeGo - A Safer Ride. A Fairer Journey. A Truly South African Service.

## Overview

This website showcases CapeGo's revolutionary ride-hailing service built on the core principles of safety, trust, and economic fairness. The site features a sophisticated "Near Black Neumorphism" design with rich animations and interactions.

## Features

### Design
- **Near Black Neumorphism**: Sophisticated dark theme with soft, extruded plastic-like UI elements
- **Custom Color Palette**: 
  - Primary: #EB5E1F (Accent Orange)
  - Secondary: #B0CEE3 (Light Grey)
  - Base Colors: #1A2632, #42414A, #46596D
- **Poiret One Font**: Used for branding throughout the site
- **Smooth Animations**: Powered by Framer Motion for engaging user experience

### Pages
1. **Home** - Hero section with value proposition and core pillars
2. **The Challenge** - Detailed overview of transport crisis in Cape Town
3. **Our Solution** - Cape Go's comprehensive security and vetting protocols
4. **Economic Impact** - Fair fee structure and local economic benefits
5. **Strategic Partnership** - Alignment with City of Cape Town's transport vision
6. **Contact** - Integrated Formspree contact form with contact information

### Technical Stack
- **Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS with custom neumorphism utilities
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Formspree React

## Project Structure

```
capego-website/
├── public/
├── src/
│   ├── assets/
│   │   └── CapeGoFinalLogo.webp
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ui/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Challenge.jsx
│   │   ├── Solution.jsx
│   │   ├── EconomicImpact.jsx
│   │   ├── Partnership.jsx
│   │   └── Contact.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## Custom Styling

The website uses custom neumorphism CSS classes defined in `App.css`:

- `.neomorph` - Standard neumorphic card with outer shadows
- `.neomorph-inset` - Inset neumorphic effect for inputs and recessed elements
- `.neomorph-button` - Interactive neumorphic buttons with hover and active states
- `.brand-font` - Poiret One font for branding
- `.text-gradient` - Gradient text effect using accent colors

## Image Placeholders

The website includes placeholder images with proper `src` attributes ready for replacement:

- Home page hero: `/api/placeholder/800/600`
- Challenge page header: `/api/placeholder/1200/400`
- Solution page security features: `/api/placeholder/1000/600`
- Economic Impact driver image: `/api/placeholder/700/500`
- Partnership page collaboration: `/api/placeholder/1200/400`

To replace placeholders, simply update the `src` attributes in the respective page components.

## Contact Form

The contact form is integrated with Formspree (form ID: `mldpoedj`) and includes:
- Full Name field
- Email Address field (required)
- Phone Number field (optional)
- Message textarea (required)
- Success state with confirmation message
- Validation error handling

## Development

### Prerequisites
- Node.js 22.13.0
- pnpm package manager

### Installation
```bash
cd capego-website
pnpm install
```

### Development Server
```bash
pnpm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production
```bash
pnpm run build
```
Output will be in the `dist/` directory

### Preview Production Build
```bash
pnpm run preview
```

## Deployment

The website is deployed using the Manus deployment system. The production build is automatically generated and deployed to a public URL.

## Contact Information

- **Email**: info@mylucidlife.app
- **Phone**: +27 60 315 8538
- **Location**: Cape Town, South Africa

## Credits

**Founder and Developer**: Charles Duckitt

## License

© 2025 CapeGo. All rights reserved.

