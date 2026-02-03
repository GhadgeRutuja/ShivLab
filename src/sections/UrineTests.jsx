import React, { useState } from 'react';
import TestCard from '../components/TestCard';
import Modal from '../components/Modal';
import { urineTests } from '../data/tests';

const UrineTests = () => {
    const [selectedTest, setSelectedTest] = useState(null);

    return (
        <section id="urine-tests" className="section-padding bg-soft">
            <div className="container">
                <h2 className="section-title">Urine Analysis</h2>
                <p className="section-subtitle">
                    Select a category to view available tests
                </p>
                <div className="tests-grid">
                    {urineTests.map((test) => (
                        <TestCard
                            key={test.id}
                            test={test}
                            onOpen={setSelectedTest}
                        />
                    ))}
                </div>
            </div>

            <Modal
                test={selectedTest}
                onClose={() => setSelectedTest(null)}
            />

            <style>{`
        .bg-soft {
          background-color: white;
        }
        .tests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 2.5rem;
          padding: 2rem 0;
        }
        @media (min-width: 1200px) {
          .tests-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
          }
        }
        @media (min-width: 768px) and (max-width: 1199px) {
          .tests-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
        </section>
    );
};

export default UrineTests;
