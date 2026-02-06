/**
 * Blood & Urine Test Categories
 * Central data structure for all diagnostic tests
 * Only blood tests and urine tests - no imaging, ECG, or other procedures
 */

export const bloodTests = [
  {
    id: 'fever',
    title: 'FEVER',
    details: [
      'Complete Blood Count (CBC)',
      'ESR',
      'CRP',
      'Widal Test',
      'Dengue (NS1, IgG, IgM)',
      'Malaria Blood Test'
    ]
  },
  {
    id: 'diabetes',
    title: 'DIABETES',
    details: [
      'Fasting Blood Sugar',
      'Post Prandial Blood Sugar',
      'HbA1c',
      'Urine Sugar',
      'Urine Ketone Bodies'
    ]
  },
  {
    id: 'kidneys',
    title: 'KIDNEYS',
    details: [
      'Blood Urea',
      'Serum Creatinine',
      'Uric Acid',
      'Urine Routine Examination',
      'Urine Albumin'
    ]
  },
  {
    id: 'liver',
    title: 'LIVER',
    details: [
      'SGOT (AST)',
      'SGPT (ALT)',
      'Bilirubin',
      'Alkaline Phosphatase',
      'Total Protein'
    ]
  },
  {
    id: 'thyroid',
    title: 'THYROID',
    details: [
      'T3',
      'T4',
      'TSH'
    ]
  },
  {
    id: 'heart',
    title: 'HEART CHECK',
    details: [
      'Lipid Profile',
      'CPK-MB',
      'Troponin-I',
      'CRP'
    ]
  },
  {
    id: 'vitamin',
    title: 'VITAMIN PROFILE',
    details: [
      'Vitamin D',
      'Vitamin B12',
      'Calcium'
    ]
  },
  {
    id: 'allergy',
    title: 'ALLERGY',
    details: [
      'Absolute Eosinophil Count',
      'Total IgE',
      'CBC'
    ]
  },
  {
    id: 'infertility',
    title: 'INFERTILITY',
    details: [
      'LH',
      'FSH',
      'Prolactin',
      'Testosterone / Estrogen',
      'TSH'
    ]
  },
  {
    id: 'cancer',
    title: 'CANCER SCREENING',
    details: [
      'PSA',
      'CA-125',
      'CEA',
      'AFP'
    ],
    note: 'Screening markers only'
  }
];

export const urineTests = [
  {
    id: 'u-routine',
    title: 'ROUTINE EXAMINATION',
    details: [
      'Color & Appearance',
      'pH Level',
      'Specific Gravity',
      'Protein / Albumin',
      'Sugar / Glucose',
      'Bile Salts & Bile Pigments'
    ]
  },
  {
    id: 'u-micro',
    title: 'MICROSCOPY',
    details: [
      'Pus Cells',
      'Red Blood Cells',
      'Epithelial Cells',
      'Casts',
      'Crystals',
      'Bacteria & Yeast'
    ]
  },
  {
    id: 'u-sugar',
    title: 'SUGAR & KETONES',
    details: [
      'Urine Glucose (Qualitative)',
      'Urine Ketone Bodies',
      'Microalbumin Check'
    ]
  },
  {
    id: 'u-culture',
    title: 'CULTURE & SENSITIVITY',
    details: [
      'Bacterial Culture',
      'Antibiotic Sensitivity',
      'Colony Count'
    ]
  },
  {
    id: 'u-protein',
    title: 'PROTEIN ANALYSIS',
    details: [
      'Total Protein',
      'Albumin',
      'Microalbumin',
      'Protein/Creatinine Ratio'
    ]
  }
];
