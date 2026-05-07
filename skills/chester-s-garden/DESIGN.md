---
version: alpha
name: "Chester's Garden"
description: "Chester's Garden feels like a carefully curated notebook or a personal journal, blending structured content with an organic, lived-in feel. The clean, almost stark white background (#fafafa) and light gray divisions (#e5e7eb) provide a quiet stage, allowing strong typographic choices and varied media to take center-stage. The interplay between the elegant, serifed Fraunces for headlines and the pragmatic, sans-serif Inter for body text defines its character, creating a sense of approachable authority where intellectual pursuits meet personal exploration. Subtle accent colors are used as contextual highlights, like digital Post-it notes within a physical garden."
theme: "light"
industry: "agency"
source_url: "https://chester.how"
refero_style_id: "a639fa6c-1705-47c2-b452-d4479469a734"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925555081-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925555081-thumb.jpg"
extracted_at: "2026-04-11T16:39:40.393Z"
---

# Chester's Garden — Style Reference

> Digital garden journal: crisp pages, intimate handwriting, and colorful bookmarks.

**Theme:** light

**Industry:** agency

Chester's Garden feels like a carefully curated notebook or a personal journal, blending structured content with an organic, lived-in feel. The clean, almost stark white background (#fafafa) and light gray divisions (#e5e7eb) provide a quiet stage, allowing strong typographic choices and varied media to take center-stage. The interplay between the elegant, serifed Fraunces for headlines and the pragmatic, sans-serif Inter for body text defines its character, creating a sense of approachable authority where intellectual pursuits meet personal exploration. Subtle accent colors are used as contextual highlights, like digital Post-it notes within a physical garden.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #fafafa | `--color-canvas-white` | Major surface background, card backgrounds. |
| Paper Gray | #e5e7eb | `--color-paper-gray` | Default borders, subtle separators, background for non-interactive elements. |
| Charcoal Text | #171717 | `--color-charcoal-text` | Primary text color for headings and prominent links. |
| Ink Black | #000000 | `--color-ink-black` | Strongest text contrast, used for body text and navigation links. |
| Subtle Gray | #a3a3a3 | `--color-subtle-gray` | Secondary text, disabled states, supporting icons. |
| Accent Orange | #7c2d12 | `--color-accent-orange` | Used for 'READ' tags, indicating intellectual content — a warm, inviting educational cue. |
| Highlight Orange | #fdd3b1 | `--color-highlight-orange` | Soft background for 'READ' tags, providing gentle visual emphasis. |
| Accent Violet | #581c87 | `--color-accent-violet` | Specific content type indicators like 'Writing' or 'Projects'. |
| Highlight Violet | #e6cefe | `--color-highlight-violet` | Soft background wash for 'Writing' or 'Projects' tags. |
| Accent Blue | #0c4a6 | `--color-accent-blue` | Specific content type indicators, e.g., 'Projects' or 'Hobbies'. |
| Highlight Blue | #afe5fc | `--color-highlight-blue` | Soft background wash for 'Hobbies' tags. |
| Accent Green | #365314 | `--color-accent-green` | Specific content type indicators, e.g., 'Plants' or active states. |
| Highlight Green | #daf5ae | `--color-highlight-green` | Soft background wash for 'Plants' tags. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 14px, 16px
- **Line heights:** 1.43, 1.50, 1.63
- **Letter spacing:** -0.4
- **Role:** Workhorse sans-serif for body text, navigation, and detailed information. Its subtle negative letter-spacing keeps text feeling grounded and compact, fitting the 'notebook' analogy.

### Fraunces

- **Token:** `--font-fraunces`
- **Substitute:** Georgia, serif
- **Weights:** 300
- **Sizes:** 30px, 36px, 60px
- **Line heights:** 1.00, 1.11, 1.20, 1.25
- **Letter spacing:** -0.9
- **Role:** Signature serif for all headings and key narrative elements. Its light weight (300) at larger display sizes (60px) sets a tone of quiet confidence, conveying authority through elegance rather than boldness. The generous negative letter-spacing maintains a polished, traditional feel.

### ui-monospace

