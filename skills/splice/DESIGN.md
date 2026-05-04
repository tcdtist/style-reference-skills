---
version: alpha
name: Splice
description: Splice embodies a 'dark-mode-first' approach, creating an immersive, studio-like atmosphere where dark surfaces highlight bright, focused interactive elements. A cool blue (#1253ff) dominates as the primary accent, reminiscent of digital waveforms or audio interfaces, providing a consistent visual anchor. Subtle use of other vivid colors (like yellow, green, red, vibrant blue, and violet) mainly in illustrative elements or specific product highlights prevents visual monotony while maintaining the core dark aesthetic. The interplay of highly rounded buttons and sharper graphic elements creates a contrast that feels modern and dynamic.
colors:
  midnight-ink: "#121214"
  deep-space: "#000000"
  ghost-gray: "#09090a"
  cloudburst: "#232426"
  arctic-mist: "#ffffff"
  storm-cloud: "#a6a8ad"
  pewter: "#c8c9cc"
  slate-border: "#63656d"
  cobalt-blue: "#1253ff"
  active-link-blue: "#528fff"
  goldenrod: "#f4d04"
  electric-lime: "#7cf727"
  neon-magenta: "#ff8aa6"
  skyfall-blue: "#62daff"
  ametrine: "#b874ff"
  vivid-green: "#f1f607"
  deep-cadet: "#0029cc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.015px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.015px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
    letterSpacing: 0.071px
  display-md:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: 0.071px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.25
    letterSpacing: 0.071px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.25
    letterSpacing: 0.071px
spacing:
  buttonRadius: 60px
  elementGap: 8px
  sectionGap: 48px
components:
  announcement-banner:
    role: 
  primary-cta-button-group:
    role: 
  pricing-plan-card:
    role: 
  primary-call-to-action-button:
    role: Core user interaction
  secondary-ghost-button:
    role: Secondary action or subtle navigation
  dark-icon-button:
    role: Minimalist interactive element, often for playback controls or less prominent actions.
  text-link-dark-background:
    role: Inline navigation or reference
  text-link-light-background:
    role: Inline navigation or reference on light surfaces
  header-navigation-item:
    role: Primary site navigation
  primary-headline:
    role: Main page titles and major section headings
  input-field-dark:
    role: Data entry in dark sections
  input-field-light:
    role: Data entry in light sections
---

## Overview

**North Star:** Digital Studio, Cobalt Glow. A dark, immersive interface with bursts of vivid, digital-native color.

Splice embodies a 'dark-mode-first' approach, creating an immersive, studio-like atmosphere where dark surfaces highlight bright, focused interactive elements. A cool blue (#1253ff) dominates as the primary accent, reminiscent of digital waveforms or audio interfaces, providing a consistent visual anchor. Subtle use of other vivid colors (like yellow, green, red, vibrant blue, and violet) mainly in illustrative elements or specific product highlights prevents visual monotony while maintaining the core dark aesthetic. The interplay of highly rounded buttons and sharper graphic elements creates a contrast that feels modern and dynamic.

### Do's

- Prioritize Midnight Ink (#121214) and Deep Space (#000000) for backgrounds, creating a consistent dark canvas.
- Use Cobalt Blue (#1253ff) exclusively for primary call-to-action buttons, ensuring high visibility and user guidance.
- Apply a 60px border-radius to all primary interactive buttons, distinguishing them with a distinct pill shape.
- Utilize InterVariable for all body text and UI elements at weights 400-700, ensuring consistent typography for readability.
- Employ SoehneBreit weight 400 with 0.071em letter-spacing for all significant headings (28px minimum) to maintain the brand's impactful, open typographic style.
- Maintain a base unit of 8px for element spacing and 48px for section gaps to ensure comfortable density and visual rhythm.
- Use Arctic Mist (#ffffff) for all primary text on dark backgrounds to ensure optimal contrast and readability.

### Don'ts

- Avoid using bright colors for large background areas; reserve them for accents, illustrations, or small interactive elements.
- Do not use generic square buttons; all primary interactive buttons must have a 60px radius (pill shape).
- Do not apply shadows for primary elevation; the design relies on changes in background color and imagery for depth.
- Avoid mixed-mode layouts on a single page; maintain the dark theme consistently throughout.
- Do not use letter-spacing outside of specified values for InterVariable (-0.015em) and SoehneBreit (0.071em) to preserve the intended typographic feel.
- Do not use border-radius less than 8px unless explicitly for imagery (4px) or specified components (e.g., 0px for some inputs).
- Avoid low-contrast text combinations; ensure all text is Arctic Mist (#ffffff) or Storm Cloud (#a6a8ad) on dark backgrounds, or Midnight Ink (#121214) on light backgrounds.

### Layout

The site uses a full-bleed layout for its hero section, featuring a centered headline over a dark, atmospheric image. Subsequent sections maintain this dark theme, with content primarily wrapped within a conceptual max-width, though not strictly constrained by explicit pageMaxWidth. Sections often alternate between full-width elements and implicitly centered content blocks. There is a consistent use of vertical spacing, although explicit section dividers are absent, relying on shifts in background imagery or subtle color changes. Content arrangement varies, from stacked centered elements within the hero to potential multi-column layouts anticipated in internal sections. The navigation is a sticky top bar, minimal and dark, providing consistent access to primary sections.

### Imagery

This design primarily utilizes photography with a distinct green color cast or digital manipulation, creating an artificial, atmospheric mood rather than realistic product shots. Imagery is often full-bleed in hero sections, serving as a background for textual content, and typically blurred or desaturated to give prominence to UI elements. Small, illustrative abstract graphics—like the waveform—are used decoratively to reinforce the audio theme. Icons are monochromatic, often Arctic Mist (#ffffff), with a thin stroke or flat fill, used functionally within navigation and interactive elements. The overall density is balanced, with large atmospheric images providing visual interest behind primary headlines and text.
