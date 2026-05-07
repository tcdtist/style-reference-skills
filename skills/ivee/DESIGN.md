---
version: alpha
name: "ivee"
description: "Ivee conveys a calm and trustworthy atmosphere through a primarily cool blue and white palette, accented by a warm, inviting orange. Typography is a measured blend of traditional serifs for headlines and crisp sans-serifs for functional text, establishing both gravitas and clarity. Components feature generous rounded corners and light elevation, suggesting a friendly yet refined digital experience. The design prioritizes readability and ease of interaction within a clean, spacious layout."
theme: "light"
industry: "other"
source_url: "https://www.iveeapp.com"
refero_style_id: "b9bc05e4-7778-4f3b-9aa5-55a671d389e3"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515265304-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515265304-thumb.jpg"
extracted_at: "2026-04-30T02:14:47.767Z"
---

# ivee — Style Reference

> Serene blue wellness canvas.

**Theme:** light

**Industry:** other

Ivee conveys a calm and trustworthy atmosphere through a primarily cool blue and white palette, accented by a warm, inviting orange. Typography is a measured blend of traditional serifs for headlines and crisp sans-serifs for functional text, establishing both gravitas and clarity. Components feature generous rounded corners and light elevation, suggesting a friendly yet refined digital experience. The design prioritizes readability and ease of interaction within a clean, spacious layout.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Sky Canvas | #f5f9fd | `--color-sky-canvas` | Primary page background, setting a light, airy base for the interface |
| Arctic Mist | #ffffff | `--color-arctic-mist` | Card backgrounds, input fields, elevating content above the Sky Canvas |
| Sand Dune | #faf4e6 | `--color-sand-dune` | Subtle background for specific sections or cards, adding warmth without overt color |
| Ocean Deep | #0c4170 | `--color-ocean-deep` | Primary text color for headings and body, providing strong contrast against light backgrounds. Also used for borders, subtle backgrounds for content blocks, and navigation elements, defining structural elements with a cool, clinical blue |
| Azure Glow | #c4e3fa | `--color-azure-glow` | Light background for cards and hero sections, offering a gentle tint of blue. Also used for inputs and buttons as a secondary background |
| Sunset Orange | #fc6b42 | `--color-sunset-orange` | Call-to-action buttons, active navigation items, and small accent marks – a vivid contrast color to draw attention |
| Pitch Black | #000000 | `--color-pitch-black` | Used for button text on light backgrounds and prominent icons |
| Cloud Gray | #ced9e2 | `--color-cloud-gray` | Subtle borders and dividers, providing visual separation without harsh lines |

## Tokens — Typography

### Crimson Text

- **Token:** `--font-crimson-text`
- **Substitute:** Lora
- **Weights:** 400
- **Sizes:** 24px, 40px, 52px, 120px
- **Line heights:** 1.00, 1.17, 1.25
- **Letter spacing:** -0.025em for 120px, -0.020em for 52px, 0.020em for 24px
- **Role:** Distinguished serif for page headlines and key visual statements, imparting a sense of traditional authority and elegance. The light tracking at larger sizes maintains legibility.

### Roboto

- **Token:** `--font-roboto`
- **Substitute:** Inter
- **Weights:** 400, 500, 700
- **Sizes:** 12px, 14px
- **Line heights:** 1.00, 1.25, 1.43, 1.75, 2.00
- **Letter spacing:** 0.060em for 12px, 0.020em for 14px
- **Role:** Highly legible sans-serif for body text, navigation, buttons, and form inputs. Its clean lines ensure clarity for functional content and smaller text sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.75 | 0.06px | `--text-caption` |
| body | 14px | 1.43 | 0.02px | `--text-body` |
| heading-sm | 24px | 1.25 | 0.48px | `--text-heading-sm` |
| heading | 40px | 1.17 | -0.8px | `--text-heading` |
| heading-lg | 52px | 1.17 | -1.04px | `--text-heading-lg` |
| display | 120px | 1 | -3px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-117 | 117px | `--spacing-117` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-137 | 137px | `--spacing-137` |
| spacing-186 | 186px | `--spacing-186` |
| spacing-295 | 295px | `--spacing-295` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 40px |
| images | 20px |
| inputs | 10px |
| buttons | 10px |
| navigation | 5px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Primary Action Button

