---
version: alpha
name: "Retool"
description: "Retool operates on a near-black canvas — #151515 as the dominant ground — with off-white text (#e9ebdf) that reads more like parchment than pure white, giving the dark surface a warm, organic quality rather than a cold tech-void. Typography is the primary design tool: the custom 'saansFont' runs from weight 300 at 72px down to 380 at body sizes, with aggressive negative tracking at large scales creating compressed, authoritative headlines that feel proprietary. Surface depth is achieved through a three-step stack (#0e0e0 → #151515 → #242424) with no shadows — cards are literally darker or lighter slabs of the same material, not elevated objects. The only chromatic punctuation is muted teal (#185849, #0e352c) used as subtle background washes, while the hero gradient bleeds warm earthy tones (amber-rust into near-black) from the bottom-left, creating atmospheric depth without visual noise. Buttons are square-cornered or pill-cornered depending on context — no in-between — reinforcing a binary, decisive visual grammar."
theme: "dark"
industry: "devtools"
source_url: "https://retool.com"
refero_style_id: "c45b115b-dcb5-446d-8952-85aef740f8e4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777503779439-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777503779439-thumb.jpg"
extracted_at: "2026-04-29T23:05:34.544Z"
---

# Retool — Style Reference

> Warm obsidian workshop — a precision tool surface lit by ember glow, where everything is built.

**Theme:** dark

**Industry:** devtools

Retool operates on a near-black canvas — #151515 as the dominant ground — with off-white text (#e9ebdf) that reads more like parchment than pure white, giving the dark surface a warm, organic quality rather than a cold tech-void. Typography is the primary design tool: the custom 'saansFont' runs from weight 300 at 72px down to 380 at body sizes, with aggressive negative tracking at large scales creating compressed, authoritative headlines that feel proprietary. Surface depth is achieved through a three-step stack (#0e0e0 → #151515 → #242424) with no shadows — cards are literally darker or lighter slabs of the same material, not elevated objects. The only chromatic punctuation is muted teal (#185849, #0e352c) used as subtle background washes, while the hero gradient bleeds warm earthy tones (amber-rust into near-black) from the bottom-left, creating atmospheric depth without visual noise. Buttons are square-cornered or pill-cornered depending on context — no in-between — reinforcing a binary, decisive visual grammar.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Obsidian Canvas | #151515 | `--color-obsidian-canvas` | Primary page background, dominant surface across all sections; Hero background gradient — warm amber-rust bleeds from bottom-left into near-black |
| Void Black | #0e0e0e | `--color-void-black` | Deepest surface layer, card backgrounds that recede below canvas |
| Ember Surface | #242424 | `--color-ember-surface` | Raised card and panel backgrounds — one step above canvas |
| Charcoal Rim | #3f403d | `--color-charcoal-rim` | Subtle borders and dividers on dark surfaces |
| Copper Wire | #8b867f | `--color-copper-wire` | Mid-tone icon fills, decorative borders, muted surface accents |
| Ash Text | #94958e | `--color-ash-text` | Secondary body text, nav subtitles, helper labels |
| Fog Text | #cbccc4 | `--color-fog-text` | Subheadings, supporting body copy, secondary headings |
| Limestone | #b6b8af | `--color-limestone` | Tertiary text, eyebrow labels, captions |
| Parchment | #e9ebdf | `--color-parchment` | Primary text, headline color, outlined button borders and text, pill button fill — slightly warm off-white that softens the contrast against near-black ground |
| Forest Deep | #185849 | `--color-forest-deep` | Decorative background wash — large-area teal tint used as atmospheric section color |
| Midnight Moss | #0e352c | `--color-midnight-moss` | Deeper teal wash, badge and label backgrounds in forest green |
| Spectrum Shimmer | #e87650 | `--color-spectrum-shimmer` | Animated text shimmer gradient — parchment transitions through coral and steel blue, used on select highlight phrases |

## Tokens — Typography

### saansFont

