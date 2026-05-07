---
version: alpha
name: "Videoconferencia"
description: "Microsoft Teams' page feels like a sunlit open-plan office — bright white expanses punctuated by the distinctive Teams violet-purple (#5d5bd4) and dense navy text (#17253d). The light is almost clinical, with near-zero ambient color tinting, pulling all chromatic attention to the vivid Teams purple accent and photography. Segoe UI Variable's tight negative tracking at display sizes (−0.025em at 48px) is the typographic signature — Microsoft's own variable font doing what no system font substitute can replicate, with headlines that compress horizontally as they scale up. Cards sit as floating white rectangles with a 24px corner radius and a paired micro-shadow system, never harsh — rgba(0,0,0,0.12) 0px 0px 2px plus rgba(0,0,0,0.14) 0px 2px 4px creates a faint lift without drama. The only pill-shaped element (200px radius) reserved for one secondary UI button variant signals interactivity hierarchy without color alone."
theme: "light"
industry: "productivity"
source_url: "https://microsoft.com/teams"
refero_style_id: "206c6c51-df38-425f-8d07-b0cc9dd065cf"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775935184521-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775935184521-thumb.jpg"
extracted_at: "2026-04-11T19:21:51.014Z"
---

# Videoconferencia — Style Reference

> Collaborative daylight workspace — every surface a white panel under fluorescent clarity, single violet pulse marking where to act.

**Theme:** light

**Industry:** productivity

Microsoft Teams' page feels like a sunlit open-plan office — bright white expanses punctuated by the distinctive Teams violet-purple (#5d5bd4) and dense navy text (#17253d). The light is almost clinical, with near-zero ambient color tinting, pulling all chromatic attention to the vivid Teams purple accent and photography. Segoe UI Variable's tight negative tracking at display sizes (−0.025em at 48px) is the typographic signature — Microsoft's own variable font doing what no system font substitute can replicate, with headlines that compress horizontally as they scale up. Cards sit as floating white rectangles with a 24px corner radius and a paired micro-shadow system, never harsh — rgba(0,0,0,0.12) 0px 0px 2px plus rgba(0,0,0,0.14) 0px 2px 4px creates a faint lift without drama. The only pill-shaped element (200px radius) reserved for one secondary UI button variant signals interactivity hierarchy without color alone.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Teams Violet | #5d5bd4 | `--color-teams-violet` | Primary CTA buttons, active nav underlines, badge backgrounds — the single saturated signal on an otherwise achromatic page. Vivid violet-purple stands apart from Microsoft blue (#0067b8) to brand Teams distinctly within the Microsoft ecosystem. |
| Teams Midnight | #333275 | `--color-teams-midnight` | Hover and pressed states for Teams Violet buttons, nav link active text — darker violet that deepens without shifting hue. |
| Teams Deep | #424197 | `--color-teams-deep` | Button pressed/focus states — intermediate violet between Teams Violet and Teams Midnight. |
| Microsoft Blue | #0067b8 | `--color-microsoft-blue` | Link text, icon fills, navigation affordances — the legacy Microsoft hyperlink blue used on informational elements, never on CTA buttons. |
| Ink Navy | #17253d | `--color-ink-navy` | Primary text, headings, body copy, icons — near-black with a distinct blue cast that avoids pure black harshness. |
| Abyss Navy | #0e1726 | `--color-abyss-navy` | Darkest heading weight, button text on transparent dark-background variants. |
| Steel | #616161 | `--color-steel` | Secondary body text, captions, placeholder text, icon color for inactive states. |
| Graphite | #262626 | `--color-graphite` | Nav link text, body text at medium emphasis. |
| Cloud | #ffffff | `--color-cloud` | Page backgrounds, card surfaces, button text on dark. |
| Frost | #f2f2f2 | `--color-frost` | Footer background, alternate section background. |
| Lace | #fbf5fb | `--color-lace` | Subtle lilac-tinted surface for decorative hero background areas. |
| Ice Border | #e6f2fb | `--color-ice-border` | Badge borders, light blue-tinted separator lines. |
| Mist | #bdc5d2 | `--color-mist` | Subtle borders, dividers, input outlines in resting state. |
| Near White | #fefefe | `--color-near-white` | Card surface background — one step off pure white to reduce glare on elevated surfaces. |