**Role:** Call-to-action

Filled button with 'Sunset Orange' background (#fc6b42), 'Arctic Mist' text (#ffffff), and 10px border radius. Padding of 15px top/bottom, 30px left/right. Font is Roboto, typically 700 weight.

### Ghost Navigation Button

**Role:** Secondary action

Transparent background with 'Ocean Deep' text (#0c4170), no border radius. Used for inline links and navigation items. Font is Roboto, usually 400 weight.

### Input Field

**Role:** Data entry

White background (#ffffff), 'Ocean Deep' text and border (#0c4170), 10px border radius. Generous 15px padding on all sides. Placeholder text is 'Ocean Deep'.

### Rounded Feature Card

**Role:** Content container

Background of 'Azure Glow' (#c4e3fa) or 'Sand Dune' (#faf4e6), with very large 40px border radius for a soft, friendly appearance. Contains text and other elements without explicit padding values, suggesting content defines internal spacing.

### Card with Shadow

**Role:** Elevated content container

Background of 'Azure Glow' (#c4e3fa) with a large 40px border radius, featuring a subtle shadow (rgba(0,0,0,0) 0px 0px 30px 0px) for emphasis. No explicit padding.

### Modal Dialog

**Role:** Overlay content

White background (#ffffff) with a 10px border radius, containing text and input fields. Shadow is implied through the context of being an overlay, but no explicit boxShadow token is applied to the modal itself in the component data, relying on context for elevation.

## Do's and Don'ts

### Do

- Always use 'Ocean Deep' (#0c4170) for primary text and significant borders to maintain brand consistency and readability.
- Apply 'Sunset Orange' (#fc6b42) exclusively to primary call-to-action elements for maximum impact and to guide user flow.
- Utilize soft 40px border radii for major content cards and larger visual containers to convey a friendly, approachable aesthetic.
- Pair 'Crimson Text' for headlines with 'Roboto' for body copy to establish clear typographic hierarchy and a balanced visual style.
- Maintain comfortable spacing with an element gap of 20px and a section gap of 40px to ensure visual breathability.
- Use 'Arctic Mist' (#ffffff) for inputs and backgrounds that need to stand out against the main 'Sky Canvas' (#f5f9fd).
- Employ 'Azure Glow' (#c4e3fa) for secondary section backgrounds and cards, creating visual interest without straying from the brand's cool palette.

### Don't

- Do not introduce sharp corners; avoid radii smaller than 5px for interactive elements.
- Never use 'Sunset Orange' (#fc6b42) for body text or large blocks of content; reserve it for functional accents.
- Avoid overusing shadows; elevation should be subtle and primarily for modals or distinct cards.
- Do not deviate from the 'Crimson Text' and 'Roboto' font families; maintain the established typographic voice.
- Refrain from tight spacing; always provide comfortable padding within elements and ample gaps between sections.
- Do not use dark backgrounds for entire page sections unless specifically for a full-bleed hero that integrates with the 'Ocean Deep' color.
- Avoid arbitrary color choices for text; stick to 'Ocean Deep' for primary text and 'Pitch Black' for button text on light backgrounds.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Sky Canvas | #f5f9fd | Base page background |
| 2 | Arctic Mist | #ffffff | Primary content cards, input fields, interactive components |
| 3 | Azure Glow | #c4e3fa | Prominent feature sections and elevated cards, providing a soft blue tint |

## Imagery

The site uses a mix of lifestyle photography and product visuals. Photography features subjects in a relaxed, comfortable environment, often with a slightly desaturated or cool-toned filter that matches the brand's blues. Product shots are clean and focused, often showing medical devices or IV bags on neutral or blue-tinted backgrounds, emphasizing the health aspect. Icons are simple, outlined, and monochromatic, primarily in 'Ocean Deep', serving explanatory and functional roles rather than decorative.

## Layout

The page primarily uses a max-width contained layout, centering content within a defined boundary. The hero section often features a full-bleed image with text overlaid, immediately setting a tone. Sections alternate between 'Sky Canvas' and 'Azure Glow' backgrounds, creating a clear visual rhythm. Content is arranged in alternating text-left, image-right patterns, and in multi-column card grids for features. Navigation is a sticky top bar, minimalist with primary actions highlighted.

## Similar Brands

- **Calm** — Uses a similar serene blue dominant palette (though lighter) and focuses on mental wellness with a clean, understated UI.
- **Kaiser Permanente** — Employs a clear, trustworthy white and blue palette, communicating reliability in a healthcare context, similar to Ivee’s approach.
- **Headspace** — Features a light blue background and rounded, friendly components, reflecting a gentle and approachable digital wellness experience.
- **Cigna** — Utilizes a clean, corporate blue and white aesthetic in its digital presence, aiming for clarity and professionalism in an insurance/health services context.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-sky-canvas: #f5f9fd;
  --color-arctic-mist: #ffffff;
  --color-sand-dune: #faf4e6;
  --color-ocean-deep: #0c4170;
  --color-azure-glow: #c4e3fa;
  --color-sunset-orange: #fc6b42;
  --color-pitch-black: #000000;
  --color-cloud-gray: #ced9e2;
  --font-crimson-text: 'Crimson Text', Lora;
  --font-roboto: 'Roboto', Inter;
  --text-caption: 12px;
  --leading-caption: 1.75;
  --tracking-caption: 0.06px;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: 0.02px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: 0.48px;
  --text-heading: 40px;
  --leading-heading: 1.17;
  --tracking-heading: -0.8px;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -1.04px;
  --text-display: 120px;
  --leading-display: 1;
  --tracking-display: -3px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-65: 65px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-117: 117px;
  --spacing-128: 128px;
  --spacing-137: 137px;
  --spacing-186: 186px;
  --spacing-295: 295px;
  --radius-cards: 40px;
  --radius-images: 20px;
  --radius-inputs: 10px;
  --radius-buttons: 10px;
  --radius-navigation: 5px;
  --surface-sky-canvas: #f5f9fd;
  --surface-arctic-mist: #ffffff;
  --surface-azure-glow: #c4e3fa;
}
```

### Tailwind v4

```css
@theme {
  --color-sky-canvas: #f5f9fd;
  --color-arctic-mist: #ffffff;
  --color-sand-dune: #faf4e6;
  --color-ocean-deep: #0c4170;
  --color-azure-glow: #c4e3fa;
  --color-sunset-orange: #fc6b42;
  --color-pitch-black: #000000;
  --color-cloud-gray: #ced9e2;
  --font-crimson-text: 'Crimson Text', Lora;
  --font-roboto: 'Roboto', Inter;
  --text-caption: 12px;
  --leading-caption: 1.75;
  --tracking-caption: 0.06px;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: 0.02px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: 0.48px;
  --text-heading: 40px;
  --leading-heading: 1.17;
  --tracking-heading: -0.8px;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -1.04px;
  --text-display: 120px;
  --leading-display: 1;
  --tracking-display: -3px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-65: 65px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-117: 117px;
  --spacing-128: 128px;
  --spacing-137: 137px;
  --spacing-186: 186px;
  --spacing-295: 295px;
  --radius-cards: 40px;
  --radius-images: 20px;
  --radius-inputs: 10px;
  --radius-buttons: 10px;
  --radius-navigation: 5px;
  --surface-sky-canvas: #f5f9fd;
  --surface-arctic-mist: #ffffff;
  --surface-azure-glow: #c4e3fa;
}
```
