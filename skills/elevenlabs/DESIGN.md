---
version: alpha
name: "ElevenLabs"
description: "ElevenLabs feels like a museum label next to a working instrument — type-first, almost severe, yet alive with subtle warmth in the off-white surfaces. The page background #fdfcfc (named 'Eggshell' in the CSS tokens) is barely-not-white, giving the layout a slight papery warmth that black text lands on with extraordinary weight. Headlines use Waldenburg at weight 300 with -0.02em tracking, a custom serif that whispers where competitors shout — the counter-intuitive choice of a light-weight, slightly classical typeface for an AI voice platform creates authority through restraint. The entire chromatic palette is suppressed to near-zero saturation: #e5e5e5 borders, #777169 secondary text (a warm stone gray), and #fdfcfc surfaces — the only true color breaks come from pill-shaped black CTA buttons and the small colored avatar dots on voice profiles. The product UI card floats on a hairline shadow (0px 0px 1px rgba(0,0,0,0.4)) rather than elevation depth, keeping everything in the same visual plane."
theme: "light"
industry: "ai"
source_url: "https://elevenlabs.io"
refero_style_id: "031056ff-7af1-46db-8daa-115f731c5d26"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775945461084-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775945461084-thumb.jpg"
extracted_at: "2026-04-11T22:12:51.895Z"
---

# ElevenLabs — Style Reference

> Architect's blueprint on warm vellum — Waldenburg weight-300 headlines at 48px with -0.02em tracking anchored against an eggshell ground, pure black pill buttons as the only punctuation.

**Theme:** light

**Industry:** ai

ElevenLabs feels like a museum label next to a working instrument — type-first, almost severe, yet alive with subtle warmth in the off-white surfaces. The page background #fdfcfc (named 'Eggshell' in the CSS tokens) is barely-not-white, giving the layout a slight papery warmth that black text lands on with extraordinary weight. Headlines use Waldenburg at weight 300 with -0.02em tracking, a custom serif that whispers where competitors shout — the counter-intuitive choice of a light-weight, slightly classical typeface for an AI voice platform creates authority through restraint. The entire chromatic palette is suppressed to near-zero saturation: #e5e5e5 borders, #777169 secondary text (a warm stone gray), and #fdfcfc surfaces — the only true color breaks come from pill-shaped black CTA buttons and the small colored avatar dots on voice profiles. The product UI card floats on a hairline shadow (0px 0px 1px rgba(0,0,0,0.4)) rather than elevation depth, keeping everything in the same visual plane.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Eggshell | #fdfcfc | `--color-eggshell` | Page background and primary surface — the near-white warmth distinguishes this from pure #ffffff, landing type with extra weight |
| Powder | #f5f3f1 | `--color-powder` | Secondary surface, hover states, subtle section backgrounds |
| Chalk | #e5e5e5 | `--color-chalk` | All borders, dividers, card outlines, button outlines — the single border color used universally |
| Fog | #b1b0b0 | `--color-fog` | Disabled states, placeholder elements, logo grid grayscale treatment |
| Gravel | #777169 | `--color-gravel` | Secondary body text, nav items, subheadings, captions — warm stone undertone separates it from a cold gray |
| Slate | #a59f97 | `--color-slate` | Tertiary text, icon strokes, deemphasized labels |
| Cinder | #57534 | `--color-cinder` | Mid-tone text, secondary headings on light surfaces |
| Obsidian | #000000 | `--color-obsidian` | Primary text, filled CTA buttons (background), logo mark — the absolute black against eggshell creates 20.5:1 contrast |
| Signal Blue | #0447ff | `--color-signal-blue` | ElevenAgents product dot / brand avatar accent — appears only in small circular UI elements, not in text or buttons |
| Ember | #ff4704 | `--color-ember` | ElevenCreative product dot / brand avatar accent — small circular UI indicator only |
| Voice Spectrum | #3d75d8 | `--color-voice-spectrum` | Logo mark conic gradient — the spinning blue-cyan wheel that is the ElevenLabs logomark |

