---
version: alpha
name: "GEMINI"
description: "GEMINI projects a dark, futuristic aesthetic, emphasizing high-contrast monochrome UI elements against a dramatic, often gradient-infused background that showcases a central 3D rendered object. The design is deliberately spare, with bold, geometric typography acting as sparse, but impactful, information points. Interaction elements are almost entirely ghosted, relying on subtle borders and text color changes to indicate states, reinforcing the impression of a holographic interface rather than tangible physicality. Layouts are open and minimal, directing focus to the central visual showcase."
theme: "dark"
industry: "design"
source_url: "https://exp-gemini.lusion.co/motion"
refero_style_id: "a316193c-6a5f-4a43-96ee-003afdf862ad"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516300191-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516300191-thumb.jpg"
extracted_at: "2026-04-30T02:32:25.581Z"
---

# GEMINI — Style Reference

> Holographic display in a void: information gleams from deep shadow.

**Theme:** dark

**Industry:** design

GEMINI projects a dark, futuristic aesthetic, emphasizing high-contrast monochrome UI elements against a dramatic, often gradient-infused background that showcases a central 3D rendered object. The design is deliberately spare, with bold, geometric typography acting as sparse, but impactful, information points. Interaction elements are almost entirely ghosted, relying on subtle borders and text color changes to indicate states, reinforcing the impression of a holographic interface rather than tangible physicality. Layouts are open and minimal, directing focus to the central visual showcase.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Void Black | #000000 | `--color-void-black` | Primary background, deep shadows, essential achromatic fills |
| Polar White | #ffffff | `--color-polar-white` | Primary text color, active states, high-contrast highlights |
| Ghost Border | #efefef | `--color-ghost-border` | Subtle borders for phantom buttons, inactive text, and secondary UI elements. It acts as a barely-there structural element against the dark background |
| Silver Mist Gradient | #f2f5f8 | `--color-silver-mist-gradient` | Decorative surface treatment, used for color palette selection or background elements. Its subtly desaturated gradient shifts from light gray to medium gray |
| Sunset Peach Gradient | #dbcbbd | `--color-sunset-peach-gradient` | Decorative surface treatment, evoking a warm, inviting glow |
| Crimson Blush Gradient | #c83c43 | `--color-crimson-blush-gradient` | Decorative surface treatment, signifying energy and boldness |
| Twilight Orchid Gradient | #c31a65 | `--color-twilight-orchid-gradient` | Decorative surface treatment, introducing a vibrant, digital-era violet |
| Deep Indigo Gradient | #9b9fc2 | `--color-deep-indigo-gradient` | Decorative surface treatment, suggesting depth and calm |
| Ocean Teal Gradient | #20a481 | `--color-ocean-teal-gradient` | Decorative surface treatment, providing a cool, stable accent |

## Tokens — Typography

### Days One

- **Token:** `--font-days-one`
- **Substitute:** Bebas Neue
- **Weights:** 400
- **Sizes:** 10px, 17px
- **Line heights:** 1.00, 1.20
- **Role:** Primary brand typography for logos, badging, and distinctive labels. Its geometric, blocky letterforms convey a modern, technical feel.

### Zen Dots

- **Token:** `--font-zen-dots`
- **Substitute:** DotGothic16
- **Weights:** 400
- **Sizes:** 17px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Main navigation and interactive text. Its unique, stylized dots within the letters provide a subtle futuristic touch.

### Exo 2

- **Token:** `--font-exo-2`
- **Substitute:** Exo 2
- **Weights:** 400, 500
- **Sizes:** 11px, 12px
- **Line heights:** 1.69, 2.50
- **Letter spacing:** 0.0200em at 11px, 0.2850em at 12px
- **Role:** Heading and supportive text. The varied weights and deliberate, wide letter spacing allow for nuanced emphasis without resorting to large sizes, maintaining a compact yet readable informational presence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1 | — | `--text-caption` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-65 | 65px | `--spacing-65` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 3px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 50px |
| cardPadding | 10px |
| elementGap | 5px |

## Components

### Nav Menu Item (Ghost)

**Role:** Interactive element

