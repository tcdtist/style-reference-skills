---
version: alpha
name: "Rainbow"
description: "This design system is a high-energy, playful expression of crypto. The visual theme is a vibrant, dream-like landscape of soft gradients and stylized cartoon clouds, punctuated by bold, rounded typography. It leverages a maximalist approach to color, with a spectrum of vivid hues appearing dynamically across elements. Transparency and soft white-tinted shadows give components a floating, ethereal quality, contrasting with the solid, impactful call-to-action buttons."
theme: "light"
industry: "crypto"
source_url: "https://rainbow.me"
refero_style_id: "1680693c-aed8-47e8-917a-04eb89497b09"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924191327-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924191327-thumb.jpg"
extracted_at: "2026-04-11T16:16:57.071Z"
---

# Rainbow — Style Reference

> Vibrant dreamscape on cloudnine. The dominant palette of soft, often radial, gradients creates an otherworldly, playful backdrop for bold UI elements.

**Theme:** light

**Industry:** crypto

This design system is a high-energy, playful expression of crypto. The visual theme is a vibrant, dream-like landscape of soft gradients and stylized cartoon clouds, punctuated by bold, rounded typography. It leverages a maximalist approach to color, with a spectrum of vivid hues appearing dynamically across elements. Transparency and soft white-tinted shadows give components a floating, ethereal quality, contrasting with the solid, impactful call-to-action buttons.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #0f101a | `--color-ink` | Primary text, prominent headings, key UI components. This near-black provides strong contrast while avoiding harshness, anchoring the playful colors. |
| Cloudburst | #ffffff | `--color-cloudburst` | Page backgrounds, card surfaces, internal borders. It's not a stark white, but a soft, slightly luminous canvas for the colorful elements. |
| Whisper Gray | #777885 | `--color-whisper-gray` | Secondary text, subtle borders, inactive states. Provides a delicate contrast against Cloudburst, maintaining an airy feel. |
| Pale Mist | #f1f3f6 | `--color-pale-mist` | Subtle background sections, light fills. Acts as an optical white without the intensity, contributing to the overall softness. |
| Sunset Orange | #ff8a00 | `--color-sunset-orange` | Primary call-to-action buttons, key interactive elements — a warm, inviting color that stands out against lighter backgrounds. |
| Neon Pink | #ff54bb | `--color-neon-pink` | Secondary call-to-action buttons, accent states — pairs with Sunset Orange to offer alternative but equally energetic interaction points. |
| Sky Blue | #33aaff | `--color-sky-blue` | Decorative elements, occasional highlights, or interactive states where a cool tone is desired. Appears sparingly, but with high saturation. |
| Cyan Tint | #99eeff | `--color-cyan-tint` | Background gradients, subtle decorative areas. Provides a cool, ethereal visual layer. |
| Radiant Violet | #8c64ff | `--color-radiant-violet` | Decorative splashes or unique element backgrounds. Enhances the playful, gradient-heavy aesthetic. |
| Teal Glow | #00fff0 | `--color-teal-glow` | Rare, vibrant accent for impact. Found in gradients or small decorative elements to add a touch of electric energy. |
| Joyful Red | #ff0f0f | `--color-joyful-red` | Small, impactful accent that signals attention or warning. Used sparingly for maximum effect within a multi-color palette. |
| Pink Sunset Gradient | #ff8564 | `--color-pink-sunset-gradient` | Decorative background for key UI elements or sections. The transition from orange to pink adds dynamic flow. |
| Rainbow Burst Gradient | #75e6ff | `--color-rainbow-burst-gradient` | Large, immersive background for hero sections or brand moments. The multi-stop linear gradient creates a spectrum effect. |
| Ethereal Aqua Radial | #94ffe8 | `--color-ethereal-aqua-radial` | Subtle background element for cards or containers, adding depth and a soft glow without harsh lines. |

## Tokens — Typography

### SF Pro Rounded

