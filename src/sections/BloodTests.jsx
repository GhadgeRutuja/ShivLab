import React, { useState } from 'react';
import TestCard from '../components/TestCard';
import Modal from '../components/Modal';
import { bloodTests } from '../data/tests';
import './BloodTests.css';

export default function BloodTests() {
  const [selectedTest, setSelectedTest] = useState(null);

  return (
    <section className="blood-tests-section" id="blood-tests">
      <div className="blood-tests-container">
        <div className="section-header">
          <h2 className="section-title">Blood Analysis</h2>
          
        </div>

        <div className="tests-grid">
          {bloodTests.map((test) => (
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
