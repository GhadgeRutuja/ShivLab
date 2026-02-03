import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

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
                    <div>
                        <span className="modal-tag">Pathology Details</span>
                        <h2 className="modal-title">{test.title}</h2>
                    </div>
                    <button className="close-btn" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="modal-body">
                    <h4 className="list-title">Tests Included:</h4>
                    <ul className="test-list">
                        {test.details.map((item, index) => (
                            <li key={index} className="test-item">
                                <CheckCircle2 size={18} className="check-icon" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    {test.note && (
                        <p className="modal-note">{test.note}</p>
                    )}
                </div>

                <div className="modal-footer">
                    <p className="note">Reports available within 24 hours.</p>
                </div>
            </div>

            <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.3s ease;
        }
        .modal-container {
          background: white;
          width: 100%;
          max-width: 500px;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          animation: slideUp 0.3s ease;
        }
        .modal-header {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid #edf2f7;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: #fafbfc;
        }
        .modal-tag {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .modal-title {
          font-size: 1.5rem;
          color: var(--text-main);
          margin-top: 0.25rem;
        }
        .close-btn {
          background: none;
          border: none;
          color: var(--text-light);
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.2s;
        }
        .close-btn:hover {
          background: #edf2f7;
          color: var(--text-main);
        }
        .modal-body {
          padding: 2rem;
        }
        .modal-note {
          color: var(--text-light);
          font-size: 0.85rem;
          font-style: italic;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #edf2f7;
        }
        .list-title {
          color: var(--primary-dark);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        .test-list {
          list-style: none;
          display: grid;
          gap: 0.75rem;
        }
        .test-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-main);
          font-size: 0.95rem;
        }
        .check-icon {
          color: var(--primary);
        }
        .modal-footer {
          padding: 1rem 2rem;
          background: #f8fafc;
          border-top: 1px solid #edf2f7;
          text-align: center;
        }
        .note {
          font-size: 0.85rem;
          color: var(--text-light);
          font-style: italic;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default Modal;
