---
version: alpha
name: "V–A–C Sreda"
description: "The V–A–C Sreda design system presents a stark, almost architectural aesthetic using a high-contrast black and white palette. Its visual identity revolves around precise lines, dotted paths, and block typography that evokes technical drawings or abstract diagrams. Emphasis is placed on direct, functional navigation with minimal embellishment, conveying information through calculated arrangement and a sense of measured tension between elements. The system eschews softness or fluidity in favor of a rigid-yet-dynamic structure, where type and line work define the visual rhythm."
theme: "light"
industry: "media"
source_url: "https://sreda.v-a-c.org"
refero_style_id: "b634cbce-b4db-44a6-b2a4-b58d9d2fe93d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519406923-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519406923-thumb.jpg"
extracted_at: "2026-04-30T03:23:45.818Z"
---

# V–A–C Sreda — Style Reference

> Architectural grid on white

**Theme:** light

**Industry:** media

The V–A–C Sreda design system presents a stark, almost architectural aesthetic using a high-contrast black and white palette. Its visual identity revolves around precise lines, dotted paths, and block typography that evokes technical drawings or abstract diagrams. Emphasis is placed on direct, functional navigation with minimal embellishment, conveying information through calculated arrangement and a sense of measured tension between elements. The system eschews softness or fluidity in favor of a rigid-yet-dynamic structure, where type and line work define the visual rhythm.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Primary page and background surfaces, default text fill for inverted states |
| Diagram Black | #000000 | `--color-diagram-black` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Muted Gray | #999999 | `--color-muted-gray` | Secondary text, subtle instructional prompts, and inactive or subordinate border elements |

## Tokens — Typography

### Diagramatika Display

- **Token:** `--font-diagramatika-display`
- **Substitute:** Montserrat
- **Weights:** 400
- **Sizes:** 16px, 24px, 48px, 80px
- **Line heights:** 0.80, 1.20
- **Role:** Dominant font for headings and large display text, creating a bold, geometric presence. Its narrow character forms set a distinct, modern tone.

### Diagramatika Text

- **Token:** `--font-diagramatika-text`
- **Substitute:** Open Sans
- **Weights:** 400
- **Sizes:** 16px, 20px, 24px
- **Line heights:** 0.90, 1.00, 1.10, 1.20
- **Role:** Used for body text, links, and general content, providing readability with a consistent contemporary feel that complements the display font. It maintains the system's geometric ethos.

### Arial

- **Token:** `--font-arial`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 13px, 20px
- **Line heights:** 1.20
- **Role:** System fallback for small utility text, input fields, and specific button elements, ensuring baseline legibility where custom fonts might not load.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.2 | — | `--text-caption` |
| body | 16px | 1.2 | — | `--text-body` |
| subheading | 20px | 1.2 | — | `--text-subheading` |
| heading | 24px | 1.2 | — | `--text-heading` |
| heading-lg | 48px | 0.8 | — | `--text-heading-lg` |
| display | 80px | 0.8 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 50px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Navigation Link

**Role:** Primary navigation and content links

Text in Diagramatika Text, 16px, weight 400, color Diagram Black. Features a solid Diagram Black border on hover/active states, indicating a selected navigational path. Often paired with dotted lines to visually connect actions.

### Headline Display Text

**Role:** Large, prominent text for section titles and branding.

Uses Diagramatika Display, 80px, weight 400, color Diagram Black. Highly condensed line-height (0.8) to maintain visual tightness. Often appears as single characters or short words, acting as graphic elements.

### Body Text Block

**Role:** Descriptive text for articles and content blocks.

Composed of Diagramatika Text, 16px-24px, weight 400, color Diagram Black, with a standard line-height of 1.2. The content fills available space, forming dense, readable blocks against the Canvas White background.

### Interactive Dotted Line

**Role:** Visual connectors and indicators for user interaction.

A dotted line stroke in Diagram Black, primarily used to guide the eye or visually link related actions/content. Functions as a non-standard interactive element often with associated text.

### Ghost Button

**Role:** Subtle, outlined interactive elements.

A button with a transparent background (rgba(0,0,0,0)), Diagram Black text (Arial, 13px), and a 1px Diagram Black border. Features 0px border-radius and 0px padding, integrating seamlessly into the surrounding layout rather than standing out.

### Cookie Consent Banner

**Role:** Discrete notification for cookie usage.

