---
version: alpha
name: COS
description: This design system projects a minimalist, stark elegance, emphasizing the clothing and photography through an almost complete absence of decorative elements. It uses a monochromatic palette of crisp white and deep black, creating high contrast and clear readability without visual noise. Strict alignment and ample whitespace around text afford a sense of luxury and precision, allowing the product imagery to command full attention as the primary visual interest. The visual impression is one of curated, understated sophistication.
colors:
  pure-white: "#ffffff"
  ink-black: "#000000"
  charcoal: "#080808"
  pale-gray: "#dadada"
  alert-red: "#c80000"
spacing:
  elementGap: 8px
  sectionGap: 30px
components:
  informational-banner:
    role: 
  subscription-modal-popup:
    role: 
  button-group-cta-variants:
    role: 
  outline-cta-button-black-text:
    role: Primary Calls to Action (CTA) on light backgrounds.
  solid-cta-button-white-text:
    role: High-emphasis calls to action, typically for submission or confirmation.
  ghost-navigation-link-white-text:
    role: Navigation links or secondary actions on dark backgrounds.
  ghost-navigation-link-black-text:
    role: Navigation links or secondary actions on light backgrounds.
  header-navigation:
    role: Top-level site navigation.
  modal-overlay-button:
    role: Button within modal dialogs, typically for primary action.
  informational-banner:
    role: Top-bar promotions or announcements.
---

## Overview

**North Star:** Gallery Wall Catalog: A stark, bright space where product imagery is the art, framed by minimalist typography and pure white expanses.

This design system projects a minimalist, stark elegance, emphasizing the clothing and photography through an almost complete absence of decorative elements. It uses a monochromatic palette of crisp white and deep black, creating high contrast and clear readability without visual noise. Strict alignment and ample whitespace around text afford a sense of luxury and precision, allowing the product imagery to command full attention as the primary visual interest. The visual impression is one of curated, understated sophistication.

### Do's

- Maintain a monochromatic palette with Pure White (#ffffff) backgrounds and Ink Black (#000000) text for visual clarity.
- Use SuisseIntl font exclusively for all text elements, varying only weight and size to create hierarchy.
- Employ hard 0px radius for all elements, including buttons and interactive components, to uphold a structured aesthetic.
- Ensure generous whitespace around content and components, with element gaps primarily at 8px and section gaps at 30px.
- Utilize border-bottom for subtle hover states and secondary navigation links instead of background color changes where possible.

### Don'ts

- Avoid using rounded corners or soft shadows; the design system strictly adheres to sharp edges and flat surfaces.
- Do not introduce additional color palettes or accent colors beyond Alert Red (#c80000) for semantic feedback.
- Refrain from using any letter-spacing on body text; apply it only to larger headlines and distinct navigational elements where specified.
- Do not use gradients or complex background patterns; maintain solid color backgrounds.
- Avoid decorative icons or illustrations; imagery should primarily come from high-quality product photography.

### Layout

The page maintains a full-bleed structure without a fixed pageMaxWidth, allowing imagery to extend to the viewport edges. The hero section is a prominent split-screen, showcasing two large, distinct product images (woman/man) side-by-side, each acting as a primary navigation element for gender categories. Subsequent sections likely follow a pattern of large image blocks or structured grid layouts to display products. The overall rhythm is spacious, punctuated by large visual elements and generous vertical spacing, emphasizing individual items over dense information. A sticky header is present for navigation, along with a minimal top-bar informational banner.

### Imagery

The visual language is dominated by professional, high-key photography of models in product. Images are full-bleed or presented in large, impactful blocks, framed by the stark white UI. The photography itself is the main source of visual interest, often appearing desaturated or in black and white to maintain a cohesive, clean aesthetic. The treatment is consistently isolated and clean, with no overlapping elements or complex masks. The density is image-heavy, prioritizing product showcase over textual content.
