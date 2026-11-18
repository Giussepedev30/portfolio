---
name: Giussepe Taquiri Portfolio
description: Personal portfolio for a Software Engineering student and Backend/Full Stack developer.
colors:
  primary: "#2563eb"
  secondary: "#22c55e"
  ink: "#0b1020"
  card: "#111827"
  paper: "#f8fafc"
  text-strong: "#1e293b"
  text-muted: "#64748b"
  text-soft: "#cbd5e1"
  border-light: "#e2e8f0"
  border-dark: "#1e293b"
  tag-blue-bg: "#dbeafe"
  tag-blue-text: "#1d4ed8"
  tag-green-bg: "#dcfce7"
  tag-green-text: "#15803d"
  tag-purple-bg: "#f3e8ff"
  tag-purple-text: "#7e22ce"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 1.25
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-strong}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  card:
    backgroundColor: "#ffffff"
    textColor: "{colors.text-strong}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip:
    backgroundColor: "#f1f5f9"
    textColor: "#475569"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  nav:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text-strong}"
    padding: "12px 16px"
  badge:
    backgroundColor: "{colors.tag-blue-bg}"
    textColor: "{colors.tag-blue-text}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
---

# Design System: Giussepe Taquiri Portfolio

## Overview

**Creative North Star: "The Launchpad"**

The portfolio is a launchpad, not a showcase case. It exists to move a recruiter or client from curiosity to action: understand the profile, scan the evidence, download the CV, make contact. The visual system therefore behaves like a precise instrument: the content is the signal, and the interface recedes until it is needed.

The personality is precise and approachable — technical enough to feel credible to an engineering team, warm enough that a freelance client feels invited. Deep Navy grounds the dark canvas, Signal Blue marks every action and link, and Emerald is reserved for proof: achievements, status, and positive outcomes. Nothing decorative competes with the projects.

The explicit anti-reference is the generic corporate template: the interchangeable agency hero, stock gradients, and decorative cards that say nothing. Every surface should feel authored for this specific profile.

**Key Characteristics:**
- Content-first hierarchy with generous vertical rhythm.
- A restrained two-accent palette: blue for action, green for proof.
- Inter as the single type family; hierarchy comes from weight and size.
- Flat surfaces at rest, a soft lift on hover.
- Light and dark themes share the same token roles.

## Colors

The palette is a deep-navy ground with two functional accents: Signal Blue for interaction and Emerald for evidence.