A small, fixed banner at the bottom of the viewport with a transparent dark grey background (#000000 with opacity via rgba), white text, and a minimal 'X' close icon. Uses Arial 13px, color Canvas White, 0px radius.

### Muted Helper Text

**Role:** Secondary, less prominent textual information.

Uses Diagramatika Text, 16px, weight 400, color Muted Gray. Often found accompanying interactive elements like navigational links to provide context.

## Do's and Don'ts

### Do

- Prioritize Diagram Black (#000000) for all text and UI outlines against Canvas White (#FFFFFF) backgrounds to maintain high contrast.
- Use Diagramatika Display for all large type elements (48px and above) with a tight line-height of 0.8 to create a graphic, almost abstract feel.
- Define interactive pathways and relationships using single-pixel dotted lines in Diagram Black, connecting elements visually rather than relying on traditional button styling.
- Employ 0px border-radius for all UI components, including buttons and inputs, to uphold a sharp, rectilinear visual language.
- Maintain a comfortable density for content blocks, using 20px padding around text or within cards, and 20px as a primary element gap.
- Use Muted Gray (#999999) exclusively for secondary, contextual labels or inactive states, ensuring it never competes with primary Diagram Black text.
- Structure layouts with a strong emphasis on horizontal and vertical lines as visual anchors, creating a grid-like framework that guides the eye through content.

### Don't

- Avoid using any colored backgrounds or accent colors; the system relies strictly on a black and white palette with only Muted Gray as a secondary neutral.
- Do not introduce rounded corners or soft edges on any UI elements. All shapes must maintain sharp, 0px radii.
- Refrain from using drop shadows or complex elevation effects; the design emphasizes flat surfaces and defined lines to create separation.
- Do not use bold or italic text styles; the system achieves visual hierarchy through font size, weight 400, and precise spacing rather than stylistic variations.
- Avoid decorative imagery that isn't black and white line art or diagrams; photography or colorful illustrations will disrupt the stark aesthetic.
- Do not use generic button styles with block backgrounds; interactive elements should manifest as text links, ghost buttons, or elements defined by borders/lines.
- Do not introduce unnecessary visual flair or animation; transitions should be subtle (0.3s ease for color/opacity), serving function over decoration.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Base page background |
| 1 | Diagram Black | #000000 | Cookie consent banner (transparent over background) |

## Imagery

The visual language is characterized by an absence of traditional imagery in the UI. Instead, dotted lines, stark outlines, and the typographic treatment of headlines like 'V', 'A', 'C', and 'Sreda' function as primary graphic elements. The only visual content observed is a background element which appears to be product/artwork focused, suggesting a content area, rather than UI imagery. Icons, if present, would likely be minimal, outlined, and monochromatic to align with the system's graphic precision. The design is heavily text-dominant, relying on typography and line work to convey information and structure.

## Layout

The page model is full-bleed horizontally but with implicit vertical divisions, centered around a clear information hierarchy defined by lines and text blocks. The hero section is characterized by large, single-character headlines ('V', 'A', 'C') linked by solid lines, acting as abstract graphic anchors, followed by the brand name 'Sreda' as a dominant visual. Content sections flow vertically with strong visual separators, like the long horizontal lines. The primary content arrangement involves a large text block on the right, providing descriptive information, while interactive navigation elements ('Read', 'Watch', 'Listen', linked by dotted lines) are horizontally distributed below. There's no apparent grid for cards or features; instead, a linear flow with strong visual axes. Density is comfortable, with generous blank space around primary interactive elements, but descriptive text blocks can be quite dense. Navigation integrates directly into the content flow through aligned text links and dotted pathway indicators rather than a dedicated header or sidebar.

## Similar Brands

- **Certain editorial/art magazines online** — Stark black-and-white palette, heavy reliance on custom typography as graphic elements, and minimal, abstracted navigation.
- **Dieter Rams' design principles/Braun** — Focus on extreme functionalism, clarity through reduction, and a disciplined approach to form and layout, devoid of ornamentation.
- **Brutalism-inspired websites** — Raw, uncovered structural elements (lines, borders), high contrast, and a deliberate avoidance of 'pleasant' or decorative elements in favor of a direct, almost confrontational aesthetic.
- **Some conceptual art platforms** — Using the website itself as an art piece or diagram, where navigation and textual elements are integral parts of the visual composition rather than just controls.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-diagram-black: #000000;
  --color-muted-gray: #999999;
  --font-diagramatika-display: 'Diagramatika Display', Montserrat;
  --font-diagramatika-text: 'Diagramatika Text', Open Sans;
  --font-arial: 'Arial', system-ui;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-heading-lg: 48px;
  --leading-heading-lg: 0.8;
  --text-display: 80px;
  --leading-display: 0.8;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-20: 20px;
  --spacing-26: 26px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --radius-default: 0px;
  --surface-canvas-white: #ffffff;
  --surface-diagram-black: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-diagram-black: #000000;
  --color-muted-gray: #999999;
  --font-diagramatika-display: 'Diagramatika Display', Montserrat;
  --font-diagramatika-text: 'Diagramatika Text', Open Sans;
  --font-arial: 'Arial', system-ui;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-heading-lg: 48px;
  --leading-heading-lg: 0.8;
  --text-display: 80px;
  --leading-display: 0.8;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-20: 20px;
  --spacing-26: 26px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --radius-default: 0px;
  --surface-canvas-white: #ffffff;
  --surface-diagram-black: #000000;
}
```
