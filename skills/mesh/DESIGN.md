---
version: alpha
name: "Mesh"
description: "Mesh invokes a dark, intimate digital rolodex feel, where muted neutrals create a command center for relationships. The visual system combines compact, precise typography with subtle background textures and a warm, low-saturation amber accent. Components recede into the dark canvas, using fine borders and soft internal glows rather than heavy shadows or distinct background fills. The overall impression is one of restrained sophistication and digital calm."
theme: "dark"
industry: "productivity"
source_url: "https://clay.earth"
refero_style_id: "1a03b8d7-9204-4c16-ad3c-16306f99fba9"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509968405-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509968405-thumb.jpg"
extracted_at: "2026-04-30T00:46:38.295Z"
---

# Mesh — Style Reference

> Midnight archive behind frosted glass

**Theme:** dark

**Industry:** productivity

Mesh invokes a dark, intimate digital rolodex feel, where muted neutrals create a command center for relationships. The visual system combines compact, precise typography with subtle background textures and a warm, low-saturation amber accent. Components recede into the dark canvas, using fine borders and soft internal glows rather than heavy shadows or distinct background fills. The overall impression is one of restrained sophistication and digital calm.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Night | #0f0f10 | `--color-deep-night` | Page background, primary surface, and deeply recessed elements |
| Graphite | #1d1d1f | `--color-graphite` | Content container backgrounds, subtle elevated surfaces, text that implies depth or inactivity |
| Moonless Ink | #000000 | `--color-moonless-ink` | Deepest text contrast, icon fills for emphasis |
| Silver Whisper | #b3b3b3 | `--color-silver-whisper` | Primary body text, neutral icons, subtle borders, and placeholder states |
| Ash Gray | #666666 | `--color-ash-gray` | Secondary text, muted links, fine dividers |
| Cloud White | #fefef7 | `--color-cloud-white` | High-contrast headings, active text, button text on dark backgrounds, selected states |
| Warm Mist | #868f97 | `--color-warm-mist` | Tertiary text, descriptive labels, very subtle borders |
| Pale Stone | #86868b | `--color-pale-stone` | Helper text, subtle content details that need to recede slightly |
| Amber Glow | #f2b98b | `--color-amber-glow` | Interactive elements, outlined actions, functional highlights, decorative icon accents. This color signals interactivity and focus |
| Sunset Blush | #ffaf7c | `--color-sunset-blush` | Orange outline accent for tags, dividers, and focused UI edges |
| Golden Horizon | #d49065 | `--color-golden-horizon` | Background gradient for hero sections and evocative visual dividers |

## Tokens — Typography

### Verlag

- **Token:** `--font-verlag`
- **Substitute:** Inter
- **Weights:** 400, 600, 700
- **Sizes:** 9px, 10px, 12px, 14px, 16px, 18px, 20px
- **Line heights:** 1.00, 1.10, 1.33, 1.35, 1.38, 1.40, 1.50, 1.69, 2.25, 2.70, 3.00
- **Letter spacing:** 0.13px at 9px to 0.33px at 20px, with specific values like 0.0560em for some contexts
- **Role:** Primary text and UI elements. The narrow letter spacing ensures high information density even at smaller sizes in the dark UI. This font is custom, providing a unique, compact 'typewriter' feel.

### VerlagCondensed

- **Token:** `--font-verlagcondensed`
- **Substitute:** Oswald
- **Weights:** 700, 900
- **Sizes:** 48px, 64px
- **Line heights:** 1.00
- **Letter spacing:** 0.67px at 48px, 0.89px at 64px
- **Role:** Display headlines. The condensed nature and heavy weights provide strong impact and directness, contrasting with the more restrained body text. The tight line height emphasizes the single phrase.

### ChronicleTextG1Roman

- **Token:** `--font-chronicletextg1roman`
- **Substitute:** Lora
- **Weights:** 400
- **Sizes:** 22px
- **Line heights:** 1.55
- **Letter spacing:** normal
- **Role:** Specialized editorial headings or pull quotes. This serif font adds a touch of classic sophistication, providing a visual break from the sans-serif system to highlight key content with a more traditional voice.

### system-ui

