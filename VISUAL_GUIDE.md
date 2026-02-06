# 🏥 Pathology Lab UI - Visual Guide

## Component Hierarchy

```
App.jsx
├── <BloodTests />
│   ├── <section className="blood-tests-section">
│   │   ├── <header className="section-header">
│   │   │   ├── <h2>Blood Analysis</h2>
│   │   │   └── <p>Comprehensive blood test categories</p>
│   │   ├── <div className="tests-grid">
│   │   │   ├── <TestCard test={fever} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={diabetes} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={kidneys} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={liver} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={thyroid} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={heart} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={vitamin} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={allergy} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={infertility} onOpen={setSelectedTest} />
│   │   │   └── <TestCard test={cancer} onOpen={setSelectedTest} />
│   │   └── {selectedTest && <Modal test={selectedTest} onClose={...} />}
│   │
│   └── TestCard Component Details:
│       ├── Icon Container (background: #f5a623 with 0.04 opacity)
│       ├── Title (uppercase, bold)
│       └── Styles: hover lift, smooth transitions
│
├── <UrineTests />
│   ├── <section className="blood-tests-section">
│   │   ├── <header className="section-header">
│   │   │   ├── <h2>Urine Analysis</h2>
│   │   │   └── <p>Comprehensive urine test categories</p>
│   │   ├── <div className="tests-grid">
│   │   │   ├── <TestCard test={routine} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={microscopy} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={sugar} onOpen={setSelectedTest} />
│   │   │   ├── <TestCard test={culture} onOpen={setSelectedTest} />
│   │   │   └── <TestCard test={protein} onOpen={setSelectedTest} />
│   │   └── {selectedTest && <Modal test={selectedTest} onClose={...} />}
│   │
│   └── Similar structure to BloodTests
│
└── Modal Component Details:
    ├── Header
    │   ├── Title (1.75rem, bold)
    │   └── Close Button (X icon)
    ├── Body
    │   ├── "Tests Included" heading
    │   ├── Tests list (bullet points only)
    │   └── Optional note (italicized)
    └── Footer
        └── "Reports available within 24 hours"
```

---

## Card Layout

### Visual Structure
```
┌─────────────────────────┐
│  Background: white      │
│  Border: 1px #f0f0f0    │
│  Shadow: soft 0.08      │
│  Radius: 16px           │
├─────────────────────────┤
│                         │
│   ┌─────────────────┐   │  ← Icon Container
│   │                 │   │     Background: #f5a623
│   │   SVG ICON      │   │     Opacity: 0.04
│   │ (Lavender +     │   │     Height: 100px
│   │  Yellow Accent) │   │     Radius: 12px
│   │                 │   │
│   └─────────────────┘   │
│                         │
│    UPPERCASE TITLE      │  ← Card Title
│                         │     Font: 0.9rem, bold
│                         │     Color: #1f1f1f
│                         │
└─────────────────────────┘

HOVER STATE:
- Transform: translateY(-6px)
- Shadow: 0 12px 24px rgba(91, 75, 138, 0.15)
- Icon background: #f5a623 with 0.08 opacity
- Title color: #5B4B8A
```

---

## Modal Layout

### Desktop View (centered popup)
```
┌────────────────────────────────────┐
│          Black backdrop            │  ← backdrop-filter: blur(2px)
│      (opacity: 0.6)                │
│                                    │
│         ┌──────────────────────┐  │
│         │ Header              │  │
│         ├──────────────────────┤  │
│         │ Test Title       [X] │  │
│         ├──────────────────────┤  │
│         │ Body                 │  │
│         │                      │  │
│         │ TESTS INCLUDED      │  │
│         │ • Complete Blood ... │  │
│         │ • ESR               │  │
│         │ • CRP               │  │
│         │                      │  │
│         │ Optional note text  │  │
│         │ (italicized)         │  │
│         ├──────────────────────┤  │
│         │ Footer               │  │
│         │ Reports in 24 hours │  │
│         └──────────────────────┘  │
│                                    │
└────────────────────────────────────┘

Width: 100% max 500px
Radius: 20px
Animation: fadeIn 0.2s
```

### Mobile View (bottom sheet)
```
┌────────────────────────┐
│   Black backdrop       │  ← opacity: 0.6
│  (slides up from       │     backdrop-filter: blur
│   bottom)              │
│                        │
│                        │
│  ┌────────────────────┐│
│  │ Header             ││
│  ├────────────────────┤│
│  │ Test Title     [X] ││
│  ├────────────────────┤│
│  │ TESTS INCLUDED     ││
│  │ • Test 1           ││
│  │ • Test 2           ││
│  │ • Test 3           ││
│  │                    ││
│  │ Optional note      ││
│  ├────────────────────┤│
│  │ Reports in 24h     ││
│  └────────────────────┘│
└────────────────────────┘

Top radius: 20px 20px 0 0
Width: 100%
Max-height: 90vh
Animation: slideUp
```

---

## Color Usage

