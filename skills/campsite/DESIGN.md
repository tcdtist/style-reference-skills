---
version: alpha
name: "Campsite"
description: "Campsite presents a pragmatic, focused aesthetic, prioritizing content clarity over visual embellishment. A mostly grayscale palette punctuated by sparse, functional pops of color guides attention without distraction. Typography is both compact and airy, creating easily scannable information blocks. The overall effect is one of quiet efficiency, like a well-organized office stripped of excess."
theme: "light"
industry: "productivity"
source_url: "https://campsite.design"
refero_style_id: "e8589e7c-5ba9-4923-aa7f-0f1bf0d679be"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775922929292-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775922929292-thumb.jpg"
extracted_at: "2026-04-11T15:55:51.252Z"
---

# Campsite — Style Reference

> Desktop OS window pane, minimalist and functional.

**Theme:** light

**Industry:** productivity

Campsite presents a pragmatic, focused aesthetic, prioritizing content clarity over visual embellishment. A mostly grayscale palette punctuated by sparse, functional pops of color guides attention without distraction. Typography is both compact and airy, creating easily scannable information blocks. The overall effect is one of quiet efficiency, like a well-organized office stripped of excess.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #171717 | `--color-ink` | Primary text, headings, icons. The deep, almost black, tone provides maximum contrast against light backgrounds. |
| Canvas | #ffffff | `--color-canvas` | Page backgrounds, card surfaces, UI elements. The pure white ensures a clean, expansive foundation for content. |
| Fog | #f5f5f5 | `--color-fog` | Subtle background for UI elements, hover states, input fields. Provides visual separation without harshness, creating soft boundaries. |
| Steel | #a3a3a3 | `--color-steel` | Secondary text, subtle borders, inactive elements. Offers a softer alternative to Ink for less prominent information. |
| Graystone | #737373 | `--color-graystone` | Tertiary text, descriptive labels. A deeper gray than Steel for slightly more emphasis while remaining muted. |
| Ember | #451a03 | `--color-ember` | Accent for important notifications or specific content highlighting. Its muted orange hue adds warmth without overwhelming the neutral palette. |
| Lagoon | #3b82f6 | `--color-lagoon` | Highlight for interactive elements, focus states. A vivid blue that stands out clearly against the grays and acts as a primary interaction indicator. |
| Success Green | #22c55 | `--color-success-green` | Feedback for positive actions, confirmation messages. A clear, vivid green signalling success. |
| Warning Red | #ef4444 | `--color-warning-red` | Negative feedback, alert indicators. A vivid red to denote caution or error. |
| Pale Yellow | #fef3c7 | `--color-pale-yellow` | Subtle background for warnings or highlights, providing a soft context without high contrast. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 20px, 22px, 29px, 58px
- **Line heights:** 1.00, 1.20, 1.33, 1.40, 1.43, 1.50, 1.56, 1.63, 1.80
- **Letter spacing:** -0.0310em at 58px, -0.0180em at 29px, -0.0170em at 22px, 0.0250em at 10px
- **Role:** The primary typeface for all text. Its clean, geometric forms at various weights provide excellent readability for both headings and body text, supporting a professional yet approachable tone. Tighter letter spacing on display sizes prevents them from sprawling.

### ui-monospace

- **Token:** `--font-ui-monospace`
- **Substitute:** monospace
- **Weights:** 400, 600
- **Sizes:** 12px
- **Line heights:** 1.00
- **Role:** Used for code snippets or specific data displays where precise alignment and character distinction are important, maintaining a technical aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 0.25px | `--text-caption` |
| body | 14px | 1.5 | 0px | `--text-body` |
| body-lg | 16px | 1.5 | 0px | `--text-body-lg` |
| subheading | 18px | 1.43 | 0px | `--text-subheading` |
| heading | 22px | 1.33 | -0.374px | `--text-heading` |
| heading-lg | 29px | 1.2 | -0.522px | `--text-heading-lg` |
| display | 58px | 1 | -1.8px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| fields | 4px |
| modals | 12px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.05) 0px 3px 6px -3px, rgba(0, 0, 0, 0.05) 0px 2px 4px -2px, rgba(0, 0, 0, 0.05) 0px 1px 2px -1px, rgba(0, 0, 0, 0.05) 0px 1px 1px -1px, rgba(0, 0, 0, 0.05) 0px 1px 0px -1px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.08) 0px 1px 1px -1px, rgba(0, 0, 0, 0.08) 0px 2px 2px -1px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgb(255, 255, 255) 0px 1px 0px 0px inset, rgb(255, 255, 255) 0px 1px 2px 1px inset, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px inset | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.05) 0px 1px 2px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 72px |
| elementGap | 4px |

