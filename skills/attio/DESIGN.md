---
version: alpha
name: "Attio"
description: "The design feels like a meticulously organized, high-end instrument. It operates on a starkly minimalist, black-and-white axis, where near-black (#1c1d1f) on pure white is the default state for text and primary actions. The most distinctive choice is the typographic duality: large, inviting headlines are set in the soft serif Tiempos Text, while the entire user interface, from buttons to body copy, uses the neutral sans-serif Inter. This creates a rhythm between approachable storytelling and functional precision. Color is used with extreme restraint, appearing as subtle accents for interactive states or status indicators, ensuring the user's focus remains on content and functionality. A consistent 10px radius on buttons provides a soft counterpoint to the otherwise sharp, grid-aligned UI frames."
theme: "light"
industry: "saas"
source_url: "https://attio.com"
refero_style_id: "08c8700c-f278-42bc-812e-f60dc6ce996e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775928862011-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775928862011-thumb.jpg"
extracted_at: "2026-04-11T17:35:30.082Z"
---

# Attio — Style Reference

> Precision Digital Toolkit. A design system built on a foundation of high-contrast monochrome, where soft serif headlines provide a human touch to a clinical, tool-like interface.

**Theme:** light

**Industry:** saas

The design feels like a meticulously organized, high-end instrument. It operates on a starkly minimalist, black-and-white axis, where near-black (#1c1d1f) on pure white is the default state for text and primary actions. The most distinctive choice is the typographic duality: large, inviting headlines are set in the soft serif Tiempos Text, while the entire user interface, from buttons to body copy, uses the neutral sans-serif Inter. This creates a rhythm between approachable storytelling and functional precision. Color is used with extreme restraint, appearing as subtle accents for interactive states or status indicators, ensuring the user's focus remains on content and functionality. A consistent 10px radius on buttons provides a soft counterpoint to the otherwise sharp, grid-aligned UI frames.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| White | #ffffff | `--color-white` | Primary page background, text on dark surfaces |
| Ash | #f3f4f6 | `--color-ash` | Subtle background panels, button pressed state |
| Stone | #e4e7ec | `--color-stone` | Light borders, dividers |
| Slate | #d3d8df | `--color-slate` | Default borders, inactive UI elements |
| Lead | #b5bdc9 | `--color-lead` | Placeholder text, disabled text |
| Overcast | #8f99a8 | `--color-overcast` | Secondary body text, supporting labels |
| Metal | #6f7988 | `--color-metal` | Tertiary body text, icons |
| Carbon | #505967 | `--color-carbon` | Icons, subtle interactive elements |
| Ink | #1c1d1f | `--color-ink` | Primary text, headlines, primary button background |
| Abyss | #000000 | `--color-abyss` | Footer background |
| Action Blue | #407ff2 | `--color-action-blue` | Links, active state indicators — a rare injection of color for interactivity |
| Focus Blue | #94b9ff | `--color-focus-blue` | Focus rings and glows on interactive elements |
| Success Green | #075a39 | `--color-success-green` | Status indicators, success notifications |
| Danger Red | #772322 | `--color-danger-red` | Error messages, destructive action indicators |
| Warning Yellow | #705500 | `--color-warning-yellow` | Warning notifications, status indicators |
| Magic Aura | #70a1f0 | `--color-magic-aura` | Decorative gradients for background accents |

## Tokens — Typography

### Tiempos Text

- **Token:** `--font-tiempos-text`
- **Substitute:** Newsreader, Lora
- **Weights:** 400, 500
- **Sizes:** 28px, 40px
- **Line heights:** 1.10, 1.23
- **OpenType features:** "ss03"
- **Role:** Used exclusively for large, emotive headlines (28px+) to add a soft, human, and editorial quality that contrasts with the functional UI. The signature `ss03` stylistic set is critical.

### Inter Display

- **Token:** `--font-inter-display`
- **Substitute:** Inter
- **Weights:** 500, 600
- **Sizes:** 12px, 20px, 32px, 40px, 56px, 64px
- **Line heights:** 1.00, 1.07, 1.10, 1.17, 1.19, 1.30
- **OpenType features:** "ss03", "calt"
- **Role:** An optically-sized sans-serif for display text (32px+) where clarity and precision are paramount. Its tighter letter-spacing is key to its compact, authoritative appearance.

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 10px, 11px, 12px, 13px, 14px, 15px, 16px, 18px, 20px, 32px
- **Line heights:** 1.00, 1.17, 1.19, 1.20, 1.23, 1.25, 1.30, 1.33, 1.38, 1.40, 1.42, 1.43, 1.45, 1.47, 1.50, 1.57, 2.20
- **Letter spacing:** -0.0200em, -0.0150em, -0.0130em, -0.0120em, -0.0110em, -0.0100em, -0.0050em
- **OpenType features:** "ss03"
- **Role:** The workhorse font for all UI elements: body copy, navigation, buttons, and labels. Its neutrality and legibility at all sizes make it the foundation of the user interface. The `ss03` stylistic set is always applied.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | -0.14px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.14px | `--text-body-sm` |
| body | 16px | 1.5 | -0.24px | `--text-body` |
| subheading | 20px | 1.3 | -0.4px | `--text-subheading` |
| heading-sm | 28px | 1.23 | -0.42px | `--text-heading-sm` |
| heading | 40px | 1.1 | -0.6px | `--text-heading` |
| heading-lg | 56px | 1.1 | -1.12px | `--text-heading-lg` |
| display | 64px | 1.07 | -1.28px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-82 | 82px | `--spacing-82` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-108 | 108px | `--spacing-108` |
| spacing-109 | 109px | `--spacing-109` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-181 | 181px | `--spacing-181` |
| spacing-214 | 214px | `--spacing-214` |

### Border Radius

| Element | Value |
| --- | --- |
| tabs | 0px |
| tags | 4px |
| cards | 8px |
| inputs | 7px |
| buttons | 10px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(238, 239, 241) 0px 0px 0px 1px inset | `--shadow-xl` |
| xl-2 | rgba(28, 40, 64, 0.1) 0px 2px 3px -2px, rgba(28, 40, 64, 0.04) 0px 4px 6px -2px | `--shadow-xl-2` |
| xl-3 | rgba(28, 40, 64, 0.18) 0px 0px 2px 0px, rgba(0, 0, 0, 0.04) 0px 1px 3px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1440px |
| sectionGap | 96px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Tab Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### AI Ask Input Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** The main call-to-action.

Background: Ink (#1c1d1f). Text: White (#ffffff). Font: 14px Inter weight 500. Padding: 8px 12px. Border: 1px solid #1c1d1f. Radius: 10px.

### Secondary CTA Button

**Role:** Secondary call-to-action, or an alternative to the primary.

Background: White (#ffffff). Text: Ink (#1c1d1f). Font: 14px Inter weight 500. Padding: 8px 12px. Border: 1px solid Slate (#d3d8df). Radius: 10px.

### Header Navigation Button

**Role:** Used for navigation links in the main header.

Background: transparent. Text: Metal (#6f7988). Font: 14px Inter weight 500. Padding: 6px 10px. Radius: 10px. Hover state has an Ash (#f3f4f6) background.

### Feature Tab Button

**Role:** Used in a tab group to switch between content views.

Background: transparent. Text: Metal (#6f7988). Font: 15px Inter weight 500. Padding: 8px 16px. Radius: 0px. Active state has Ink (#1c1d1f) text and a 2px bottom border of Ink (#1c1d1f).

### UI Frame Card

**Role:** Container for complex UI modules, like the main app demo.

Background: White (#ffffff). Padding: 16px. Border: 1px solid Stone (#e4e7ec). Radius: 8px. Shadow: `rgba(28, 40, 64, 0.1) 0px 2px 3px -2px, rgba(28, 40, 64, 0.04) 0px 4px 6px -2px`.

### Text Input

**Role:** Standard text input field.

Background: White (#ffffff). Text: Ink (#1c1d1f). Font: 14px Inter. Placeholder text: Lead (#b5bdc9). Border: 1px solid Slate (#d3d8df). Radius: 7px. Focus state shows a blue glow using Focus Blue (#94b9ff).

### Logo Cloud Item

**Role:** Displays a partner or customer logo.

Grayscale logo fill using Carbon (#505967) or Metal (#6f7988). No background or border.

### Page Footer

**Role:** The closing section of the page with site-wide links.

Background: Abyss (#000000). Organized into columns. Column titles use White (#ffffff) text at 14px, weight 500. Links use Overcast (#8f99a8) text at 14px, weight 400, changing to White on hover.

## Do's and Don'ts

### Do

- Always set display and hero headlines in Tiempos Text.
- Use Inter with the `ss03` font feature setting for all UI copy.
- Apply negative letter-spacing to all text 18px and larger, following the type scale.
- Construct primary CTAs from Ink (#1c1d1f) backgrounds with White (#ffffff) text.
- Maintain a consistent 10px radius on all major buttons.
- Use borders (1px Slate #d3d8df) as the primary method for separating UI elements.
- Reserve color (Action Blue #407ff2) for interactive states like links and focus rings.

### Don't

- Don't use Tiempos Text for body copy or any text smaller than 28px.
- Don't use color in headlines or primary buttons.
- Don't use fill-based colors unless for semantic status indicators.
- Don't apply shadows to buttons, inputs, or simple cards.
- Don't use radii other than 10px for buttons or 8px for cards.
- Don't forget to include the `ss03` font feature when setting type.
- Don't introduce new saturated colors; the palette is intentionally monochrome.

## Elevation

- **UI Frame Card:** `rgba(28, 40, 64, 0.1) 0px 2px 3px -2px, rgba(28, 40, 64, 0.04) 0px 4px 6px -2px`
- **Input Focus:** `0 0 0 3px color-mix(in srgb, #94b9ff 40%, transparent)`

## Imagery

Imagery is functional and abstract, avoiding lifestyle photography. The primary visuals are clean product UI screenshots contained within minimalist browser or app frames. Secondary visuals consist of abstract data visualizations, like the grid of grayscale profile pictures, which serve as atmospheric graphics rather than literal content. All imagery is rendered with sharp edges and presented in a clean, isolated manner.

## Layout

The layout is built on a centered, max-width (1440px) model, creating generous white space on the peripheries. Hero sections are minimal, typically a large, centered headline stack. Page content follows a predictable rhythm of stacked, centered sections or simple two-column layouts. A key structural element is the large, embedded product UI demonstration, which acts as the visual centerpiece. Navigation is contained within a simple, sticky top bar.

## Similar Brands

- **Linear** — Shares the stark monochrome palette, application-focused aesthetic, and use of a sans-serif for UI with disciplined restraint.
- **Notion** — Similar typographic approach, blending a serif for headlines with a sans-serif for UI, creating a sophisticated yet functional feel.
- **Vercel** — Matches the developer-tool feel, high-contrast text on white/black backgrounds, and extremely limited use of accent color.
- **Pitch** — Comparable use of a soft, modern serif for headlines against a clean, sans-serif driven interface.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-white: #ffffff;
  --color-ash: #f3f4f6;
  --color-stone: #e4e7ec;
  --color-slate: #d3d8df;
  --color-lead: #b5bdc9;
  --color-overcast: #8f99a8;
  --color-metal: #6f7988;
  --color-carbon: #505967;
  --color-ink: #1c1d1f;
  --color-abyss: #000000;
  --color-action-blue: #407ff2;
  --color-focus-blue: #94b9ff;
  --color-success-green: #075a39;
  --color-danger-red: #772322;
  --color-warning-yellow: #705500;
  --color-magic-aura: #70a1f0;
  --font-tiempos-text: 'Tiempos Text', Newsreader, Lora;
  --font-inter-display: 'Inter Display', Inter;
  --font-inter: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.14px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.24px;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.4px;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.23;
  --tracking-heading-sm: -0.42px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.6px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.12px;
  --text-display: 64px;
  --leading-display: 1.07;
  --tracking-display: -1.28px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-82: 82px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-108: 108px;
  --spacing-109: 109px;
  --spacing-120: 120px;
  --spacing-181: 181px;
  --spacing-214: 214px;
  --radius-tabs: 0px;
  --radius-tags: 4px;
  --radius-cards: 8px;
  --radius-inputs: 7px;
  --radius-buttons: 10px;
  --shadow-xl: rgb(238, 239, 241) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(28, 40, 64, 0.1) 0px 2px 3px -2px, rgba(28, 40, 64, 0.04) 0px 4px 6px -2px;
  --shadow-xl-3: rgba(28, 40, 64, 0.18) 0px 0px 2px 0px, rgba(0, 0, 0, 0.04) 0px 1px 3px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-white: #ffffff;
  --color-ash: #f3f4f6;
  --color-stone: #e4e7ec;
  --color-slate: #d3d8df;
  --color-lead: #b5bdc9;
  --color-overcast: #8f99a8;
  --color-metal: #6f7988;
  --color-carbon: #505967;
  --color-ink: #1c1d1f;
  --color-abyss: #000000;
  --color-action-blue: #407ff2;
  --color-focus-blue: #94b9ff;
  --color-success-green: #075a39;
  --color-danger-red: #772322;
  --color-warning-yellow: #705500;
  --color-magic-aura: #70a1f0;
  --font-tiempos-text: 'Tiempos Text', Newsreader, Lora;
  --font-inter-display: 'Inter Display', Inter;
  --font-inter: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.14px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.24px;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.4px;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.23;
  --tracking-heading-sm: -0.42px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.6px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.12px;
  --text-display: 64px;
  --leading-display: 1.07;
  --tracking-display: -1.28px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-82: 82px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-108: 108px;
  --spacing-109: 109px;
  --spacing-120: 120px;
  --spacing-181: 181px;
  --spacing-214: 214px;
  --radius-tabs: 0px;
  --radius-tags: 4px;
  --radius-cards: 8px;
  --radius-inputs: 7px;
  --radius-buttons: 10px;
  --shadow-xl: rgb(238, 239, 241) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(28, 40, 64, 0.1) 0px 2px 3px -2px, rgba(28, 40, 64, 0.04) 0px 4px 6px -2px;
  --shadow-xl-3: rgba(28, 40, 64, 0.18) 0px 0px 2px 0px, rgba(0, 0, 0, 0.04) 0px 1px 3px 0px;
}
```
