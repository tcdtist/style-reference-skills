---
version: alpha
name: Rainbow
description: This design system is a high-energy, playful expression of crypto. The visual theme is a vibrant, dream-like landscape of soft gradients and stylized cartoon clouds, punctuated by bold, rounded typography. It leverages a maximalist approach to color, with a spectrum of vivid hues appearing dynamically across elements. Transparency and soft white-tinted shadows give components a floating, ethereal quality, contrasting with the solid, impactful call-to-action buttons.
colors:
  ink: "#0f101a"
  cloudburst: "#ffffff"
  whisper-gray: "#777885"
  pale-mist: "#f1f3f6"
  sunset-orange: "#ff8a00"
  neon-pink: "#ff54bb"
  sky-blue: "#33aaff"
  cyan-tint: "#99eeff"
  radiant-violet: "#8c64ff"
  teal-glow: "#00fff0"
  joyful-red: "#ff0f0f"
  pink-sunset-gradient: "#ff8564"
  rainbow-burst-gradient: "#75e6ff"
  ethereal-aqua-radial: "#94ffe8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.01px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.031px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: -0.031px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: -0.031px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
    letterSpacing: -0.028px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -0.018px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -0.03px
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: -0.02px
  display-xxxl:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 1
    letterSpacing: -0.02px
spacing:
  cardRadius: 32px
  buttonRadius: 40px
  elementGap: 8-24px
  sectionGap: 48-60px
components:
  download-cta-button-group:
    role: 
  wallet-token-list-card:
    role: 
  network-changed-notification-banner:
    role: 
  primary-call-to-action-button-orange:
    role: Main user action for downloads and critical steps.
  secondary-call-to-action-button-pink:
    role: Alternative user action for downloads or prominent selections.
  ghost-navigation-link:
    role: Top navigation items and auxiliary links.
  elevated-wallet-card:
    role: Displays primary wallet information and active states.
  small-pill-status-tag:
    role: Used for 'Network changed' or other brief notifications.
  system-utility-text-link:
    role: Informational or secondary navigation links, often with an arrow icon.
---

## Overview

**North Star:** Vibrant dreamscape on cloudnine. The dominant palette of soft, often radial, gradients creates an otherworldly, playful backdrop for bold UI elements.

This design system is a high-energy, playful expression of crypto. The visual theme is a vibrant, dream-like landscape of soft gradients and stylized cartoon clouds, punctuated by bold, rounded typography. It leverages a maximalist approach to color, with a spectrum of vivid hues appearing dynamically across elements. Transparency and soft white-tinted shadows give components a floating, ethereal quality, contrasting with the solid, impactful call-to-action buttons.

### Do's

- Prioritize SF Pro Rounded for all headings and prominent text, using its Black, Heavy, or Semibold weights for visual impact.
- Apply 40px or 50px border-radius to all buttons and key interactive elements to maintain a uniformly friendly, approachable aesthetic.
- Use Sunset Orange (#ff8a00) and Neon Pink (#ff54bb) as primary and secondary calls to action, ensuring high visual contrast against light backgrounds.
- Implement the complex inset white shadow on elevated cards and interactive elements for a luminous, floating effect.
- Employ soft radial gradients like Ethereal Aqua Radial (#94ffe8) for background textures to establish the dreamlike visual atmosphere.
- Maintain a clear hierarchy with Ink (#0f101a) for main content and Whisper Gray (#777885) for secondary information.
- Utilize -0.03em or -0.02em letter-spacing for headlines 56px and above to create a dramatic, compressed visual effect.

### Don'ts

- Avoid sharp corners; the minimum radius for most UI elements should be 10px, with larger elements featuring 32px or 40px.
- Do not use solid background colors for large sections; instead, apply subtle gradients or Pale Mist (#f1f3f6) to maintain softness.
- Refrain from using stark blacks or harsh whites; Ink (#0f101a) and Cloudburst (#ffffff) are the darkest and lightest neutrals.
- Do not introduce strong, desaturated grays outside the Whisper Gray (#777885) family; maintain the soft, slightly chromatic neutral palette.
- Avoid heavy drop shadows below elements; the preferred elevation is via the ethereal white inset shadow or subtle background changes.
- Do not use generic sans-serif fonts for display or heading text; SF Pro Rounded is crucial for brand identity.

### Layout

The page primarily uses a full-bleed layout, allowing large background gradients and abstract graphics to fill the screen rather than being confined to a max-width container. The hero section is full-bleed with animated 3D elements and a centered headline. Sections maintain consistent vertical spacing between 48px and 60px. Content is arranged flexibly, often with centered stacks for headlines and subtext, or with asymmetric compositions where product mockups float next to text blocks. Navigation is a simple top-bar, sticky header at page top with minimal links and a primary 'Download' button. Element density is comfortable and spacious, allowing the large, vibrant graphics ample room to breathe.

### Imagery

The visual language is dominantly 3D abstract graphics and stylized product mockups. Photography is absent. Abstract forms, often with rainbow gradients (like the cloud and planet visuals), create a playful, almost cartoonish, yet high-fidelity atmosphere. Product mockups (e.g., phone displaying crypto wallet, browser extension windows) are rendered with soft, diffused lighting and slightly transparent, gradient-filled backgrounds that blend into the overall aesthetic. Icons are simple, filled, and often incorporate brand colors. Imagery serves a decorative, atmospheric role rather than strict informational one, enhancing the brand's 'color' and 'fun' identity.

### Elevation

Elevation is achieved not through traditional drop shadows but via a unique white inset shadow that creates a luminous, floating effect for cards and layered elements. This maintains the airy, dream-like quality of the UI, giving components a subtle sense of being suspended and illuminated from within.
