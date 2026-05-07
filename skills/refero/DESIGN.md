---
version: alpha
name: "Refero"
description: "Refero uses a white-canvas editorial language where a high-contrast serif headline font (Title) carries nearly all expressive weight against an otherwise achromatic UI. The page breathes with generous vertical rhythm, letting black-on-white hierarchy do the work that other systems hand to color. The single accent move is a filled black pill button against white — no gradients, no color splashes, just ink-weight contrast. Borders and muted grays form a quiet structural grid, while the inset blue-tinted shadow on surface elements is the only chromatic whisper in an otherwise monochrome system."
theme: "light"
industry: "design"
source_url: "https://refero.design/mcp"
refero_style_id: "3f296d6e-6a1c-45db-829b-afb078d49ab4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777561486510-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777561486510-thumb.jpg"
extracted_at: "2026-04-30T15:06:33.442Z"
---

# Refero — Style Reference

> Editorial ink on white marble — a typographer's product page where the serif headline IS the brand, and everything else stays out of its way.

**Theme:** light

**Industry:** design

Refero uses a white-canvas editorial language where a high-contrast serif headline font (Title) carries nearly all expressive weight against an otherwise achromatic UI. The page breathes with generous vertical rhythm, letting black-on-white hierarchy do the work that other systems hand to color. The single accent move is a filled black pill button against white — no gradients, no color splashes, just ink-weight contrast. Borders and muted grays form a quiet structural grid, while the inset blue-tinted shadow on surface elements is the only chromatic whisper in an otherwise monochrome system.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pure Canvas | #ffffff | `--color-pure-canvas` | Primary page background, modal/dialog background |
| Frost Surface | #f7f8fb | `--color-frost-surface` | Secondary surface, subtle background containers, nav pill background |
| Midnight Ink | #000000 | `--color-midnight-ink` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Deep Charcoal | #13151b | `--color-deep-charcoal` | Near-black text for dense UI labels, active nav tab text |
| Graphite | #2d313f | `--color-graphite` | Navigation link text, secondary headings, mid-level labels |
| Slate | #525769 | `--color-slate` | Tertiary text, supporting body copy, muted label text |
| Ash | #777d90 | `--color-ash` | Subdued body text, hairline borders, icon strokes, placeholder text — the dominant mid-gray in this system |
| Fog | #9fa5ba | `--color-fog` | Light borders, icon outlines, de-emphasized link borders, ghost UI outlines |
| Modal Veil | #0c2970 | `--color-modal-veil` | Inset ring shadow on elevated cards/surfaces — blue-tinted at 7% opacity creates structural definition without neutral gray shadows |

## Tokens — Typography

### Title (custom serif)

- **Token:** `--font-title-custom-serif`
- **Substitute:** Playfair Display 400, or Georgia for fallback
- **Weights:** 400
- **Sizes:** 36px, 40px, 50px, 64px
- **Line heights:** 1.12–1.28
- **Letter spacing:** -0.02em at all display sizes
- **Role:** All editorial headlines and display text — the expressive backbone of the brand. Weight 400 for a serif at 64px is anti-convention; most product sites use weight 700+, but this regular-weight serif creates authority through ink texture rather than mass. The -0.02em tracking tightens large display lines without condensing smaller ones.

### Base-Variable (custom sans)