## Tokens — Typography

### Segoe UI Variable Text

- **Token:** `--font-segoe-ui-variable-text`
- **Substitute:** Inter Variable
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 14px, 15px, 16px, 20px, 24px, 32px, 48px, 100px
- **Line heights:** 1.00–1.50 (1.43 at body sizes, 1.20–1.25 at subheading, 1.06–1.17 at large display)
- **Letter spacing:** -0.03em at 12-14px, -0.025em at 16-20px, -0.02em at 24px, -0.015em at 32px, -0.01em at 48px; +0.08em for all-caps labels
- **OpenType features:** normal (variable axes active)
- **Role:** The primary workhorse: all headings, body text, nav labels, buttons, badges. Microsoft's own variable font whose optical sizing axis auto-adjusts letterform construction at different sizes — tighter tracking at display scale (48px at −0.01em to −0.025em) is baked into the font's design intent, not added post hoc.

### Segoe UI Variable Display

- **Token:** `--font-segoe-ui-variable-display`
- **Substitute:** Inter Variable (display instance)
- **Weights:** 500, 600
- **Sizes:** 20px, 24px, 32px, 48px, 62px
- **Line heights:** 1.16–1.40
- **Letter spacing:** -0.025em at 20-24px, -0.015em at 32px, -0.01em at 48-62px
- **Role:** Hero and section headings at large scale — the Display optical axis activates wider, more open letterforms than the Text axis at the same point size, making headlines feel more authoritative at 48px and above.

### Segoe UI Variable Small

- **Token:** `--font-segoe-ui-variable-small`
- **Substitute:** Inter Variable (caption instance)
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.43
- **Letter spacing:** -0.03em
- **Role:** Tight-tracked small labels and fine-print contexts.

### Segoe UI

- **Token:** `--font-segoe-ui`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 600
- **Sizes:** 11px, 13px, 15px
- **Line heights:** 1.20–2.27
- **Letter spacing:** normal
- **Role:** System fallback used in footer, some nav utility links, and browser-rendered UI chrome. No tracking adjustments — falls back to OS default rendering.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.43 | -0.36px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.42px | `--text-body-sm` |
| body | 16px | 1.5 | -0.4px | `--text-body` |
| subheading | 20px | 1.4 | -0.5px | `--text-subheading` |
| heading-sm | 24px | 1.33 | -0.48px | `--text-heading-sm` |
| heading | 32px | 1.25 | -0.48px | `--text-heading` |
| heading-lg | 48px | 1.17 | -0.48px | `--text-heading-lg` |
| display | 62px | 1.16 | -0.62px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-71 | 71px | `--spacing-71` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| chips | 3px |
| badges | 8px |
| inputs | 8px |
| buttons | 8px |
| buttonsPill | 200px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.14) 0px 2px 4px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1600px |
| sectionGap | 64-96px |
| cardPadding | 24px |
| elementGap | 8-16px |

## Components

### Primary CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Article Preview Card Pair

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Horizontal Section Tab Nav

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Main conversion action (Download, View Plans)

backgroundColor=#5d5bd4, color=#ffffff, borderRadius=8px, padding=8px 16px, font: Segoe UI Variable Text 500 15px. Hover darkens to #424197. The 8px radius is a hard corner relative to the 24px card radius — buttons feel precise, not soft.

### Ghost Navigation Button

**Role:** Outline-style secondary actions in the top nav (Descargar Teams, Iniciar sesión)