- **Token:** `--font-ui-monospace`
- **Substitute:** monospace
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.43
- **Letter spacing:** -0.35
- **Role:** Used for code snippets or technical details, providing a clear distinction from the main narrative while maintaining legibility with tight letter-spacing.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 14px | 1.43 | -0.4px | `--text-body-sm` |
| body | 16px | 1.5 | -0.4px | `--text-body` |
| heading | 30px | 1.25 | -0.9px | `--text-heading` |
| heading-lg | 36px | 1.2 | -0.9px | `--text-heading-lg` |
| display | 60px | 1.11 | -0.9px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 4px |
| cards | 8px |
| images | 4px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px -2px 0px 1px inset | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1536px |
| sectionGap | 40px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Content Tag Collection

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Book Card — Reading

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Coffee Brew Card — Hobbies

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Top-level navigation items

Text 'Inter' weight 400, 16px, #a3a3a3 initially, changing to #000000 on hover. Underlined on hover. Hover state indicates interaction without changing layout.

### Navigation Tab Active

**Role:** Currently active category indicator

Rounded pill shape with 9999px border-radius. Background is #000000, text is #fafafa. Padding: 4px vertical, 6px horizontal. Acts as a filter or category selection.

### Card Container

**Role:** Content grouping element

Background #fafafa, 8px border-radius. Border is 1px solid #e5e7eb. No ambient shadow, but a subtle inset shadow rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px -2px 0px 1px inset suggests depth without lifting the card off the surface.

### Inline Text Link

**Role:** Interactive text embedded within body copy

Text in 'Inter', 16px, weight 400. Color #000000 with an underline only appearing on hover. Matches main text color to avoid visual noise until interacted with.

### Content Tag (Primary)

**Role:** Categorization of content, e.g. 'Reading', 'Projects'

Pill-shaped with 9999px border-radius. Text 'Inter' 14px, weight 400. Examples: 'READ' has background #fdd3b1 and text #7c2d12. 'Writing' has background #e6cefe and text #581c87. Consistent padding: 2px vertical, 6px horizontal.

### Content Tag (Secondary)

**Role:** More granular content tags, e.g. 'Plants'

Pill-shaped with 9999px border-radius. Text 'Inter' 14px, weight 400. Background #daf5ae, text #365314. Consistent padding: 2px vertical, 6px horizontal. Similar to primary tags but uses specific accent colors for different themes.

### Image Card

**Role:** Card containing an image

Image has 4px border-radius. Card itself has 8px border-radius with #e5e7eb border. A subtle shadow rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px is used to give images a slight lift off the page, mimicking prints on a surface.

### Footer Link

**Role:** Navigational links in the footer

Text 'Inter' 16px, weight 400, #a3a3a3. No underline. Color remains the same on hover, only interaction is implied by cursor change, subtly minimalist.

## Do's and Don'ts

### Do