- **Token:** `--font-system-ui`
- **Substitute:** sans-serif
- **Weights:** 500, 600
- **Sizes:** 10px, 14px, 15px
- **Line heights:** 1.14, 1.33, 2.00
- **Letter spacing:** 1px at 10px, 1.4px at 14px, 1.5px at 15px
- **Role:** Fallback and utilitarian text where system rendering is prioritized for small labels and tooltips. The wider letter-spacing at smaller sizes improves legibility.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| heading | 18px | 1.33 | 0.14px | `--text-heading` |
| heading-lg | 20px | 1.1 | 0.14px | `--text-heading-lg` |
| display-sm | 22px | 1.55 | 0px | `--text-display-sm` |
| display | 48px | 1 | 0.67px | `--text-display` |
| display-lg | 64px | 1 | 0.89px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-66 | 66px | `--spacing-66` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-104 | 104px | `--spacing-104` |
| spacing-133 | 133px | `--spacing-133` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-154 | 154px | `--spacing-154` |
| spacing-181 | 181px | `--spacing-181` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-239 | 239px | `--spacing-239` |
| spacing-264 | 264px | `--spacing-264` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| badges | 12px |
| images | 36px |
| buttons | 6px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) -8px 12px 22px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 24px |
| elementGap | 10px |

## Components

### Ghost Navigation Button

**Role:** Header navigation and secondary actions

Transparent background, 'Cloud White' text, no border, with a 6px radius. Text appears only as a label without a visible container, reducing visual clutter in the dark theme.

### Outline Action Button

**Role:** Primary calls to action with an understated, interactive glow.

Background is 'Deep Night' or transparent, text is 'Cloud White', with a 'Amber Glow' border of 1px. The corners are rounded with 6px radius. This outline provides a strong interactive cue without being a solid fill, maintaining the system's lightweight feel.

### Floating Card

**Role:** Content groupings that gently rise above the dark background.