- **Token:** `--font-saansfont`
- **Substitute:** Inter, DM Sans
- **Weights:** 300, 380, 570
- **Sizes:** 14px, 16px, 18px, 24px, 32px, 36px, 48px, 60px, 72px
- **Line heights:** 1.00 at 60-72px, 1.05 at 36-48px, 1.20 at 18-32px, 1.50 at 14-16px
- **Letter spacing:** -0.022em at 72px (~-1.58px), -0.020em at 60px (~-1.2px), -0.010em at 36-48px, +0.010em to +0.020em at 12-14px small caps/labels
- **OpenType features:** "ss01" likely active for custom character alternates
- **Role:** Primary typeface for all display, heading, body, and UI text. Weight 300 at 60-72px is anti-conventional — most platforms use 600-700 for hero text; the thin weight creates authority through mass (huge scale) rather than stroke weight. Weight 380 handles body and subheadings. Weight 570 for labels and small UI. Custom font unavailable externally.

### pxGroteskFont

- **Token:** `--font-pxgroteskfont`
- **Substitute:** Space Grotesk, Geist
- **Weights:** 400
- **Sizes:** 12px, 14px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** +0.010em at 12-14px (~+0.12-0.14px)
- **Role:** Monospace-adjacent label font for nav, micro-copy, tags, and icon captions. The slight +0.010em tracking at small sizes distinguishes it from body text — reads like interface chrome rather than content.

### ui-sans-serif

- **Token:** `--font-ui-sans-serif`
- **Substitute:** System UI stack
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.50
- **Role:** Fallback system font for utility text, form inputs, and browser-native UI elements. Not a designed choice — appears only as system default context.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | 0.12px | `--text-caption` |
| body-sm | 14px | 1.5 | 0.14px | `--text-body-sm` |
| body | 16px | 1.5 | 0px | `--text-body` |
| subheading | 18px | 1.2 | -0.18px | `--text-subheading` |
| heading-sm | 24px | 1.2 | -0.24px | `--text-heading-sm` |
| heading | 36px | 1.05 | -0.36px | `--text-heading` |
| heading-lg | 48px | 1.05 | -0.48px | `--text-heading-lg` |
| display | 72px | 1 | -1.58px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| cards-large | 12px |
| pills-large | 36px |
| tags-badges | 4px |
| buttons-pill | 9999px |
| cards-default | 8px |
| buttons-square | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80-120px |
| cardPadding | 24px |
| elementGap | 8-16px |

## Components

### Announcement Bar + CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Stat / Social Proof Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Section Card — AppGen

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Pill Button — Filled

**Role:** Primary call-to-action (e.g. 'Book a demo', 'Get early access')

Background #e9ebdf (Parchment), text #151515 (Obsidian), border 1px solid #151515, border-radius 9999px. Font: saansFont 380 14-16px. Padding approximately 8px 20px. The warm off-white fill on near-black background reads as the brightest element on page — not an aggressive color CTA but a luminance CTA.

### Ghost Button — Square

**Role:** Secondary actions, nav-level text links with visible border

Background transparent, text #e9ebdf, border 1px solid #e9ebdf, border-radius 0px. Font: saansFont 380 14px. Zero padding in data — inline with surrounding text flow. Used alongside filled pill for secondary pairing.

### Dark Surface Button — Square

**Role:** Section-level actions embedded in dark content cards

Background #242424, text #e9ebdf, border 1px solid rgba(233,235,223,0.12), border-radius 0px, padding 40px 40px 32px 40px. Acts more as a content panel-button hybrid — large padding turns it into a tappable card area.

### Muted Ghost Button

**Role:** Tertiary actions, low-emphasis interactive text

Background transparent, text #e9ebdf, border 1px solid #433e38 (Charcoal Rim variant), border-radius 0px. Lower border contrast than primary ghost — visually recedes to let content breathe.

### Raised Card

**Role:** Feature cards, integration tiles, content panels

Background #242424, border-radius 12px for larger cards / 8px for standard cards, no box-shadow, padding 8px for image-topped cards. Elevation is purely colorimetric — the #242424 surface against #151515 canvas creates ~3% lightness lift with no shadow.

### Deep Card

**Role:** Full-bleed content sections, testimonial panels

Background #0e0e0, border-radius 0px, no shadow, padding 24px 0 24px 12px. Darker than canvas — creates a recessed inset effect, used for large-area content blocks that should feel embedded rather than floating.

### Eyebrow Label

**Role:** Section category labels above headlines (e.g. 'AppGen for the enterprise')

Text #b6b8af (Limestone), font pxGroteskFont 400 12-14px, letter-spacing +0.013em. No background. Positioned above headline in 8-16px gap. Functions as quiet organizational metadata.

### Beta Badge

**Role:** Status tags, 'Public Beta' announcement strip

