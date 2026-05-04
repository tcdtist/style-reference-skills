---
version: alpha
name: Hyer Aviation
description: Hyer Aviation employs a commanding, high-contrast aesthetic, juxtaposing crisp white surfaces with deep, almost-black elements. Bold, large-scale typography creates immediate impact, while subtle details like rounded pill shapes and a single warm accent color temper its power. The design feels grounded and luxurious, with ample whitespace and a restrained color palette that allows imagery to take center stage, communicating sophistication through assertive simplicity.
colors:
  obsidian: "#000d10"
  canvas-white: "#ffffff"
  slate-mist: "#8e8e95"
  desert-sienna: "#bc7155"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.61
    letterSpacing: 0.17px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
    letterSpacing: -0.3px
  heading:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.09
    letterSpacing: -0.52px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 63px
    lineHeight: 0.91
    letterSpacing: -0.63px
  display:
    fontFamily: "system-ui"
    fontSize: 187px
    lineHeight: 0.8
    letterSpacing: -3.74px
spacing:
  buttonRadius: 1000px
  elementGap: 23px
  sectionGap: 68px
components:
  primary-filled-button:
    role: Main call-to-action button, promoting core actions.
  obsidian-filled-button:
    role: Secondary call-to-action or general action buttons.
  obsidian-ghost-button:
    role: Alternative action buttons, appearing less prominent than filled variants.
  navigation-link:
    role: Primary navigation items in the header and footer.
  feature-card:
    role: Displays key features or offerings with associated text.
---

## Overview

**North Star:** monochromatic luxury, sharp contrast

Hyer Aviation employs a commanding, high-contrast aesthetic, juxtaposing crisp white surfaces with deep, almost-black elements. Bold, large-scale typography creates immediate impact, while subtle details like rounded pill shapes and a single warm accent color temper its power. The design feels grounded and luxurious, with ample whitespace and a restrained color palette that allows imagery to take center stage, communicating sophistication through assertive simplicity.

### Do's

- Prioritize Canvas White (#ffffff) for primary backgrounds and Obsidian (#000d10) for primary text to maintain high contrast (19.7:1 AAA).
- Use HelveticaNowDisplay consistently across all text, emphasizing weight 700 for headings and weight 400 for body text.
- Apply a 1000px border-radius to all buttons and prominent links to achieve the signature pill shape.
- Reserve Desert Sienna (#bc7155) exclusively for primary action buttons to create a single, clear focal point.
- Ensure generous spacing: utilize 23px for element gaps and 68px between major sections.
- Employ negative letter-spacing for large headlines to condense text and enhance impact, specifically -0.02em at sizes like 187px.
- Use Slate Mist (#8e8e95) for supporting text and subtle UI elements where less visual weight is desired, such as form helper text or secondary navigation.

### Don'ts

- Avoid using multiple saturated colors; Desert Sienna (#bc7155) is the singular accent color.
- Do not introduce complex gradients or shadows, as the system relies on flat surfaces and high contrast.
- Refrain from using smaller body text sizes than 17px to maintain readability and design gravitas.
- Do not deviate from the HelveticaNowDisplay font for any brand-related text.
- Avoid tight spacing around interactive elements; maintain a minimum of 22px horizontal padding for buttons.
- Do not use square or mildly rounded corners for buttons; the pill shape (1000px radius) is critical for brand identity.
- Do not use generic gray tones for text; ensure body text aligns with Obsidian (#000d10) or Slate Mist (#8e8e95) to maintain the established hierarchy.

### Layout

The page primarily utilizes a full-bleed structure, especially for the hero section which extends across the viewport with central text and imagery. Content sections alternate between stark white full-width blocks and dark full-width blocks, creating a distinct visual rhythm. Text and imagery are often arranged in centered stacks or simple two-column layouts. The overall density is spacious, allowing elements to breathe. Navigation is a minimalist top bar with links aligned to the right, often disappearing into a hamburger menu on smaller screens, and a utility navigation in the footer.

### Imagery

The site uses a clean mix of professional product renders (specifically, a white private jet prominent against a subtly cloudy sky) and abstract, high-contrast imagery to convey luxury and precision. Photography is minimalist, focusing on the product itself with little extraneous context. Icons, where present, are likely minimal and monochromatic, adhering to the high-contrast aesthetic. Imagery plays a key role in setting the atmosphere without overwhelming the clean UI.
