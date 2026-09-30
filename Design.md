# Design System & Aesthetics Guide

## 1. Visual Philosophy
The design follows a modern, minimalist developer portfolio aesthetic inspired by **[sanidhyy.name](https://www.sanidhyy.name/)**:
- **Light, airy, and inviting:** Pure white backdrop with soft, transparent cloud-type light purple ambient glows along the borders.
- **Micro-interactions:** Subtle hover scales (`hover:scale-105`), smooth transitions, and tactile feedback.
- **Content-first typography:** High legibility with bold highlights and italicized personal touches.

---

## 2. Color Palette & Atmospheric Lighting

### 2.1 Core Palette (Light Mode Default)
| Role | Hex / Class | Description |
|---|---|---|
| **Base Background** | `#FFFFFF` (`bg-white`) | Clean, crisp, distraction-free canvas |
| **Primary Text** | `#030712` (`text-gray-950`) | Deep charcoal for maximum contrast |
| **Secondary Text** | `#374151` (`text-gray-700`) | Warm neutral gray for body paragraphs |
| **Muted Text** | `#6B7280` (`text-gray-500`) | Metadata, dates, and subtitle cues |
| **Card Background** | `#F3F4F6` (`bg-gray-100`) | Subtle elevation container for project cards |
| **Pill Background** | `#FFFFFF` (`bg-white borderBlack`) | Crisp white pill for skills and buttons |
| **Tag Badges** | `rgba(0, 0, 0, 0.7)` | High-contrast black pill with white text |

### 2.2 Ambient Cloud Light Purple Tokens
The border atmosphere consists of dreamy, transparent pastel gradients:
- **Top Right Glow:** `#f0e6ff` with `blur-[10rem]`, opacity 70%
- **Top Left Glow:** `#e4ddfc` with `blur-[10rem]`, opacity 80%
- **Left Border Side Cloud:** `from-purple-300/40 via-violet-200/35 to-transparent blur-[8.5rem]`
- **Right Border Side Cloud:** `from-violet-300/35 via-purple-200/30 to-transparent blur-[9rem]`
- **Lower Border Glow:** `from-purple-200/40 via-indigo-100/35 to-transparent blur-[8rem]`

### 2.3 Dark Mode Overrides
| Role | Class |
|---|---|
| **Base Background** | `dark:bg-gray-900` |
| **Primary Text** | `dark:text-gray-50` |
| **Secondary Text** | `dark:text-gray-300` |
| **Card Background** | `dark:bg-white/10 dark:hover:bg-white/15` |
| **Pill Badges** | `dark:bg-white/10 dark:text-white/80` |
| **Border Tokens** | `border: 1px solid rgba(255, 255, 255, 0.15)` |

---

## 3. Typography & Hierarchy

Font: **Inter** (`font-family: 'Inter', system-ui, sans-serif`)

| Element | Mobile Class | Desktop Class | Weight & Spacing |
|---|---|---|---|
| **Hero Heading** | `text-2xl` | `sm:text-4xl` | `font-medium !leading-[1.5]` |
| **Section Headings** | `text-3xl` | `text-3xl` | `font-medium capitalize mb-8` |
| **About Paragraphs** | `text-base` | `text-base` | `font-normal leading-8` |
| **Project Titles** | `text-2xl` | `text-2xl` | `font-bold tracking-tight` |
| **Project Description**| `text-sm` | `text-sm` | `leading-relaxed text-gray-700` |
| **Skill Pill Text** | `text-base` | `sm:text-lg` | `font-medium` |
| **Timeline Role** | `text-lg` | `text-lg` | `font-bold` |

---

## 4. Component Blueprints

### 4.1 Floating Pill Header
- Fixed at top: `top-0 sm:top-6 left-1/2 -translate-x-1/2`
- Shape: `h-[4.5rem] sm:h-[3.25rem] w-full sm:w-[36rem] rounded-none sm:rounded-full`
- Glassmorphism: `border border-white border-opacity-40 bg-white/80 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.03]`
- Active Tab: `bg-gray-100 dark:bg-gray-800 text-gray-950 dark:text-gray-200 font-semibold px-3 py-1.5 rounded-full`

### 4.2 Circular Avatar
- Outer dimensions: `h-32 w-32 sm:h-36 sm:w-36 rounded-full overflow-hidden`
- Border: `border-[0.35rem] border-white shadow-xl dark:border-gray-800`
- Image Crop: `object-cover object-[50%_25%]` (Fills edge-to-edge; no white margins; collar & shoulders visible).
- Badge: Waving hand emoji `👋` positioned at `bottom-0 right-0 text-3xl select-none animate-pulse`.

### 4.3 Alternating Project Cards
- Card container: `max-w-[44rem] sm:h-[22rem] bg-gray-100 rounded-2xl border border-black/5 overflow-hidden`
- Left/Right content: `pt-5 pb-7 px-6 sm:px-10 sm:max-w-[55%] flex flex-col h-full`
- Angled mockup card: `absolute hidden sm:block top-8 w-[24rem] h-[19rem] rounded-xl shadow-2xl bg-white p-5`
- Rotation on hover: `-right-32 group-hover:-rotate-2 group-hover:scale-[1.03]` (inverted on even items).

### 4.4 Section Divider
- Dimension: `h-16 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 my-24 hidden sm:block`
