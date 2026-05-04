---
version: alpha
name: Redbrick Coffee
description: Redbrick Coffee uses a bold, expressive e-commerce aesthetic, characterized by a dominant, warm red that demands attention. High-contrast typography emphasizes a traditional serif for large, editorial headlines and a practical sans-serif for functional UI elements. Surfaces are minimal, relying on stark white and a soft F2F2F2 gray for product cards, while interaction is guided by an outlined red accent. Elements are generously spaced, creating a clean rhythm against the vibrant brand color.
colors:
  crimson-roast: "#e82c2a"
  inkwell: "#212529"
  cloud-cover: "#f2f2f2"
  pure-white: "#ffffff"
  deep-space: "#121212"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.06px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: -0.04px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.03px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.017px
  heading:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1
    letterSpacing: -0.013px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 1.2
    letterSpacing: 0.006px
  display-md:
    fontFamily: "system-ui"
    fontSize: 105px
    lineHeight: 1.1
    letterSpacing: 0.004px
  display:
    fontFamily: "system-ui"
    fontSize: 150px
    lineHeight: 0.99
    letterSpacing: -0.005px
spacing:
  cardRadius: 25px
  buttonRadius: 50px
  elementGap: 10px
  sectionGap: 50px
components:
  outlined-call-to-action-button:
    role: Primary interactive element for actions.
  product-card:
    role: Displays individual product items in a grid.
  outlined-input-field:
    role: User input fields.
  navigation-link:
    role: Top-level navigation items.
  hero-headline:
    role: Large, attention-grabbing titles.
  banner-notification:
    role: Top narrow banner for announcements.
---

## Overview

**North Star:** Red enamel on white canvas.

Redbrick Coffee uses a bold, expressive e-commerce aesthetic, characterized by a dominant, warm red that demands attention. High-contrast typography emphasizes a traditional serif for large, editorial headlines and a practical sans-serif for functional UI elements. Surfaces are minimal, relying on stark white and a soft F2F2F2 gray for product cards, while interaction is guided by an outlined red accent. Elements are generously spaced, creating a clean rhythm against the vibrant brand color.

### Do's

- Prioritize Crimson Roast (#e82c2a) as the primary accent for all interactive elements, borders, and significant text highlights.
- Use Editorial Old font for all display-level headings (100px and above), maintaining its delicate weight 300.
- Apply a 50px border-radius to all buttons and input fields for a consistent, soft pill-like shape.
- Utilize Cloud Cover (#f2f2f2) specifically for product card backgrounds, maintaining a soft, recessive surface.
- Maintain generous section gaps of 50px to create ample negative space and visual segmentation between content blocks.
- Ensure all body text and UI elements use the Surt font at its specified weights and compact letter-spacing values.

### Don'ts

- Do not introduce new saturated colors; maintain the brand's restraint to its single vivid red.
- Avoid heavy drop shadows or significant elevation; rely on outlines and background color differences for distinction.
- Do not use bold weights or all-caps for large editorial headlines; Editorial Old 300 is meant to be restrained.
- Do not deviate from the 25px radius for cards and images, or the 50px radius for buttons/inputs; these are signature shapes.
- Do not use deep, dark backgrounds for entire sections, except for specific, contained elements like the 'skip to content' link, maintaining a light theme.
- Avoid using system-ui for anything other than small, supporting text; it is not for primary content or UI elements.

### Layout

The page primarily uses a full-bleed structure for hero sections and banners, transitioning to a centered, contained layout for product listings and textual content. The hero often features a large image on one side and a prominent Editorial Old headline on the other. Sections alternate between full-bleed vibrant red areas (like announcement bars) and white or light gray content blocks. Content is arranged in alternating image-left/text-right or text-left/image-right patterns, and occasionally a 3-column grid for product cards. Vertical spacing is consistent and generous, using a 50px section gap for a spacious feel. Navigation is a top bar with a sticky header, featuring minimal Surt font links and a distinct Crimson Roast 'Menu' button.

### Imagery

Photography is product-focused, featuring tight crops of coffee bags and brewing equipment in clean, often brightly lit, environments. There's a strong emphasis on the product itself, sometimes with hands interacting with equipment or holding a cup, without extensive lifestyle contexts. Images frequently use a soft 25px border-radius, maintaining the brand's rounded aesthetic. Hero imagery often shows product packaging in vivid red. Icons are minimalist, outline-based, and primarily rendered in Crimson Roast (#e82c2a) against white, serving as functional accents.
