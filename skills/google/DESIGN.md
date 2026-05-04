---
version: alpha
name: Google
description: Google's dark-mode visual system emphasizes clarity and quiet efficiency. It features a deep anthracite canvas, with softened, rounded search surfaces and interaction elements that appear subtly elevated. Typography is direct and legible, maintaining a balanced hierarchy. The system primarily uses monochromatic tones, punctuated by a soft, luminous blue for active states and critical information, adding a gentle glow rather than stark contrast.
colors:
  twilight-canvas: "#16171a"
  charcoal-surface: "#303134"
  stone-accent: "#4d5156"
  ghost-gray: "#5f6368"
  platinum-text: "#e8e8e8"
  silver-muted: "#bfbfbf"
  azure-glow: "#99c3ff"
  winter-sky: "#c2e7ff"
  deep-midnight: "#001d35"
  pewter-border: "#444746"
spacing:
  buttonRadius: 8px
  elementGap: 15px
components:
  search-input-bar:
    role: Primary interactive element for search functionality
  default-action-button:
    role: Standard calls to action and form submissions
  ghost-header-link:
    role: Top navigation and utility links
  outlined-cta-button:
    role: Secondary or alternative calls to action
  ai-mode-tag:
    role: Special feature indicator or interactive tag
  footer-text-link:
    role: Informational links in the footer section
  sign-in-button:
    role: Primary login or account access call to action
---

## Overview

**North Star:** anthracite quietude with luminous blue

Google's dark-mode visual system emphasizes clarity and quiet efficiency. It features a deep anthracite canvas, with softened, rounded search surfaces and interaction elements that appear subtly elevated. Typography is direct and legible, maintaining a balanced hierarchy. The system primarily uses monochromatic tones, punctuated by a soft, luminous blue for active states and critical information, adding a gentle glow rather than stark contrast.

### Do's

- Maintain a predominantly dark theme using 'Twilight Canvas' (#16171a) for page backgrounds and 'Charcoal Surface' (#303134) for interactive elements.
- Use '#e8e8e8' (Platinum Text) for primary text and headings to ensure high contrast and readability.
- Apply 'Azure Glow' (#99c3ff) exclusively for interactive elements like links and outlined button borders to signify interactivity.
- Prioritize smooth, organic shapes with 26px or 100px border-radii for containers like search inputs, and 8px for standard buttons.
- Ensure generous but comfortable spacing, with an approximate 15px element gap to maintain visual breathing room.
- Use Google Sans for prominent UI labels and Google Sans Text for navigation, reserving Arial for body copy and detailed text.
- Elevate interactive states subtly; use 'Ghost Gray' (#5f6368) on hover for a gentle visual feedback.

### Don'ts

- Avoid using harsh, saturated primary colors for large background areas; color should primarily be used for accents and states.
- Do not introduce sharp, angular corners; maintain the softened, rounded aesthetic across all components.
- Refrain from heavy drop shadows or strong borders; components should feel integrated and subtly layered.
- Do not deviate from the established typefaces; Arial is for body text, not headlines.
- Avoid dense, information-packed layouts without sufficient padding and element spacing.
- Do not use 'Platinum Text' (#e8e8e8) for unclickable, decorative elements; reserve it for essential information and primary interactions.
- Never use the browser default link color #0000ee; all links should use 'Azure Glow' (#99c3ff).

### Imagery

The site primarily features a text and UI-dominant style with minimal decorative imagery. Where present, icons are outlined or simple solid fills, using the system's 'Platinum Text' (#e8e8e8) or 'Azure Glow' (#99c3ff) to maintain a cohesive, clean aesthetic. The visual style is functional and illustrative, not photographic or abstract. Imagery serves to augment UI rather than create atmosphere, appearing as small, contained visual cues.
