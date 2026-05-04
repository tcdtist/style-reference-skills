---
version: alpha
name: Maximilian Berndt
description: Maximilian Berndt's site presents an austere, high-contrast textual experience, reminiscent of a command-line interface or a minimalist resume. The design prioritizes content and readability with a stark black on white palette, punctuated only by subtle gray for secondary information. Components are invisible until interacted with or until a clear function is needed, maintaining a paper-like simplicity.
colors:
  canvas-white: "#fdfdfd"
  ink-black: "#16161d"
  absolute-black: "#000000"
  subtle-gray: "#737377"
  whisper-gray: "#a1a1a3"
spacing:
  elementGap: 4px
  sectionGap: 48px
components:
  ghost-text-button:
    role: Invisible until hover, text-only navigation and informational buttons.
  content-card:
    role: Container for lists of work, skills, or clients.
  interactive-list-item:
    role: Styled list items that highlight on interaction, typically links.
---

## Overview

**North Star:** Typewritten document on crisp paper.

Maximilian Berndt's site presents an austere, high-contrast textual experience, reminiscent of a command-line interface or a minimalist resume. The design prioritizes content and readability with a stark black on white palette, punctuated only by subtle gray for secondary information. Components are invisible until interacted with or until a clear function is needed, maintaining a paper-like simplicity.

### Do's

- Prioritize text content with a high contrast ratio of Ink Black (#16161d) on Canvas White (#fdfdfd) for primary information.
- Use Subtle Gray (#737377) for all categorical section headings (e.g., 'Work', 'Skills', 'Clients').
- Employ a 'ghost' button style with transparent background and Canvas White (#fdfdfd) text/border for all interactive controls that should blend into the background.
- Maintain a strict 0px border-radius across all UI elements to reinforce the austere, document-like aesthetic.
- Structure content in distinct, vertically stacked sections, each beginning with a Subtle Gray (#737377) heading.
- Use 4px as the primary horizontal and vertical gap between related inline elements.
- Pad content cards with 36px on the left and right, ensuring a consistent internal margin for list items and data.

### Don'ts

- Avoid using any colored backgrounds or gradients; maintain the crisp white canvas.
- Do not introduce any drop shadows or complex elevation; surfaces should remain flat.
- Never use rounded corners on any UI element; all corners must be sharp.
- Do not deviate from the specified gray palette for text; avoid vibrant or saturated colors for content.
- Do not add any additional padding to ghost buttons; they should appear as raw text until interacted with.

### Layout

The page follows a minimalist, single-column document-style layout. Content is centered within an implied maximum width, though no explicit pageMaxWidth is set, creating the impression of content floating on an infinite white canvas. The hero section displays the name and title, followed by distinct sections for 'Work', 'Skills', and 'Clients', each marked with a muted gray heading. Navigation is extremely sparse, consisting only of a few links in the header and footer. Vertical rhythm is established through consistent spacing between content blocks and list items.

### Imagery

No imagery is present on the site. The visual system relies entirely on typography and structured text to convey information and establish hierarchy. There are no icons or illustrative elements.