## Tokens — Typography

### Waldenburg

- **Token:** `--font-waldenburg`
- **Substitute:** Cormorant Garamond 300, or Libre Baskerville 300
- **Weights:** 300
- **Sizes:** 32px, 36px, 48px
- **Line heights:** 1.08–1.17
- **Letter spacing:** -0.64px at 32px, -0.72px at 36px, -0.96px at 48px
- **Role:** All display and section headlines. Weight 300 is the signature move — a light-weight custom serif for an AI platform inverts every SaaS convention of bold grotesque headlines. At 48px with -0.02em tracking the letters breathe and lean slightly classical. No substitute fully captures it.

### WaldenburgFH

- **Token:** `--font-waldenburgfh`
- **Substitute:** Inter 700 with letter-spacing 0.7px
- **Weights:** 700
- **Sizes:** 14px
- **Line heights:** 1.10
- **Letter spacing:** 0.7px at 14px
- **Role:** Navigation product labels (ElevenCreative, ElevenAgents, ElevenAPI) and icon badges. The 0.05em wide tracking at weight 700 creates a compressed, stamp-like label style — tight caps energy in a small footprint.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter (Google Fonts)
- **Weights:** 400, 500
- **Sizes:** 10px, 12px, 13px, 14px, 15px, 16px, 18px, 20px
- **Line heights:** 1.0–2.06
- **Letter spacing:** 0.1px–0.2px across all sizes
- **OpenType features:** "kern" 1
- **Role:** All body copy, UI labels, navigation, buttons, captions, footer. Weight 400 for body and descriptive text; weight 500 for interactive labels and emphasis. The 0.01em letter-spacing is a subtle open tracking that keeps small sizes legible on eggshell.

### Geist Mono

- **Token:** `--font-geist-mono`
- **Substitute:** JetBrains Mono 400, or IBM Plex Mono 400
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.69
- **Role:** Code snippets, technical annotations, voice-text preview inline markers like [sarcastic] and [whispers]. Monospace signals machine-generated or technical content within prose.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.2 | — | `--text-caption` |
| body | 14px | 1.43 | — | `--text-body` |
| body-lg | 16px | 1.5 | — | `--text-body-lg` |
| subheading | 18px | 1.44 | — | `--text-subheading` |
| heading-sm | 20px | 1.4 | — | `--text-heading-sm` |
| heading | 32px | 1.17 | -0.64px | `--text-heading` |
| heading-lg | 36px | 1.13 | -0.72px | `--text-heading-lg` |
| display | 48px | 1.08 | -0.96px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-66 | 66px | `--spacing-66` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-125 | 125px | `--spacing-125` |
| spacing-148 | 148px | `--spacing-148` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-203 | 203px | `--spacing-203` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 9999px |
| cards | 16px |
| badges | 12px |
| inputs | 4px |
| modals | 24px |
| panels | 20px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset | `--shadow-xl-3` |
| xl-4 | rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px | `--shadow-xl-4` |
| xl-5 | rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset | `--shadow-xl-5` |
| xl-6 | rgb(235, 232, 228) 0px 0px 0px 0.5px inset | `--shadow-xl-6` |
| xl-7 | rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px | `--shadow-xl-7` |
| xl-8 | rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset | `--shadow-xl-8` |
| xl-9 | rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px | `--shadow-xl-9` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80-120px |
| cardPadding | 16-24px |
| elementGap | 8-12px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Product Demo Card — Voice List

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Social Proof Logo Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Pill Button (Filled)

**Role:** Primary CTA — Sign up, Play, Submit

Background #000000, text #fdfcfc, border-radius 9999px, padding 0px 16px (height driven by line-height), border 1px solid #e5e5e5. Shadow: rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px. WaldenburgFH 700 14px 0.05em tracking for product-label buttons; Inter 500 14px for general CTAs.

### Ghost Pill Button (Outline)