- **Token:** `--font-base-variable-custom-sans`
- **Substitute:** Inter Variable or DM Sans
- **Weights:** 500, 600, 650
- **Sizes:** 13px, 15px, 16px, 17px, 20px, 25px
- **Line heights:** 1.40–1.60 for body, 0.96–1.20 for tight UI labels
- **Letter spacing:** -0.026em at 13px, -0.025em at 15px, -0.022em at 16px, -0.020em at 17–20px, -0.015em at 25px
- **OpenType features:** "tnum"
- **Role:** All UI text: navigation, buttons, body copy, labels, captions, input text. Variable font exploited for precise weight stepping — 650 for strong UI labels, 600 for subheadings, 500 for body and supporting text. Negative tracking throughout (-0.015em to -0.026em) keeps the sans from spreading loose.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.4 | -0.34px | `--text-caption` |
| body-sm | 15px | 1.5 | -0.38px | `--text-body-sm` |
| heading-sm | 20px | 1.4 | -0.4px | `--text-heading-sm` |
| heading | 25px | 1.2 | -0.38px | `--text-heading` |
| heading-lg | 36px | 1.28 | -0.72px | `--text-heading-lg` |
| display | 64px | 1.12 | -1.28px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-74 | 74px | `--spacing-74` |
| spacing-77 | 77px | `--spacing-77` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-82 | 82px | `--spacing-82` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-138 | 138px | `--spacing-138` |
| spacing-191 | 191px | `--spacing-191` |
| spacing-279 | 279px | `--spacing-279` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 8px |
| cards | 64px |
| small | 4px |
| inputs | 12px |
| modals | 24px |
| panels | 20px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(12, 41, 126, 0.07) 0px 0px 0px 1px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80px |
| cardPadding | 24px |
| elementGap | 12px |

## Components

### Button Group — Primary + Secondary

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Platform Toggle — Web / iOS Segmented Control

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Announcement Chip + Hero Headline Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Black Pill Button (Primary)

**Role:** Primary call-to-action, install/demo actions

Background #000000, text #f7f8fb at 15px Base-Variable weight 600, letter-spacing -0.025em. Padding 12px 24px. Border-radius 9999px. No shadow. The filled black pill against white is the sole high-contrast action affordance in the system — all other interactive elements are ghost or text links.

### Ghost Pill Button (Secondary)

**Role:** Secondary action alongside the primary pill

Background transparent, border 1px solid #9fa5ba, text #2d313f at 15px Base-Variable weight 600, letter-spacing -0.025em. Padding 12px 24px. Border-radius 9999px. Sits directly beside the black pill; the border-only treatment recedes while maintaining shape parity.

### Platform Toggle (Web / iOS)

**Role:** Segmented control for switching platform context in nav

Container background #f7f8fb, border-radius 9999px, padding 4px. Active tab: background #ffffff, text #13151b at 15px weight 600, radius 9999px, shadow rgba(12,41,126,0.07) 0px 0px 0px 1px inset. Inactive tab: text #777d90 at 15px weight 500. Height ~36px.

### Search Bar

**Role:** Global AI-query input in top navigation

Background transparent, border-bottom 1px solid #000000 (underline only, borderRadius 0px), padding-left 8px. Placeholder text #9fa5ba at 16px Base-Variable weight 500. Full-width inside its container. The underline-only input is the most minimal possible treatment — no box, no rounded container.

### Feature Card

**Role:** Content showcase containers for product screenshots/feature blocks

Background rgba(55,80,155,0.04) — a barely-there blue tint distinguishes card from pure white canvas without introducing visible color. Border-radius 64px — extremely large radius creates a pill-like container card, the most distinctive shape token in the system. Padding 0px (content bleeds to edges). No box-shadow.

### Inset Surface Ring

**Role:** Elevated UI panels, chat interface frames

Background #ffffff, border-radius 12px–24px. Box-shadow: rgba(12,41,126,0.07) 0px 0px 0px 1px inset — the blue-tinted inset ring replaces an outset shadow; it defines the panel boundary without lifting it off the page. Used on the product demo screenshot panel.

### Logo / Brand Badge

**Role:** Circular brand mark in top-left navigation

Black circle with white 'R' lettermark. 32px diameter, border-radius 9999px. Background #000000, icon #ffffff. Compact, no text label beside it.

### Partner Logomark Row

**Role:** Social proof / compatibility strip (Claude, Cursor, Lovable, Codex)

