import React, { useState } from 'react';
import TestCard from '../components/TestCard';
import Modal from '../components/Modal';
import { urineTests } from '../data/tests';
import './BloodTests.css';

export default function UrineTests() {
  const [selectedTest, setSelectedTest] = useState(null);

  return (
    <section className="blood-tests-section" id="urine-tests">
      <div className="blood-tests-container">
        <div className="section-header">
          <h2 className="section-title">Urine Analysis</h2>
          
        </div>

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

      {selectedTest && (
        <Modal test={selectedTest} onClose={() => setSelectedTest(null)} />
      )}
    </section>
  );
}