### Primary
- **Signal Blue** (#2563eb): The action color. Used on primary buttons, links, active labels, and focus cues. It should be the only saturated blue on screen.
- **Deep Navy** (#0b1020): The dark canvas and the ink color behind the hero and footer. It replaces pure black to keep the interface calm rather than harsh.

### Secondary
- **Emerald** (#22c55e): The proof color. Used for positive status badges and proof moments. It never competes with Signal Blue for the primary action.

### Neutral
- **Paper** (#f8fafc): The light-mode page background.
- **Card White** (#ffffff): Light-mode card and container surface.
- **Card Ink** (#111827): Dark-mode card surface.
- **Strong Text** (#1e293b): Primary text in light mode.
- **Muted Text** (#64748b): Descriptions, metadata, and secondary labels.
- **Soft Text** (#cbd5e1): Primary text in dark mode.
- **Light Border** (#e2e8f0): 1px container borders in light mode.
- **Dark Border** (#1e293b): 1px container borders in dark mode.

### Tag Colors
- **Blue Tag** (#dbeafe background / #1d4ed8 text): Personal projects.
- **Green Tag** (#dcfce7 background / #15803d text): Forks and open-source work.
- **Purple Tag** (#f3e8ff background / #7e22ce text): Web and side projects.

### Named Rules
**The One Signal Rule.** Signal Blue is reserved for actions, links, and active state. Never use it as a decorative fill or a background wash.

**The Emerald Proof Rule.** Emerald marks proof — achievements, status, and positive outcomes. It is not a second primary color.

## Typography

**Display Font:** Inter (with system-ui, sans-serif)
**Body Font:** Inter (with system-ui, sans-serif)
**Label Font:** Inter (with system-ui, sans-serif)

**Character:** One neutral, highly legible family across the whole site. The system feels engineered rather than styled: hierarchy is earned through weight, size, and spacing, not through a second typeface.

### Hierarchy
- **Display** (800, 3.75rem, 1.25): Hero name only, seen at `md:` and above. On mobile it drops to 2.25rem.
- **Headline** (700, 1.875rem, 1.2): Section titles such as “Tech Stack” and “Proyectos Destacados”.
- **Title** (700, 1.125rem, 1.4): Card and project titles.
- **Body** (400, 1rem, 1.6): Paragraphs and descriptions, capped by the container width for readable line lengths. Smaller metadata uses 0.875rem.
- **Label** (600, 0.875rem, 1.4): Navigation, buttons, and chips.

### Named Rules
**The Single Family Rule.** Inter is the only typeface. Do not introduce a display serif or a second sans; create contrast with weight, size, and color instead.

## Layout

A single-column, mobile-first composition inside a 72rem (`max-w-6xl`) container with 1rem horizontal padding. Sections stack with a generous vertical rhythm: 4rem (`py-16`) on mobile, 5rem (`py-20`) for the hero, and 7rem (`md:py-28`) on desktop.

The hero is a two-column split on `md:` and above: copy on the left, circular avatar on the right. Content grids move from one column on mobile to two columns at `md:` and three at `lg:`. The sticky top navigation is full-width with a blurred translucent background; the content container is centered beneath it.

Cards use 24px internal padding (`p-6`) and 20px (`p-5`) for the skills grid. Gaps run 20–24px (`gap-5`/`gap-6`) between cards and 32px (`gap-8`) between larger blocks. Section headings sit 24–32px above their content.

## Elevation & Depth

The system is flat by default. Depth is conveyed through 1px borders and tonal surface changes, not through resting shadows. The one exception is interaction: cards lift on hover with a soft ambient shadow (`0 12px 30px rgba(0,0,0,0.25)` in dark mode) and a 4px upward translation. The avatar carries a `shadow-xl` and a 4px accent ring to establish it as the single focal object.

### Shadow Vocabulary
- **Ambient Lift** (`box-shadow: 0 12px 30px rgba(0,0,0,0.25)`): Card hover only, never at rest.
- **Avatar Focus** (`box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)`): The profile image alone.

### Named Rules
**The Hover Lift Rule.** Surfaces are flat at rest. A shadow appears only as a response to interaction, and only on cards that are clickable or explorable.

## Shapes

The form language is softly engineered. Cards and large containers use a 12px radius (`rounded-xl`); buttons and compact controls use 8px (`rounded-lg`); chips, tags, and the avatar use a full pill or circle. Borders are always 1px and low-contrast, never thick or colored except for the avatar ring.

### Named Rules
**The Soft Corner Rule.** Radius grows with surface size: 8px for controls, 12px for containers, full for pills and the avatar. Never mix a sharp corner with a rounded one on the same surface.

## Components

### Buttons
- **Shape:** 8px radius.
- **Primary:** Signal Blue background, Paper text, 12px × 20px padding, 600 weight. Used for the main next step: “Ver proyectos”, “Descargar CV”, “Email”.
- **Hover / Focus:** Opacity drops to 90% on hover; focus follows the browser ring. No fill change, no shadow.
- **Secondary:** Transparent background with a 1px border in the neutral border color. Used for secondary actions such as “Contactar” and “LinkedIn”.
- **Compact variant:** 8px × 16px padding for the navigation CTA.

### Chips
- **Style:** Full pill, light neutral background (`#f1f5f9`), muted text (`#475569`), 4px × 10px padding, 0.875rem.
- **State:** Static, non-interactive. Used for technology tags; no selected state exists.

### Cards / Containers
- **Corner Style:** 12px radius.
- **Background:** White in light mode, `#111827` in dark mode.
- **Shadow Strategy:** Flat at rest; Ambient Lift on hover (see Elevation & Depth).
- **Border:** 1px `#e2e8f0` light / `#1e293b` dark.
- **Internal Padding:** 24px for project cards, 20px for skill cards.

### Inputs / Fields
No form inputs exist on the site. Contact happens through mailto and external links. Do not introduce input styling until a real form is added.

### Navigation
- **Style:** Sticky, full-width, translucent background with backdrop blur, 1px bottom border. Wordmark "Giussepe.dev" in Strong Text with `.dev` in Signal Blue; links in 0.875rem, 500 weight.
- **States:** Links gain a 2px Signal Blue underline that animates from left to right on hover.
- **Mobile:** A hamburger button toggles a stacked menu; the desktop CTA is hidden. The button exposes `aria-expanded`/`aria-controls` and Escape closes the menu.
- **Language switcher:** A two-item `ES / EN` group sits left of the desktop CV button and as the last row of the mobile menu. The current language carries `aria-current="page"` and a filled neutral background; the other is a quiet link. The group is a `role="group"` labelled “Idioma” / “Language”.

### Locales
- **Structure:** Spanish is canonical at `/index.html`; English mirrors it at `/en/index.html`. Both are static files with no build step and cross-link through `hreflang` alternates.
- **Documents:** Spanish links to `cv-es.pdf`, English links to `cv.pdf`. The CV language always matches the page language.
- **Zones:** Navigation, headings, prose, badges, alt text and footer translate. Project names, company names and technology names do not.
- **Routing:** Locale links are plain relative paths (`./`, `en/`, `../`) so the same files work from a local folder and from the GitHub Pages subpath.

### Badges
- **Style:** 4px radius, 0.75rem text, 4px × 8px padding. Blue, green, and purple variants follow the tag color tokens.
- **Use:** Project category labels only (“Personal”, “Fork”, “Web”).

### Avatar
- **Style:** Full circle, 176px mobile / 240px desktop, 4px accent ring at 30% opacity, `shadow-xl`.
- **Use:** The single focal image in the hero. No other image competes with it.

## Do's and Don'ts

### Do:
- **Do** use Signal Blue for actions and links only, and keep it under roughly 10% of any screen.
- **Do** reserve Emerald for proof and status; keep it out of the primary action.
- **Do** keep surfaces flat at rest and add the ambient lift only on hover.
- **Do** use Inter for everything and create hierarchy with weight, size, and spacing.
- **Do** pair every card with a 1px low-contrast border and a 12px radius.
- **Do** maintain the light/dark token mapping so both themes feel like the same system.
- **Do** hit WCAG AA: body text ≥4.5:1 and large text ≥3:1. Signal Blue `#2563eb` on Paper is 5.2:1 and white on it is 5.2:1; the lighter `#3b82f6` fails and stays out of action surfaces.

### Don't:
- **Don't** reproduce the generic corporate template: interchangeable hero, stock gradients, decorative cards with no evidence.
- **Don't** use neon, cyberpunk glows, or gamer-style gradients.
- **Don't** introduce a second accent hue beyond Signal Blue and Emerald.
- **Don't** add resting shadows to cards or containers.
- **Don't** use pure black (`#000000`) as the dark canvas; use Deep Navy.
- **Don't** add form inputs or interactive chips until a real workflow needs them.