- Prioritize 'Fraunces' for all headings and short, impactful statements to leverage its elegant, light-weight character.
- Use 'Inter' 16px weight 400 for all paragraph text, maintaining a consistent, highly readable, and unobtrusive voice.
- Apply #fafafa as the primary background color for all main content areas to create a bright, airy canvas.
- Utilize #e5e7eb for subtle borders and background for non-interactive list items or dividers, maintaining visual softness.
- Employ 8px border-radius for all content cards and larger UI elements, balancing subtle softness with structure.
- Apply 9999px border-radius to all interactive tags and buttons, creating a distinct pill shape that signals interactivity.
- Use accent colors (e.g., #7c2d12, #581c87, #0c4a6, #365314) and their light background variants consistently for content categorization, acting as visual cues like colored labels.
- Apply minimal inset shadow rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px -2px 0px 1px inset to card backgrounds, giving them a subtle definition without heavy lifting.

### Don't

- Avoid bolding or using heavier weights for 'Fraunces'; its impact comes from its lightness (weight 300).
- Do not use highly saturated colors for large blocks of content; reserve them for small, intentional accents only.
- Refrain from introducing strong drop shadows; the design relies on subtle inset shadows for depth or light elevation for images (rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px).
- Avoid using multiple border-radii values for a single component type; maintain consistency (e.g., tags are always 9999px).
- Do not use #000000 for body text unless higher contrast is explicitly required, #171717 or #a3a3a3 are preferred for a softer read.
- Do not vary letter spacing from the defined values; 'Inter' at -0.4px and 'Fraunces' at -0.9px letter-spacing are critical to the typographic feel.
- Avoid generic hover states like simple color changes for interactive elements; opt for underlines on links or distinct background changes for buttons/tags.

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px -2px 0px 1px inset`
- **Shadow 2:** `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`

## Imagery

The visual language blends personal photography (a cat, a person climbing, a beach scene) with product screenshots (UI designs, book covers) and abstract graphics (chess patterns). Photography is largely unedited, natural, and sometimes retro-filtered (e.g., 'FilmNeverDie KIRO 400'), giving a raw, authentic feel. Images are primarily contained within card components, featuring a 4px border-radius, often with subtle, lifting shadows (rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px). The role of imagery is descriptive and personal, illustrating content rather than existing purely decoratively, contributing heavily to the 'journal' aesthetic. Density is image-heavy in the grid sections, balancing the text-dominant introductory area.

## Layout

The page follows a `max-width 1536px` centered layout, offering a structured, comfortable reading experience. The hero section presents a centered block of text with a large, inviting 'Fraunces' headline. Below the hero, the content transitions into a dynamic, asymmetric grid that blends images, short text blocks, and categorized content cards. The rhythm of sections is primarily a flow of content blocks with consistent vertical spacing (40px sections, 12-24px internal gaps). The navigation is a minimalist sticky header and also appears as inline text links. A significant feature is the `flex/grid` layout of content, favoring a varied and engaging presentation over rigid rows and columns.

## Similar Brands

- **Read.cv** — Clean typographic focus, 'digital garden' aesthetic for personal presence, use of subtle neutral palette with occasional accent.
- **Notion** — Whitespace-heavy, content-first approach, strong emphasis on readable typography, and subtle contextual highlighting for categorized data.
- **Substack** — Editorial feel, emphasis on long-form content, and a clean, unobtrusive design that prioritizes text readability.
- **Linear** — Uses a clean, structured component system with subtle shadows and a largely achromatic color palette, but applied to a SaaS context.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #fafafa;
  --color-paper-gray: #e5e7eb;
  --color-charcoal-text: #171717;
  --color-ink-black: #000000;
  --color-subtle-gray: #a3a3a3;
  --color-accent-orange: #7c2d12;
  --color-highlight-orange: #fdd3b1;
  --color-accent-violet: #581c87;
  --color-highlight-violet: #e6cefe;
  --color-accent-blue: #0c4a6;
  --color-highlight-blue: #afe5fc;
  --color-accent-green: #365314;
  --color-highlight-green: #daf5ae;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-fraunces: 'Fraunces', Georgia, serif;
  --font-ui-monospace: 'ui-monospace', monospace;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.4px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.4px;
  --text-heading: 30px;
  --leading-heading: 1.25;
  --tracking-heading: -0.9px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.9px;
  --text-display: 60px;
  --leading-display: 1.11;
  --tracking-display: -0.9px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --radius-tags: 4px;
  --radius-cards: 8px;
  --radius-images: 4px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px -2px 0px 1px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #fafafa;
  --color-paper-gray: #e5e7eb;
  --color-charcoal-text: #171717;
  --color-ink-black: #000000;
  --color-subtle-gray: #a3a3a3;
  --color-accent-orange: #7c2d12;
  --color-highlight-orange: #fdd3b1;
  --color-accent-violet: #581c87;
  --color-highlight-violet: #e6cefe;
  --color-accent-blue: #0c4a6;
  --color-highlight-blue: #afe5fc;
  --color-accent-green: #365314;
  --color-highlight-green: #daf5ae;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-fraunces: 'Fraunces', Georgia, serif;
  --font-ui-monospace: 'ui-monospace', monospace;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.4px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.4px;
  --text-heading: 30px;
  --leading-heading: 1.25;
  --tracking-heading: -0.9px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.9px;
  --text-display: 60px;
  --leading-display: 1.11;
  --tracking-display: -0.9px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --radius-tags: 4px;
  --radius-cards: 8px;
  --radius-images: 4px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px -2px 0px 1px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
}
```
