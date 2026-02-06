import React from 'react';

// SVG Icon components with lavender/purple and yellow accents
const CardIcons = {
  fever: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="60" r="8" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <rect x="37" y="25" width="6" height="35" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <rect x="38.5" y="35" width="3" height="25" fill="#F5A623" />
      <line x1="40" y1="25" x2="40" y2="22" stroke="#5B4B8A" strokeWidth="2" strokeLinecap="round" />
      <path d="M 22 35 L 18 40 L 22 45" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 35 15 L 32 22 L 38 22" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 58 15 L 55 22 L 61 22" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  diabetes: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="18" width="36" height="44" rx="4" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <rect x="28" y="12" width="24" height="10" rx="3" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <rect x="26" y="28" width="28" height="24" rx="2" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <path d="M 40 35 Q 36 38 36 42 Q 36 46 40 48 Q 44 46 44 42 Q 44 38 40 35 Z" stroke="#F5A623" strokeWidth="2" fill="#F5A623" />
    </svg>
  ),
  kidneys: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 25 28 Q 20 35 20 42 Q 20 50 25 55 Q 30 50 30 42 Q 30 35 25 28 Z" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 55 28 Q 50 35 50 42 Q 50 50 55 55 Q 60 50 60 42 Q 60 35 55 28 Z" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="25" cy="42" r="4" fill="#F5A623" />
      <circle cx="55" cy="42" r="4" fill="#F5A623" />
      <line x1="30" y1="42" x2="50" y2="42" stroke="#5B4B8A" strokeWidth="1.5" />
    </svg>
  ),
  liver: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 28 25 Q 20 28 20 38 Q 20 50 32 55 Q 45 50 48 38 Q 48 28 40 25 Z" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 32 35 Q 30 38 32 42" stroke="#5B4B8A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 40 33 Q 38 38 40 43" stroke="#5B4B8A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="35" cy="38" rx="3" ry="2.5" fill="#F5A623" />
      <ellipse cx="42" cy="39" rx="3" ry="2.5" fill="#F5A623" />
    </svg>
  ),
  thyroid: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="28" cy="38" rx="6" ry="10" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <ellipse cx="52" cy="38" rx="6" ry="10" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <path d="M 34 40 Q 40 42 46 40" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="38" r="3" fill="#F5A623" />
      <circle cx="52" cy="38" r="3" fill="#F5A623" />
    </svg>
  ),
  heart: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 40 65 C 40 65 20 50 20 38 C 20 30 26 24 32 24 C 36 24 40 28 40 28 C 40 28 44 24 48 24 C 54 24 60 30 60 38 C 60 50 40 65 40 65 Z" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="35" cy="40" r="2.5" fill="#F5A623" />
      <circle cx="40" cy="38" r="2.5" fill="#F5A623" />
      <circle cx="45" cy="40" r="2.5" fill="#F5A623" />
    </svg>
  ),
  vitamin: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="18" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <path d="M 40 22 L 45 35 L 58 35 L 48 43 L 52 56 L 40 48 L 28 56 L 32 43 L 22 35 L 35 35 Z" fill="#F5A623" />
    </svg>
  ),
  allergy: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 40 20 C 45 20 50 25 50 35 C 50 45 45 55 40 60 C 35 55 30 45 30 35 C 30 25 35 20 40 20 Z" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <circle cx="37" cy="35" r="3" fill="#F5A623" />
      <circle cx="43" cy="35" r="3" fill="#F5A623" />
      <line x1="40" y1="43" x2="40" y2="48" stroke="#5B4B8A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  infertility: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="30" r="7" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <path d="M 28 42 L 28 55 C 28 58 31 60 40 60 C 49 60 52 58 52 55 L 52 42 C 52 37 46 34 40 34 C 34 34 28 37 28 42 Z" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="35" cy="48" r="2" fill="#F5A623" />
      <circle cx="40" cy="46" r="2" fill="#F5A623" />
      <circle cx="45" cy="48" r="2" fill="#F5A623" />
    </svg>
  ),
  cancer: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="14" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <circle cx="40" cy="40" r="8" stroke="#5B4B8A" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="40" r="3" fill="#F5A623" />
      <path d="M 52 52 L 60 60" stroke="#5B4B8A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  routine: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="30" height="40" rx="3" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <line x1="30" y1="28" x2="50" y2="28" stroke="#5B4B8A" strokeWidth="1.5" />
      <line x1="30" y1="35" x2="50" y2="35" stroke="#5B4B8A" strokeWidth="1.5" />
      <line x1="30" y1="42" x2="50" y2="42" stroke="#5B4B8A" strokeWidth="1.5" />
      <circle cx="35" cy="28" r="1.5" fill="#F5A623" />
      <circle cx="35" cy="35" r="1.5" fill="#F5A623" />
      <circle cx="35" cy="42" r="1.5" fill="#F5A623" />
    </svg>
  ),
  micro: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="35" r="12" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <circle cx="40" cy="35" r="7" stroke="#5B4B8A" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="35" r="3" fill="#F5A623" />
      <path d="M 40 50 L 35 62 L 45 62 Z" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="40" y1="50" x2="40" y2="62" stroke="#5B4B8A" strokeWidth="1.5" />
    </svg>
  ),
  sugar: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="30" height="30" stroke="#5B4B8A" strokeWidth="2" fill="none" rx="2" />
      <line x1="40" y1="25" x2="40" y2="55" stroke="#5B4B8A" strokeWidth="1.5" />
      <line x1="25" y1="40" x2="55" y2="40" stroke="#5B4B8A" strokeWidth="1.5" />
      <circle cx="32.5" cy="32.5" r="2" fill="#F5A623" />
      <circle cx="47.5" cy="32.5" r="2" fill="#F5A623" />
      <circle cx="32.5" cy="47.5" r="2" fill="#F5A623" />
      <circle cx="47.5" cy="47.5" r="2" fill="#F5A623" />
    </svg>
  ),
  culture: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="15" stroke="#5B4B8A" strokeWidth="2" fill="none" />
      <circle cx="40" cy="40" r="9" stroke="#5B4B8A" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="40" r="3" fill="#F5A623" />
      <circle cx="52" cy="28" r="3" fill="#F5A623" opacity="0.6" />
      <circle cx="55" cy="50" r="2.5" fill="#F5A623" opacity="0.5" />
    </svg>
  ),
  protein: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 40 20 L 50 32 L 50 50 Q 50 58 40 60 Q 30 58 30 50 L 30 32 Z" stroke="#5B4B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="32" y1="38" x2="48" y2="38" stroke="#5B4B8A" strokeWidth="1.5" />
      <line x1="32" y1="45" x2="48" y2="45" stroke="#5B4B8A" strokeWidth="1.5" />
      <circle cx="40" cy="38" r="2" fill="#F5A623" />
      <circle cx="40" cy="45" r="2" fill="#F5A623" />
    </svg>
  )
};

