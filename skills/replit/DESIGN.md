---
version: alpha
name: replit
description: Replit's design system evokes a playful yet powerful creative studio, featuring a bright, almost tactile off-white canvas overlaid with soft, rounded forms. Vivid orange accents punctuate the UI, highlighting active states and key actions, suggesting energy and innovation. Typography balances modern geometric sans-serifs with classic readability, often employing tight tracking for headlines to convey a sense of precision and forward momentum. Components are distinctly shaped with generous radii, ranging from slight curves to full pills, giving the interface a friendly, approachable feel despite its technical focus.
colors:
  canvas: "#faf6f1"
  ghost: "#ffffff"
  carbon: "#0e0e0f"
  lead: "#36373b"
  ash: "#898c94"
  stone: "#dfddd8"
  off-white-accent: "#cbc7c3"
  slate: "#52545a"
  black: "#000000"
  signal-orange: "#ff3c00"
  deep-orange: "#ec4e02"
  soft-peach: "#ffb199"
  vivid-coral: "#ff764c"
  accent-blue: "#2492ff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.14px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.72px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.96px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.05
    letterSpacing: -1.92px
  display:
    fontFamily: "system-ui"
    fontSize: 69px
    lineHeight: 0.8
    letterSpacing: -4.14px
spacing:
  elementGap: 8px
  sectionGap: 48px
components:
  primary-action-button:
    role: Call to action
  ghost-border-button:
    role: Secondary action
  muted-border-button:
    role: Tertiary action or filter tag
  feature-card:
    role: Product feature display
  decorative-section-card:
    role: Visual content container
  text-input:
    role: User entry field
---

## Overview

**North Star:** Warm, creative studio. Like paper and clay in a sunlit workbench, punctuated by a streak of vibrant orange.

Replit's design system evokes a playful yet powerful creative studio, featuring a bright, almost tactile off-white canvas overlaid with soft, rounded forms. Vivid orange accents punctuate the UI, highlighting active states and key actions, suggesting energy and innovation. Typography balances modern geometric sans-serifs with classic readability, often employing tight tracking for headlines to convey a sense of precision and forward momentum. Components are distinctly shaped with generous radii, ranging from slight curves to full pills, giving the interface a friendly, approachable feel despite its technical focus.

### Do's

- Prioritize 'Canvas' (#faf6f1) as the primary page background to maintain the warm, receptive visual tone.
- Use 'Signal Orange' (#ff3c00) exclusively for primary calls-to-action to maximize impact and user focus.
- Apply generous border-radii: 'pill' (90px) for prominent buttons, '2xl' (60px) for key cards, and 'sm' (6px) for inputs and less prominent interactive elements.
- Employ ABC Diatype Plus Variable with tight letter-spacing (e.g., -1.92px at 48px) for all headings to create a modern, precise feel.
- Utilize 'Carbon' (#0e0e0f) for main body text and 'Ash' (#898c94) for secondary or descriptive text consistently for clear hierarchy.
- Maintain a comfortable density with an 'elementGap' of 8px and 'cardPadding' of 24px between internal block elements.

### Don'ts

- Avoid using multiple bright accent colors; 'Signal Orange' (#ff3c00) and 'Accent Blue' (#2492ff) should be used judiciously and functionally.
- Do not introduce sharp corners or minimal border-radii; rounded shapes are a core identifier of this system.
- Refrain from heavy shadows or complex gradients; the system prefers clean surfaces and minimal elevation.
- Do not use dark backgrounds for major content sections, as the system is anchored in a light mode aesthetic.
- Avoid generic system fonts when custom fonts are specified; the unique tracking and weights of ABC Diatype are crucial to the brand's typographic identity.
- Do not rely on subtle color differences for interactive states; ensure sufficient contrast and use 'Signal Orange' for clear feedback.

### Layout

The page primarily uses a contained layout with a flexible-width content area that appears centered. The hero section often features a prominent, centered headline with a large input field, setting an immediate interaction focus. Sections alternate between full-bleed background-colored blocks (often the 'Canvas' or brand orange/pink decorative shapes) and contained white content sections. Content arrangement frequently uses a centered stack for forms and calls-to-action, transitioning to alternating image-right/text-left or feature grid patterns in subsequent sections. Spacing between major sections is generous, contributing to a comfortable, uncrowded feel. A sticky top navigation bar provides consistent access to primary links and actions.

### Imagery

Imagery typically features a mix of conceptual illustrations and stylized product screenshots. Illustrations are characterized by strong, simplified shapes, often in brand colors like 'Soft Peach' or 'Vivid Coral', used as large, organic background elements or contained within similarly rounded cards. Product screenshots are clean, showcasing UI in context, often with a slight perspective. Icons are outlined, simple, and mono-color, usually in 'Carbon' or 'Ash'. Imagery plays a decorative and explanatory role, often full-bleed within sections or acting as large, background shapes that define content areas, creating a fluid, almost sculptural feel.