Background #0e352c (Midnight Moss), text #e9ebdf, border-radius 4px, padding 2px 6px. Sits in announcement bar at very top of page with a linked CTA alongside.

### Announcement Bar

**Role:** Global top-of-page announcement strip

Background #151515 with teal gradient wash hint (#0e352c), full-width, height ~40px. Contains pxGroteskFont 400 14px text in #e9ebdf with a ghost arrow-linked label. Hairline border-bottom 1px #3f403d separates from nav.

### Navigation Bar

**Role:** Sticky top navigation

Background #151515 with backdrop-filter blur(3-4px), height 60px. Logo left, nav links center in pxGroteskFont 400 14px at #94958 with #e9ebdf on hover. Right: 'Sign in' ghost text link, 'Book a demo' ghost pill button, 'Start for free' filled pill button. Hairline 1px solid #3f403d bottom border.

### Logo Grid Row

**Role:** Social proof customer logo strip

Background #151515 or #242424 section. Logos rendered at #e9ebdf fill (desaturated to match Parchment). Horizontal scroll or flex-wrapped row. No borders, no card containers — logos float directly on surface.

### Integration Icon Bubble

**Role:** Integration/connector showcase icons in hero grid

Circular container, background #242424 or white (for colorful third-party logos), border-radius 9999px, 56-64px diameter. Icons retain their native brand colors inside the circle. Grid arrangement with 8px gaps. Slight drop into dark background creates constellation-like product connectivity display.

## Do's and Don'ts

### Do

