---
version: alpha
name: "Hyer Aviation"
description: "Hyer Aviation employs a commanding, high-contrast aesthetic, juxtaposing crisp white surfaces with deep, almost-black elements. Bold, large-scale typography creates immediate impact, while subtle details like rounded pill shapes and a single warm accent color temper its power. The design feels grounded and luxurious, with ample whitespace and a restrained color palette that allows imagery to take center stage, communicating sophistication through assertive simplicity."
theme: "light"
industry: "other"
source_url: "https://www.flyhyer.com"
refero_style_id: "f61cf515-ccd5-4494-bdd1-be9fe4d7258c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518358624-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518358624-thumb.jpg"
extracted_at: "2026-04-30T03:06:15.096Z"
---

# Hyer Aviation — Style Reference

> monochromatic luxury, sharp contrast

**Theme:** light

**Industry:** other

Hyer Aviation employs a commanding, high-contrast aesthetic, juxtaposing crisp white surfaces with deep, almost-black elements. Bold, large-scale typography creates immediate impact, while subtle details like rounded pill shapes and a single warm accent color temper its power. The design feels grounded and luxurious, with ample whitespace and a restrained color palette that allows imagery to take center stage, communicating sophistication through assertive simplicity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Obsidian | #000d10 | `--color-obsidian` | Primary text, dark surface backgrounds, button backgrounds, interactive elements, nav text. Creates a dominant, authoritative presence |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, light surface backgrounds, secondary text, button text, icons. Provides a clean, expansive foundation |
| Slate Mist | #8e8e95 | `--color-slate-mist` | Muted body text, navigation dividers, subtle borders. Used for secondary information that lives harmoniously within the high-contrast system |
| Desert Sienna | #bc7155 | `--color-desert-sienna` | Accent for call-to-action buttons, prominent graphical elements. This warm, earthy tone provides the only saturated color highlight, drawing attention with understated luxury |

## Tokens — Typography

### HelveticaNowDisplay

- **Token:** `--font-helveticanowdisplay`
- **Substitute:** system-ui
- **Weights:** 400, 700
- **Sizes:** 17px, 18px, 20px, 23px, 30px, 37px, 52px, 60px, 63px, 131px, 187px
- **Line heights:** 0.80, 0.91, 1.00, 1.09, 1.10, 1.20, 1.61
- **Letter spacing:** -0.02em at largest sizes, -0.01em at medium, 0.01em at smallest
- **Role:** All primary textual content: headlines, body, buttons, navigation. Its large scale and slightly condensed forms deliver a modern, impactful voice.

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** Arial
- **Weights:** 700
- **Sizes:** 17px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Used sparingly for specific bold text, likely for icons or small utility elements where a system sans-serif is a fallback.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 17px | 1.61 | 0.17px | `--text-body-sm` |
| subheading | 20px | 1.2 | 0.2px | `--text-subheading` |
| heading-sm | 30px | 1.1 | -0.3px | `--text-heading-sm` |
| heading | 52px | 1.09 | -0.52px | `--text-heading` |
| heading-lg | 63px | 0.91 | -0.63px | `--text-heading-lg` |
| display | 187px | 0.8 | -3.74px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-11 | 11px | `--spacing-11` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-31 | 31px | `--spacing-31` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-119 | 119px | `--spacing-119` |
| spacing-135 | 135px | `--spacing-135` |
| spacing-141 | 141px | `--spacing-141` |
| spacing-148 | 148px | `--spacing-148` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 1000px |
| other | 45px |
| buttons | 1000px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 68px |
| cardPadding | 22px |
| elementGap | 23px |

## Components

### Primary Filled Button

**Role:** Main call-to-action button, promoting core actions.

