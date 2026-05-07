---
version: alpha
name: "Nakedcityfilms"
description: "Nakedcityfilms is an unpolished, high-contrast visual experience, evoking raw energy and directness. The stark contrast between Electric Blue and Black backgrounds with intermittent stark White serves as the primary visual driver, creating immediate tension and engagement. Minimalist typography, dominated by custom 'Haas Grotesk Medium' in various sizes and a hyper-specific 'TRJNDaVinci Medium Trial Italic' for display text, reinforces the unconventional and bold identity. The design eschews shadows and complex visual effects, relying instead on bold color blocking and typography for impact."
theme: "mixed"
industry: "media"
source_url: "https://www.nakedcityfilms.com"
refero_style_id: "b7fc2173-c9b1-45ed-bd3a-9999320b3248"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776010484930-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776010484930-thumb.jpg"
extracted_at: "2026-04-12T16:15:02.198Z"
---

# Nakedcityfilms — Style Reference

> Electric-Blue Street Art. Graffiti against a raw concrete wall, stark and direct.

**Theme:** mixed

**Industry:** media

Nakedcityfilms is an unpolished, high-contrast visual experience, evoking raw energy and directness. The stark contrast between Electric Blue and Black backgrounds with intermittent stark White serves as the primary visual driver, creating immediate tension and engagement. Minimalist typography, dominated by custom 'Haas Grotesk Medium' in various sizes and a hyper-specific 'TRJNDaVinci Medium Trial Italic' for display text, reinforces the unconventional and bold identity. The design eschews shadows and complex visual effects, relying instead on bold color blocking and typography for impact.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Electric Blue | #0004eb | `--color-electric-blue` | Key brand accent for interactive elements, large display text, and background blocks. It creates a high-energy, almost fluorescent, pop against the darker neutrals. |
| Midnight Ink | #050516 | `--color-midnight-ink` | Primary dark background for sections and general body text, functioning as both a surface and a text color to reinforce the high-contrast aesthetic. |
| Canvas White | #ffffff | `--color-canvas-white` | Dominant background for specific sections and primary text color on dark backgrounds, offering a clean, stark contrast. |
| Pallid Gray | #e6e6e6 | `--color-pallid-gray` | Subtle background for UI elements and muted text, providing a slightly softer neutral than Canvas White but maintaining a light base. |
| Ash Dust | #979797 | `--color-ash-dust` | Muted text for secondary information and navigational elements, providing readability without competing with the Electric Blue. |

## Tokens — Typography

### Haas Grotesk Medium

- **Token:** `--font-haas-grotesk-medium`
- **Substitute:** Inter
- **Weights:** 100, 500
- **Sizes:** 12px, 13px, 16px, 18px, 26px, 44px, 68px
- **Line heights:** 1.00, 1.10, 1.11, 1.20, 1.67, 2.31
- **Letter spacing:** -0.03em at 68px, -0.015em at 44px, -0.012em at 26px, -0.01em at 18px
- **Role:** The workhorse font for all general text from navigation to body copy and display headlines. The use of a medium weight (`500`) for navigation and body text, contrasting with the very light `100` for some display sizes, creates a strong, distinct voice for the brand, balancing assertiveness with an airy feel.

### TRJNDaVinci Medium Trial Italic

- **Token:** `--font-trjndavinci-medium-trial-italic`
- **Substitute:** Georgia Italic
- **Weights:** 500
- **Sizes:** 26px, 44px, 68px
- **Line heights:** 1.10, 1.20
- **Letter spacing:** -0.03em at 68px, -0.03em at 44px, -0.03em at 26px
- **Role:** A distinct, italic display font reserved for specific impactful headlines, reinforcing the brand's unique and artistic flair. Its limited usage makes these headlines feel like special, curated statements.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1 | -0.015px | `--text-caption` |
| body | 16px | 1.67 | — | `--text-body` |
| subheading | 18px | 2.31 | -0.01px | `--text-subheading` |
| heading | 26px | 1.11 | -0.012px | `--text-heading` |
| heading-lg | 44px | 1.2 | -0.015px | `--text-heading-lg` |
| display | 68px | 1.1 | -0.03px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-85 | 85px | `--spacing-85` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 12px |

## Components

### Scroll Indicator Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Link Block — Studio Work Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### About Section — Display Headline Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Interactive menu item

