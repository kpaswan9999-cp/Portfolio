# Project Delivery Phases & Changelog

## Phase 1: Initial Scaffolding & Setup
- Initialized React 19 + TypeScript + Vite project in `d:/Portfolio`.
- Installed dependencies: Tailwind CSS v4, Lucide React, Canvas Confetti.
- Created base project models (`src/types.ts`) and portfolio data store (`src/data/portfolioData.ts`).
- Harvested resume data from PDF and OCR transcripts.

---

## Phase 2: Design Realignment to Sanidhyy Portfolio Style
- User requested matching the exact aesthetic of [sanidhyy.name](https://www.sanidhyy.name/).
- Replaced initial dark cyberpunk interface with clean, minimalist white layout:
  - Floating pill navigation bar at top with active section highlight.
  - Centered circular avatar with waving hand emoji 👋.
  - Two-paragraph About Me section with highlighted keywords.
  - Alternating project card layout with angled browser mockups.
  - Pill badges cloud for My Skills.
  - Alternating vertical timeline for My Experience.
  - Contact section with direct email prompt and clean inputs.
  - Bottom-right floating Sun/Moon theme switcher.

---

## Phase 3: Profile Headshot & Framing Refinements
- Replaced original photo with updated plaid shirt headshot provided by user.
- Addressed user feedback regarding avatar framing:
  - Eliminated the "passport photo" empty white margins by setting `object-cover object-[50%_25%]`.
  - Ensured shoulders and shirt collar are prominently visible within the circular frame.
  - Balanced avatar dimensions to `h-32 w-32 sm:h-36 sm:w-36`.

---

## Phase 4: Project Catalog Expansion
- Added newly provided projects with live demos and GitHub repositories:
  - **TrashTrail**: Waste Accountability & Tracking System.
  - **5G Network Predictor**: Predictive ML model for cellular throughput.
  - **Climate Temperature Predictor**: Deployed linear regression model.
- Retained core flagship projects:
  - **HireResumeAI**: AI-powered resume optimizer & ATS analyzer.
  - **Raksha AI**: AI for Bharat Hackathon 2026 Top 15 Finalist app.
  - **Flight Fare Analytics**: Domestic flight trends dashboard.
  - **Supermarket Sales BI**: Retail transactions dashboard.

---

## Phase 5: Resume Reliability & Update Architecture
- Fixed browser download bug where raw UUIDs were downloaded without PDF extensions.
- Added direct download handler ensuring proper `Krishna_Paswan_Resume.pdf` file naming and `target="_blank"` tab fallback.
- Added **Resume Settings & Update Modal** (accessible via ⚙️ gear icon) allowing Krishna to paste Google Drive links or upload new PDF files directly from the browser.
- Created `RESUME_CONFIG` in `src/data/portfolioData.ts` for simple codebase updates.

---

## Phase 6: Ambient Cloud-Type Light Purple Background
- Replaced stark flat white background with subtle, transparent cloud-type light purple ambient glows:
  - Top ambient lavender clouds (`#f0e6ff` and `#e4ddfc` with `blur-[10rem]`).
  - Persistent side-border purple clouds (`from-purple-300/40 via-violet-200/35 to-transparent blur-[8.5rem]`).
  - Created a dreamy, clean aesthetic that stays sharp in the center and atmospheric along the borders.

---

## Phase 7: Documentation Suite
- Created project documentation suite:
  - `PRD.md`: Product requirements and specifications.
  - `Architecture.md`: System design, component trees, and data flows.
  - `Rules.md`: Coding standards and UX design constraints.
  - `Phases.md`: Detailed milestones and release history.
  - `Design.md`: Color palette, typography, spacing, and component designs.
  - `Memory.md`: Key decisions, state retention, and context memory.
  - `requirements.txt`: Python/Vercel manifest for deployment environments.

---

## Phase 8: Hackathon & Achievements with Verified Certificate Viewer & Vercel Prep
- Renamed navigation to **Achievement** (`#achievements`).
- Replaced flat grid with clean, chronological alternating vertical timeline for **Hackathon & Achievements**.
- Integrated 4 official certificates (`AI for Bharat`, `Nebulon Hackathon`, `FAR AWAY Hackathon`, `Imarticus Data Science`) into `public/certificates/`.
- Built `CertificateModal.tsx` lightbox with high-res zoom, fullscreen view, and direct download.
- Created `vercel.json` for SPA rewrites and edge CDN deployment.
- Connected repository metadata with GitHub (`https://github.com/kpaswan9999-cp/Portfolio.git`).