Background is partially transparent (#ffffff with 70% opacity), 'Cloud White' text, with a 16px border-radius. A subtle shadow of rgba(0, 0, 0, 0.06) 0px 0px 0px 1px and rgba(0, 0, 0, 0.08) -8px 12px 22px 0px gives it a floating effect.

### Subtle Badge

**Role:** Informational tags or status indicators within content.

Transparent background, 'Silver Whisper' text, 0px border-radius. Minimal visibility, fading into the background.

### Elevated Badge

**Role:** Highlighted tags or active filters

Background is rgba(255, 255, 255, 0.06), 'Cloud White' text, with a 12px border-radius and 10px right padding. This badge provides a slightly more prominent visual signal than the subtle badge.

## Do's and Don'ts

### Do

- Prioritize 'Deep Night' (#0f0f10) as the base background for most sections to maintain a consistent dark atmosphere.
- Use 'Silver Whisper' (#b3b3b3) for general body text and 'Cloud White' (#fefef7) for high-impact headings and active states, ensuring clear hierarchy in dark UI.
- Employ the Verlag font family for all primary text content to leverage its compact character and precise spacing.
- When an action requires emphasis, use an outlined button with 'Amber Glow' (#f2b98b) as the border color, ensuring interactive elements have a distinct, warm highlight.
- Maintain a compact information density using `elementGap` of '10px' and `cardPadding` of '24px' to organize content tightly but legibly.
- Apply `border-radius` values from the system: '16px' for cards and '6px' for buttons, to ensure consistent surface treatment.
- Utilize `Ghost Navigation Button` for all header navigation items to minimize visual distraction and keep the focus on content.

### Don't

- Avoid using bright, saturated colors for large UI areas; color should primarily act as functional highlights or subtle accents, not dominant backgrounds.
- Do not introduce strong, heavy shadows or distinct background fills beyond those specified for Floating Cards; maintain a lightweight, ethereal surface treatment.
- Do not deviate from the specified Verlag and VerlagCondensed font families for headings and body text; system fonts should be reserved for specific utilitarian contexts.
- Do not use generic circular or square radii; adhere to the system's `border-radius` values of '16px' for cards, '6px' for buttons, and '12px' for badges.
- Do not use opaque white as a primary background; the system relies on deep neutrals and subtle transparencies for its dark theme.
- Avoid excessive use of 'Moonless Ink' (#000000) for body text; reserve it for high-contrast elements or specific icon fills.
- Do not introduce new type scales or line-heights; adhere to the discrete values provided to maintain typographic rhythm and density.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Deep Night | #0f0f10 | Base page background, deepest layer. |
| 1 | Graphite | #1d1d1f | Primary interactive surfaces, content containers within the page, eg. sidebars, lists not in cards. |
| 2 | Floating Card Surface | #ffffff | Elevated cards or modals, with 70% opacity and a distinct shadow for depth. |

## Elevation

- **Floating Card:** `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) -8px 12px 22px 0px`

## Imagery

This system primarily uses abstract, atmospheric visuals with sparkling light effects and subtle linear patterns that evoke digital networks or constellations. Photography or detailed illustrations are absent. Icons are minimal, outlined, or filled in a mono-color style, often using 'Amber Glow' for emphasis. The imagery serves a decorative, mood-setting role rather than explanatory content, creating a sense of digital mystique and depth. Density is text-dominant, with imagery relegated to background elements.

## Layout

The page layout is primarily full-bleed, extending content and atmospheric backgrounds across the viewport. The hero section is characterized by a centered headline on a deep, dark background, often subtly animated with abstract light. Content sections then shift to a mixed model: central content is constrained within a maximum width, while background elements may remain full-bleed. Vertical rhythm is established through consistent section gaps, creating distinct content blocks. Navigation is a minimalist top bar, with ghost links or an outlined button for primary actions against the dark canvas.

## Similar Brands

- **Linear** — Dark-mode interface with a focus on functional, minimalist UI and subtle accents.
- **Superhuman** — Productivity tool aesthetics with a compact, information-dense dark theme and precise typography.
- **Amie** — Emphasis on sleek, professional dark UI with clear information hierarchy and restrained use of accent colors.
- **Arc Browser** — An immersive digital environment and interface that prioritizes functionality in a deeply personalized dark mode with subtle glows.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-night: #0f0f10;
  --color-graphite: #1d1d1f;
  --color-moonless-ink: #000000;
  --color-silver-whisper: #b3b3b3;
  --color-ash-gray: #666666;
  --color-cloud-white: #fefef7;
  --color-warm-mist: #868f97;
  --color-pale-stone: #86868b;
  --color-amber-glow: #f2b98b;
  --color-sunset-blush: #ffaf7c;
  --color-golden-horizon: #d49065;
  --font-verlag: 'Verlag', Inter;
  --font-verlagcondensed: 'VerlagCondensed', Oswald;
  --font-chronicletextg1roman: 'ChronicleTextG1Roman', Lora;
  --font-system-ui: 'system-ui', sans-serif;
  --text-heading: 18px;
  --leading-heading: 1.33;
  --tracking-heading: 0.14px;
  --text-heading-lg: 20px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: 0.14px;
  --text-display-sm: 22px;
  --leading-display-sm: 1.55;
  --tracking-display-sm: 0px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: 0.67px;
  --text-display-lg: 64px;
  --leading-display-lg: 1;
  --tracking-display-lg: 0.89px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-36: 36px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-66: 66px;
  --spacing-100: 100px;
  --spacing-104: 104px;
  --spacing-133: 133px;
  --spacing-140: 140px;
  --spacing-150: 150px;
  --spacing-154: 154px;
  --spacing-181: 181px;
  --spacing-200: 200px;
  --spacing-239: 239px;
  --spacing-264: 264px;
  --radius-cards: 16px;
  --radius-badges: 12px;
  --radius-images: 36px;
  --radius-buttons: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) -8px 12px 22px 0px;
  --surface-deep-night: #0f0f10;
  --surface-graphite: #1d1d1f;
  --surface-floating-card-surface: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-night: #0f0f10;
  --color-graphite: #1d1d1f;
  --color-moonless-ink: #000000;
  --color-silver-whisper: #b3b3b3;
  --color-ash-gray: #666666;
  --color-cloud-white: #fefef7;
  --color-warm-mist: #868f97;
  --color-pale-stone: #86868b;
  --color-amber-glow: #f2b98b;
  --color-sunset-blush: #ffaf7c;
  --color-golden-horizon: #d49065;
  --font-verlag: 'Verlag', Inter;
  --font-verlagcondensed: 'VerlagCondensed', Oswald;
  --font-chronicletextg1roman: 'ChronicleTextG1Roman', Lora;
  --font-system-ui: 'system-ui', sans-serif;
  --text-heading: 18px;
  --leading-heading: 1.33;
  --tracking-heading: 0.14px;
  --text-heading-lg: 20px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: 0.14px;
  --text-display-sm: 22px;
  --leading-display-sm: 1.55;
  --tracking-display-sm: 0px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: 0.67px;
  --text-display-lg: 64px;
  --leading-display-lg: 1;
  --tracking-display-lg: 0.89px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-36: 36px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-66: 66px;
  --spacing-100: 100px;
  --spacing-104: 104px;
  --spacing-133: 133px;
  --spacing-140: 140px;
  --spacing-150: 150px;
  --spacing-154: 154px;
  --spacing-181: 181px;
  --spacing-200: 200px;
  --spacing-239: 239px;
  --spacing-264: 264px;
  --radius-cards: 16px;
  --radius-badges: 12px;
  --radius-images: 36px;
  --radius-buttons: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) -8px 12px 22px 0px;
  --surface-deep-night: #0f0f10;
  --surface-graphite: #1d1d1f;
  --surface-floating-card-surface: #ffffff;
}
```