Text uses Haas Grotesk Medium, 16px, weight 500, color Ash Dust (#979797). No specific padding or background. 'Talents' has a superscript '13' in Electric Blue (#0004eb).

### Hero Section Overlay Card

**Role:** Central content display on hero

Background is Canvas White (#ffffff), text is Midnight Ink (#050516) or Electric Blue (#0004eb). Padding of 40px left/right, and varying top/bottom (70px for full sections). Contains brand logo and navigation.

### Scroll Indicator Bar

**Role:** Non-interactive visual cue

Solid bar of Electric Blue (#0004eb) with repeating 'scroll down' text in Canvas White (#ffffff), Haas Grotesk Medium, 12px, weight 500. Consistent 2px element gap between pieces of text.

### Display Headline - Primary

**Role:** Main section titles

Uses Haas Grotesk Medium, 68px, letter-spacing -0.03em, line-height 1.00, color Electric Blue (#0004eb). Appears on Pallid Gray (#e6e6e6) background.

### Display Headline - Secondary

**Role:** Sub-headlines or emphasized phrases

Uses TRJNDaVinci Medium Trial Italic, 68px, letter-spacing -0.03em, line-height 1.10, color Electric Blue (#0004eb).

### Feature Link Block

**Role:** Clickable content highlight

Two lines of text, top line is Haas Grotesk Medium, 26px, color Electric Blue (#0004eb). Second line is Haas Grotesk Medium, 18px, color Canvas White (#ffffff). On Midnight Ink (#050516) background.

### Footer Text Link

**Role:** Informational link

Haas Grotesk Medium, 12px, Canvas White (#ffffff) text on Midnight Ink (#050516) background. Underlined on hover (not specified in data, assumed standard behavior).

## Do's and Don'ts

### Do

- Use Electric Blue (#0004eb) exclusively for key interactive elements, brand identity, and high-impact headlines.
- Maintain high contrast ratios: either Electric Blue on Pallid Gray (#e6e6e6) or Canvas White (#ffffff), or Canvas White on Midnight Ink (#050516) or Electric Blue.
- Employ Haas Grotesk Medium for all body text, navigation, and most headlines, varying weights between 100 and 500.
- Reserve TRJNDaVinci Medium Trial Italic for distinct, artistic headlines to create unique emphasis.
- Utilize a base unit of 4px for all spacing measurements, with frequent application of 12px, 20px, 40px, and 70px for consistent visual rhythm.

### Don't

- Avoid using soft shadows or subtle gradients; the design thrives on starkness and bold color blocks.
- Do not introduce additional font families; restrict typography to Haas Grotesk Medium and TRJNDaVinci Medium Trial Italic.
- Steer clear of any color outside the defined palette of Electric Blue, Midnight Ink, Canvas White, Pallid Gray, and Ash Dust.
- Do not use Electric Blue (#0004eb) as a background for extensive body text due to its intensity; it is for accents and blocks.
- Avoid decorative elements like icons or complex shapes; the visual identity comes from typography and color blocking.

## Imagery

The site heavily features video and photography, often as full-bleed background elements. When visible, photography is typically high-key or uses natural lighting, maintaining a candid, unstaged feel that is often desaturated, letting the UI's Electric Blue provide the primary color. Product or portfolio images (e.g., project case studies) are displayed as contained, rectangular blocks, with a focus on capturing real scenes or production stills rather than stylized or artistic compositions. The role of imagery is primarily atmospheric and to showcase work examples, often used in conjunction with bold typography overlaying them.

## Layout

The page alternates between full-bleed background visuals (often video or photography) and contained content blocks, creating dynamic interplay. The hero section features a central, rectangular content card on a full-bleed video background. Subsequent sections use a mix of full-width color blocks (Midnight Ink or Pallid Gray) and sections with content constrained to a central column. Content arrangement frequently uses left-aligned text blocks, often with large display typography. Navigation is typically in a top bar, sometimes within a contained card, minimal and direct. Vertical spacing is generous, using 40px and 70px for section separation, contributing to a comfortable density.

## Similar Brands

- **AIGA** — Uses bold typography as primary visual, high-contrast black/white with a single vibrant accent color.
- **Huge Inc.** — Employs a stark, minimalist design with strong typographic hierarchy and limited, impactful color palette.
- **Wieden+Kennedy** — Focuses on bold, blocky layouts and direct messaging, often with a prominent brand accent paired with dark neutrals.
- **Studio Dumbar** — Known for highly typographic designs, strong color contrasts, and a willingness to use unusual typefaces for brand identity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-electric-blue: #0004eb;
  --color-midnight-ink: #050516;
  --color-canvas-white: #ffffff;
  --color-pallid-gray: #e6e6e6;
  --color-ash-dust: #979797;
  --font-haas-grotesk-medium: 'Haas Grotesk Medium', Inter;
  --font-trjndavinci-medium-trial-italic: 'TRJNDaVinci Medium Trial Italic', Georgia Italic;
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: -0.015px;
  --text-body: 16px;
  --leading-body: 1.67;
  --text-subheading: 18px;
  --leading-subheading: 2.31;
  --tracking-subheading: -0.01px;
  --text-heading: 26px;
  --leading-heading: 1.11;
  --tracking-heading: -0.012px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.015px;
  --text-display: 68px;
  --leading-display: 1.1;
  --tracking-display: -0.03px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-85: 85px;
}
```

### Tailwind v4

```css
@theme {
  --color-electric-blue: #0004eb;
  --color-midnight-ink: #050516;
  --color-canvas-white: #ffffff;
  --color-pallid-gray: #e6e6e6;
  --color-ash-dust: #979797;
  --font-haas-grotesk-medium: 'Haas Grotesk Medium', Inter;
  --font-trjndavinci-medium-trial-italic: 'TRJNDaVinci Medium Trial Italic', Georgia Italic;
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: -0.015px;
  --text-body: 16px;
  --leading-body: 1.67;
  --text-subheading: 18px;
  --leading-subheading: 2.31;
  --tracking-subheading: -0.01px;
  --text-heading: 26px;
  --leading-heading: 1.11;
  --tracking-heading: -0.012px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.015px;
  --text-display: 68px;
  --leading-display: 1.1;
  --tracking-display: -0.03px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-85: 85px;
}
```
