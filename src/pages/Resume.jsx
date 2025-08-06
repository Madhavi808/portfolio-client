import React from 'react';

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">My Resume</h1>
      <a 
        href="https://madhaviresume.tiiny.site/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        View / Download Resume
      </a>
    </div>
  );
};

export default Resume;
