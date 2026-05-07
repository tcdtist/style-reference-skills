---
version: alpha
name: "Obsidian"
description: "The design feels like being inside a piece of precision software—a dark, focused digital workspace where thoughts crystallize. The foundation is a near-black, void-like background (#171717), creating a high-contrast canvas. A single, electric violet accent (#7c3aed, #a78bfa) is used strictly for interactive elements like CTAs and links, acting as functional beacons in the dark. Typography is exclusively the system's native UI font, reinforcing its identity as a functional tool rather than a stylized marketing site. Instead of drop shadows, surfaces use a subtle, 1px white inset highlight, giving them an internal luminescence as if lit from within."
theme: "dark"
industry: "productivity"
source_url: "https://obsidian.md"
refero_style_id: "e793a53c-537e-46b0-881d-b15b63b9ff26"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929835064-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929835064-thumb.jpg"
extracted_at: "2026-04-11T17:51:43.812Z"
---

# Obsidian — Style Reference

> Crystalline Knowledge Vault. A sharp, faceted digital space built for clarity and focus, with glowing violet veins of interaction.

**Theme:** dark

**Industry:** productivity

The design feels like being inside a piece of precision software—a dark, focused digital workspace where thoughts crystallize. The foundation is a near-black, void-like background (#171717), creating a high-contrast canvas. A single, electric violet accent (#7c3aed, #a78bfa) is used strictly for interactive elements like CTAs and links, acting as functional beacons in the dark. Typography is exclusively the system's native UI font, reinforcing its identity as a functional tool rather than a stylized marketing site. Instead of drop shadows, surfaces use a subtle, 1px white inset highlight, giving them an internal luminescence as if lit from within.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| White | #ffffff | `--color-white` | Bright text on dark CTAs, inset glows for definition |
| Bright Gray | #eeeeee | `--color-bright-gray` | Primary body text, headings |
| Medium Gray | #bcbcbc | `--color-medium-gray` | Secondary text, navigation links |
| Muted Gray | #a3a3a3 | `--color-muted-gray` | Tertiary text, subtle metadata |
| Graphite | #3f3f3f | `--color-graphite` | Borders, UI element dividers |
| Surface | #1e1e1 | `--color-surface` | Card backgrounds, elevated UI panels |
| Abyss | #171717 | `--color-abyss` | Main page background |
| Amethyst | #7c3aed | `--color-amethyst` | Primary CTA buttons—a sharp, functional accent against the dark theme |
| Lavender | #a78bfa | `--color-lavender` | Links, badge text, and active states—the secondary, brighter interaction color |
| Tag Background | #8a5cf5 | `--color-tag-background` | Background for tag/badge elements, used at 15% opacity |
| Success Green | #4ade80 | `--color-success-green` | Success states or syntax highlighting within the app UI |
| Warning Yellow | #facc15 | `--color-warning-yellow` | Warning states or syntax highlighting within the app UI |
| Error Red | #f87171 | `--color-error-red` | Error states or syntax highlighting within the app UI |

## Tokens — Typography

### ui-sans-serif, system-ui

- **Token:** `--font-ui-sans-serif-system-ui`
- **Substitute:** "SF Pro Display", "Roboto", "Segoe UI", sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 8px, 9px, 10px, 11px, 12px, 13px, 14px, 16px, 18px, 20px, 24px, 28px, 36px, 60px
- **Line heights:** 1.25-1.5
- **Letter spacing:** Negative tracking (-0.02em) on larger sizes tightens headlines for a more compact, solid appearance.
- **Role:** Used for all text. The choice of a system font is deliberate, making the website feel like a native application—a functional tool for thought.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | -0.24px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.28px | `--text-body-sm` |
| body | 16px | 1.5 | -0.32px | `--text-body` |
| subheading | 18px | 1.4 | -0.36px | `--text-subheading` |
| heading-sm | 24px | 1.33 | -0.48px | `--text-heading-sm` |
| heading | 28px | 1.25 | -0.56px | `--text-heading` |
| heading-lg | 36px | 1.25 | -0.72px | `--text-heading-lg` |
| display | 60px | 1.1 | -1.2px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-153 | 153px | `--spacing-153` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 9999px |
| cards | 12px |
| inputs | 8px |
| buttons | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px | `--shadow-xl-2` |
| xl-3 | rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset | `--shadow-xl-3` |
| xl-4 | rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px | `--shadow-xl-4` |
| xl-5 | rgba(0, 0, 0, 0.25) 0px 25px 50px -12px | `--shadow-xl-5` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1120px |
| sectionGap | 96px |
| cardPadding | 24px |
| elementGap | 16px |

## Components

### Primary CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Tag Badge Collection

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature List Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** The main call-to-action button.

Solid Amethyst (#7c3aed) background with White (#ffffff) text. Padding is 16px 24px. Corner radius is 8px.

### Secondary Ghost Button

**Role:** A less prominent action, often for secondary choices like 'More platforms'.

Transparent background with Medium Gray (#bcbcbc) text. Padding is 8px. Corner radius is 8px. No border.

### Community Link Card

**Role:** Large, clickable cards used to link to community resources.

Surface (#1e1e1e) background with Bright Gray (#eeeeee) text. Padding is 24px. Corner radius is 12px. Features a 1px white inset glow `rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`.

### Tag Badge

**Role:** Used inside the app UI to display tags on notes.

Pill-shaped (9999px radius). Background is Tag Background (#8a5cf5) at 15% opacity. Text is Lavender (#a78bfa). Padding is 2px 8px.

### App Showcase

**Role:** Displays the product UI directly on the page.

A detailed screenshot or rendered view of the Obsidian application, showing elements like the note editor, sidebar file browser, and distinctive graph view. Follows the site's dark theme.

### App Icon

**Role:** The primary brand mark and application icon.

A squircle-shaped icon (approx 20% border-radius) depicting a faceted purple and black gem. Has a subtle internal gloss and shadow to give it dimension.

### Navigation Link

**Role:** Text links in the main header navigation.

Medium Gray (#bcbcbc) text using the system UI font at 16px. No background or borders. Hover state is likely a color change to Bright Gray (#eeeeee).

## Do's and Don'ts

### Do

- Use the system UI font for all text to maintain the native-app feel.
- Reserve Amethyst (#7c3aed) and Lavender (#a78bfa) exclusively for interactive elements like buttons and links.
- Employ subtle 1px inset white glows for definition on dark cards and buttons.
- Maintain high contrast with light gray text (#eeeeee) on near-black backgrounds (#171717).
- Use pill-shaped radii (9999px) for tags and badges only; keep other elements sharp.
- Keep layouts centered and spacious, with generous vertical rhythm between sections.

### Don't

- Do not use traditional drop shadows for elevation; prefer the inset glow effect.
- Do not introduce other saturated colors into the primary UI; stick to the violet-on-dark palette.
- Do not use decorative or serif fonts; the brand identity is utilitarian.
- Do not use bright or light-themed backgrounds for primary content sections.
- Do not use large border radii on cards or buttons; stick to the 8-12px range.
- Do not use lifestyle photography; focus on the product UI as the primary visual.

## Elevation

- **Shadow 1:** `rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`
- **Shadow 2:** `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
- **Shadow 3:** `rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset`
- **Shadow 4:** `rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Shadow 5:** `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`

## Similar Brands

- **Raycast** — Shares the dark UI, native-app feel from using system fonts, and a focus on utility and speed.
- **Linear** — Similar dark, high-contrast aesthetic with a single sharp violet/purple accent and subtle internal glow effects.
- **VS Code** — Directly echoes the visual language of a code editor, appealing to a developer-adjacent audience with its dark theme and focus on plaintext.
- **Superhuman** — Another productivity tool with a premium, dark-mode-first interface that emphasizes speed and function over adornment.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-white: #ffffff;
  --color-bright-gray: #eeeeee;
  --color-medium-gray: #bcbcbc;
  --color-muted-gray: #a3a3a3;
  --color-graphite: #3f3f3f;
  --color-surface: #1e1e1;
  --color-abyss: #171717;
  --color-amethyst: #7c3aed;
  --color-lavender: #a78bfa;
  --color-tag-background: #8a5cf5;
  --color-success-green: #4ade80;
  --color-warning-yellow: #facc15;
  --color-error-red: #f87171;
  --font-ui-sans-serif-system-ui: 'ui-sans-serif, system-ui', "SF Pro Display", "Roboto", "Segoe UI", sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.48px;
  --text-heading: 28px;
  --leading-heading: 1.25;
  --tracking-heading: -0.56px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.72px;
  --text-display: 60px;
  --leading-display: 1.1;
  --tracking-display: -1.2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-153: 153px;
  --spacing-200: 200px;
  --spacing-224: 224px;
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --shadow-xl: rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
  --shadow-xl-3: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  --shadow-xl-4: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl-5: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}
```

### Tailwind v4

```css
@theme {
  --color-white: #ffffff;
  --color-bright-gray: #eeeeee;
  --color-medium-gray: #bcbcbc;
  --color-muted-gray: #a3a3a3;
  --color-graphite: #3f3f3f;
  --color-surface: #1e1e1;
  --color-abyss: #171717;
  --color-amethyst: #7c3aed;
  --color-lavender: #a78bfa;
  --color-tag-background: #8a5cf5;
  --color-success-green: #4ade80;
  --color-warning-yellow: #facc15;
  --color-error-red: #f87171;
  --font-ui-sans-serif-system-ui: 'ui-sans-serif, system-ui', "SF Pro Display", "Roboto", "Segoe UI", sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.48px;
  --text-heading: 28px;
  --leading-heading: 1.25;
  --tracking-heading: -0.56px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.72px;
  --text-display: 60px;
  --leading-display: 1.1;
  --tracking-display: -1.2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-153: 153px;
  --spacing-200: 200px;
  --spacing-224: 224px;
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --shadow-xl: rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
  --shadow-xl-3: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  --shadow-xl-4: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl-5: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}
```
