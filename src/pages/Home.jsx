import React from "react";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Home Section */}
      <section id="home" className="min-h-screen p-8 flex flex-col justify-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">Madhavi Vaghela</h1>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Software Engineer</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Full-Stack Developer with 6+ years of experience in ReactJS, NodeJS, and ExpressJS. Skilled in building scalable web apps, REST APIs, and integrating tools like Git, AWS, Xero, MYOB, QuickBooks, Repco, and Burson. Strong in frontend/backend integration, team collaboration, and client communication.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen p-8 bg-gray-50 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I am passionate about building efficient and user-friendly web applications. Over the years, I have worked with diverse technologies including PHP, ReactJS, Node.js, and various accounting integrations. I enjoy solving complex problems and continuously learning new skills.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Outside of coding, I enjoy mentoring junior developers and contributing to open-source projects.
        </p>

        <h3 className=" mb-6 mt-6 text-2xl font-semibold mb-6 text-gray-800">Accomplishments</h3>

    <ul className="list-disc pl-6 text-gray-700 space-y-4 text-lg">
      <li>
        <strong>Orbiting Star Award (2023):</strong> Received for Exemplary Outstanding Performance in recognition of consistent dedication and high-quality delivery.
      </li>
      <li>
        <strong>React Migration:</strong> Independently migrated a complex PHP application to ReactJS within a tight project deadline, despite no prior experience — demonstrating adaptability, fast learning, and strong problem-solving skills.
      </li>
      <li>
        <strong>Accounting Automation:</strong> Integrated Xero, QuickBooks, and MYOB into a large-scale garage management system, automating over 70% of accounting operations and significantly improving business efficiency.
      </li>
    </ul>
      </section>

    
      {/* Projects Section */}
      <section id="projects" className="min-h-screen p-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Projects</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Workshop Management Software</h3>
          <p className="text-gray-700 mb-1">
            A full-featured garage management system with booking, invoicing, and accounting integrations (Xero, MYOB, QuickBooks). Migrated frontend from PHP to ReactJS.
          </p>
          <a href="https://github.com/yourusername/workshop-management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub Repository
          </a>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">MentorPlus Educate</h3>
          <p className="text-gray-700 mb-1">
            Educational platform managing courses, chapters, and questions for students and teachers. Built with React frontend and Node backend.
          </p>
          <a href="https://github.com/yourusername/mentorplus-educate" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub Repository
          </a>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen p-8 bg-gray-50 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Resume</h2>
        <p className="text-gray-700 mb-4">
          You can view or download my resume here:
        </p>
        <a href="https://madhaviresume.tiiny.site/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg font-medium">
          View Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen p-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Contact Me</h2>

        <ContactForm />
      </section>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = React.useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-ben2.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Error sending message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <label className="block mb-2 font-medium text-gray-700" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full mb-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full mb-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block mb-2 font-medium text-gray-700" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="5"
        className="w-full mb-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>

      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </form>
  );
};

export default Home;