**Role:** Secondary actions — Contact sales, Log in, Read all stories

Background #ffffff, text #000000, border-radius 9999px, padding 0px 12px, border 1px solid #e5e5e5. Same shadow system as filled button. The white fill over eggshell background gives a subtle float-off-page effect.

### Rounded Outline Button (Tab/Toggle)

**Role:** Segmented control tabs — ElevenCreative, ElevenAgents, ElevenAPI selector

Background transparent, text #000000, border-radius 18px, padding 8px 12px, border 1px solid #e5e5e5. WaldenburgFH 700 14px for product name labels. Active state upgrades to filled pill.

### Compact Action Button

**Role:** Inline UI actions — pagination arrows, expand/collapse controls

Background transparent, text #000000, border-radius 12px, padding 0px 8px left / 12px right, border 1px solid #e5e5e5. Smaller footprint for secondary UI controls inside cards.

### Product Demo Card

**Role:** Interactive voice-player UI card embedded in hero section

Background #ffffff, border-radius 16px, box-shadow rgba(0,0,0,0.4) 0px 0px 1.143px 0px, rgba(0,0,0,0.04) 0px 2px 4px. Contains a voice list (Inter 14px #000000 names, Inter 13px #777169 descriptors), a text input area, and a Play pill button. Inner elements use 4px and 12px radii for sub-controls.

### Voice List Item

**Role:** Individual voice selection row inside demo card

Full-width row with 32px circular avatar (colored gradient or flat color), voice name in Inter 500 14px #000000, voice descriptor in Inter 400 13px #777169. Active/selected row gets background #f5f3f1 with 4px radius highlight. Row height ~40px, horizontal padding 12px.

### Navigation Bar

**Role:** Top global navigation

Background #fdfcfc, height 36px, max-width 1200px centered. Logo left-aligned. Nav links in Inter 400 14px #000000. Product sub-items in WaldenburgFH 700 14px 0.05em tracking. 'Log in' as Ghost Pill, 'Sign up' as Filled Pill. Border-bottom 1px solid #e5e5e5 on scroll.

### Section Divider Label

**Role:** Eyebrow text above section headings

Inter 400 14px #777169 (Gravel), no background, no border. Placed 8-12px above the Waldenburg heading. Communicates category without visual decoration.

### Text Input (Transparent)

**Role:** Inline text editors and search fields

Background transparent, border-radius 0px, border-bottom 1px solid #000000, padding 12px 20px, text Inter 400 14px #000000, placeholder Inter 400 14px #a59f97. No box shadow. Stripped-back, editorial-form input style.

### Text Input (Contained)

**Role:** Form inputs with white background

Background #ffffff, border 1px solid #e5e5e5, border-radius 0px, padding 12px 20px, text Inter 400 14px #000000. Inner shadow rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset for depth on white surface.

### Feature Platform Card (Ghost)

**Role:** Two-column product description cards — ElevenCreative / ElevenAgents

Background transparent, border 0, radius 0px, padding 0. Heading in Inter 500 16px #000000, body in Inter 400 14px #777169. No elevation — these are pure typographic blocks on the eggshell ground, differentiated only by the colored dot prefix (Ember #ff4704 or Signal Blue #0447ff).

## Do's and Don'ts

### Do

- Use Waldenburg 300 with -0.02em letter-spacing for all headings at 32px and above — never substitute a heavier weight.
- Apply 9999px border-radius to every button and pill tag; use 16-20px for cards and panels; use 0px for bare input fields.
- Keep the entire color palette at near-zero saturation: #000000 text, #fdfcfc background, #e5e5e5 borders, #777169 secondary text. Reserve #ff4704 and #0447ff for product avatar dots only.
- Use the inset shadow rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset on white UI surfaces that sit on eggshell — it replaces border outlines on cards without adding visual weight.
- Use Geist Mono 400 13px only for machine-generated or technical inline annotations (e.g. [whispers], [sarcastic]) and code snippets.
- Render all third-party logos in the social proof grid at #b1b0b0 (Fog) with no hover color change — chromatic logos break the achromatic discipline.
- Size section gaps at 80-120px vertical spacing between major content blocks; use 8-12px for element-level gaps within components.

