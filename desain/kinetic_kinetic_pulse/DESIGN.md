---
name: Kinetic Kinetic Pulse
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c1cab0'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8b947d'
  outline-variant: '#424936'
  surface-tint: '#91db2a'
  primary: '#9ee939'
  on-primary: '#1f3700'
  primary-container: '#84cc16'
  on-primary-container: '#315200'
  inverse-primary: '#416900'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#74e3ff'
  on-tertiary: '#003640'
  tertiary-container: '#37c9e7'
  on-tertiary-container: '#00515f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acf847'
  primary-fixed-dim: '#91db2a'
  on-primary-fixed: '#102000'
  on-primary-fixed-variant: '#304f00'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-stat:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.04em
  display-stat-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies athletic vitality, precision telemetry, and motivational momentum. Crafted for dedicated athletes, fitness trackers, and performance enthusiasts, the visual language balances high-tech data density with vibrant kinetic energy. It evokes the sharp clarity of an elite digital dashboard and the adrenaline of competitive training.

The aesthetic merges **High-Contrast Modernism** with **Deep-Surface Glassmorphism**. Sleek, dark carbon-slate backdrops create focus and reduce eye strain during dawn, dusk, or indoor workouts, while vivid electric lime and emerald green highlights inject momentum and highlight achievements. High-contrast stats, sharp analytical containers, and luminous accents ensure performance metrics are readable at an instantaneous glance during movement.

## Colors

The palette leverages high-luminance kinetic accents anchored against deep, cold slate surfaces to maximize visual legibility and drive athletic focus:

- **Primary Accent (`#84CC16`)**: Vivid Electric Lime. Used for vital action triggers, active recording states, record-breaking metric highlights, and peak target thresholds.
- **Secondary Accent (`#10B981`)**: Kinetic Emerald. Denotes sustained output, completion, positive pacing, and physiological recovery states.
- **Tertiary Accent (`#06B6D4`)**: Velocity Cyan. Applied to secondary telemetry data such as cadence, elevation, heart-rate zones, and active time intervals.
- **Neutral Base (`#0F172A`)**: Deep Obsidian Slate. Acts as the root canvas. Layered surface tiers use progressively lighter slate tones (`#1E293B` for structural surfaces, `#334155` for high-contrast card borders and subtle dividers).
- **Text & High-Contrast Light Tones**: Crisp Pure White (`#F8FAFC`) for primary numeric metrics and headline typography, with Muted Cool Zinc (`#94A3B8`) for telemetry units and field labels.

## Typography

Typography prioritizes fast cognitive processing during motion and clean data hierarchy.

- **Space Grotesk** commands the system’s numeric readouts, headings, and metric labels. Its technical, geometric architecture delivers athletic precision and punchy, modernized telemetry vibes.
- **Hanken Grotesk** serves body text and contextual descriptions, providing neutral grotesque stability and superior legibility across dense workout logs, split times, and profile data.
- **Micro-Labels & Unit Identifiers**: Uppercase styling with expanded tracking (`0.06em` to `0.08em`) applied to `label-md` and `label-sm` ensures unit badges (e.g., `BPM`, `KCAL`, `KM/H`, `PACE`) remain sharply legible at tiny sizes.

## Layout & Spacing

This design system uses a flexible 12-column responsive grid on desktop and tablet, collapsing to a dense 4-column structure on mobile devices:

- **Desktop (1024px+)**: Max content container bounded at 1440px. 12 columns with 24px (`1.5rem`) gutters and 32px (`2rem`) outer margins. Metrics and telemetry graphs leverage multi-column modular card arrays (e.g., 3-column split for daily rings, 9-column span for primary exertion graphs).
- **Tablet (640px - 1023px)**: 6 or 8 columns with 16px gutters and 24px margins. Cards dynamically reflow into dual-column grids.
- **Mobile (<640px)**: 4 columns with 12px gutters and 16px canvas padding. Action bars anchor persistently to the bottom thumb zone with tactile safe-area padding.
- **Vertical Spacing Rhythm**: Built on an atomic 4px base increment. Inner-component gaps strictly observe `space-xs` (4px) to `space-md` (16px), preserving compact density for telemetry readouts.

