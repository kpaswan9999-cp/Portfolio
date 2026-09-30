# System Architecture Document

## 1. High-Level Architecture Overview

The portfolio is structured as a client-side Single Page Application (SPA) built with **React 19**, **Vite 8**, and **Tailwind CSS 4**. It is optimized for zero-latency static hosting on **Vercel** edge networks.

```
                    ┌───────────────────────────┐
                    │      Vercel Edge CDN      │
                    └─────────────┬─────────────┘
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │     Vite Client SPA       │
                    │   (HTML5 + TSX + CSS)     │
                    └─────────────┬─────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  State & Hooks   │    │  Component Tree  │    │  Static Assets   │
│ - Active Section │    │ - Header (Nav)   │    │ - Resume PDF     │
│ - Theme (L/D)    │    │ - Intro (Hero)   │    │ - Profile Headshot│
│ - Resume Config  │    │ - About          │    │ - SVGs & Favicon │
└──────────────────┘    │ - Projects       │    └──────────────────┘
                        │ - Skills         │
                        │ - Experience     │
                        │ - Contact        │
                        │ - ThemeSwitch    │
                        │ - ResumeModal    │
                        └──────────────────┘
```

---

## 2. Technology Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Runtime / Core** | React | 19.x | Declarative UI component tree |
| **Language** | TypeScript | 6.x | Type safety, interfaces, strict checking |
| **Build Tool** | Vite | 8.x | Hot Module Replacement (HMR) & production bundling |
| **Styling** | Tailwind CSS | 4.x | Utility-first responsive design, modern dark variants |
| **Icons** | Lucide React | Latest | Semantic UI iconography |
| **Effects** | Canvas Confetti | Latest | Celebratory visual micro-interactions |
| **Hosting** | Vercel | Production | Automated CI/CD, global CDN distribution |

---

## 3. Directory Structure

```
d:/Portfolio/
├── public/                       # Static public assets served from root
│   ├── Krishna_Paswan_Resume.pdf # Official PDF resume file
│   ├── krishna-paswan.jpg        # High-res profile headshot
│   ├── favicon.svg               # Application icon
│   └── icons.svg                 # SVG sprite definitions
├── src/
│   ├── components/               # Modular presentation components
│   │   ├── About.tsx             # Two-paragraph concise bio
│   │   ├── Achievements.tsx      # Hackathons & Achievements responsive grid
│   │   ├── BrandIcons.tsx        # Inline GitHub & LinkedIn SVG components
│   │   ├── CertificateModal.tsx  # Lightbox viewer for verified certificates & PDFs
│   │   ├── Contact.tsx           # Contact details and submission form
│   │   ├── Experience.tsx        # Backward-compatible alias for Achievements
│   │   ├── Footer.tsx            # Minimalist copyright and credits
│   │   ├── Header.tsx            # Floating glassmorphism pill navigation
│   │   ├── Intro.tsx             # Hero section with avatar & CTAs
│   │   ├── Projects.tsx          # Card showcase with interactive links
│   │   ├── ResumeSettingsModal.tsx # UI modal to update resume URLs
│   │   ├── SectionDivider.tsx    # Vertical section divider bar
│   │   ├── SectionHeading.tsx    # Reusable section heading wrapper
│   │   ├── Skills.tsx            # Categorized skill badges cloud
│   │   └── ThemeSwitch.tsx       # Bottom-right light/dark mode switch
│   ├── data/
│   │   └── portfolioData.ts      # Centralized source of truth for portfolio data
│   ├── types/
│   │   └── index.ts (types.ts)   # TypeScript interfaces for projects, skills, etc.
│   ├── utils/
│   │   └── audio.ts              # Web Audio API synthesizer for sound effects
│   ├── App.tsx                   # Main layout container & ambient background
│   ├── index.css                 # Tailwind 4 theme, Inter font, custom styles
│   └── main.tsx                  # React DOM root entrypoint
├── Architecture.md               # System architecture specification
├── Design.md                     # Design system & tokens
├── Memory.md                     # Project state & historical decisions
├── Phases.md                     # Delivery phases & release history
├── PRD.md                        # Product requirements document
├── Rules.md                      # Development guidelines & rules
├── requirements.txt              # Environment & deployment manifest
├── package.json                  # Node dependencies & npm scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build and plugin configuration
```

---

## 4. Key Architectural Patterns

### 4.1 Single Source of Truth (`portfolioData.ts`)
- All user details, projects, awards, skills, and resume paths are decoupled from presentation components.
- Editing a project or adding a link requires updating only this file without altering TSX layout components.

### 4.2 Dynamic Resume Management Architecture
- **Layer 1: Static Public File** (`public/Krishna_Paswan_Resume.pdf`): Always available at root.
- **Layer 2: LocalStorage Override** (`custom_resume_url`): Allows on-the-fly linking to Google Drive or temporary browser file uploads.
- **Layer 3: UI Settings Modal** (`ResumeSettingsModal.tsx`): Gives recruiters or the owner a seamless modal interface to update or test the link.

### 4.3 Ambient Cloud Background System
- Uses Tailwind CSS `fixed` and `absolute` blurred gradient containers with high radial blur (`blur-[8.5rem]` to `blur-[10rem]`).
- The side-border clouds (`#f0e6ff`, `#e4ddfc`, purple/violet gradients) follow the user's viewport without causing repaints or GPU thrashing.

---

## 5. Deployment Workflow (Vercel)
1. Push repository to GitHub (`kpaswan9999-cp/portfolio`).
2. Import project in Vercel Dashboard.
3. Build Settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
