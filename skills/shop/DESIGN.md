---
version: alpha
name: Shop
description: Shop's design system evokes a digital boutique atmosphere: clean, spacious white surfaces present product cards and information with minimal distraction allowing the content to breathe. A distinctive vivid violet acts as a signature accent, punctuating interactive elements and branding. Typography is compact and precise, maintaining a high information density without feeling cramped, while subtle shadows give elements a soft lift.
colors:
  canvas: "#ffffff"
  ink-black: "#000000"
  subtle-gray: "#ebebeb"
  muted-text: "#707070"
  soft-gray: "#c9cbcc"
  placeholder-text: "#7b7b7b"
  shop-violet: "#5433eb"
  violet-shadow: "#c0b5f3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.33
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.33
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.33
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
spacing:
  cardRadius: 11.4046px
  buttonRadius: 22.8092px
  elementGap: 8px
  sectionGap: 40px
components:
  ghost-button:
    role: Secondary action or navigational link.
  rounded-white-button:
    role: General utility button, often found in modals or forms.
  pill-button:
    role: Prominent action or filter button.
  flat-square-button:
    role: Icon-only button or small inline action.
  product-card:
    role: Displays individual product items.
  search-input:
    role: Primary search functionality.
  pill-search-submit-button:
    role: Submit button for the search input.
---

## Overview

**North Star:** Digital boutique showcase

Shop's design system evokes a digital boutique atmosphere: clean, spacious white surfaces present product cards and information with minimal distraction allowing the content to breathe. A distinctive vivid violet acts as a signature accent, punctuating interactive elements and branding. Typography is compact and precise, maintaining a high information density without feeling cramped, while subtle shadows give elements a soft lift.

### Do's

- Use Canvas (#ffffff) sparingly as a primary action background, preferring Shop Violet (#5433eb) for true calls to action to maintain brand distinction.
- Apply GTStandard-MRegular for all main body content and instructional text, utilizing the specified letter-spacing for each size to maintain compact readability.
- Employ the 11.4046px radius for product image containers within cards to provide a soft-edged visual.
- Ensure interactive elements such as buttons and form fields primarily use the 22.8092px or 1e+07px (pill shape) border radii for consistency.
- Maintain an elementGap of 8px between closely related UI components to ensure comfortable spacing within compact layouts.
- Utilize Muted Text (#707070) for descriptive labels and secondary information, reserving Ink Black (#000000) for primary headlines and critical text.
- Apply the Violet Shadow (rgba(69, 36, 219, 0.34) 0px 4px 24px 0px) to interactive and elevated components, especially buttons, to provide distinct depth.

### Don'ts

- Do not use generic system fonts; always map to the specified GTStandard or Shopify Sans families or their substitutes.
- Avoid using Ink Black (#000000) as a prominent background color; it is reserved for text, borders, and accents.
- Do not deviate from the established letter-spacing values from GTStandard-MRegular typographic scale; they are critical for the brand’s compact text aesthetic.
- Do not introduce new border radii beyond the defined set (8px, 11.4046px, 17.1064px, 22.8092px, 28px, 32px, 9999px) to maintain a consistent visual language.
- Do not use highly saturated colors other than Shop Violet (#5433eb); the system relies on a monochrome base with one distinct accent.
- Avoid large, impactful hero images; imagery should be contained within cards or product visuals.
- Do not use hard, sharp shadows; all elevation should be achieved using the soft, diffused Violet Shadow.

### Layout

The page maintains a centered, contained layout, likely with a maximum width, creating ample white space around content. The hero section features a prominent brand logo ('shop') and a central search bar. Product displays are arranged in a dynamic, slightly overlapping grid of rounded cards, giving a curated, editorial feel rather than a rigid structure. A left-hand persistent navigation sidebar uses small, monochromatic icons. Sections are visually distinct through large vertical spacing rather than explicit dividers.

### Imagery

This system primarily uses product-focused photography and minimal, abstract graphics. Photography is typically studio-shot, with products isolated on white or light backgrounds, often with soft, diffused lighting. Imagery in cards is contained, with a soft 11.4046px border radius, and often appears to float with a subtle shadow. Icons are monochromatic, typically Ink Black filled or outlined, with Shop Violet used for active states or branding. Imagery serves to showcase products and provide visual cues rather than create an overarching atmosphere.
