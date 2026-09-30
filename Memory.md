# Portfolio Project Memory & Context Retention

## 1. Developer Profile Context
- **Name:** Krishna Paswan
- **Title:** AI & Tech Intern | Python · FastAPI · Automation · AI-Assisted Development
- **Email:** `kpaswan9999@gmail.com`
- **Phone:** `+91 82917 37832`
- **Location:** Mumbai, India (Open to 100% Remote, open to future UK/Europe relocation)
- **Education:**
  - Bachelor of Information Technology (BSc IT), Rajiv Gandhi College, Mumbai (2022–2025) — **CGPA: 8.27 (Distinction)**
  - Post Graduate Program in Data Science & Analytics, Imarticus Learning, Thane (2025–2026) — **Certified Data Scientist**
- **GitHub:** `https://github.com/kpaswan9999-cp`
- **LinkedIn:** `https://www.linkedin.com/in/krishna-paswan-9999`
- **Key Recognition:** Top 15 Finalist out of 16,000+ teams nationwide at **AI for Bharat Hackathon 2026** (Onsite Grand Finale in Bangalore).

---

## 2. Key Decisions & User Feedback History

### Decision 1: Design Identity Shift
- **Initial:** Dark neon cyberpunk UI.
- **Feedback:** User requested the exact layout and aesthetic of [sanidhyy.name](https://www.sanidhyy.name/).
- **Resolution:** Re-architected with floating pill navigation, subtle pastel gradients, clean white cards, pill badge clouds, and vertical timeline.

### Decision 2: Profile Photo Selection & Framing
- **Input:** User provided an updated photo wearing a plaid shirt with a clean white studio background.
- **Iteration 1:** Standard object-top cut off the collar.
- **Iteration 2:** Zooming in cropped too much; scaling down produced an unwanted "passport photo" white box.
- **Final Resolution:** Implemented `object-cover object-[50%_25%]` inside a `h-32 w-32 sm:h-36 sm:w-36` circle. This fills the frame edge-to-edge, positions the hair at the top, and displays the shirt collar and shoulders naturally.

### Decision 3: About Me Length
- **Feedback:** Initial About section was too long (3 verbose paragraphs).
- **Resolution:** Compacted into exactly two focused paragraphs matching Sanidhyy's rhythm and length.

### Decision 4: Expanded Project Catalog
- Added three additional projects from user:
  - **TrashTrail** (`https://trash-trail-waste.vercel.app/`)
  - **5G Network Predictor** (`https://cp-project-chi.vercel.app/`)
  - **Climate Temperature Predictor** (`https://linear-regression-model-climate-dep.vercel.app/index.html`)

### Decision 5: Resume Download Bug & Future Update System
- **Issue:** Clicking download previously downloaded a raw UUID string without a `.pdf` extension.
- **Resolution:** Fixed download handler to explicitly trigger `Krishna_Paswan_Resume.pdf` and open in new tab.
- **Feature Addition:** Created `ResumeSettingsModal.tsx` and `RESUME_CONFIG` in `src/data/portfolioData.ts` to allow instant Google Drive link updates or local file swaps.

### Decision 6: Atmospheric Light Purple Clouds
- **Feedback:** Plain flat white felt too stark.
- **Resolution:** Added transparent cloud-type light purple ambient glows along the left and right border sides (`blur-[8.5rem]` to `blur-[9rem]`) that persist smoothly as the user scrolls.

### Decision 7: Hackathon & Achievements Step-by-Step Timeline with Interactive Certificates
- **Feedback:** Revert from side-by-side grid to the clean step-by-step alternating vertical timeline with central milestone icons and dates, while keeping the interactive certificate modal.
- **Resolution:**
  - Preserved "Achievement" in the navigation bar (`#achievements`).
  - Section Heading: **"Hackathon & Achievements"**.
  - Built alternating vertical timeline in [`Achievements.tsx`](file:///d:/Portfolio/src/components/Achievements.tsx) with central line and milestone icons (🏆, 🏅, 🎓).
  - Maintained one-click certificate inspection lightbox ([`CertificateModal.tsx`](file:///d:/Portfolio/src/components/CertificateModal.tsx)) with full-res zoom and download options.

---

## 3. Active Configuration References
- **Local PDF File:** `d:/Portfolio/public/Krishna_Paswan_Resume.pdf`
- **Headshot File:** `d:/Portfolio/public/krishna-paswan.jpg`
- **Certificates:** `d:/Portfolio/public/certificates/`
- **Vite Entrypoint:** `d:/Portfolio/src/main.tsx`
- **Root Layout:** `d:/Portfolio/src/App.tsx`