const getIcon = (testId) => {
  const idMap = {
    'fever': 'fever',
    'diabetes': 'diabetes',
    'kidneys': 'kidneys',
    'liver': 'liver',
    'thyroid': 'thyroid',
    'heart': 'heart',
    'vitamin': 'vitamin',
    'allergy': 'allergy',
    'infertility': 'infertility',
    'cancer': 'cancer',
    'u-routine': 'routine',
    'u-micro': 'micro',
    'u-sugar': 'sugar',
    'u-culture': 'culture',
    'u-protein': 'protein',
  };
  return CardIcons[idMap[testId]] || CardIcons.fever;
};

const TestCard = ({ test, onOpen }) => {
  return (
    <div className="test-card" onClick={() => onOpen(test)}>
      <div className="card-icon-container">
        {getIcon(test.id)}
      </div>
      <h3 className="card-title">{test.title}</h3>
      
      <style>{`
        .test-card {
          background: white;
          padding: 2rem 1.5rem 1.5rem;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(91, 75, 138, 0.08);
          border: 1px solid rgba(91, 75, 138, 0.06);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }

        .test-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(91, 75, 138, 0.15);
          border-color: rgba(91, 75, 138, 0.2);
        }

        .card-icon-container {
          width: 100px;
          height: 100px;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(245, 166, 35, 0.04);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .test-card:hover .card-icon-container {
          background: rgba(245, 166, 35, 0.08);
        }

        .card-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1f1f1f;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          line-height: 1.4;
          margin: 0;
          transition: color 0.3s ease;
        }

        .test-card:hover .card-title {
          color: #5B4B8A;
        }

        @media (max-width: 768px) {
          .test-card {
            padding: 1.5rem 1rem 1rem;
          }

          .card-icon-container {
            width: 80px;
            height: 80px;
            margin-bottom: 1rem;
          }

          .card-title {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TestCard;