### Don't

- Never use a weight above 300 for Waldenburg display headlines — weight 700 belongs only to WaldenburgFH product-label contexts at 14px.
- Never introduce saturated color for text, background fills, or buttons — the Signal Blue #0447ff and Ember #ff4704 are reserved exclusively for 8-16px avatar/dot indicators.
- Never apply box-shadow elevation larger than rgba(0,0,0,0.4) 0px 0px 1.143px — ElevenLabs cards float by 1px shadow, not by depth layering.
- Never use a pure white #ffffff background for page surfaces — use #fdfcfc (Eggshell) for all base surfaces to preserve the warm papery ground.
- Never place Inter body text below 13px in product UI contexts or below 14px in marketing prose — the 0.01em tracking needs minimum size to work.
- Never use more than two button variants in the same visual cluster — one filled black pill (primary) + one white ghost pill (secondary) is the maximum combination.
- Never apply border-radius to input fields — inputs use 0px radius, creating an editorial underline-or-box distinction from the rounded interactive elements.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Ground | #fdfcfc | Base page background — all page-level content sits here |
| 1 | Powder Surface | #f5f3f1 | Section highlights, active row states, nav hover backgrounds |
| 2 | Card White | #ffffff | Interactive demo cards and form inputs that need to pop off the eggshell ground |
| 3 | Obsidian | #000000 | Primary CTA fill, logo mark, full-bleed dark sections |

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset`
- **Shadow 2:** `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`
- **Shadow 3:** `rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset`
- **Shadow 4:** `rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px`
- **Shadow 5:** `rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset`
- **Shadow 6:** `rgb(235, 232, 228) 0px 0px 0px 0.5px inset`
- **Shadow 7:** `rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`
- **Shadow 8:** `rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset`
- **Shadow 9:** `rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`

## Imagery

Product screenshots are the dominant visual — specifically, the interactive voice-player UI shown as a white card with structured list and text area. No lifestyle photography is present. Illustration is absent. The only 'graphic' element is the conic-gradient logomark, a spinning blue-to-cyan color wheel suggesting audio waveforms or voice spectra, contained within a ~24px icon footprint. Voice avatars use small 28-32px circular gradient fills (multicolor mini-spheres) as person-indicators — these are the only chromatic imagery in the UI. Social proof section uses SVG wordmark logos uniformly desaturated to #b1b0b0 Fog. The design is text-dominant: imagery occupies roughly 30% of visual space with the product card; 70% is typographic.

## Layout

Max-width ~1200px centered on eggshell ground. Hero is a two-column asymmetric split: large Waldenburg headline left (60% width) with body text right, followed by two pill buttons. Below the fold, a full-width white product card (border-radius 16px) acts as a live demo embed spanning the full content column. Logo grid is a 6-column × 3-row flat array on white, centered, with generous 24-32px row gaps. Feature descriptions use a 2-column text block layout (no images, purely typographic). Navigation is a slim 36px top bar, likely sticky on scroll, with logo left and auth CTAs right. Section rhythm is seamless — no alternating dark/light bands; the entire page is the same eggshell ground broken only by the white card surfaces and the #f5f3f1 subtle hover zones.

## Similar Brands

- **Linear** — Same achromatic palette discipline with a single accent-color confined to UI indicators only, custom-weight typography as brand signature
- **Notion** — Eggshell/near-white page ground with black pill CTAs and editorial type-first layout, serif headline weight against sans body
- **Vercel** — Pure black/white high-contrast CTA system with zero saturated brand color in the marketing UI
- **Anthropic** — Custom serif at light weight for AI product headlines, warm-toned off-white surfaces, deliberate restraint on color expression
- **Perplexity** — Monochrome pill-button system, Inter body at multiple weights, product demo card embedded in hero section

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-eggshell: #fdfcfc;
  --color-powder: #f5f3f1;
  --color-chalk: #e5e5e5;
  --color-fog: #b1b0b0;
  --color-gravel: #777169;
  --color-slate: #a59f97;
  --color-cinder: #57534;
  --color-obsidian: #000000;
  --color-signal-blue: #0447ff;
  --color-ember: #ff4704;
  --color-voice-spectrum: #3d75d8;
  --font-waldenburg: 'Waldenburg', Cormorant Garamond 300, or Libre Baskerville 300;
  --font-waldenburgfh: 'WaldenburgFH', Inter 700 with letter-spacing 0.7px;
  --font-inter: 'Inter', Inter (Google Fonts);
  --font-geist-mono: 'Geist Mono', JetBrains Mono 400, or IBM Plex Mono 400;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.44;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --text-heading: 32px;
  --leading-heading: 1.17;
  --tracking-heading: -0.64px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.72px;
  --text-display: 48px;
  --leading-display: 1.08;
  --tracking-display: -0.96px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-59: 59px;
  --spacing-64: 64px;
  --spacing-66: 66px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-110: 110px;
  --spacing-120: 120px;
  --spacing-125: 125px;
  --spacing-148: 148px;
  --spacing-160: 160px;
  --spacing-203: 203px;
  --radius-tags: 9999px;
  --radius-cards: 16px;
  --radius-badges: 12px;
  --radius-inputs: 4px;
  --radius-modals: 24px;
  --radius-panels: 20px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset;
  --shadow-xl-4: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px;
  --shadow-xl-5: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
  --shadow-xl-6: rgb(235, 232, 228) 0px 0px 0px 0.5px inset;
  --shadow-xl-7: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-xl-8: rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset;
  --shadow-xl-9: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --surface-page-ground: #fdfcfc;
  --surface-powder-surface: #f5f3f1;
  --surface-card-white: #ffffff;
  --surface-obsidian: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-eggshell: #fdfcfc;
  --color-powder: #f5f3f1;
  --color-chalk: #e5e5e5;
  --color-fog: #b1b0b0;
  --color-gravel: #777169;
  --color-slate: #a59f97;
  --color-cinder: #57534;
  --color-obsidian: #000000;
  --color-signal-blue: #0447ff;
  --color-ember: #ff4704;
  --color-voice-spectrum: #3d75d8;
  --font-waldenburg: 'Waldenburg', Cormorant Garamond 300, or Libre Baskerville 300;
  --font-waldenburgfh: 'WaldenburgFH', Inter 700 with letter-spacing 0.7px;
  --font-inter: 'Inter', Inter (Google Fonts);
  --font-geist-mono: 'Geist Mono', JetBrains Mono 400, or IBM Plex Mono 400;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.44;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --text-heading: 32px;
  --leading-heading: 1.17;
  --tracking-heading: -0.64px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.72px;
  --text-display: 48px;
  --leading-display: 1.08;
  --tracking-display: -0.96px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-59: 59px;
  --spacing-64: 64px;
  --spacing-66: 66px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-110: 110px;
  --spacing-120: 120px;
  --spacing-125: 125px;
  --spacing-148: 148px;
  --spacing-160: 160px;
  --spacing-203: 203px;
  --radius-tags: 9999px;
  --radius-cards: 16px;
  --radius-badges: 12px;
  --radius-inputs: 4px;
  --radius-modals: 24px;
  --radius-panels: 20px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset;
  --shadow-xl-4: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px;
  --shadow-xl-5: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
  --shadow-xl-6: rgb(235, 232, 228) 0px 0px 0px 0.5px inset;
  --shadow-xl-7: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-xl-8: rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset;
  --shadow-xl-9: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --surface-page-ground: #fdfcfc;
  --surface-powder-surface: #f5f3f1;
  --surface-card-white: #ffffff;
  --surface-obsidian: #000000;
}
```
