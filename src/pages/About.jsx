import React from 'react';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-6">
        I am a Full-Stack Developer with 6+ years of experience specializing in ReactJS, NodeJS, and ExpressJS. 
        My strengths include frontend/backend integration, scalable application development, team leadership, 
        and client communication. I have worked in domains like educational platforms, employee management systems, 
        and garage management systems.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Languages: JavaScript, PHP</li>
        <li>Frontend: ReactJS, HTML, CSS, Tailwind, Bootstrap</li>
        <li>Backend: Node.js, Express, Laravel, CodeIgniter, CakePHP</li>
        <li>Database: MySQL, MongoDB</li>
        <li>Tools: Git, GitHub, Postman, Jira, AWS</li>
        <li>Integrations: Xero, MYOB, QuickBooks, Repco, Burson</li>
      </ul>
    </div>
  );
};

export default About;
