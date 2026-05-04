---
version: alpha
name: Desktop.fm
description: This design system evokes a sense of digital minimalism, like an operating system interface. It uses a predominantly achromatic palette with subtle gradients on surfaces, creating depth without heavy shadows. The overall feel is one of understated functionality and quiet efficiency, utilizing precise typography and a singular vibrant accent for interactive elements.
colors:
  cloud-cover: "#f1f2f3"
  graphite: "#111111"
  light-steel: "#dddddd"
  snow: "#ffffff"
  dark-slate: "#2d2d2d"
  mid-grey: "#b4b4b4"
  ash: "#777777"
  neon-green: "#009942"
spacing:
  cardRadius: 25px
  buttonRadius: 20px
  elementGap: 2px
  sectionGap: 30px
components:
  main-cta-card:
    role: 
  button-group-primary-utility:
    role: 
  status-badge-monospace-tag-collection:
    role: 
  info-button:
    role: Utility button
  selected-info-button:
    role: Active utility button
  main-card:
    role: Content container
---

## Overview

**North Star:** Operating System Interface — clean-cut, functional, and digital.

This design system evokes a sense of digital minimalism, like an operating system interface. It uses a predominantly achromatic palette with subtle gradients on surfaces, creating depth without heavy shadows. The overall feel is one of understated functionality and quiet efficiency, utilizing precise typography and a singular vibrant accent for interactive elements.

### Do's

- Prioritize the achromatic palette with Cloud Cover (#f1f2f3) as background and Graphite (#111111) as primary text for core content.
- Apply a 25px border-radius to all primary content cards, reinforcing the soft, digital aesthetic.
- Use the specific letter-spacing values from the -apple-system font profiles (-0.0360em at 12px, -0.0160em at 16px, etc.) for all text to maintain visual density.
- Implement the rgba(51, 51, 51, 0.1) 0px 0px 40px 0px shadow for all elevated card components to create subtle depth.
- Reserve Neon Green (#009942) exclusively for decorative elements or non-critical accents in illustrations and icons.
- Use Dark Slate (#2d2d2d) for primary call-to-action buttons, with 5px vertical and 20px horizontal padding and 20px border-radius.

### Don'ts

- Avoid strong, saturated colors outside of the designated accent palette; maintain the dominant neutral scheme.
- Do not deviate from the specified border radii; avoid sharp corners or excessively rounded elements beyond the 20px/25px standard.
- Do not use generic shadows; adhere strictly to the defined card shadow for all elevated elements.
- Avoid large negative letter spacing on display type; only apply the precisely defined values for -apple-system.
- Do not introduce additional font families; stick to -apple-system (or its system-ui substitute) and monospace.
- Do not use more than two distinct button styles on a single screen without a clear hierarchy.

### Layout

The layout is primarily centered and minimal, focusing on a single hero element. The page operates on a full-bleed model with a light gray background, presenting a single focal point (the 3D CD render) with interactive elements centered beneath it. Elements are stacked vertically with compact spacing, creating a dense yet clean presentation. There is no visible navigation or complex grid structure, suggesting a single-purpose landing page rather than a multi-page site.

### Imagery

The site uses abstract 3D renders with strong reflections and geometric light lines. The central image of a reflective silver CD-ROM, bathed in dynamic blue-green light, is surrounded by thin, vivid Neon Green (#009942) laser-like lines that crisscross the background. Imagery serves a decorative and atmospheric role, establishing a futuristic, tech-oriented mood without direct product representation. The treatment is full-bleed for the background element, with a contained, center-stage main object.
