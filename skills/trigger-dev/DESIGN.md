---
version: alpha
name: Trigger.dev
description: Trigger.dev creates a 'technical luxury' dark mode experience, balancing utility with subtle visual richness. The deep charcoal backgrounds paired with crisp, cool-toned neutrals establish a serious, professional tone, while vibrant accents act as precise markers on a complex system. Custom fonts with precise letter-spacing and varied weights contribute to its sharp, information-dense feel. The interplay of minimalist buttons with sharp corners against a few pill-shaped elements hints at a system that values both traditional interface clarity and modern digital fluidity.
colors:
  obsidian-black: "#121317"
  charcoal-surface: "#1c1e21"
  ash-gray: "#3b3e45"
  slate-text: "#d7d9dd"
  whisper-white: "#e5e7eb"
  steel-accent: "#b5b8c0"
  spring-green: "#a8ff53"
  cloud-violet: "#9c9af2"
  deep-plum: "#7655fd"
  fuchsia-highlight: "#fa3abf"
  cosmic-blue: "#479dec"
  flare-orange: "#eccf06"
  action-red: "#f43f5"
  success-green: "#afec73"
  highlight-gradient: "#878c99"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.38
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: 0.25px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.11
    letterSpacing: 0.5px
spacing:
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 40px
components:
  cta-button-group:
    role: 
  feature-tag-pills:
    role: 
  testimonial-card:
    role: 
  primary-action-button:
    role: Main call to action
  ghost-navigation-button:
    role: Secondary navigation and non-primary actions
  subtle-information-button:
    role: Informational or tertiary actions within content sections
  minor-navigation-link:
    role: Small, context-specific links in clusters
  feature-tag:
    role: Categorization or short labels
  client-logo-card:
    role: Displaying trusted brand logos
  testimonial-card:
    role: Showcasing user feedback
---

## Overview

**North Star:** Midnight Terminal, illuminated by command prompts and spectral highlights.

Trigger.dev creates a 'technical luxury' dark mode experience, balancing utility with subtle visual richness. The deep charcoal backgrounds paired with crisp, cool-toned neutrals establish a serious, professional tone, while vibrant accents act as precise markers on a complex system. Custom fonts with precise letter-spacing and varied weights contribute to its sharp, information-dense feel. The interplay of minimalist buttons with sharp corners against a few pill-shaped elements hints at a system that values both traditional interface clarity and modern digital fluidity.

### Do's

- Use Obsidian Black (#121317) as the primary page background to maintain the strong dark theme.
- Apply 4px border radius for all card components, buttons, and input fields for a consistent technical appearance.
- Utilize Spring Green (#a8ff53) exclusively for primary calls to action, maintaining its high-impact role.
- Employ Geist-Regular 16px, weight 400, and Slate Text (#d7d9dd) for all standard body copy.
- Reserve Satoshi-Variable for all headings, ensuring letter-spacing of 0.25px and 0.5px is applied at larger sizes as indicated in typography.
- Maintain an elementGap of 8px between closely related UI elements like buttons in a group or icons and text.
- Use Ash Gray (#3b3e45) for subtle borders and dividers between content blocks to delineate sections without strong visual breaks.

### Don'ts

- Do not use saturated colors other than Spring Green (#a8ff53) as primary button backgrounds.
- Avoid applying large, soft shadows; leverage background color changes for elevation and depth instead.
- Do not use more than two saturated accent colors in close proximity to prevent visual clutter and maintain focus on the core information.
- Resist using highly decorative or illustrative imagery; favor clean, functional visuals or code snippets.
- Do not vary line-height significantly from the type scale; precise vertical rhythm is key for readability.
- Avoid pill shapes (9999px radius) for anything other than small, tertiary elements like tags to preserve the predominantly rectangular aesthetic.
- Do not use bold weights (600+) from Geist-Regular; rely on Satoshi-Variable for strong typographic emphasis.

### Layout

The layout follows a primarily max-width contained model (around 1200px equivalent) with centered content blocks, although the hero section extends full-bleed with a dark background. Sections generally alternate between distinct dark backgrounds, creating a clear vertical rhythm. Content is arranged in alternating text-left/visual-right patterns or centered stacks for stronger statements. There's a 3-column card grid for features and testimonials. Navigation is a sticky top bar with a left-aligned logo and right-aligned actions. The overall density is comfortable, with generous vertical spacing (40px) between sections.

### Imagery

The site uses a combination of abstract, gradient-infused graphics, product screenshots, and intricate code snippets. Imagery is generally contained within sections, not full-bleed, and often features a subtle dark background or blur. Photography is minimal, primarily headshots for testimonials. Icons are outline-style, mono-color, and subtle, often employing accent colors for specific features. The primary visual language centers around showcasing code and technical diagrams, giving a direct and functional representation of the product. Imagery is used to explain concepts, not merely decorate, reinforcing the developer-tool identity.
