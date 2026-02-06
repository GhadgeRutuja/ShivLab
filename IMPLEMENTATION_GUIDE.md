# Professional Pathology Lab UI - Blood & Urine Analysis

A clean, production-ready React application for a diagnostic pathology lab showcasing blood and urine test categories.

## Features

### Test Categories (10 Blood + 5 Urine = 15 Total)

**Blood Tests:**
- **FEVER** - CBC, ESR, CRP, Widal Test, Dengue, Malaria
- **DIABETES** - Fasting/Post Prandial Blood Sugar, HbA1c, Urine Sugar, Urine Ketones
- **KIDNEYS** - Blood Urea, Serum Creatinine, Uric Acid, Urine Routine, Urine Albumin
- **LIVER** - SGOT, SGPT, Bilirubin, Alkaline Phosphatase, Total Protein
- **THYROID** - T3, T4, TSH
- **HEART CHECK** - Lipid Profile, CPK-MB, Troponin-I, CRP (no ECG)
- **VITAMIN PROFILE** - Vitamin D, B12, Calcium
- **ALLERGY** - Eosinophil Count, Total IgE, CBC
- **INFERTILITY** - LH, FSH, Prolactin, Testosterone/Estrogen, TSH
- **CANCER SCREENING** - PSA, CA-125, CEA, AFP (screening markers only)

**Urine Tests:**
- **ROUTINE EXAMINATION** - Color, pH, Specific Gravity, Protein, Sugar, Bile
- **MICROSCOPY** - Pus Cells, RBC, Epithelial Cells, Casts, Crystals, Bacteria
- **SUGAR & KETONES** - Glucose, Ketones, Microalbumin
- **CULTURE & SENSITIVITY** - Bacterial Culture, Antibiotic Sensitivity, Colony Count
- **PROTEIN ANALYSIS** - Total Protein, Albumin, Microalbumin, Protein/Creatinine Ratio

## Design System

### Colors
- **Primary Purple**: #5B4B8A (lavender/purple for borders and accents)
- **Accent Yellow**: #F5A623 (small accents and highlights)
- **Background**: White with subtle gradient (#ffffff to #f8fafc)
- **Text**: #1f1f1f (dark) and #666 (light)

### Components

#### TestCard
- Rounded rectangular white cards (border-radius: 16px)
- Soft drop shadow: `0 2px 8px rgba(91, 75, 138, 0.08)`
- Lavender/purple SVG icons with yellow accents
- Uppercase title text
- Hover lift animation: translateY(-6px)
- Fully responsive grid layout

#### Modal
- Centered on desktop, bottom sheet on mobile
- Clean header with title and close button (X icon)
- Simple bullet points for tests (no checkmarks)
- No prices or complex animations
- Responsive scrolling for long test lists
- Backdrop blur effect

### Layout
- **Desktop**: Auto-fill grid with minmax(220px, 1fr)
- **Tablet**: minmax(180px, 1fr)
- **Mobile**: 2-column grid with optimized spacing

## Project Structure

```
src/
├── components/
│   ├── Modal.jsx          # Clean test details modal
│   ├── TestCard.jsx       # Reusable card component with icons
│   └── Navbar.jsx         # Navigation (existing)
├── data/
│   └── tests.js           # Central test data structure
├── sections/
│   ├── BloodTests.jsx     # Blood test section
│   ├── UrineTests.jsx     # Urine test section
│   ├── BloodTests.css     # Unified styling
│   └── [other sections]
├── App.jsx
└── main.jsx
```

## Key Implementation Details

### Centralized Data
All test data is in `src/data/tests.js`:
```javascript
export const bloodTests = [
  {
    id: 'fever',
    title: 'FEVER',
    details: ['CBC', 'ESR', 'CRP', ...],
    note: 'Optional note'
  },
  // ... more tests
]
```

### Card Icons
Custom SVG icons in TestCard.jsx:
- 15 unique icons (one per test category)
- Lavender stroke (#5B4B8A) with yellow fills (#F5A623)
- Minimal line design, professional appearance

### Modal Interaction
```jsx
const [selectedTest, setSelectedTest] = useState(null);
<TestCard test={test} onOpen={setSelectedTest} />
{selectedTest && <Modal test={selectedTest} onClose={() => setSelectedTest(null)} />}
```

## Responsive Behavior

### Desktop (1024px+)
- Auto-fill grid: 3-5 cards per row
- Full modal centered with 500px max-width
- Hover lift effect on cards

### Tablet (768px)
- Auto-fill grid: 2-3 cards per row
- Modal with same styling

### Mobile (480px and below)
- 2-column grid for better fit
- Bottom sheet modal (slides up from bottom)
- Optimized touch targets
- Full-width layout with padding

## Styling Features

- **No Animations Inside Modal**: Clean, simple bullet list display
- **Soft Shadows**: 0.08 opacity for professional look
- **Color Consistency**: Only lavender and yellow accents throughout
- **Typography**: Clean, readable font sizing with proper hierarchy
- **Spacing**: Consistent gaps and padding following design system

## Usage

### Import BloodTests Section
```jsx
import BloodTests from './sections/BloodTests';
// In your App.jsx: <BloodTests />
```

### Import UrineTests Section
```jsx
import UrineTests from './sections/UrineTests';
// In your App.jsx: <UrineTests />
```

Both sections are self-contained with state management and modal integration.

## Constraints Honored

✅ ONLY blood tests and urine tests - NO ECG, X-ray, imaging, stool, semen, etc.
✅ All test names exactly as specified
✅ Professional UI design (not AI-generated looking)
✅ Lavender/purple with yellow accents
✅ Rounded cards with soft shadows
✅ Responsive grid layout
✅ Clean modal with bullet points only
✅ No prices displayed
✅ Central test data structure
✅ Reusable components
✅ Production-ready code

## Browser Support

- Modern browsers with CSS Grid support
- React 17+
- Lucide React for X icon
