import React from 'react';

const getTestImage = (testId) => {
    const imageMap = {
        'fever': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23FFE8E8"/%3E%3Cpath d="M45 20c-4.4 0-8 3.6-8 8v20.5c-2.5 1.5-4 4.2-4 7.5 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.3-1.5-6-4-7.5V28c0-1.1.9-2 2-2s2 .9 2 2v8h3v-8c0-4.4-3.6-8-8-8z" fill="%23FF6B6B"/%3E%3C/svg%3E',
        'diabetes': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23E8F4FF"/%3E%3Cpath d="M40 20l-8 15h6v10l-8 15 24-20h-8V25l8-5z" fill="%234A90E2"/%3E%3C/svg%3E',
        'kidneys': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23FFF4E8"/%3E%3Cellipse cx="35" cy="40" rx="8" ry="15" fill="%23F5A623"/%3E%3Cellipse cx="45" cy="40" rx="8" ry="15" fill="%23F5A623"/%3E%3C/svg%3E',
        'liver': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23FFE8F0"/%3E%3Cpath d="M30 28c-5 0-8 4-8 8v12c0 5 3 8 8 8h20c5 0 8-3 8-8V36c0-4-3-8-8-8h-6l-2-4h-6l-2 4z" fill="%23E25D8D"/%3E%3C/svg%3E',
        'thyroid': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23F0E8FF"/%3E%3Cpath d="M35 25c-3 4-3 8 0 12 3 5 3 10 0 15h3c3-5 3-10 0-15-3-4-3-8 0-12zm10 0c3 4 3 8 0 12-3 5-3 10 0 15h-3c-3-5-3-10 0-15 3-4 3-8 0-12z" fill="%238A6FD5"/%3E%3C/svg%3E',
        'heart': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23FFE8E8"/%3E%3Cpath d="M40 55L25 40c-4-4-4-10 0-14 4-4 10-4 14 0l1 1 1-1c4-4 10-4 14 0 4 4 4 10 0 14z" fill="%23E74C3C"/%3E%3C/svg%3E',
        'vitamin': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23FFF8E8"/%3E%3Ccircle cx="40" cy="40" r="15" fill="none" stroke="%23F39C12" stroke-width="3"/%3E%3Cpath d="M40 30v10l7 7" fill="none" stroke="%23F39C12" stroke-width="3" stroke-linecap="round"/%3E%3C/svg%3E',
        'allergy': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23E8FFF4"/%3E%3Cpath d="M40 25l-12 8 4 14h16l4-14z" fill="%2327AE60"/%3E%3Cpath d="M28 33l12 8 12-8M28 47l12 8 12-8" fill="none" stroke="%2327AE60" stroke-width="2"/%3E%3C/svg%3E',
        'infertility': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23F0F8FF"/%3E%3Ccircle cx="40" cy="32" r="8" fill="%233498DB"/%3E%3Cpath d="M28 52c0-4 4-8 12-8s12 4 12 8v6H28z" fill="%233498DB"/%3E%3C/svg%3E',
        'cancer': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23FFF0F0"/%3E%3Ccircle cx="38" cy="38" r="12" fill="none" stroke="%23E74C3C" stroke-width="3"/%3E%3Cpath d="M47 47l8 8" stroke="%23E74C3C" stroke-width="3" stroke-linecap="round"/%3E%3Ccircle cx="38" cy="38" r="5" fill="%23E74C3C"/%3E%3C/svg%3E',
        'routine': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23F0F4FF"/%3E%3Cpath d="M30 25v8m0 14v8m10-30h16c2 0 4 2 4 4v24c0 2-2 4-4 4H40" fill="none" stroke="%235D9CEC" stroke-width="3"/%3E%3Cpath d="M30 33h24" stroke="%235D9CEC" stroke-width="2"/%3E%3C/svg%3E',
        'microscopy': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23F8F0FF"/%3E%3Ccircle cx="40" cy="40" r="8" fill="%239B59B6"/%3E%3Cpath d="M25 40h7m16 0h7M40 25v7m0 16v7" stroke="%239B59B6" stroke-width="2"/%3E%3C/svg%3E',
        'sugar-ketones': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23FFF4E6"/%3E%3Crect x="28" y="28" width="24" height="24" rx="2" fill="none" stroke="%23F39C12" stroke-width="3"/%3E%3Cpath d="M28 38h24M38 28v24" stroke="%23F39C12" stroke-width="2"/%3E%3C/svg%3E',
        'pregnancy': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23FFE8F5"/%3E%3Ccircle cx="40" cy="32" r="6" fill="%23EC407A"/%3E%3Cpath d="M40 38v16m-6 6h12" stroke="%23EC407A" stroke-width="3" stroke-linecap="round"/%3E%3C/svg%3E',
        'culture': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23E8FFF0"/%3E%3Ccircle cx="40" cy="40" r="14" fill="none" stroke="%2316A085" stroke-width="3"/%3E%3Ccircle cx="40" cy="40" r="9" fill="none" stroke="%2316A085" stroke-width="2"/%3E%3Ccircle cx="40" cy="40" r="3" fill="%2316A085"/%3E%3C/svg%3E',
        'protein': 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Ccircle cx="40" cy="40" r="38" fill="%23FFF0E8"/%3E%3Cpath d="M34 25v30m12-30v30M28 36h24m-24 8h24" stroke="%23E67E22" stroke-width="3" stroke-linecap="round"/%3E%3C/svg%3E',
    };
    return imageMap[testId] || imageMap['fever'];
};

const TestCard = ({ test, onOpen }) => {
    return (
        <div className="test-card" onClick={() => onOpen(test)}>
            <div className="card-image-wrapper">
                <img src={getTestImage(test.id)} alt={test.title} className="card-image" />
            </div>
            <h3 className="card-title">{test.title}</h3>
            <style>{`
        .test-card {
          background: white;
          padding: 2rem 1.5rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid #f5f5f5;
          height: 100%;
        }
        .test-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(138, 111, 213, 0.15);
          border-color: rgba(138, 111, 213, 0.15);
        }
        .card-image-wrapper {
          width: 80px;
          height: 80px;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .test-card:hover .card-image {
          transform: scale(1.08);
        }
        .card-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #2c2c2c;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          line-height: 1.4;
        }
      `}</style>
        </div>
    );
};

export default TestCard;