backgroundColor=transparent, color=#262626, border=1px solid transparent (visual separation via spacing only), borderRadius=0px, padding=16px 30px 16px 12px. Zero border radius — purely typographic with no frame.

### Underline Navigation Button

**Role:** Active tab/section indicator in horizontal content nav

backgroundColor=transparent, color=#0e1726, borderBottom=2px solid #0e1726, borderRadius=0px, padding=0 0 32px 0. Bottom border only — tab indicator with generous 32px bottom padding to position the underline at baseline distance.

### Pill Secondary Button

**Role:** Decorative or secondary CTA overlaid on hero visual areas

backgroundColor=transparent, color=#ffffff, borderRadius=200px, padding=16px. Full pill shape reserved for white-text variants appearing over imagery — the only element with >24px radius, creating maximum contrast with sharp-cornered primary buttons.

### Transparent Content Card

**Role:** Layout grouping without visual separation

backgroundColor=transparent, borderRadius=0px, boxShadow=none, padding=0. Used for grid cells that rely on surrounding whitespace rather than a surface for grouping.

### Labeled Badge

**Role:** Section category labels (NOTICIAS DESTACADAS, SOLUCIONES)

backgroundColor=transparent, color=#17253d, borderRadius=0px, padding=0. Uppercase tracking at +0.08em (letterSpacing=0.08em via Segoe UI Variable Text), weight 600, 12px. Zero-padding text label — no visual container, relying on tracking and weight for distinction.

### Surface Badge

**Role:** Tag chips on cards and content metadata

backgroundColor=#fefefe, color=#17253d, borderRadius=8px, padding=4px 8px. White card-colored surface with same 8px radius as buttons — system-consistent without hierarchical confusion.

### Top Navigation Bar

**Role:** Global site header with Microsoft logo, product name, and nav links

backgroundColor=#ffffff, height=54px, borderBottom=1px solid #bdc5d2. Product name 'Teams' in Segoe UI Variable Text 600 at 15px. Nav items at 14px weight 400 #262626 with dropdown chevrons. Right-side CTAs use Ghost and Primary Button styles.

### Horizontal Section Tab Nav

**Role:** In-page content navigation (Noticias destacadas, Soluciones, Productos y servicios)

backgroundColor=#ffffff, borderBottom=1px solid #bdc5d2, height=56px. Active item uses Underline Navigation Button style. Right-aligned CTA button uses Primary CTA Button style at #5d5bd4.

### Hero Section

**Role:** Full-width page opener with headline, body, CTA, and product visual

backgroundColor=#ffffff (with #fbf5fb lilac tint at far right). Headline: Segoe UI Variable Display 600 48px tracking −0.01em, color=#0e1726. Body: 16px 400 #616161. CTA: Primary CTA Button. Right half: 3D product screenshot floating on illustrated background — image is contained, not full-bleed.

### Article Preview Card

**Role:** News and blog post previews in card grid

Uses Elevated Content Card as container. Image fills top of card with no padding, borderRadius=24px 24px 0 0 clipping. Title: Segoe UI Variable Text 600 20px #17253d. Body: 14px 400 #616161. Footer: 'Más información' link in Microsoft Blue (#0067b8) with right-arrow icon, 16px padding all sides.

### Floating Icon Bar

**Role:** Fixed right-side quick-action icons (contact, mail, phone)

backgroundColor=#ffffff, borderRadius=24px 0 0 24px (left-side pill), boxShadow=rgba(0,0,0,0.12) 0px 0px 2px 0px, rgba(0,0,0,0.14) 0px 2px 4px 0px. Icon color #17253d. Positioned fixed right:0, vertically centered.

## Do's and Don'ts

### Do

