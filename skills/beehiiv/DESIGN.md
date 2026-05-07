---
version: alpha
name: "beehiiv"
description: "This design system presents a digital command center aesthetic, utilizing a deep navy background contrasted with vibrant magenta and electric blue accents. The visual tension comes from the interplay of sharp 6px radii for general elements and soft 9999px pill shapes for interactive components. Subtle gradients are layered on dark surfaces, creating depth and a sophisticated, tech-forward atmosphere, ensuring the platform feels powerful yet accessible for creators."
theme: "dark"
industry: "saas"
source_url: "https://beehiiv.com"
refero_style_id: "350b1557-56f0-4361-8c8b-b7a88081982b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924730522-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924730522-thumb.jpg"
extracted_at: "2026-04-11T16:25:52.239Z"
---

# beehiiv — Style Reference

> Galactic Command Center. Deep space blues and purples punctuated by bright digital flares against a crisp, dark UI.

**Theme:** dark

**Industry:** saas

This design system presents a digital command center aesthetic, utilizing a deep navy background contrasted with vibrant magenta and electric blue accents. The visual tension comes from the interplay of sharp 6px radii for general elements and soft 9999px pill shapes for interactive components. Subtle gradients are layered on dark surfaces, creating depth and a sophisticated, tech-forward atmosphere, ensuring the platform feels powerful yet accessible for creators.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #060419 | `--color-midnight-ink` | Page background, primary dark surface. |
| Shadow Violet | #0d0b28 | `--color-shadow-violet` | Card backgrounds, secondary dark surface for contained content, subtle borders. |
| Storm Gray | #4e4e6c | `--color-storm-gray` | Disabled states, subtle text, and secondary icon fills. |
| Cloud Whisper | #c4c2d6 | `--color-cloud-whisper` | Tertiary body text, inactive links, and subtle icon details. |
| Ghost White | #f7f5ff | `--color-ghost-white` | Secondary body text, content in specific UI elements. |
| Starfield White | #ffffff | `--color-starfield-white` | Primary text on dark backgrounds, icon fills, button text. |
| Electric Blue | #2f39ba | `--color-electric-blue` | Primary brand accent, main call-to-action buttons, active states, and interactive elements. |
| Cosmic Magenta | #ff5ec4 | `--color-cosmic-magenta` | Secondary brand accent, highlights within specific sections, and subtle decorative elements. |
| Indigo Fusion | #2f39ba | `--color-indigo-fusion` | Prominent display gradients, hero sections, and important visually dynamic elements. |

## Tokens — Typography

### Satoshi

- **Token:** `--font-satoshi`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 24px, 48px
- **Line heights:** 1.20, 1.25, 1.33, 1.40, 1.43, 1.50, 1.56
- **Letter spacing:** 0.045em
- **Role:** Body copy, links, navigation, buttons, and most informational text. The consistent positive letter-spacing adds a subtle, open feel contrasting with the UI's precision.

### Clash Grotesk

- **Token:** `--font-clash-grotesk`
- **Substitute:** Archivo
- **Weights:** 400, 700
- **Sizes:** 16px, 20px, 48px, 60px, 72px
- **Line heights:** 1.00, 1.20, 1.40, 1.50
- **Role:** Headlines and display text. Its geometric structure provides a strong, modern presence at larger sizes, reinforcing the tech-oriented brand.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.56 | 0.54px | `--text-caption` |
| body | 16px | 1.5 | 0.72px | `--text-body` |
| subheading | 20px | 1.4 | 0.9px | `--text-subheading` |
| heading | 24px | 1.33 | 1.08px | `--text-heading` |
| heading-lg | 48px | 1.2 | 2.16px | `--text-heading-lg` |
| display | 72px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 9999px |
| inputs | 6px |
| buttons | 9999px |
| default | 6px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 24px |
| elementGap | 16px |

## Components

### Sign-Up Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Call-to-action button for critical user flows

Background: transparent with a subtle border from #ffffff0f. Text: Starfield White (#ffffff). Radius: 9999px (pill shape). Padding: 12px vertical, 24px horizontal. This button style is primary despite being 'ghost' due to its light text on dark background and prominent position.

### Secondary CTA Button (Solid)

**Role:** Solid background button for secondary actions or filled states

