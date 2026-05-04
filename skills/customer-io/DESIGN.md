---
version: alpha
name: customer.io
description: Customer.io employs a crisp, data-driven interface characterized by clean segmentation and a dominant light theme. The visual system features achromatic surfaces with a cool-tinted dark primary text, accented by a single vivid blue-green for interactive elements and brand signaling. Layouts are structured and functional, using subtle borders and a deliberate lack of heavy shadows to maintain a lightweight feel, allowing data visualizations and key information to stand out. Typography is distinct, utilizing a custom sans-serif with a wide range of weights and precise letter-spacing to convey clarity and precision.
colors:
  midnight-ink: "#00262b"
  oceanic-deep: "#0b363b"
  sky-mist: "#e0f4ff"
  amber-pop: "#8b3911"
  indigo-pop: "#0a3890"
  slate-grille: "#354d51"
  stone-whisper: "#4f6466"
  ash-cloud: "#a1c2c6"
  spring-leaf: "#abffae"
  deep-teal: "#437278"
  electric-blue: "#006af2"
  pale-mint: "#eafde8"
  canvas: "#ebebeb"
  surface-white: "#ffffff"
  fog-gray: "#fafafa"
  warm-mist: "#feefe8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.38
    letterSpacing: 0.017px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.38
    letterSpacing: 0.014px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
    letterSpacing: 0.013px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: 0.01px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: 0.008px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: 0.006px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.25
    letterSpacing: 0.004px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: 0.002px
spacing:
  buttonRadius: 1.67772e+07px
  elementGap: 8px
  sectionGap: 96px
components:
  primary-filled-button:
    role: Primary calls to action.
  outline-accent-button:
    role: Secondary calls to action, or actions requiring less visual weight.
  ghost-inner-button:
    role: Tertiary actions, often within content blocks or secondary navigation.
  clean-content-card:
    role: Container for distinct content blocks, features.
  navigation-link:
    role: Navigation items in header or footer.
---

## Overview

**North Star:** Architectural Blueprint on Frosted Glass

Customer.io employs a crisp, data-driven interface characterized by clean segmentation and a dominant light theme. The visual system features achromatic surfaces with a cool-tinted dark primary text, accented by a single vivid blue-green for interactive elements and brand signaling. Layouts are structured and functional, using subtle borders and a deliberate lack of heavy shadows to maintain a lightweight feel, allowing data visualizations and key information to stand out. Typography is distinct, utilizing a custom sans-serif with a wide range of weights and precise letter-spacing to convey clarity and precision.

### Do's

- Prioritize Midnight Ink (#00262b) for all primary text and headings to ensure strong contrast and readability.
- Use Oceanic Deep (#0b363b) for essential interface elements like borders, secondary text, and active navigation indicators.
- Employ the pill-shaped radius (1.67772e+07px) exclusively for buttons and interactive tags to provide a consistent, user-friendly affordance.
- Utilize Surface White (#ffffff) for card backgrounds and elevated content areas to create visual separation from the Canvas (#ebebeb).
- Apply Spring Leaf (#abffae) sparingly for interactive button outlines or subtle highlights, leveraging its vividness as an accent.
- Maintain a clear visual hierarchy by adjusting font weight and size according to the defined type scale, ensuring proper letter-spacing for each role.
- Separate content sections with clear vertical spacing using the defined sectionGap of 96px for visual breathing room.

### Don'ts

- Do not introduce new saturated primary colors; limit the palette to the defined brand and accent colors.
- Avoid heavy shadow effects; rely on subtle borders or background color shifts for elevation.
- Do not use highly decorative fonts; stick to the clean, functional 'saansFont' for all typography.
- Do not apply excessive padding or margins; follow the comfortable density established by the elementGap and cardPadding.
- Avoid arbitrary border radii; adhere to 2px for general elements, 6px for specific images, and the pill-shape for buttons.
- Do not use Electric Blue (#006af2) as a primary button background; reserve it for numerical highlights and specific headline accents.
- Do not introduce complex gradients; the system relies on solid colors and subtle achromatic shifts for surfaces.

### Layout

The page uses a maximum-width contained model, centered on the screen. The hero section is full-width with a prominent centered headline and descriptive text, followed by clear call-to-action buttons. Subsequent sections often feature alternating two-column layouts with text and visual elements, or multi-column card grids for features. Vertical spacing between major sections is generous and consistent, creating a comfortable rhythm. The navigation is a sticky top bar, providing persistent access to key sections.

### Imagery

The site predominantly uses product screenshots and abstract graphic elements. Product screenshots are often contained within clean frames or directly embedded into the UI, showcasing the software interface without additional context. Illustrations are minimal, tending towards flat, clean icons that represent features or concepts. There is a strong visual emphasis on product utility over lifestyle or decorative imagery. Imagery serves primarily to explain content or showcase the product, not for atmospheric decoration.
