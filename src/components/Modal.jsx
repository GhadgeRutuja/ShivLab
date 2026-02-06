import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ test, onClose }) => {
  if (!test) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{test.title}</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            <X size={24} color="#5B4B8A" />
          </button>
        </div>

        <div className="modal-body">
          <h3 className="tests-heading">Tests Included</h3>
          <ul className="tests-list">
            {test.details && test.details.map((detail, idx) => (
              <li key={idx} className="test-item">
                {detail}
              </li>
            ))}
          </ul>
          
          {test.note && (
            <div className="modal-note">
              <p className="note-text">{test.note}</p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <p className="footer-text">Reports available within 24 hours</p>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(2px);
          animation: fadeIn 0.2s ease;
        }

        @media (min-width: 768px) {
          .modal-backdrop {
            align-items: center;
          }
        }

        .modal-container {
          background: white;
          width: 100%;
          max-width: 500px;
          border-radius: 20px 20px 0 0;
          box-shadow: 0 20px 60px rgba(91, 75, 138, 0.2);
          overflow: hidden;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (min-width: 768px) {
          .modal-container {
            border-radius: 20px;
            max-height: 80vh;
          }
        }

        .modal-header {
          padding: 2rem;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          background: #fafbfc;
        }

        .modal-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1f1f1f;
          margin: 0;
          letter-spacing: -0.3px;
          flex: 1;
        }

        .close-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: all 0.2s ease;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .close-btn:hover {
          background: rgba(91, 75, 138, 0.1);
        }

        .close-btn:active {
          background: rgba(91, 75, 138, 0.15);
        }

        .modal-body {
          padding: 2rem;
        }

        .tests-heading {
          font-size: 1.1rem;
          font-weight: 600;
          color: #5B4B8A;
          margin: 0 0 1.25rem 0;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .tests-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .test-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #404040;
          font-size: 1rem;
          line-height: 1.5;
          padding: 0.5rem 0;
        }

        .test-item::before {
          content: "•";
          color: #F5A623;
          font-weight: 700;
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: -0.25rem;
        }

        .modal-note {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #f0f0f0;
        }

        .note-text {
          margin: 0;
          font-size: 0.95rem;
          color: #666;
          font-style: italic;
          line-height: 1.5;
        }

        .modal-footer {
          padding: 1.25rem 2rem;
          background: #f8fafc;
          border-top: 1px solid #f0f0f0;
          text-align: center;
        }

        .footer-text {
          margin: 0;
          font-size: 0.9rem;
          color: #888;
          font-style: italic;
        }

        @keyframes fadeIn {
          from { 
            opacity: 0;
          }
          to { 
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from { 
            transform: translateY(100%);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (min-width: 768px) {
          @keyframes slideUp {
            from { 
              transform: translateY(20px) scale(0.95);
              opacity: 0;
            }
            to { 
              transform: translateY(0) scale(1);
              opacity: 1;
            }
          }
        }

        /* Scrollbar styling */
        .modal-container::-webkit-scrollbar {
          width: 6px;
        }

        .modal-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .modal-container::-webkit-scrollbar-thumb {
          background: rgba(91, 75, 138, 0.2);
          border-radius: 3px;
        }

        .modal-container::-webkit-scrollbar-thumb:hover {
          background: rgba(91, 75, 138, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Modal;