### Palette Map
```
#5B4B8A - Primary Lavender/Purple
├── Card borders (hover state)
├── Icon strokes
├── Title text (hover state)
├── "Tests Included" heading
├── Modal header background hints
└── Close button hover background

#F5A623 - Accent Yellow
├── Icon fills
├── Icon background (0.04 opacity on cards)
├── Bullet point color (• symbol)
├── Icon background (0.08 opacity on hover)
└── Text highlights

#1f1f1f - Dark Text
├── Card titles
├── Modal title
├── Test item text
└── Main content

#666 - Light Text
├── Subtitles
├── Footer text
├── Notes/italics
└── Secondary content

#ffffff - White Background
├── Card backgrounds
├── Modal backgrounds
└── Main page background

#f8fafc - Light Background
├── Page gradient endpoint
├── Modal footer background
├── Header background
└── Subtle highlighting
```

---

## Icon Design Pattern

Each icon uses the same design language:

```
SVG Specifications:
├── Size: 80x80
├── Viewbox: "0 0 80 80"
├── Stroke Color: #5B4B8A (lavender)
├── Stroke Width: 1.5-2.5
├── Fill Color: #F5A623 (yellow)
├── Fill Opacity: 100%
├── Line Cap: round
├── Line Join: round
└── Minimal, clean design

15 Icons Included:
1.  Fever - Thermometer with yellow fill
2.  Diabetes - Medical container with drop
3.  Kidneys - Twin organs with dots
4.  Liver - Organ shape with details
5.  Thyroid - Gland with accent dots
6.  Heart - Heart shape with details
7.  Vitamin - Star with rays
8.  Allergy - Droplet with reaction marks
9.  Infertility - Gender symbol with accents
10. Cancer - Target with crosshairs
11. Routine - Document with lines
12. Microscopy - Microscope with lens details
13. Sugar - Grid cross pattern
14. Culture - Concentric circles
15. Protein - Molecule structure
```

---

## Responsive Grid System

### Desktop (1024px+)
```
┌─────┬─────┬─────┬─────┐
│Card │Card │Card │Card │  gap: 2rem
├─────┼─────┼─────┼─────┤
│Card │Card │Card │Card │
└─────┴─────┴─────┴─────┘

grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))
```

### Tablet (768px)
```
┌─────┬─────┬─────┐
│Card │Card │Card │  gap: 1.5rem
├─────┼─────┼─────┤
│Card │Card │Card │
└─────┴─────┴─────┘

grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))
```

### Mobile (480px)
```
┌─────┬─────┐
│Card │Card │  gap: 1rem
├─────┼─────┤
│Card │Card │
├─────┼─────┤
│Card │Card │
└─────┴─────┘

grid-template-columns: repeat(2, 1fr)
```

---

## State Management Flow

```
BloodTests Component
│
├─ State: selectedTest = null
│
├─ Render 10 TestCard components
│  └─ Each card: onClick → setSelectedTest(test)
│
├─ If selectedTest !== null
│  └─ Render Modal
│     ├─ Displays: selectedTest.title
│     ├─ Displays: selectedTest.details (bullet list)
│     ├─ Displays: selectedTest.note (if exists)
│     └─ Close button: onClick → setSelectedTest(null)
│
└─ Click backdrop or close button → setSelectedTest(null)

Same pattern for UrineTests component
```

---

## Animation Timeline

```
Page Load:
0ms     → fadeIn starts (opacity 0 → 1)
600ms   → fadeIn completes, slideUp starts on grid
600ms   → Grid cards appear with staggered animation

Card Hover:
0ms     → Initial state
200ms   → Transform -6px + shadow enhance
300ms   → Stable hover state

Card Click:
0ms     → Modal backdrop fadeIn starts
0ms     → Modal container slideUp starts
300ms   → Modal fully visible

Modal Close:
0ms     → FadeOut/SlideDown reverse animations
200ms   → Modal fully hidden

Button Hover:
0ms     → Background color change
200ms   → Color fully applied
```

---

## Accessibility Features

```
HTML Structure:
<section id="blood-tests"> ← Semantic section
  <header>
    <h2>Blood Analysis</h2> ← Proper heading hierarchy
    <p>Subtitle</p>
  </header>
  <div class="tests-grid">
    <article> ← Semantic cards
      (Card content)
    </article>
  </div>
</section>

Interactive Elements:
- Close button: aria-label="Close modal"
- Scroll to top: title="Back to top"
- Semantic button elements
- Focus visible states
- Proper z-index stacking (z-index: 1000)

Screen Reader:
- Semantic HTML structure
- Proper heading levels
- ARIA labels where needed
- Alt text for icons (via title)
```

---

## Performance Considerations

```
Component Optimization:
- React functional components
- No unnecessary re-renders
- State isolated to sections
- No prop drilling
- Inline CSS for animations

CSS Optimization:
- CSS variables for theming
- Minimal media queries
- Hardware-accelerated transforms
- Efficient selectors

Asset Optimization:
- SVG icons (scalable, small size)
- No external images
- Lazy animation with CSS
- No third-party libraries for icons
```

This visual guide shows the complete structure, layout, and design of the Pathology Lab UI system.
