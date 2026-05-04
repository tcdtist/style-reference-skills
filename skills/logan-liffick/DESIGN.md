---
version: alpha
name: Logan Liffick
description: This design system crafts a focused, almost monastic experience, presenting information with absolute clarity and minimal visual distraction. The stark contrast between near-black text and a pale, subtle background establishes a high-readability environment, reminiscent of a printed page. Its singular typeface, 'Inter', used across varying weights and sizes, lends a consistent and understated professionalism, while the precise, controlled spacing dictates a calm, unhurried rhythm to content consumption.
colors:
  text-black: "#171717"
  subtle-gray: "#525252"
  paper-white: "#FFFFFF"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.56
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
spacing:
  elementGap: 2-8px
  sectionGap: 64-80px
components:
  profile-header:
    role: 
  about-section:
    role: 
  footer:
    role: 
  header-title:
    role: Main page title or identity.
  header-subtitle:
    role: Secondary title or descriptive role.
  section-heading:
    role: Introduces content sections.
  body-text-paragraph:
    role: Standard informational text.
  ghost-link-button:
    role: Interactive text links, like footer navigation or inline references.
  monospace-link-button:
    role: Interactive text links, often in footer, with a distinct monospace style.
---

## Overview

**North Star:** monochromatic scholarly text

This design system crafts a focused, almost monastic experience, presenting information with absolute clarity and minimal visual distraction. The stark contrast between near-black text and a pale, subtle background establishes a high-readability environment, reminiscent of a printed page. Its singular typeface, 'Inter', used across varying weights and sizes, lends a consistent and understated professionalism, while the precise, controlled spacing dictates a calm, unhurried rhythm to content consumption.

### Do's

- Prioritize Inter weight 500 for all headings to maintain a subtle, yet clear hierarchy.
- Use #171717 for primary text and #525252 for secondary text to establish a muted, monochromatic contrast.
- Employ 1.63 lineHeight for all body text sections to ensure comfortable reading distance.
- Maintain a consistent 2px border radius on all interactive elements like links and buttons.
- Apply 64px `marginBottom` for major section breaks and 40px `paddingTop`/`paddingBottom` for internal section spacing, creating a spacious flow.

### Don'ts

- Avoid introducing additional typefaces; the design maintains strict reliance on Inter and ui-monospace.
- Do not use highly saturated or vivid colors; the palette is deliberately achromatic with minimal contrast.
- Refrain from complex shadows or gradients; flat design and direct light are preferred.
- Do not deviate from the 2px border radius; sharp corners or excessive rounding are not part of this aesthetic.
- Avoid dense information blocks; use generous vertical spacing (64px `marginBottom`, 40px `paddingTop`/`paddingBottom`) to create visual pauses.

### Layout

The page adheres to a centered, max-width content model, with ample surrounding white space, resembling a document or resumé. The sections stack vertically, each introduced by a clear heading. There's a consistent rhythm of vertical spacing between content blocks, giving a sense of calm progression. The footer is minimal, also centered, with text links.

### Imagery

The site is entirely text-dominant, eschewing photography, illustrations, or graphics. There are no visual elements beyond typography and subtle interactive indicators. This creates an atmosphere of pure information delivery, focusing the user's attention solely on the written content.
