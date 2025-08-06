import React from 'react';

const Projects = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Projects</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">🔧 Workshop Management Software</h2>
        <p className="text-gray-700 mt-2">
          A full-featured garage management solution with booking, invoicing, and real-time updates. Migrated from PHP to React frontend. Integrated accounting tools like Xero, MYOB, QuickBooks and APIs for Repco/Burson (AU/NZ).
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">📘 MentorPlus Educate</h2>
        <p className="text-gray-700 mt-2">
          An educational platform that manages courses, bundles, chapters, and questions for students, parents, and teachers. Worked on both React frontend and Node backend. Managed testing, deployment, and client communication.
        </p>
      </div>
    </div>
  );
};

export default Projects;