Background: Desert Sienna (#bc7155), Text: Canvas White (#ffffff), Border: None, Border Radius: 1000px (pill shape), Padding: 15px top, 22px horizontal, 16px bottom. Font: HelveticaNowDisplay, 17px, bold (700).

### Obsidian Filled Button

**Role:** Secondary call-to-action or general action buttons.

Background: Obsidian (#000d10), Text: Canvas White (#ffffff), Border: 1px Canvas White (#ffffff) for hover/focus, Border Radius: 1000px (pill shape), Padding: 15px top, 22px horizontal, 16px bottom. Font: HelveticaNowDisplay, 17px, bold (700).

### Obsidian Ghost Button

**Role:** Alternative action buttons, appearing less prominent than filled variants.

Background: transparent, Text: Canvas White (#ffffff), Border: 1px Canvas White (#ffffff), Border Radius: 1000px (pill shape), Padding: 15px top, 22px horizontal, 16px bottom. Font: HelveticaNowDisplay, 17px, bold (700).

### Navigation Link

**Role:** Primary navigation items in the header and footer.

Text: Obsidian (#000d10) or Canvas White (#ffffff), active state may have a subtle underline. Font: HelveticaNowDisplay, 17px, 400 weight. Spacing: 13px top/bottom margin, 34px right margin.

### Feature Card

**Role:** Displays key features or offerings with associated text.

Background: Canvas White (#ffffff), Text: Obsidian (#000d10) or Slate Mist (#8e8e95). Font: HelveticaNowDisplay, varying sizes. Likely has internal padding of 22px.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) for primary backgrounds and Obsidian (#000d10) for primary text to maintain high contrast (19.7:1 AAA).
- Use HelveticaNowDisplay consistently across all text, emphasizing weight 700 for headings and weight 400 for body text.
- Apply a 1000px border-radius to all buttons and prominent links to achieve the signature pill shape.
- Reserve Desert Sienna (#bc7155) exclusively for primary action buttons to create a single, clear focal point.
- Ensure generous spacing: utilize 23px for element gaps and 68px between major sections.
- Employ negative letter-spacing for large headlines to condense text and enhance impact, specifically -0.02em at sizes like 187px.
- Use Slate Mist (#8e8e95) for supporting text and subtle UI elements where less visual weight is desired, such as form helper text or secondary navigation.

### Don't

- Avoid using multiple saturated colors; Desert Sienna (#bc7155) is the singular accent color.
- Do not introduce complex gradients or shadows, as the system relies on flat surfaces and high contrast.
- Refrain from using smaller body text sizes than 17px to maintain readability and design gravitas.
- Do not deviate from the HelveticaNowDisplay font for any brand-related text.
- Avoid tight spacing around interactive elements; maintain a minimum of 22px horizontal padding for buttons.
- Do not use square or mildly rounded corners for buttons; the pill shape (1000px radius) is critical for brand identity.
- Do not use generic gray tones for text; ensure body text aligns with Obsidian (#000d10) or Slate Mist (#8e8e95) to maintain the established hierarchy.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas White | #ffffff | Primary page background and default surface for content. |
| 2 | Obsidian Surface | #000d10 | Elevated dark surfaces, footer, and backgrounds for prominent sections. |

## Imagery

The site uses a clean mix of professional product renders (specifically, a white private jet prominent against a subtly cloudy sky) and abstract, high-contrast imagery to convey luxury and precision. Photography is minimalist, focusing on the product itself with little extraneous context. Icons, where present, are likely minimal and monochromatic, adhering to the high-contrast aesthetic. Imagery plays a key role in setting the atmosphere without overwhelming the clean UI.

## Layout

The page primarily utilizes a full-bleed structure, especially for the hero section which extends across the viewport with central text and imagery. Content sections alternate between stark white full-width blocks and dark full-width blocks, creating a distinct visual rhythm. Text and imagery are often arranged in centered stacks or simple two-column layouts. The overall density is spacious, allowing elements to breathe. Navigation is a minimalist top bar with links aligned to the right, often disappearing into a hamburger menu on smaller screens, and a utility navigation in the footer.

## Similar Brands

- **NetJets** — Luxury aviation brand with high-quality product imagery and emphasis on exclusivity.
- **Flexjet** — Focus on private jet services, using clean layouts and impactful visuals.
- **Stripe** — Strong typographic hierarchy, large headlines, and a focus on essential UI elements over decorative embellishments.
- **Apple** — Product-centric visuals against clean backgrounds, high contrast text, and a strong sense of modern minimalism.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-obsidian: #000d10;
  --color-canvas-white: #ffffff;
  --color-slate-mist: #8e8e95;
  --color-desert-sienna: #bc7155;
  --font-helveticanowdisplay: 'HelveticaNowDisplay', system-ui;
  --font-sans-serif: 'sans-serif', Arial;
  --text-body-sm: 17px;
  --leading-body-sm: 1.61;
  --tracking-body-sm: 0.17px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: 0.2px;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.3px;
  --text-heading: 52px;
  --leading-heading: 1.09;
  --tracking-heading: -0.52px;
  --text-heading-lg: 63px;
  --leading-heading-lg: 0.91;
  --tracking-heading-lg: -0.63px;
  --text-display: 187px;
  --leading-display: 0.8;
  --tracking-display: -3.74px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-31: 31px;
  --spacing-34: 34px;
  --spacing-38: 38px;
  --spacing-45: 45px;
  --spacing-51: 51px;
  --spacing-52: 52px;
  --spacing-53: 53px;
  --spacing-58: 58px;
  --spacing-59: 59px;
  --spacing-60: 60px;
  --spacing-68: 68px;
  --spacing-119: 119px;
  --spacing-135: 135px;
  --spacing-141: 141px;
  --spacing-148: 148px;
  --radius-links: 1000px;
  --radius-other: 45px;
  --radius-buttons: 1000px;
  --surface-canvas-white: #ffffff;
  --surface-obsidian-surface: #000d10;
}
```

### Tailwind v4

```css
@theme {
  --color-obsidian: #000d10;
  --color-canvas-white: #ffffff;
  --color-slate-mist: #8e8e95;
  --color-desert-sienna: #bc7155;
  --font-helveticanowdisplay: 'HelveticaNowDisplay', system-ui;
  --font-sans-serif: 'sans-serif', Arial;
  --text-body-sm: 17px;
  --leading-body-sm: 1.61;
  --tracking-body-sm: 0.17px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: 0.2px;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.3px;
  --text-heading: 52px;
  --leading-heading: 1.09;
  --tracking-heading: -0.52px;
  --text-heading-lg: 63px;
  --leading-heading-lg: 0.91;
  --tracking-heading-lg: -0.63px;
  --text-display: 187px;
  --leading-display: 0.8;
  --tracking-display: -3.74px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-31: 31px;
  --spacing-34: 34px;
  --spacing-38: 38px;
  --spacing-45: 45px;
  --spacing-51: 51px;
  --spacing-52: 52px;
  --spacing-53: 53px;
  --spacing-58: 58px;
  --spacing-59: 59px;
  --spacing-60: 60px;
  --spacing-68: 68px;
  --spacing-119: 119px;
  --spacing-135: 135px;
  --spacing-141: 141px;
  --spacing-148: 148px;
  --radius-links: 1000px;
  --radius-other: 45px;
  --radius-buttons: 1000px;
  --surface-canvas-white: #ffffff;
  --surface-obsidian-surface: #000d10;
}
```
