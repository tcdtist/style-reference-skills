---
version: alpha
name: Bun
description: This design system conjures a high-tech laboratory vibe, a 'synthesized chaos' where sophisticated functionality meets playful, almost neon, branding. The dominant dark charcoal background creates a stark stage for bursts of vivid pinks and violets. Careful use of these vibrant chromatic accents for interactive elements and key messaging prevents visual fatigue, while subtle textural gradients and inner borders add depth to an otherwise flat dark aesthetic. The fusion of precise monospace code snippets with the broader system font reflects the dual nature of developer tools: serious, technical work presented with an engaging, almost futuristic flair.
colors:
  midnight-core: "#0d0e11"
  obsidian-base: "#14151a"
  charcoal-canvas: "#282a36"
  slate-border: "#3a3a3f"
  graphite-accent: "#3b3f4b"
  ash-text: "#6b7280"
  silver-text: "#e5e7eb"
  polar-white: "#ffffff"
  cyber-pink: "#f472b6"
  neon-violet: "#a855f7"
  faded-rose: "#fbcfe8"
  magenta-glow: "#ec4899"
  electric-cyan: "#22d3ee"
  virtual-violet: "#c084fc"
  system-green: "#34d399"
  warning-yellow: "#fcd34d"
  danger-red: "#f87171"
  gradient-pink-pulse: "#ec4899"
  gradient-pink-fade: "#f472b6"
  gradient-sunset: "#e67e22"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
spacing:
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 128px
components:
  install-command-line-input-with-os-tabs:
    role: 
  feature-cards-four-tools-one-toolkit:
    role: 
  api-pill-selector-code-block:
    role: 
  primary-cta-button:
    role: Main call-to-action.
  ghost-navigation-button:
    role: Secondary navigation or filter items.
  text-accent-button:
    role: Tertiary actions or category toggles.
  large-feature-card:
    role: Prominent feature display.
  command-line-input:
    role: Code snippets for user interaction.
  performance-bar-graph:
    role: Visual representation of data.
  code-block:
    role: Displaying source code.
  highlight-badge-replaces:
    role: Emphasizing replacements or comparisons.
---

## Overview

**North Star:** Synthwave dark lab – precision code illuminated by neon accents.

This design system conjures a high-tech laboratory vibe, a 'synthesized chaos' where sophisticated functionality meets playful, almost neon, branding. The dominant dark charcoal background creates a stark stage for bursts of vivid pinks and violets. Careful use of these vibrant chromatic accents for interactive elements and key messaging prevents visual fatigue, while subtle textural gradients and inner borders add depth to an otherwise flat dark aesthetic. The fusion of precise monospace code snippets with the broader system font reflects the dual nature of developer tools: serious, technical work presented with an engaging, almost futuristic flair.

### Do's

- Use Midnight Core (#0d0e11) as the base page background.
- Apply Charcoal Canvas (#282a36) for card surfaces and code blocks.
- Highlight primary calls-to-action with Magenta Glow (#ec4899) background and Polar White (#ffffff) text.
- Maintain high contrast text with Polar White (#ffffff) for headings and Silver Text (#e5e7eb) for body copy against dark backgrounds.
- Utilize 9999px radius for small interactive elements like tags and badges, creating a soft pill shape.
- Reserve JetBrains Mono for all code-related content, including command-line interfaces and code snippets.
- Use Cyber Pink (#f472b6) and Neon Violet (#a855f7) sparingly for key accents, interactive states, and important highlights.

### Don'ts

- Avoid using light backgrounds; the theme is exclusively dark, leveraging specific dark neutrals.
- Do not introduce strong shadows on most elements, as depth is primarily created through varying dark surface colors and subtle inner borders.
- Do not deviate from the system-ui for general text content; save JetBrains Mono for code only.
- Avoid overuse of chromatic colors; they are accents, not primary content colors.
- Do not use generic button styles; always apply the specified padding, border, and radius for each button variant.
- Avoid any radius value other than 4px, 8px, 12px, 30px, or 9999px, as these define the system's shape language.

### Layout

The layout is primarily a max-width 1280px centered content model, providing ample breathing room against the full-bleed dark background. The hero section features a centered headline over a dark background, flanked by call-to-action buttons. Subsequent sections typically alternate between centered text blocks and asymmetric compositions, often with text on one side and a visual (like a code block or graph) on the other. Vertical rhythm is established by section gaps, emphasizing content blocks. There are instances of 2-column and 3-column card grids for features, breaking the vertical flow. Navigation is a sticky top bar, minimal and focused, integrating a primary 'Build' CTA with links and Discord access. The overall density is balanced, prioritizing clarity and direct information presentation.

### Imagery

The visual language for imagery is primarily functional and illustrative, designed to complement the dark UI. Graphics are a mix of abstract shapes, data visualizations, and code snippets. Product imagery is absent; instead, performance graphs, command-line outputs, and code blocks serve as the primary visual content. Icons are monocolor, typically in Polar White or an accent color, following an outlined or filled style without complex gradients, used functionally (e.g., checkmarks, arrows). Sparse, vibrant, geometric 'bug' illustrations or abstract shapes (like stars or splashes of color) add a playful, almost animated energy, often acting as badges or highlights. Density is moderate, with visuals strategically placed to break up text-heavy sections or to illustrate technical concepts directly.