Background: Shadow Violet (#141230). Text: Ghost White (#edeff2). Radius: 9999px (pill shape). Padding: 12px vertical, 24px horizontal. Used for actions like 'Sign up with email'.

### Accent Gradient Button

**Role:** High-impact button for key conversions or emphasized actions

Background: linear-gradient(90deg, #2f39ba 0%, #ff5ec4 100%). Text: Starfield White (#ffffff). Radius: 7px. Padding: 24px all sides. This button style is visually dense and signals high importance, as seen with the 'Get a demo' button.

### Nav Item

**Role:** Standard top navigation link

Text: Starfield White (#ffffff) for active, Cloud Whisper (#c4c2d6) for inactive. Font: Satoshi, 16px, weight 500. No background or border. Interactivity often involves dropdowns.

### Feature Card

**Role:** Card for showcasing various product features

Background: Shadow Violet (#0d0b28). Radius: 6px. No visible box shadow. Padding: 24px. Features a 6px radius for general container elements.

### Testimonial Card

**Role:** Container for partner logos and customer quotes

Background: Shadow Violet (#0d0b28). Radius: 6px. Box shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px. Padding: 24px. Specifically used for testimonials, utilizing the default box shadow detected for enhanced visual separation.

## Do's and Don'ts

### Do

- Use Midnight Ink (#060419) as the primary page background to establish the dark theme.
- Apply Electric Blue (#2f39ba) for all primary interactive elements and crucial call-to-actions, ensuring high contrast.
- Employ the 9999px radius (pill shape) for all buttons and tags to maintain a consistent interactive element style.
- Reserve Clash Grotesk for headings (sizes 48px, 60px, 72px) and Satoshi for all body text, links, and navigation items.
- Group related content within cards using Shadow Violet (#0d0b28) as the background with a 6px border-radius.
- Utilize the Indigo Fusion gradient (linear-gradient(90deg, rgb(47, 57, 186) 0%, rgb(255, 94, 196) 100%)) as a prominent eye-catcher for hero elements or major announcements.

### Don't

- Do not use white backgrounds directly on dark content sections; instead, use Shadow Violet (#0d0b28) or similar dark neutral tones for surface differentiation.
- Avoid using radii other than 6px for non-interactive containers and 9999px for buttons/tags to maintain shape consistency.
- Do not introduce strong drop shadows on internal components unless it's a specific testimonial card, to maintain a largely flat aesthetic.
- Refrain from mixing non-Clash Grotesk fonts for headlines or non-Satoshi fonts for body text.
- Do not use highly saturated colors for large text blocks; primarily use Starfield White (#ffffff) or Ghost White (#f7f5ff) for readability on dark backgrounds.
- Avoid excessive use of the Cosmic Magenta (#ff5ec4) accent; reserve it for specific highlights to maintain its impact.

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`

## Imagery

The site uses a combination of realistic 3D product mockups and stylized abstract graphics. Product screenshots are typically dark-themed UI elements (cards, dashboards) artfully composed to float in space, often with subtle glow effects or abstract background shapes in brand colors like Electric Blue and Cosmic Magenta. These visuals serve an explanatory role, showcasing product features within a highly polished, aspirational digital environment. Icons are minimal, either Starfield White or Cloud Whisper, often in outlined style, used for feature illustration rather than purely decorative purposes. There's no photography or realistic illustration, maintaining a focus on the digital product itself.

## Layout

The layout is primarily full-bleed with content centered within an implied maximum width. The hero section is a full-viewport dark background with a large, left-aligned headline and subtext, complemented by floating 3D product mockups on the right. Subsequent sections often feature a 3-column grid for key features or testimonials, maintaining consistent vertical spacing. There's an alternating rhythm of hero-like wide sections and more structured content blocks. Navigation is a sticky top bar, fully contained within the dark theme. The overall density is comfortable, with generous breathing room between sections and content blocks, avoiding a cluttered feel.

## Similar Brands

- **Vercel** — Similar dark-mode UI with subtle gradients and a premium, developer-tool aesthetic.
- **Linear** — Shared focus on clean, precise typography and functional dark interface, using restrained color accents.
- **Supabase** — Employs a professional dark theme with vibrant, often purple or blue, accent colors for key interactive elements and data visualization.
- **Notion** — Though lighter-themed, shares the emphasis on clear information hierarchy, structured card layouts, and subtle borders to define content areas.
- **Framer** — Utilizes a dark, sleek design with focused interactive elements and a strong emphasis on modern typography, often incorporating custom fonts.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #060419;
  --color-shadow-violet: #0d0b28;
  --color-storm-gray: #4e4e6c;
  --color-cloud-whisper: #c4c2d6;
  --color-ghost-white: #f7f5ff;
  --color-starfield-white: #ffffff;
  --color-electric-blue: #2f39ba;
  --color-cosmic-magenta: #ff5ec4;
  --color-indigo-fusion: #2f39ba;
  --font-satoshi: 'Satoshi', Inter;
  --font-clash-grotesk: 'Clash Grotesk', Archivo;
  --text-caption: 12px;
  --leading-caption: 1.56;
  --tracking-caption: 0.54px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.72px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.9px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: 1.08px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: 2.16px;
  --text-display: 72px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --radius-tags: 9999px;
  --radius-inputs: 6px;
  --radius-buttons: 9999px;
  --radius-default: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #060419;
  --color-shadow-violet: #0d0b28;
  --color-storm-gray: #4e4e6c;
  --color-cloud-whisper: #c4c2d6;
  --color-ghost-white: #f7f5ff;
  --color-starfield-white: #ffffff;
  --color-electric-blue: #2f39ba;
  --color-cosmic-magenta: #ff5ec4;
  --color-indigo-fusion: #2f39ba;
  --font-satoshi: 'Satoshi', Inter;
  --font-clash-grotesk: 'Clash Grotesk', Archivo;
  --text-caption: 12px;
  --leading-caption: 1.56;
  --tracking-caption: 0.54px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.72px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.9px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: 1.08px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: 2.16px;
  --text-display: 72px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --radius-tags: 9999px;
  --radius-inputs: 6px;
  --radius-buttons: 9999px;
  --radius-default: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
}
```
