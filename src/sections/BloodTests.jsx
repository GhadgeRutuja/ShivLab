"use client";

import React, { useEffect, useState } from "react";
import "./BloodTests.css";

// Icon Components
function FeverIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          cx="40"
          cy="60"
          r="8"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="37"
          y="25"
          width="6"
          height="35"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
        />
        <rect x="38.5" y="35" width="3" height="25" fill="#F5A623" />
        <line
          x1="40"
          y1="25"
          x2="40"
          y2="22"
          stroke="#5B4B8A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 22 35 L 18 40 L 22 45"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 35 15 L 32 22 L 38 22"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 58 15 L 55 22 L 61 22"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function DiabetesIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
          x="22"
          y="18"
          width="36"
          height="44"
          rx="4"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="28"
          y="12"
          width="24"
          height="10"
          rx="3"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="26"
          y="28"
          width="28"
          height="24"
          rx="2"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 40 35 Q 36 38 36 42 Q 36 46 40 48 Q 44 46 44 42 Q 44 38 40 35 Z"
          stroke="#F5A623"
          strokeWidth="2"
          fill="#F5A623"
        />
      </g>
    </svg>
  );
}

function KidneysIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M 25 28 Q 20 35 20 42 Q 20 50 25 55 Q 30 50 30 42 Q 30 35 25 28 Z"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 55 28 Q 50 35 50 42 Q 50 50 55 55 Q 60 50 60 42 Q 60 35 55 28 Z"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="30"
          y1="42"
          x2="50"
          y2="42"
          stroke="#5B4B8A"
          strokeWidth="2"
        />
        <path
          d="M 40 20 L 40 28"
          stroke="#5B4B8A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function LiverIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M 35 25 Q 25 30 25 40 Q 25 55 40 60 Q 55 55 55 40 Q 55 30 45 25 Q 40 22 35 25 Z"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="28"
          y1="42"
          x2="52"
          y2="42"
          stroke="#5B4B8A"
          strokeWidth="2"
        />
        <line
          x1="40"
          y1="25"
          x2="40"
          y2="60"
          stroke="#5B4B8A"
          strokeWidth="2"
        />
        <path
          d="M 35 35 Q 32 38 32 42"
          stroke="#5B4B8A"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function ThyroidIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M 28 32 Q 25 38 25 42 Q 25 50 30 52 Q 35 50 35 42 Q 35 38 32 32 Z"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 52 32 Q 55 38 55 42 Q 55 50 50 52 Q 45 50 45 42 Q 45 38 48 32 Z"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="35"
          y1="42"
          x2="45"
          y2="42"
          stroke="#5B4B8A"
          strokeWidth="2"
        />
        <circle
          cx="40"
          cy="28"
          r="6"
          stroke="#F5A623"
          strokeWidth="2.5"
          fill="#F5A623"
        />
        <path
          d="M 40 22 L 40 28"
          stroke="#5B4B8A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 35 22 L 40 18 L 45 22"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M 40 60 L 25 45 Q 20 40 20 35 Q 20 28 26 28 Q 30 28 34 32 Q 37 28 40 25 Q 43 28 46 32 Q 50 28 54 28 Q 60 28 60 35 Q 60 40 45 55 Z"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 25 48 L 32 48 L 36 40 L 44 56 L 48 48 L 55 48"
          stroke="#F5A623"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function VitaminIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M 20 32 L 38 32 Q 42 32 42 40 Q 42 48 38 48 L 20 48 Q 18 48 18 40 Q 18 32 20 32 Z"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 42 32 L 60 32 Q 62 32 62 40 Q 62 48 60 48 L 42 48 Q 38 48 38 40 Q 38 32 42 32 Z"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="28"
          cy="40"
          r="5"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="52"
          cy="40"
          r="5"
          stroke="#F5A623"
          strokeWidth="2"
          fill="#F5A623"
        />
      </g>
    </svg>
  );
}

function AllergyIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M 40 25 Q 35 30 35 35 Q 35 42 40 48 Q 45 42 45 35 Q 45 30 40 25 Z"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="36"
          cy="40"
          r="3"
          stroke="#5B4B8A"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="44"
          cy="40"
          r="3"
          stroke="#5B4B8A"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 28 30 Q 30 32 28 34"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 24 35 Q 26 37 24 39"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 28 42 Q 30 44 28 46"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 52 30 Q 50 32 52 34"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 56 35 Q 54 37 56 39"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 52 42 Q 50 44 52 46"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="38" cy="55" r="2" fill="#5B4B8A" />
        <circle cx="42" cy="55" r="2" fill="#5B4B8A" />
      </g>
    </svg>
  );
}

function InfertilityIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M 40 25 Q 35 30 35 38 Q 35 48 40 55 Q 45 48 45 38 Q 45 30 40 25 Z"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 35 35 Q 25 32 20 38"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 45 35 Q 55 32 60 38"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle
          cx="18"
          cy="32"
          r="4"
          stroke="#F5A623"
          strokeWidth="2"
          fill="#F5A623"
        />
        <circle
          cx="62"
          cy="32"
          r="4"
          stroke="#F5A623"
          strokeWidth="2"
          fill="#F5A623"
        />
        <circle cx="28" cy="33" r="2" fill="#F5A623" />
        <circle cx="52" cy="33" r="2" fill="#F5A623" />
      </g>
    </svg>
  );
}

function CancerIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          cx="40"
          cy="40"
          r="22"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 30 30 L 40 35 L 50 30"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 30 30 Q 25 35 28 42"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 50 30 Q 55 35 52 42"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 35 48 L 40 43 L 45 48"
          stroke="#5B4B8A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 32 32 L 48 48"
          stroke="#F5A623"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 48 32 L 32 48"
          stroke="#F5A623"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle
          cx="22"
          cy="22"
          r="3"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="58"
          cy="22"
          r="3"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="22"
          cy="58"
          r="3"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="58"
          cy="58"
          r="3"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
        />
      </g>
    </svg>
  );
}

// Card Component
function MedicalTestCard({ title, icon: IconComponent }) {
  return (
    <div className="card">
      <div className="icon-wrapper">
        <IconComponent />
      </div>
      <h3 className="title">{title}</h3>
    </div>
  );
}

// Main Page Component
export default function MedicalTestsPage() {
  const tests = [
    { id: 1, title: "FEVER", icon: FeverIcon },
    { id: 2, title: "DIABETES", icon: DiabetesIcon },
    { id: 3, title: "KIDNEYS", icon: KidneysIcon },
    { id: 4, title: "LIVER", icon: LiverIcon },
    { id: 5, title: "THYROID", icon: ThyroidIcon },
    { id: 6, title: "HEART CHECK", icon: HeartIcon },
    { id: 7, title: "VITAMIN PROFILE", icon: VitaminIcon },
    { id: 8, title: "ALLERGY", icon: AllergyIcon },
    { id: 9, title: "INFERTILITY", icon: InfertilityIcon },
    { id: 10, title: "CANCER SCREENING", icon: CancerIcon },
  ];

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.pageYOffset > 300);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="blood-tests" id="blood-tests">
      <div className="container">
        <header className="section-header" aria-labelledby="blood-tests-title">
          <h2 id="blood-tests-title" className="section-title">Blood Analysis</h2>
          <p className="section-subtitle">Select a category to view available tests</p>
        </header>

        <div className="grid">
          {tests.map((test) => (
            <MedicalTestCard
              key={test.id}
              title={test.title}
              icon={test.icon}
            />
          ))}
        </div>
      </div>

      <button
        className={`scroll-top ${showTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6 14l6-6 6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </main>
  );
}