## Elevation & Depth

Visual depth is achieved through stacked structural dark surface tiers, precision hairline borders, and neon back-glows rather than traditional diffuse drop shadows.

- **Surface Tiers**:
  - **Level 0 (Canvas Base)**: Deep Slate `#0F172A`.
  - **Level 1 (Card & Module Background)**: `#1E293B` at 85% opacity with 16px backdrop blur (`backdrop-filter: blur(16px)`).
  - **Level 2 (Active Stat Containers & Floating Nav)**: `#334155` at 70% opacity, bordered with a subtle `rgba(255, 255, 255, 0.08)` outline.
- **Kinetic Glow (Primary Elevation)**: Interactive elements, active toggle states, and PR badges project a calibrated outer luminous blur: `0 0 20px rgba(132, 204, 22, 0.22)`.
- **Low-Contrast Outlines**: Non-active stat cards employ crisp 1px borders using `rgba(148, 163, 184, 0.12)` to maintain razor-sharp boundary definition on high-DPI displays without visual clutter.

## Shapes

The design system specifies a controlled, architectural soft roundedness (`0.25rem` to `0.5rem`). This tight radius maintains a mechanical, instrument-grade posture suited for precise telemetry readouts, avoiding bubbly aesthetics while maintaining modern touch ergonomics.

- Standard inputs, buttons, and telemetry metric blocks feature `0.25rem` (`rounded-sm`) to `0.5rem` (`rounded-md`).
- Primary metric overview cards and modal sheets implement `0.75rem` (`rounded-xl`).
- High-intensity status tags and activity mode pills are the sole exception, applying fully rounded circular pill geometry (`9999px`) to immediately separate categorical flags from analytical containers.

## Components

### Buttons & Interactive Triggers
- **Primary Kinetic Button**: High-visibility `#84CC16` fill with jet black `#0F172A` bold Space Grotesk text. On hover, triggers a subtle scaling transition (`1.02`) and activates the primary neon back-glow (`0 0 24px rgba(132, 204, 22, 0.35)`).
- **Secondary Ghost Button**: Transparent core encased in a 1px border (`rgba(255, 255, 255, 0.2)`), filled with white text. Hovers transition to `rgba(255, 255, 255, 0.06)`.
- **Destructive/Pause Button**: Deep crimson dark fill with sharp coral text and subtle warning border.

### Stat Cards & Analytical Containers
- Cards feature dark slate translucent backings (`#1E293B`/85%) paired with 1px hairline borders.
- Top section holds the uppercase micro-label (`label-sm`) and relevant status icon.
- Central zone showcases raw numerical performance metrics via `display-stat`, paired with baseline unit annotations (`KM`, `BPM`, `WATT`).
- Bottom section reserves space for contextual micro-deltas (e.g., `+12% vs last week`) colored in either Kinetic Emerald or Muted Zinc.

### Gamification Badges & Achievement Nodes
- Polygon or circular badge shields framed by dual-tone metallic borders (`rgba(132, 204, 22, 0.4)` and `rgba(6, 182, 212, 0.4)`).
- Unearned achievements display a desaturated 20% opacity wireframe state. Unlocked badges burst into rich radial gradients with glowing iconography.

### Chips & Filter Pills
- Compact height (28px - 32px), pill-shaped geometry.
- Default: `#1E293B` background with subtle borders and `#94A3B8` typography.
- Selected: `#84CC16` background with dark contrast text, or neon stroke paired with active lime label.

### Data Visualization Graphs
- Sparklines and area charts utilize gradient fills spanning from 30% accent alpha at the peak to 0% transparency at the baseline.
- Grid lines adopt faint horizontal dashes (`rgba(148, 163, 184, 0.08)`).
- Data tooltips render as frosted floating cards (`#0F172A` with 95% opacity) displaying Space Grotesk tabular figures.

### Form Inputs & Checkboxes
- Input fields use inset slate panels (`#0F172A`) with 1px border (`#334155`). Focus switches the outline to `#84CC16` with a faint 2px outer glow.
- Checkboxes and radio switches utilize tactile neon ticks with instantaneous feedback animations.