- Use #151515 as the default page background for all new pages and sections — never use pure black (#000000) or white.
- Set all display and large headings (48px+) in saansFont weight 300 with letter-spacing between -0.020em and -0.022em — this compressed, light-weight combination is the signature headline treatment.
- Use 9999px border-radius only for pill CTAs ('Book a demo', 'Start for free') and 0px for all other buttons — the binary radius grammar is intentional.
- Apply #e9ebdf (Parchment) for all primary text, primary borders, and filled CTA backgrounds — this warm off-white is the system's single 'bright' color.
- Elevate cards using background #242424 against canvas #151515 with no shadow — a 1px solid #3f403d border is optional for additional definition.
- Use pxGroteskFont 400 12-14px at +0.013em tracking for all eyebrow labels, nav items, and micro-UI text — distinct from saansFont body text.
- Apply the hero radial gradient (amber-rust from bottom-left fading to transparent over #151515) only on full-viewport hero sections — not on inner content panels.

### Don't

- Never use saturated chromatic colors (#518dd2 blue, #e8765 coral, #9874d2 purple) as interface chrome — they exist only inside the animated shimmer text and illustration/3D renders.
- Never add box-shadow to cards or panels — shadows break the flat-material surface system; use background lightness shifts instead.
- Never mix square-corner buttons with pill buttons in the same row — choose one context and maintain it (nav uses pill, inline content uses square/ghost).
- Never set heading text above 32px in weight 570 — the bold weight is reserved for small labels; large text must use 300 or 380.
- Never use pure white (#ffffff) as a text or background color — all 'white' in this system is Parchment (#e9ebdf), which carries a warm gray-green tint.
- Never increase section background saturation beyond the muted teal washes (#185849, #0e352c) — the entire page should register as near-achromatic at a glance.
- Never apply border-radius values between 1px and 7px for buttons — the system only uses 0px or 9999px for button shapes.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Void | #0e0e0 | Deepest background — recessed panels, testimonial blocks, elements that should feel inset below canvas |
| 1 | Canvas | #151515 | Dominant page background — the ground all content sits on |
| 2 | Raised | #242424 | Card surfaces, panel backgrounds, interactive tiles — lifted above canvas by lightness alone |
| 3 | Teal Wash | #185849 | Atmospheric section tint — used as a large-area background color wash to signal a distinct content zone |

## Imagery

Retool's imagery combines two distinct registers: product-integrated 3D renders and real photography. The 3D renders are dimensional, architectural — stacked geometric forms with teal, mauve, and warm neutral finishes, rendered with soft directional lighting and finger/hand interaction to suggest tactility and precision. Photography is moody, tight-cropped portraiture and industrial scenes (worker in hard hat, close-up face) with ambient color preserved but overall tone dark and muted. Both treatments are contained within rounded-rectangle frames (8-12px radius) set against dark card surfaces, never full-bleed. Integration icons appear as a branded grid of circular app bubbles (9999px radius) retaining native brand colors — the only saturated color clusters on the page. The visual density is medium: imagery occupies roughly 40% of content sections as right-side panels, with text taking the left column. Icons throughout the UI are outlined-style, thin stroke, mono-color #e9ebdf or #94958e.

## Layout

Max-width approximately 1200px centered on all content with full-bleed dark backgrounds extending to viewport edges. Hero is full-viewport with centered-left headline text over the dark canvas and ember-glow gradient, with a 2-column split below (integration icon grid left, waitlist card right). Subsequent sections alternate: logo strip full-bleed, then 2-column text-left / 3D-render-right, then full-bleed testimonial/case-study grid. The case study section uses a CSS grid with mixed-size tiles: 2 text cells left paired with 1 large photo tile right. Feature sections use a single centered column with large left-aligned headlines. Navigation is a sticky top bar 60px tall with backdrop blur, full-width. Footer is full-bleed #151515 with a multi-column link grid. Section vertical rhythm uses 80-120px gaps between major content zones with no visible horizontal dividers — sections flow into each other separated only by background color shifts.

## Similar Brands

- **Vercel** — Same near-black (#111) canvas with off-white primary text and zero-shadow flat elevation system — depth through surface color only
- **Linear** — Dark obsidian background, tight negative-tracked display headlines in light weight, square-cornered UI components alongside pill CTAs
- **Raycast** — Dark warm-neutral surface (not cold blue-black), custom proprietary typeface with compressed tracking at large sizes, parchment-toned primary text
- **Planetscale** — Full-page dark mode with achromatic palette, muted brand accent restricted to background washes rather than UI chrome, announcement bar pattern at top
- **Resend** — Near-black canvas, ghost + filled pill button pairing in nav, typographic-first layout with minimal imagery, warm-neutral off-white text instead of pure white

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-obsidian-canvas: #151515;
  --color-void-black: #0e0e0e;
  --color-ember-surface: #242424;
  --color-charcoal-rim: #3f403d;
  --color-copper-wire: #8b867f;
  --color-ash-text: #94958e;
  --color-fog-text: #cbccc4;
  --color-limestone: #b6b8af;
  --color-parchment: #e9ebdf;
  --color-forest-deep: #185849;
  --color-midnight-moss: #0e352c;
  --color-spectrum-shimmer: #e87650;
  --font-saansfont: 'saansFont', Inter, DM Sans;
  --font-pxgroteskfont: 'pxGroteskFont', Space Grotesk, Geist;
  --font-ui-sans-serif: 'ui-sans-serif', System UI stack;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.18px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.24px;
  --text-heading: 36px;
  --leading-heading: 1.05;
  --tracking-heading: -0.36px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.48px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -1.58px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --radius-cards-large: 12px;
  --radius-pills-large: 36px;
  --radius-tags-badges: 4px;
  --radius-buttons-pill: 9999px;
  --radius-cards-default: 8px;
  --radius-buttons-square: 0px;
  --surface-void: #0e0e0;
  --surface-canvas: #151515;
  --surface-raised: #242424;
  --surface-teal-wash: #185849;
}
```

### Tailwind v4

```css
@theme {
  --color-obsidian-canvas: #151515;
  --color-void-black: #0e0e0e;
  --color-ember-surface: #242424;
  --color-charcoal-rim: #3f403d;
  --color-copper-wire: #8b867f;
  --color-ash-text: #94958e;
  --color-fog-text: #cbccc4;
  --color-limestone: #b6b8af;
  --color-parchment: #e9ebdf;
  --color-forest-deep: #185849;
  --color-midnight-moss: #0e352c;
  --color-spectrum-shimmer: #e87650;
  --font-saansfont: 'saansFont', Inter, DM Sans;
  --font-pxgroteskfont: 'pxGroteskFont', Space Grotesk, Geist;
  --font-ui-sans-serif: 'ui-sans-serif', System UI stack;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.18px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.24px;
  --text-heading: 36px;
  --leading-heading: 1.05;
  --tracking-heading: -0.36px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.48px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -1.58px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --radius-cards-large: 12px;
  --radius-pills-large: 36px;
  --radius-tags-badges: 4px;
  --radius-buttons-pill: 9999px;
  --radius-cards-default: 8px;
  --radius-buttons-square: 0px;
  --surface-void: #0e0e0;
  --surface-canvas: #151515;
  --surface-raised: #242424;
  --surface-teal-wash: #185849;
}
```