## Components

### Announcement Banners

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Post Feed Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Button (Text)

**Role:** Interactive element

Ghost button with Ink text on Canvas background, borders set at rgba(0, 0, 0, 0.1), 9999px border radius. Padding 0px vertical, 10px horizontal. Used for top-level navigation.

### Secondary Action Button (Filled)

**Role:** Interactive element

Button with Ink text on Fog background, rgba(0, 0, 0, 0.1) borders, 6px border radius. Padding 0px vertical, 10px horizontal. Subtle background for secondary actions.

### Call to Action Button (Green)

**Role:** Interactive element

Button with Canvas text on Success Green (#22c55e) background, rgba(255, 255, 255, 0.12) borders, 9999px border radius. Padding 0px vertical, 10px horizontal. Signals primary actions with a clear visual cue.

### Icon Button (Ghost)

**Role:** Interactive element

Button with Light Gray text on rgba(255, 255, 255, 0.08) background, rgba(255, 255, 255, 0.12) borders, 9999px border radius. No padding, used for minimalist interactive icons.

### Homepage Headline

**Role:** Display Text

Inter, 58px, weight 600, line-height 1.00, letter-spacing -1.8px, Ink color. Dominant focal point for key messages.

### Section Heading

**Role:** Heading Text

Inter, 29px, weight 600, line-height 1.20, letter-spacing -0.522px, Ink color. Used for major section titles.

### Info Banner (Notice)

**Role:** Status/Alert

Small banner with Ember text on Pale Yellow background (#fef3c7), with 9999px border radius and 6px horizontal padding. Delivers important, but not critical, passive information.

### Notification Tag (Red)

**Role:** Status/Alert

Small tag with white text on Warning Red (#ef4444) background, 9999px border radius, minimal padding. Used for urgent, concise status updates.

### UI Card

**Role:** Content Container

Canvas background with soft elevation shadow (rgba(0, 0, 0, 0.05) 0px 3px 6px -3px, etc.), 8px border radius. Contains groups of related information.

### Input Field

**Role:** Interactive Input

Fog background, subtle border, 4px border radius. Placeholder text in Steel, active/focus state indicated by Lagoon.

## Do's and Don'ts

### Do

- Use Ink (#171717) for all primary body text and headlines to maintain directness.
- Apply 9999px border-radius to all action buttons for a consistent soft, pill-like appearance.
- Employ Lagoon (#3b82f6) exclusively for primary interactive states and link hovers to signal interactivity clearly.
- Maintain a clear visual hierarchy by utilizing Inter at weight 600 for all headings (29px and 58px) and weight 400 for body text.
- Separate content sections with at least 72px vertical spacing to ensure ample breathing room and prevent visual clutter.
- Design all content containers (cards, modals) with 8px border radius and the soft elevation shadow (rgba(0, 0, 0, 0.05) 0px 3px 6px -3px) to imply depth without heavy shadows.

### Don't

- Do not introduce strong chromatic colors other than Ember (#451a03), Lagoon (#3b82f6), Success Green (#22c55e), and Warning Red (#ef4444) to maintain the muted, focused palette.
- Avoid using multiple border-radius values on elements of the same type; stick to 9999px for buttons, 8px for cards, and 4px for inputs.
- Do not use letter spacing greater than normal for text smaller than 16px; tighter spacing is reserved for display sizes.
- Do not use heavy, dark shadows; the subtle rgba(0, 0, 0, 0.05) 0px 3px 6px -3px shadow is the specified elevation style.
- Avoid decorative gradients or background images; the design emphasizes clean surfaces and content focus.
- Do not use generic system default blue for links; ensure all links use Ink (#171717) with subtle underline or context-specific styling.

## Elevation

- **Card:** `rgba(0, 0, 0, 0.05) 0px 3px 6px -3px, rgba(0, 0, 0, 0.05) 0px 2px 4px -2px, rgba(0, 0, 0, 0.05) 0px 1px 2px -1px, rgba(0, 0, 0, 0.05) 0px 1px 1px -1px, rgba(0, 0, 0, 0.05) 0px 1px 0px -1px`
- **Button/Link (Interactive):** `rgba(0, 0, 0, 0.08) 0px 1px 1px -1px, rgba(0, 0, 0, 0.08) 0px 2px 2px -1px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgb(255, 255, 255) 0px 1px 0px 0px inset, rgb(255, 255, 255) 0px 1px 2px 1px inset, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px inset`

## Imagery

This site predominantly uses product screenshots and UI mockups presented within realistic browser/OS frames, giving a 'software-in-use' authenticity. Photography is minimal, appearing primarily as small profile pictures. Illustrations are abstract and appear in the background of the hero section, an energetic splash of orange and white that provides a counterpoint to the otherwise orderly UI elements. Icons are filled, monochrome (Ink), and consistently clean-lined. The overall role of imagery is explanatory and functional, showcasing the product directly rather than relying on abstract concepts or lifestyle visuals; the abstract hero gradient is the only concession to mood, pulling from energetic, primary colors and making it distinct.

## Layout

The page maintains a centered, max-width layout for content, which contrasts with the full-bleed hero section. The hero prominently features a large, centered headline over a background that combines a product screenshot (UI mockups) with an abstract, energetic gradient. Subsequent sections employ a consistent alternating pattern of text on the left and visual elements (product screenshots, further UI mockups) on the right, or vice versa. Vertical rhythm is established through generous and consistent section gaps (around 72px). Content density within sections is moderate, with ample whitespace around text blocks and UI components, promoting readability. Navigation is a simple top bar with text links and a 'ghost' style button on the far right.

## Similar Brands

- **Linear** — Shares a similar emphasis on clean, functional UI, high contrast typography, and restrained use of color for interaction and status.
- **Notion** — Employs a text-heavy, content-first approach with a minimalist aesthetic and a focus on clarity and organization.
- **Hey.com** — Utilizes a sparse color palette, strong typography, and a compact, desktop-app like feel for communication and productivity tools.
- **Basecamp** — Focuses on clear information display and a straightforward design for project management, with color used sparingly for emphasis.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #171717;
  --color-canvas: #ffffff;
  --color-fog: #f5f5f5;
  --color-steel: #a3a3a3;
  --color-graystone: #737373;
  --color-ember: #451a03;
  --color-lagoon: #3b82f6;
  --color-success-green: #22c55;
  --color-warning-red: #ef4444;
  --color-pale-yellow: #fef3c7;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-ui-monospace: 'ui-monospace', monospace;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.25px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: 0px;
  --text-heading: 22px;
  --leading-heading: 1.33;
  --tracking-heading: -0.374px;
  --text-heading-lg: 29px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.522px;
  --text-display: 58px;
  --leading-display: 1;
  --tracking-display: -1.8px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-160: 160px;
  --radius-cards: 8px;
  --radius-fields: 4px;
  --radius-modals: 12px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 3px 6px -3px, rgba(0, 0, 0, 0.05) 0px 2px 4px -2px, rgba(0, 0, 0, 0.05) 0px 1px 2px -1px, rgba(0, 0, 0, 0.05) 0px 1px 1px -1px, rgba(0, 0, 0, 0.05) 0px 1px 0px -1px;
  --shadow-xl-2: rgba(0, 0, 0, 0.08) 0px 1px 1px -1px, rgba(0, 0, 0, 0.08) 0px 2px 2px -1px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgb(255, 255, 255) 0px 1px 0px 0px inset, rgb(255, 255, 255) 0px 1px 2px 1px inset, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px inset;
  --shadow-xl-3: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #171717;
  --color-canvas: #ffffff;
  --color-fog: #f5f5f5;
  --color-steel: #a3a3a3;
  --color-graystone: #737373;
  --color-ember: #451a03;
  --color-lagoon: #3b82f6;
  --color-success-green: #22c55;
  --color-warning-red: #ef4444;
  --color-pale-yellow: #fef3c7;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-ui-monospace: 'ui-monospace', monospace;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.25px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: 0px;
  --text-heading: 22px;
  --leading-heading: 1.33;
  --tracking-heading: -0.374px;
  --text-heading-lg: 29px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.522px;
  --text-display: 58px;
  --leading-display: 1;
  --tracking-display: -1.8px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-160: 160px;
  --radius-cards: 8px;
  --radius-fields: 4px;
  --radius-modals: 12px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 3px 6px -3px, rgba(0, 0, 0, 0.05) 0px 2px 4px -2px, rgba(0, 0, 0, 0.05) 0px 1px 2px -1px, rgba(0, 0, 0, 0.05) 0px 1px 1px -1px, rgba(0, 0, 0, 0.05) 0px 1px 0px -1px;
  --shadow-xl-2: rgba(0, 0, 0, 0.08) 0px 1px 1px -1px, rgba(0, 0, 0, 0.08) 0px 2px 2px -1px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgb(255, 255, 255) 0px 1px 0px 0px inset, rgb(255, 255, 255) 0px 1px 2px 1px inset, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px inset;
  --shadow-xl-3: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
```