- **Token:** `--font-sf-pro-rounded`
- **Substitute:** system-ui, 'Avenir Next Rounded Std', 'Inter Display'
- **Weights:** 400
- **Sizes:** 16px, 20px, 24px, 32px, 36px, 42px, 56px, 80px, 96px, 100px
- **Line heights:** 1.00, 1.10, 1.20
- **Letter spacing:** -0.0310em, -0.0280em, -0.0180em, -0.0100em, -0.0300em, -0.0200em
- **Role:** The primary typeface for headings and prominent body text. Its rounded edges align with the playful, soft aesthetic. The liberal use of bold, heavy, and black weights, combined with tight letter-spacing for display sizes, creates a friendly yet impactful presence.

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Role:** Smallest body text, links, and minor UI elements. Provides a clean, highly legible foundation for detailed information, contrasting with the rounded display type.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | — | `--text-caption` |
| body | 16px | 1.2 | -0.01px | `--text-body` |
| body-lg | 20px | 1.2 | -0.031px | `--text-body-lg` |
| subheading | 24px | 1.1 | -0.031px | `--text-subheading` |
| heading | 32px | 1 | -0.031px | `--text-heading` |
| heading-lg | 36px | 1.1 | -0.028px | `--text-heading-lg` |
| display | 56px | 1.1 | -0.018px | `--text-display` |
| display-xl | 80px | 1 | -0.03px | `--text-display-xl` |
| display-xxl | 96px | 1 | -0.02px | `--text-display-xxl` |
| display-xxxl | 100px | 1 | -0.02px | `--text-display-xxxl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 50px |
| cards | 32px |
| image | 32px-100px |
| buttons | 40px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.32) 0px 5px 32px 12px inset, rgba(255, 255, 255, 0.44) 0px 1px 4px 0px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48-60px |
| cardPadding | 20-32px |
| elementGap | 8-24px |

## Components

### Download CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Wallet Token List Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Network Changed Notification Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Call-to-Action Button (Orange)

**Role:** Main user action for downloads and critical steps.

Rounded button with Sunset Orange (#ff8a00) background, default text color of browser's blue link color (use #0f101a or a vivid contrast for production, as #0000ee is browser default), 40px border-radius, and generous padding of 12px top/bottom, 32px left and 12px right. Features an embedded icon on the left by default.

### Secondary Call-to-Action Button (Pink)

**Role:** Alternative user action for downloads or prominent selections.

Rounded button with Neon Pink (#ff54bb) background, default text color of browser's blue link color (use #0f101a or a vivid contrast for production), 40px border-radius, and generous padding of 12px top/bottom, 32px left and 12px right. Features an embedded icon on the left by default.

### Ghost Navigation Link

**Role:** Top navigation items and auxiliary links.

Transparent background, Whisper Gray (#777885) text color, no border, with a 50px border-radius making them soft pill shapes on hover/active. Padding is 24px all around for a spacious, clickable area.

### Elevated Wallet Card

**Role:** Displays primary wallet information and active states.

Cloudburst (#ffffff) background, with transparency. Features a complex inset shadow (rgba(255, 255, 255, 0.32) 0px 5px 32px 12px inset, rgba(255, 255, 255, 0.44) 0px 1px 4px 0px inset) which makes it appear luminous and floating. Border-radius is 32px. Text color is Ink (#0f101a) for headings and Whisper Gray (#777885) for details. Padding is varied but generous, often around 20-32px.

### Small Pill Status Tag

**Role:** Used for 'Network changed' or other brief notifications.

Soft pink background (#ff9396), small rounded corners (implied from pill shape, around 16px), dense content with minimal padding to create a compact, informative tag.

### System Utility Text Link

**Role:** Informational or secondary navigation links, often with an arrow icon.

Ink (#0f101a) text color, default 12px font size, regular sans-serif weight 400. Letter-spacing is normal. Used for 'See more FAQs →'.

## Do's and Don'ts

### Do

- Prioritize SF Pro Rounded for all headings and prominent text, using its Black, Heavy, or Semibold weights for visual impact.
- Apply 40px or 50px border-radius to all buttons and key interactive elements to maintain a uniformly friendly, approachable aesthetic.
- Use Sunset Orange (#ff8a00) and Neon Pink (#ff54bb) as primary and secondary calls to action, ensuring high visual contrast against light backgrounds.
- Implement the complex inset white shadow on elevated cards and interactive elements for a luminous, floating effect.
- Employ soft radial gradients like Ethereal Aqua Radial (#94ffe8) for background textures to establish the dreamlike visual atmosphere.
- Maintain a clear hierarchy with Ink (#0f101a) for main content and Whisper Gray (#777885) for secondary information.
- Utilize -0.03em or -0.02em letter-spacing for headlines 56px and above to create a dramatic, compressed visual effect.

### Don't

- Avoid sharp corners; the minimum radius for most UI elements should be 10px, with larger elements featuring 32px or 40px.
- Do not use solid background colors for large sections; instead, apply subtle gradients or Pale Mist (#f1f3f6) to maintain softness.
- Refrain from using stark blacks or harsh whites; Ink (#0f101a) and Cloudburst (#ffffff) are the darkest and lightest neutrals.
- Do not introduce strong, desaturated grays outside the Whisper Gray (#777885) family; maintain the soft, slightly chromatic neutral palette.
- Avoid heavy drop shadows below elements; the preferred elevation is via the ethereal white inset shadow or subtle background changes.
- Do not use generic sans-serif fonts for display or heading text; SF Pro Rounded is crucial for brand identity.

## Elevation

- **Wallet Card:** `rgba(255, 255, 255, 0.32) 0px 5px 32px 12px inset, rgba(255, 255, 255, 0.44) 0px 1px 4px 0px inset`

## Imagery

The visual language is dominantly 3D abstract graphics and stylized product mockups. Photography is absent. Abstract forms, often with rainbow gradients (like the cloud and planet visuals), create a playful, almost cartoonish, yet high-fidelity atmosphere. Product mockups (e.g., phone displaying crypto wallet, browser extension windows) are rendered with soft, diffused lighting and slightly transparent, gradient-filled backgrounds that blend into the overall aesthetic. Icons are simple, filled, and often incorporate brand colors. Imagery serves a decorative, atmospheric role rather than strict informational one, enhancing the brand's 'color' and 'fun' identity.

## Layout

The page primarily uses a full-bleed layout, allowing large background gradients and abstract graphics to fill the screen rather than being confined to a max-width container. The hero section is full-bleed with animated 3D elements and a centered headline. Sections maintain consistent vertical spacing between 48px and 60px. Content is arranged flexibly, often with centered stacks for headlines and subtext, or with asymmetric compositions where product mockups float next to text blocks. Navigation is a simple top-bar, sticky header at page top with minimal links and a primary 'Download' button. Element density is comfortable and spacious, allowing the large, vibrant graphics ample room to breathe.

## Similar Brands

- **Framer** — Features similar bold, rounded typography, and a modern aesthetic with generous spacing and a focus on visual impact through unique graphic elements.
- **Webflow** — Shares a penchant for playful, often illustrated or abstract 3D elements, paired with clean, accessible UI components and a vibrant color palette.
- **Linear** — Although typically darker, it shares a focus on sleek, well-defined UI components with subtle elevation and a strong brand voice through typography and constrained color accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #0f101a;
  --color-cloudburst: #ffffff;
  --color-whisper-gray: #777885;
  --color-pale-mist: #f1f3f6;
  --color-sunset-orange: #ff8a00;
  --color-neon-pink: #ff54bb;
  --color-sky-blue: #33aaff;
  --color-cyan-tint: #99eeff;
  --color-radiant-violet: #8c64ff;
  --color-teal-glow: #00fff0;
  --color-joyful-red: #ff0f0f;
  --color-pink-sunset-gradient: #ff8564;
  --color-rainbow-burst-gradient: #75e6ff;
  --color-ethereal-aqua-radial: #94ffe8;
  --font-sf-pro-rounded: 'SF Pro Rounded', system-ui, 'Avenir Next Rounded Std', 'Inter Display';
  --font-sans-serif: 'sans-serif', system-ui;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.01px;
  --text-body-lg: 20px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.031px;
  --text-subheading: 24px;
  --leading-subheading: 1.1;
  --tracking-subheading: -0.031px;
  --text-heading: 32px;
  --leading-heading: 1;
  --tracking-heading: -0.031px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.028px;
  --text-display: 56px;
  --leading-display: 1.1;
  --tracking-display: -0.018px;
  --text-display-xl: 80px;
  --leading-display-xl: 1;
  --tracking-display-xl: -0.03px;
  --text-display-xxl: 96px;
  --leading-display-xxl: 1;
  --tracking-display-xxl: -0.02px;
  --text-display-xxxl: 100px;
  --leading-display-xxxl: 1;
  --tracking-display-xxxl: -0.02px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-100: 100px;
  --radius-pill: 50px;
  --radius-cards: 32px;
  --radius-image: 32px-100px;
  --radius-buttons: 40px;
  --shadow-xl: rgba(255, 255, 255, 0.32) 0px 5px 32px 12px inset, rgba(255, 255, 255, 0.44) 0px 1px 4px 0px inset;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #0f101a;
  --color-cloudburst: #ffffff;
  --color-whisper-gray: #777885;
  --color-pale-mist: #f1f3f6;
  --color-sunset-orange: #ff8a00;
  --color-neon-pink: #ff54bb;
  --color-sky-blue: #33aaff;
  --color-cyan-tint: #99eeff;
  --color-radiant-violet: #8c64ff;
  --color-teal-glow: #00fff0;
  --color-joyful-red: #ff0f0f;
  --color-pink-sunset-gradient: #ff8564;
  --color-rainbow-burst-gradient: #75e6ff;
  --color-ethereal-aqua-radial: #94ffe8;
  --font-sf-pro-rounded: 'SF Pro Rounded', system-ui, 'Avenir Next Rounded Std', 'Inter Display';
  --font-sans-serif: 'sans-serif', system-ui;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.01px;
  --text-body-lg: 20px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.031px;
  --text-subheading: 24px;
  --leading-subheading: 1.1;
  --tracking-subheading: -0.031px;
  --text-heading: 32px;
  --leading-heading: 1;
  --tracking-heading: -0.031px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.028px;
  --text-display: 56px;
  --leading-display: 1.1;
  --tracking-display: -0.018px;
  --text-display-xl: 80px;
  --leading-display-xl: 1;
  --tracking-display-xl: -0.03px;
  --text-display-xxl: 96px;
  --leading-display-xxl: 1;
  --tracking-display-xxl: -0.02px;
  --text-display-xxxl: 100px;
  --leading-display-xxxl: 1;
  --tracking-display-xxxl: -0.02px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-100: 100px;
  --radius-pill: 50px;
  --radius-cards: 32px;
  --radius-image: 32px-100px;
  --radius-buttons: 40px;
  --shadow-xl: rgba(255, 255, 255, 0.32) 0px 5px 32px 12px inset, rgba(255, 255, 255, 0.44) 0px 1px 4px 0px inset;
}
```
