---
version: alpha
name: Krea
description: This system evokes a sleek, high-tech command center with deep, subdued tones and crisp, functional typography. The near-black background provides a stark contrast for the luminous white text, emphasizing content. Subtle gradients introduce depth without overwhelming the dark aesthetic, mimicking layered screens in a digital environment. The interplay of sharp 8px radii and some larger 14px and 32px radii, combined with a total absence of strong accent colors, creates a restrained and focused visual experience.
colors:
  void-black: "#000000"
  canvas-white: "#ffffff"
  ash-gray: "#a3a3a3"
  coal: "#171717"
  iron: "#262626"
  frost: "#f5f5f5"
  deep-space-gradient: "#474747"
  cosmic-drift-gradient: "#646464"
  haze-gradient: "#FFFFFF"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.15px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.54px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.05
    letterSpacing: -1.08px
spacing:
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 72px
components:
  cta-button-group:
    role: 
  feature-stat-metric-cards:
    role: 
  pricing-plan-cards:
    role: 
  primary-action-button:
    role: Call to action.
  secondary-action-button:
    role: Alternative action.
  ghost-navigation-button:
    role: Navigation links in header, subtle secondary calls-to-action.
  navigation-link-button:
    role: Top navigation items.
  image-action-button:
    role: Action button within an image or content block.
  header-navigation-link:
    role: Primary navigation items in the header.
---

## Overview

**North Star:** Midnight Terminal Interface. Imagine looking at code on a deep dark monitor, illuminated only by crisp white text and subtle UI elements.

This system evokes a sleek, high-tech command center with deep, subdued tones and crisp, functional typography. The near-black background provides a stark contrast for the luminous white text, emphasizing content. Subtle gradients introduce depth without overwhelming the dark aesthetic, mimicking layered screens in a digital environment. The interplay of sharp 8px radii and some larger 14px and 32px radii, combined with a total absence of strong accent colors, creates a restrained and focused visual experience.

### Do's

- Use Suisse Intl as the sole typeface, varying weight and size for hierarchy.
- Prioritize Void Black (#000000) for backgrounds and Canvas White (#ffffff) for foreground text to maintain high contrast.
- Apply 8px border radius consistently for most interactive elements like buttons and cards.
- Employ the Deep Space Gradient (linear-gradient(rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)) or Cosmic Drift Gradient (linear-gradient(200deg, rgb(100, 100, 100) 0%, rgb(0, 0, 0) 100%)) for feature section backgrounds to create subtle depth.
- Use Ash Gray (#a3a3a3) for secondary text and disabled states to reduce visual hierarchy.
- Maintain a default letter-spacing pattern, notably the tight -0.0150em for larger headings, to achieve a precise, chiseled look.
- Utilize specific padding values (e.g., 12px vertical, 20px horizontal for primary buttons) to ensure consistent element sizing.

### Don'ts

- Do not introduce additional saturated colors beyond the strict neutral palette.
- Avoid overuse of shadows; reserve the rgba(0, 0, 0, 0.1) 0px 1px 6px 0px shadow for interactive elements only.
- Do not deviate from Suisse Intl; no other font families should be used.
- Do not use generic border radii; adhere to 8px, 14px, or 32px values.
- Avoid bright or high-key imagery that would disrupt the dark, high-contrast aesthetic.
- Do not use letter-spacing values outside the defined -0.0250em, -0.0150em, 0.0100em, 0.0150em, 0.1000em ranges.
- Do not apply vibrant accent colors to active states; rely on subtle background changes or border shifts instead.

### Layout

The layout is primarily full-bleed, with content centered. The hero section features a full-viewport, dark, atmospheric background image with a centered headline and subheading, followed by centered action buttons. Content sections appear to alternate between darker gradient backgrounds and potentially pure black, maintaining consistent vertical rhythm. Text-dominant sections are centered, while key features or product displays are often presented within a visual element like a monitor. The navigation is a classic top bar, horizontally aligned, with primary links left-aligned and authentication actions right-aligned. Density is balanced, with ample breathing room around key content blocks and a clear visual hierarchy.

### Imagery

The site uses a mix of real-world photography and UI product screenshots. Photography is dark, moody, and atmospheric (like the background behind the monitor), providing context without distraction. Product screenshots are contained within device mockups (e.g., monitor), showcasing the UI in a realistic, non-abstract way. Icons are simple, monochrome, and filled, often in Canvas White against Void Black, or vice-versa. The overall visual language for imagery is functional, demonstrating the product in a high-fidelity context rather than decorative or abstract illustration.
