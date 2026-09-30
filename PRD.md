# Product Requirements Document (PRD)

## Project Overview
- **Project Name:** Krishna Paswan — AI Developer & Certified Data Scientist Portfolio
- **Owner:** Krishna Paswan
- **Role:** AI & Tech Intern | Python · FastAPI · Automation · AI-Assisted Development
- **Live Target URL:** Vercel Production Deployment
- **Design Inspiration:** Minimalist, aesthetic, floating pill navigation inspired by [sanidhyy.name](https://www.sanidhyy.name/) with transparent light purple cloud background ambiance.

---

## 1. Objectives & Goals
1. **Showcase Shipped Generative AI & Data Science Projects**: Feature real-world deployed products including HireResumeAI, Raksha AI, TrashTrail, 5G Network Predictor, and Climate Temperature Predictor.
2. **Demonstrate Hackathon Excellence**: Highlight top finishes including Top 15 Finalist at AI for Bharat 2026 (out of 16,000+ teams), Nebulon Hackathon, and FAR AWAY International Hackathon.
3. **Streamline Recruiter & Collaborator Outreach**: Offer a 1-click resume download with fallback preview, Google Drive update settings, direct email copying, LinkedIn/GitHub links, and an interactive contact form.
4. **Deliver Responsive UX**: Clean white theme with subtle purple cloud borders, dark mode toggle, and mobile-friendly interactions.

---

## 2. Target Audience
- **Tech Recruiters & Talent Acquisition Teams** seeking AI/ML interns or junior developers.
- **Engineering Managers & Tech Leads** looking for hands-on experience in FastAPI, Gemini API, LangChain, FAISS, and Next.js.
- **Hackathon Organizers & Open-Source Collaborators**.

---

## 3. Core Features & Scope

### 3.1 Floating Pill Header
- Fixed pill navbar centered at top with links: `Home`, `About`, `Projects`, `Skills`, `Experience`, `Contact`.
- Active section highlighting on scroll.
- Glassmorphism backdrop blur.

### 3.2 Hero / Intro Section
- Centered circular avatar displaying Krishna's headshot edge-to-edge with animated waving hand 👋.
- Core value proposition:
  > **Hi, I'm Krishna.** I'm an **AI & Tech builder** with hands-on experience in **Generative AI** and **Data Science**. I enjoy building *intelligent agents and full-stack apps*. My focus is **FastAPI, Gemini API & Next.js**.
- Action buttons:
  - `Contact me →` (Smooth scroll to contact form)
  - `My Resume ↓` (Reliable PDF download + view in new tab)
  - Settings gear icon (⚙️) for instant resume link/file updates
  - LinkedIn & GitHub circular icons.

### 3.3 About Me Section
- Concise two-paragraph narrative detailing BSc IT (CGPA: 8.27), Data Science Certification at Imarticus Learning, passion for problem-solving, core stack, hackathon achievements, and immediate availability for remote roles.

### 3.4 Projects Showcase
- Alternating cards with screenshot mockups, tech badges, live demo links, and GitHub repositories:
  1. **HireResumeAI**: AI-powered ATS resume optimizer (FastAPI, Gemini API, LangChain, FAISS, Next.js).
  2. **Raksha AI**: Emergency command center (AI for Bharat Top 15 Finalist).
  3. **TrashTrail**: Waste accountability & tracking system (Hackathon project).
  4. **5G Network Predictor**: Predictive ML model for cellular throughput and latency.
  5. **Climate Temperature Predictor**: Linear regression model for ambient temperature trends.
  6. **Flight Fare Analytics**: Airline pricing analytics dashboard (SQL, Python, Power BI).
  7. **Supermarket Sales BI**: Dynamic retail analytics dashboard (Advanced Excel).

### 3.5 Skills Matrix
- Centered cloud of rounded pill badges categorized across Gen AI, backend frameworks, data analytics, and automation protocols.

### 3.6 Experience & Education Timeline
- Alternating vertical timeline with central spine and circular milestone icons (🎓, 💼, 🏆, ⚡).

### 3.7 Contact Section & Footer
- Direct email link with one-click copy, contact form with feedback notification, and copyright notice.

### 3.8 Theme Switch
- Floating circular button toggling between Light and Dark themes with persistent localStorage state.

---

## 4. Technical Specifications
- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS 4 with custom utilities
- **Icons:** Lucide React + custom inline brand SVGs
- **Deployment Platform:** Vercel
