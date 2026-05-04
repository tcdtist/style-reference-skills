---
version: alpha
name: Programa
description: Programa employs a refined white-canvas aesthetic with crisp, confident typography as its primary visual communicator. A single vibrant yellow accent color is reserved exclusively for key calls to action, creating high contrast and immediate focus against the otherwise monochrome interface. Components are lightweight and unobtrusive, featuring thin borders and soft rounded corners, allowing content and functionality to take precedence without visual noise.
colors:
  storm-graphite: "#1a1a1a"
  canvas-white: "#ffffff"
  ash-gray: "#a3a3a3"
  midas-yellow: "#fbff2b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.42px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.6px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
    letterSpacing: -1.26px
spacing:
  cardRadius: 16px
  buttonRadius: 10px
  elementGap: 12px
  sectionGap: 96px
components:
  neutral-ghost-button:
    role: Secondary action or navigation item
  primary-action-button:
    role: Main call to action
  dark-filled-button:
    role: Alternative primary action or prominent secondary action on light backgrounds
  light-input-field:
    role: Standard input field on dark backgrounds
  dark-input-field:
    role: Standard input field on light backgrounds
---

## Overview

**North Star:** Architectural blueprint on white marble

Programa employs a refined white-canvas aesthetic with crisp, confident typography as its primary visual communicator. A single vibrant yellow accent color is reserved exclusively for key calls to action, creating high contrast and immediate focus against the otherwise monochrome interface. Components are lightweight and unobtrusive, featuring thin borders and soft rounded corners, allowing content and functionality to take precedence without visual noise.

### Do's

- Use neueHaasGroteskText-500 for all headings to maintain concise visual impact.
- Apply Midas Yellow (#fbff2b) strictly for primary call-to-action buttons or critical interactive highlights.
- Ensure input fields use 6px vertical and 12px horizontal padding, with a 12px border radius.
- Maintain a default letter-spacing of -0.03em for all text, conveying a tightly set, modern feel.
- Utilize Canvas White (#ffffff) as the dominant page and card background for an expansive, clean canvas.
- Reserve Storm Graphite (#1a1a1a) for primary text, ensuring strong contrast against light backgrounds.
- Implement 10px radius for all buttons and interactive navigation elements for a consistent soft-rounded touch.

### Don'ts

- Do not introduce new saturated colors; adhere to the Midas Yellow for accents and brand identity.
- Avoid heavy shadows or gradients; rely on minimal borders and background color changes for surface differentiation.
- Do not use letter-spacing other than the specified -0.03em or normal, to preserve typographic rhythm.
- Never use Ash Gray (#a3a3a3) for primary action text or backgrounds; it's reserved for muted elements.
- Do not use font weights other than 400 or 500 for neueHaasGroteskText; these are the only available weights for the system.
- Avoid arbitrary padding or margin values; stick to multiples of the 6px base unit or specified element/section gaps.
- Do not use large, decorative imagery; visual content should be contained and functional to support the UI-first approach.

### Layout

The page maintains a centered, contained layout for its main content, framed by responsive margins. The header is a sticky top bar with minimal navigation. Sections flow vertically with a consistent rhythm of 'comfortable' spacing and some sections having a larger 96px bottom padding. Content is primarily text-based, often presented in clear, readable stacks, with interactive elements like buttons and input fields seamlessly integrated rather than heavily framed. A primary content column often has left and right margins of 111px, or 236px for narrower sections, creating a focused reading area. There are no clear alternating color bands or complex grid structures beyond simple content blocks.

### Imagery

This site predominantly uses UI-focused content rather than decorative imagery. Where visible (e.g., product screenshots), these are typically clean, direct captures of the software interface, presented without heavy styling or complex compositions. Icons, if present, tend to be minimal outline styles, supporting functionality rather than aesthetic flourish. The visual density is text-dominant, allowing the typography and clean layout to convey information directly.
