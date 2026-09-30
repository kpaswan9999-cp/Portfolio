# Development Rules & Coding Standards

## 1. General Principles
- **Aesthetic Fidelity First:** Every UI change must adhere to the minimalist, clean aesthetic inspired by [sanidhyy.name](https://www.sanidhyy.name/). Do not introduce cluttered banners, harsh primary colors, or bloated card designs.
- **Content Integrity:** All professional achievements (e.g. AI for Bharat Hackathon Top 15 Finalist out of 16,000+ teams, CGPA 8.27, Imarticus Data Science certification) must remain accurate and authentic.
- **No Heavy Dependencies:** Favor lightweight utility classes, native Web APIs (such as Web Audio API and Native Fetch), and small packages over bloated external component libraries.

---

## 2. Frontend & Component Rules

### 2.1 Component Structure
- Every component must reside in `src/components/` and have a distinct single responsibility.
- Use explicit TypeScript interfaces for all component `props`:
  ```tsx
  interface MyComponentProps {
    title: string;
    isActive?: boolean;
    onSelect: (id: string) => void;
  }
  ```
- Use named arrow functions or `React.FC<Props>` consistently.

### 2.2 Styling with Tailwind CSS
- Do NOT use arbitrary one-off CSS files when Tailwind utility classes suffice.
- Use the custom `@custom-variant dark (&:where(.dark, .dark *));` for dark mode styling.
- Maintain consistent spacing:
  - Section vertical margins: `mb-28 sm:mb-40`
  - Section scroll offset: `scroll-mt-28`
  - Heading margins: `mb-8`
- Avatar rules:
  - Container must use `overflow-hidden` with `border-[0.35rem] border-white shadow-xl dark:border-gray-800`.
  - Image inside must use `object-cover object-[50%_25%]` to fill the circle edge-to-edge without artificial white borders or passport-like margins.

---

## 3. Typography & Text Standards
- Font Family: **Inter** (system fallback: `system-ui, -apple-system, BlinkMacSystemFont, sans-serif`).
- Headings: `text-3xl font-medium capitalize mb-8 text-center text-gray-900 dark:text-white`.
- Hero text: `text-2xl font-medium !leading-[1.5] sm:text-4xl text-gray-900 dark:text-white`.
- Paragraphs: `text-gray-700 dark:text-gray-300 font-normal leading-8`.
- Tag pills: `bg-black/[0.7] px-3 py-1 text-[0.68rem] uppercase tracking-wider text-white rounded-full dark:text-white/70`.

---

## 4. State & Asset Management Rules
- **Static Assets:** Place all downloadable PDFs and profile photos inside `public/`. Reference them with absolute root paths (e.g., `/Krishna_Paswan_Resume.pdf`).
- **Resume Downloads:** Always provide both an explicit download attribute AND `target="_blank"` with fallback window navigation so all browser engines handle PDF files without MIME mismatches.
- **Theme Persistence:** Store user theme preferences in `localStorage.getItem('theme')`. Ensure the default state is pure clean light mode (`white`) unless the user explicitly switches themes.

---

## 5. Build & Validation Requirements
- Always verify changes with `npm run build` before committing.
- Ensure 0 TypeScript compiler errors (`tsc -b`) and 0 bundler errors (`vite build`).
- Do not introduce untyped `any` without explicit justification.