Inline row of partner logos in #777d90 (muted gray), horizontally spaced at 24px gaps. No backgrounds, no cards — floating text-weight logotypes on white. The gray tint de-emphasizes them as supporting context rather than primary content.

### Announcement Chip

**Role:** Top-of-hero contextual label ('Refero MCP for AI agents')

Small inline label: 13px Base-Variable weight 500, #525769, letter-spacing -0.026em. Diamond/astisk icon at 12px preceding text. No background fill, no border — pure text label with icon punctuation. Sits centered above the main headline.

### Navigation Link

**Role:** Top navigation text links (Pricing, How It Works)

Text #2d313f at 15px Base-Variable weight 500, letter-spacing -0.025em. No underline at rest. Hover state transitions color using 0.2s ease. No background, no border. Minimal by design — these links recede relative to the black pill action.

## Do's and Don'ts

### Do

- Use the Title serif at weight 400 for all display headlines (36–64px) with -0.02em tracking — never bold or semi-bold the serif.
- Fill primary buttons with #000000 background and #f7f8fb text at 9999px radius; this is the only filled color action in the system.
- Apply border-radius 64px to feature/showcase cards to create the signature pill-card shape — do not use standard 8–16px card radii for these containers.
- Use rgba(12,41,126,0.07) 0px 0px 0px 1px inset as the shadow token for elevated surfaces — never use outset drop shadows.
- Keep the palette achromatic for all UI chrome; introduce color only through semantic states (error #a10214, warning #7c4b01, success #02a745) and the structural accent tint rgba(55,80,155,0.04) on card backgrounds.
- Apply negative letter-spacing to all Base-Variable UI text: -0.026em at 13px scaling to -0.015em at 25px — loose tracking is never correct.
- Reserve #777d90 for all subdued borders, placeholder text, and partner/supporting iconography — it is the system's workhorse mid-gray.

### Don't

- Never introduce chromatic accent colors (blue, purple, green) as UI button fills or background washes — the system is intentionally achromatic outside semantic states.
- Never use the Title serif below 36px — it is a display-only typeface; all body and UI text uses Base-Variable.
- Never apply drop shadows or elevation halos (box-shadow: 0 4px 24px ...) — the only allowed shadow is the inset blue-tinted ring rgba(12,41,126,0.07).
- Never use a border-radius below 20px for major container panels or modal sheets — the system skews large-radius throughout.
- Never set Base-Variable at weight 400 or below — minimum weight is 500 to maintain the compact, confident stroke density.
- Never use #9fa5ba or lighter grays as body text color — they are border and ghost-UI colors only; minimum body text is #777d90.
- Never stack multiple button styles of the same hierarchy — one black pill + one ghost pill per action group; do not add a third tier.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Page Canvas | #ffffff | Base page background for all content sections |
| 2 | Frost Surface | #f7f8fb | Secondary containers: nav segmented control background, subtle section washes |
| 3 | Card Tint | #f4f5fb | Feature cards at rgba(55,80,155,0.04) over white — barely-perceptible blue-gray tint distinguishing card from canvas |
| 4 | Elevated Panel | #ffffff | Modal dialogs, product demo frames — white surface defined by inset ring shadow rather than color change |

## Elevation

- **Shadow 1:** `rgba(12, 41, 126, 0.07) 0px 0px 0px 1px inset`

## Imagery

Product UI screenshots are the primary visual content — contained inside the 64px-radius pill-cards, cropped tightly to show interface grids and chat flows. No photography, no illustration, no 3D. The screenshots are presented raw-edged within the rounded card container, creating a framed product showcase. Icons throughout are outlined, single-color (#777d90 or #000000), with consistent ~1.5px apparent stroke weight — never filled multicolor. The visual density is low: large amounts of white space surround a single centered product demo panel, making the screenshots the sole focal object on each screen.

## Similar Brands

- **Linear** — Same achromatic palette with black pill buttons and weight-400 serif headlines as the sole expressive element
- **Vercel** — White canvas with black-only action buttons, minimal navigation, and product screenshots as primary hero content
- **Pitch** — Editorial serif headlines at light weight against white, with ghost secondary buttons and muted gray supporting text
- **Loom** — Centered hero with large display text and contained product UI screenshot as the dominant visual below the headline
- **Framer** — Custom variable sans for UI text paired with serif display type, achromatic primary actions, inset surface shadows

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pure-canvas: #ffffff;
  --color-frost-surface: #f7f8fb;
  --color-midnight-ink: #000000;
  --color-deep-charcoal: #13151b;
  --color-graphite: #2d313f;
  --color-slate: #525769;
  --color-ash: #777d90;
  --color-fog: #9fa5ba;
  --color-modal-veil: #0c2970;
  --font-title-custom-serif: 'Title (custom serif)', Playfair Display 400, or Georgia for fallback;
  --font-base-variable-custom-sans: 'Base-Variable (custom sans)', Inter Variable or DM Sans;
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: -0.34px;
  --text-body-sm: 15px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.38px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.4px;
  --text-heading: 25px;
  --leading-heading: 1.2;
  --tracking-heading: -0.38px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.28;
  --tracking-heading-lg: -0.72px;
  --text-display: 64px;
  --leading-display: 1.12;
  --tracking-display: -1.28px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-49: 49px;
  --spacing-53: 53px;
  --spacing-57: 57px;
  --spacing-59: 59px;
  --spacing-74: 74px;
  --spacing-77: 77px;
  --spacing-80: 80px;
  --spacing-82: 82px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-138: 138px;
  --spacing-191: 191px;
  --spacing-279: 279px;
  --radius-tags: 8px;
  --radius-cards: 64px;
  --radius-small: 4px;
  --radius-inputs: 12px;
  --radius-modals: 24px;
  --radius-panels: 20px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(12, 41, 126, 0.07) 0px 0px 0px 1px inset;
  --surface-page-canvas: #ffffff;
  --surface-frost-surface: #f7f8fb;
  --surface-card-tint: #f4f5fb;
  --surface-elevated-panel: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-pure-canvas: #ffffff;
  --color-frost-surface: #f7f8fb;
  --color-midnight-ink: #000000;
  --color-deep-charcoal: #13151b;
  --color-graphite: #2d313f;
  --color-slate: #525769;
  --color-ash: #777d90;
  --color-fog: #9fa5ba;
  --color-modal-veil: #0c2970;
  --font-title-custom-serif: 'Title (custom serif)', Playfair Display 400, or Georgia for fallback;
  --font-base-variable-custom-sans: 'Base-Variable (custom sans)', Inter Variable or DM Sans;
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: -0.34px;
  --text-body-sm: 15px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.38px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.4px;
  --text-heading: 25px;
  --leading-heading: 1.2;
  --tracking-heading: -0.38px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.28;
  --tracking-heading-lg: -0.72px;
  --text-display: 64px;
  --leading-display: 1.12;
  --tracking-display: -1.28px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-49: 49px;
  --spacing-53: 53px;
  --spacing-57: 57px;
  --spacing-59: 59px;
  --spacing-74: 74px;
  --spacing-77: 77px;
  --spacing-80: 80px;
  --spacing-82: 82px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-138: 138px;
  --spacing-191: 191px;
  --spacing-279: 279px;
  --radius-tags: 8px;
  --radius-cards: 64px;
  --radius-small: 4px;
  --radius-inputs: 12px;
  --radius-modals: 24px;
  --radius-panels: 20px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(12, 41, 126, 0.07) 0px 0px 0px 1px inset;
  --surface-page-canvas: #ffffff;
  --surface-frost-surface: #f7f8fb;
  --surface-card-tint: #f4f5fb;
  --surface-elevated-panel: #ffffff;
}
```
