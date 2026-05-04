---
version: alpha
name: beehiiv
description: This design system presents a digital command center aesthetic, utilizing a deep navy background contrasted with vibrant magenta and electric blue accents. The visual tension comes from the interplay of sharp 6px radii for general elements and soft 9999px pill shapes for interactive components. Subtle gradients are layered on dark surfaces, creating depth and a sophisticated, tech-forward atmosphere, ensuring the platform feels powerful yet accessible for creators.
colors:
  midnight-ink: "#060419"
  shadow-violet: "#0d0b28"
  storm-gray: "#4e4e6c"
  cloud-whisper: "#c4c2d6"
  ghost-white: "#f7f5ff"
  starfield-white: "#ffffff"
  electric-blue: "#2f39ba"
  cosmic-magenta: "#ff5ec4"
  indigo-fusion: "#2f39ba"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.56
    letterSpacing: 0.54px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.72px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: 0.9px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: 1.08px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: 2.16px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
spacing:
  buttonRadius: 9999px
  elementGap: 16px
  sectionGap: 48px
components:
  sign-up-button-group:
    role: 
  feature-cards:
    role: 
  testimonial-cards:
    role: 
  primary-cta-button:
    role: Call-to-action button for critical user flows
  secondary-cta-button-solid:
    role: Solid background button for secondary actions or filled states
  accent-gradient-button:
    role: High-impact button for key conversions or emphasized actions
  nav-item:
    role: Standard top navigation link
  feature-card:
    role: Card for showcasing various product features
  testimonial-card:
    role: Container for partner logos and customer quotes
---

## Overview

**North Star:** Galactic Command Center. Deep space blues and purples punctuated by bright digital flares against a crisp, dark UI.

This design system presents a digital command center aesthetic, utilizing a deep navy background contrasted with vibrant magenta and electric blue accents. The visual tension comes from the interplay of sharp 6px radii for general elements and soft 9999px pill shapes for interactive components. Subtle gradients are layered on dark surfaces, creating depth and a sophisticated, tech-forward atmosphere, ensuring the platform feels powerful yet accessible for creators.

### Do's

- Use Midnight Ink (#060419) as the primary page background to establish the dark theme.
- Apply Electric Blue (#2f39ba) for all primary interactive elements and crucial call-to-actions, ensuring high contrast.
- Employ the 9999px radius (pill shape) for all buttons and tags to maintain a consistent interactive element style.
- Reserve Clash Grotesk for headings (sizes 48px, 60px, 72px) and Satoshi for all body text, links, and navigation items.
- Group related content within cards using Shadow Violet (#0d0b28) as the background with a 6px border-radius.
- Utilize the Indigo Fusion gradient (linear-gradient(90deg, rgb(47, 57, 186) 0%, rgb(255, 94, 196) 100%)) as a prominent eye-catcher for hero elements or major announcements.

### Don'ts

- Do not use white backgrounds directly on dark content sections; instead, use Shadow Violet (#0d0b28) or similar dark neutral tones for surface differentiation.
- Avoid using radii other than 6px for non-interactive containers and 9999px for buttons/tags to maintain shape consistency.
- Do not introduce strong drop shadows on internal components unless it's a specific testimonial card, to maintain a largely flat aesthetic.
- Refrain from mixing non-Clash Grotesk fonts for headlines or non-Satoshi fonts for body text.
- Do not use highly saturated colors for large text blocks; primarily use Starfield White (#ffffff) or Ghost White (#f7f5ff) for readability on dark backgrounds.
- Avoid excessive use of the Cosmic Magenta (#ff5ec4) accent; reserve it for specific highlights to maintain its impact.

### Layout

The layout is primarily full-bleed with content centered within an implied maximum width. The hero section is a full-viewport dark background with a large, left-aligned headline and subtext, complemented by floating 3D product mockups on the right. Subsequent sections often feature a 3-column grid for key features or testimonials, maintaining consistent vertical spacing. There's an alternating rhythm of hero-like wide sections and more structured content blocks. Navigation is a sticky top bar, fully contained within the dark theme. The overall density is comfortable, with generous breathing room between sections and content blocks, avoiding a cluttered feel.

### Imagery

The site uses a combination of realistic 3D product mockups and stylized abstract graphics. Product screenshots are typically dark-themed UI elements (cards, dashboards) artfully composed to float in space, often with subtle glow effects or abstract background shapes in brand colors like Electric Blue and Cosmic Magenta. These visuals serve an explanatory role, showcasing product features within a highly polished, aspirational digital environment. Icons are minimal, either Starfield White or Cloud Whisper, often in outlined style, used for feature illustration rather than purely decorative purposes. There's no photography or realistic illustration, maintaining a focus on the digital product itself.