Ghosted text link using Zen Dots font at 17px, Polar White (#ffffff), with no background or border, minimal padding of 12px. The text subtly changes state on hover.

### Branded Header Logo

**Role:** Brand identification

The brand's name 'LUSION: LABS' rendered in Days One font, 17px, Polar White (#ffffff), appearing top-left. It maintains a subtle presence without dominating the visual field.

### Badge (Text Only)

**Role:** Categorization/Labeling

A text-only badge using Days One font at 10px, Ghost Border (#efefef) color. No explicit background or border, with visual separation achieved through minimal content spacing like 10px bottom margin or 10px top/bottom padding.

### Color Swatch Selector

**Role:** Color palette interaction

Small, square gradients (3px radius) representing different color moods. They are interactive UI elements that change the visual state of the main content.

## Do's and Don'ts

### Do

- Use Void Black (#000000) as the foundational background for all primary content areas.
- Employ Ghost Border (#efefef) for all inactive text, subtle borders, and secondary UI elements, creating a sense of translucency.
- Apply Days One font (400 weight, 17px) for all prominent brand marks and labels.
- Utilize Zen Dots font (400 weight, 17px) for primary navigation items and interactive text, establishing a distinct digital-era feel.
- Maintain minimal spacing for interactive elements, using `elementGap` of 5px and small padding like 10px where necessary, to keep the layout compact.
- Round corners with a 3px radius on all small interactive elements and containers where subtle differentiation is needed.
- Incorporate the gradient color tokens sparingly, primarily as decorative accents or visual selection tools, never as primary UI backgrounds.

### Don't

- Avoid using saturated solid colors for primary interface elements; instead, rely on monochrome tones and subtle gradients.
- Do not introduce strong drop shadows or complex elevation; surfaces should appear flat or subtly layered, contributing to the holographic feel.
- Refrain from using bold type weights excessively; the design favors lighter weights and careful letter spacing to convey hierarchy.
- Do not use generic system fonts; custom fonts Days One and Zen Dots are key to brand identity.
- Avoid dense, information-heavy layouts; prioritize spaciousness and singular focal points.
- Do not use highly opaque backgrounds for interactive elements; transparency and ghosting are preferred.
- Do not break the compact density with large, arbitrary spacing values; adhere to the established elementGap and padding guidelines.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Base Canvas | #000000 | The deepest background layer, providing the illusion of infinite dark space. |
| 1 | Ghosted UI Surface | #efefef | Used for subtle borders and text against the dark canvas, appearing as a projected element rather than a solid surface. Its high visibility on dark makes it a secondary visual layer to #ffffff. |

## Imagery

This site features a single, dominant 3D rendered product (a concept car) centrally positioned. The rendering is sophisticated, with realistic textures and lighting, and is the primary visual focus. There are no secondary images, illustrations, or photography. The entire background is often a full-bleed, soft color gradient, creating an ethereal and atmospheric backdrop that frames the central object. Imagery is the content, not a decorative addition, and is often interactive (e.g., color selection for the car). Icons are minimal, represented by simple geometric shapes like a hollow square.

## Layout

The page primarily uses a full-bleed layout where the background and main visual content extend to the edges of the viewport. The hero section is dominated by the 3D rendered object, centered against a gradient background. Navigation elements (logo, menu items) are placed in the top corners, maintaining a minimalist, high-tech control panel aesthetic. Content beyond the hero appears in a similarly sparse manner, with text badges or labels placed strategically to complement the visual display. There is no traditional grid for content; elements are placed with a sense of deliberate emptiness, directing the eye toward the central visual.

## Similar Brands

- **Polestar** — Monochromatic, dark mode interface focusing on a single product with understated, technical typography.
- **Cyberpunk 2077 (UI)** — Utilizes minimalist, high-contrast UI elements and bold geometric fonts against dark, atmospheric backgrounds consistent with a futuristic theme.
- **Lamborghini Configurator** — Centered 3D rendered object as the hero, with sparse UI elements and color selectors that influence the main visual.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-void-black: #000000;
  --color-polar-white: #ffffff;
  --color-ghost-border: #efefef;
  --color-silver-mist-gradient: #f2f5f8;
  --color-sunset-peach-gradient: #dbcbbd;
  --color-crimson-blush-gradient: #c83c43;
  --color-twilight-orchid-gradient: #c31a65;
  --color-deep-indigo-gradient: #9b9fc2;
  --color-ocean-teal-gradient: #20a481;
  --font-days-one: 'Days One', Bebas Neue;
  --font-zen-dots: 'Zen Dots', DotGothic16;
  --font-exo-2: 'Exo 2', Exo 2;
  --text-caption: 10px;
  --leading-caption: 1;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-50: 50px;
  --spacing-65: 65px;
  --radius-default: 3px;
  --surface-base-canvas: #000000;
  --surface-ghosted-ui-surface: #efefef;
}
```

### Tailwind v4

```css
@theme {
  --color-void-black: #000000;
  --color-polar-white: #ffffff;
  --color-ghost-border: #efefef;
  --color-silver-mist-gradient: #f2f5f8;
  --color-sunset-peach-gradient: #dbcbbd;
  --color-crimson-blush-gradient: #c83c43;
  --color-twilight-orchid-gradient: #c31a65;
  --color-deep-indigo-gradient: #9b9fc2;
  --color-ocean-teal-gradient: #20a481;
  --font-days-one: 'Days One', Bebas Neue;
  --font-zen-dots: 'Zen Dots', DotGothic16;
  --font-exo-2: 'Exo 2', Exo 2;
  --text-caption: 10px;
  --leading-caption: 1;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-50: 50px;
  --spacing-65: 65px;
  --radius-default: 3px;
  --surface-base-canvas: #000000;
  --surface-ghosted-ui-surface: #efefef;
}
```