- Use #5d5bd4 exclusively for primary CTA buttons and active navigation indicators — never for decorative color fills or backgrounds.
- Apply 24px border-radius to all card containers; apply 8px border-radius to all buttons, badges, and inputs. Never mix these two radii between container and control.
- Use Segoe UI Variable Display at weight 600 for headings above 32px; always pair with negative letter-spacing: −0.025em at 20-24px, −0.015em at 32px, −0.01em at 48px+.
- Set all section category labels (e.g. NOTICIAS DESTACADAS) in Segoe UI Variable Text 600 12px with letterSpacing=+0.08em and color=#17253d — uppercase tracking only at caption scale, never on headings.
- Elevate white cards off the white page using the two-layer shadow: rgba(0,0,0,0.12) 0px 0px 2px 0px, rgba(0,0,0,0.14) 0px 2px 4px 0px — no other shadow values.
- Reserve Microsoft Blue (#0067b8) for hyperlinks and informational icon fills only — it must never appear on CTA buttons, which belong exclusively to Teams Violet (#5d5bd4).
- Maintain the near-white card surface (#fefefe) distinct from the pure white page (#ffffff) to ensure shadow-based elevation reads correctly.

### Don't

- Do not use border-radius values between 8px and 24px on any element — the design system jumps directly from control-scale (8px) to container-scale (24px) with nothing in between except the 200px pill.
- Do not apply the Teams Violet (#5d5bd4) to text, borders, or decorative elements — it appears only as button backgroundColor and active state indicator.
- Do not use pure black (#000000) for body or heading text — all text uses #17253d (Ink Navy) or #0e1726 (Abyss Navy), preserving the blue-cast warmth of the palette.
- Do not stack more than two colors from the violet family (e.g. #5d5bd4 + #333275 + #424197) in a single component — only the primary fill and one hover/focus state.
- Do not use shadows with vertical offset above 4px or opacity above 0.15 — the elevation system is intentionally near-invisible.
- Do not set headline letterSpacing to 0 or positive values at any display size — negative tracking is mandatory at all sizes above 14px.
- Do not use Segoe UI (system fallback) for any designed UI element — it is reserved for browser-native and OS-rendered contexts only; all explicit text must use Segoe UI Variable Text or Display.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Background | #ffffff | Default page canvas |
| 1 | Alt Background | #f2f2f2 | Footer and alternate section bands |
| 2 | Card Surface | #fefefe | Elevated content cards floating above page background |
| 3 | Lilac Tint | #fbf5fb | Hero decorative background wash behind product imagery |

## Elevation

- **Elevated Content Card:** `rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.14) 0px 2px 4px 0px`
- **Floating Icon Bar:** `rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.14) 0px 2px 4px 0px`

## Imagery

The hero features a 3D-rendered product screenshot composite — the Teams app UI rendered as a floating tablet/screen with illustrated lavender and teal decorative elements beneath it, plus emoji reaction graphics floating around it. The treatment is product-showcase-first: the interface itself is the hero visual, not people or lifestyle. Below the fold, editorial photography takes over: tightly cropped portraits and workspace candids at 16:9 ratio filling the top half of article cards — warm ambient light, realistic color grading, no duotone or filters. Photography is lifestyle-adjacent but workspace-focused (people at desks, on video calls) rather than abstract or staged against solid colors. Icon style throughout is Microsoft Fluent: filled with rounded corners, monochromatic #17253d at nav size, multicolor Microsoft flag logo as the single exception. Image density is moderate — alternating text-dominant and image-plus-text sections, cards always lead with the image.

## Layout

Max-width content is approximately 1600px centered, but hero and nav bands run visually full-bleed. The hero is a 2-column split: left third for headline + CTA text, right two-thirds for the floating product visual — asymmetric, image-heavy. Below the hero a sticky horizontal tab navigation bar with CTA button spans full width. Section rhythm alternates #ffffff bands: featured news in 2-column card grid, then a full-width text section for solutions, continuing downward. Cards in the news grid are equal-height 2-up at the viewport shown. Navigation is a fixed top bar (54px) with logo left, nav center, actions right — mega-menu dropdowns on hover. A fixed right-edge floating icon bar for contact actions provides persistent access without breaking the main layout. Vertical section gaps are 64-96px, giving the page a spacious corporate breathing room between each content band.

## Similar Brands

- **Slack** — Horizontal tab navigation bar with active-underline indicator, card-grid news section, and a single brand-accent color on all primary CTAs with white/light page.
- **Google Workspace** — Product-screenshot-as-hero-visual on white background, editorial photography in 2-column card grid, corporate-light palette with single vivid accent.
- **Zoom** — Light enterprise SaaS page with sticky secondary nav, floating 3D product visual in hero, and photography cards below fold.
- **Atlassian Confluence** — Deep navy text on white with a vivid single-hue accent, 24px rounded cards, and mixed photography/illustration visual language.
- **Cisco Webex** — Enterprise collaboration product with near-identical hero pattern: product UI screenshot composite right-aligned against white left-side headline.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-teams-violet: #5d5bd4;
  --color-teams-midnight: #333275;
  --color-teams-deep: #424197;
  --color-microsoft-blue: #0067b8;
  --color-ink-navy: #17253d;
  --color-abyss-navy: #0e1726;
  --color-steel: #616161;
  --color-graphite: #262626;
  --color-cloud: #ffffff;
  --color-frost: #f2f2f2;
  --color-lace: #fbf5fb;
  --color-ice-border: #e6f2fb;
  --color-mist: #bdc5d2;
  --color-near-white: #fefefe;
  --font-segoe-ui-variable-text: 'Segoe UI Variable Text', Inter Variable;
  --font-segoe-ui-variable-display: 'Segoe UI Variable Display', Inter Variable (display instance);
  --font-segoe-ui-variable-small: 'Segoe UI Variable Small', Inter Variable (caption instance);
  --font-segoe-ui: 'Segoe UI', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.43;
  --tracking-caption: -0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.42px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.4px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.5px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.48px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -0.48px;
  --text-display: 62px;
  --leading-display: 1.16;
  --tracking-display: -0.62px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-71: 71px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --radius-cards: 24px;
  --radius-chips: 3px;
  --radius-badges: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-buttonspill: 200px;
  --shadow-xl: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.14) 0px 2px 4px 0px;
  --surface-page-background: #ffffff;
  --surface-alt-background: #f2f2f2;
  --surface-card-surface: #fefefe;
  --surface-lilac-tint: #fbf5fb;
}
```

### Tailwind v4

```css
@theme {
  --color-teams-violet: #5d5bd4;
  --color-teams-midnight: #333275;
  --color-teams-deep: #424197;
  --color-microsoft-blue: #0067b8;
  --color-ink-navy: #17253d;
  --color-abyss-navy: #0e1726;
  --color-steel: #616161;
  --color-graphite: #262626;
  --color-cloud: #ffffff;
  --color-frost: #f2f2f2;
  --color-lace: #fbf5fb;
  --color-ice-border: #e6f2fb;
  --color-mist: #bdc5d2;
  --color-near-white: #fefefe;
  --font-segoe-ui-variable-text: 'Segoe UI Variable Text', Inter Variable;
  --font-segoe-ui-variable-display: 'Segoe UI Variable Display', Inter Variable (display instance);
  --font-segoe-ui-variable-small: 'Segoe UI Variable Small', Inter Variable (caption instance);
  --font-segoe-ui: 'Segoe UI', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.43;
  --tracking-caption: -0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.42px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.4px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.5px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.48px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -0.48px;
  --text-display: 62px;
  --leading-display: 1.16;
  --tracking-display: -0.62px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-71: 71px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --radius-cards: 24px;
  --radius-chips: 3px;
  --radius-badges: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-buttonspill: 200px;
  --shadow-xl: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.14) 0px 2px 4px 0px;
  --surface-page-background: #ffffff;
  --surface-alt-background: #f2f2f2;
  --surface-card-surface: #fefefe;
  --surface-lilac-tint: #fbf5fb;
}
```
