import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass = "cursor-pointer text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-blue-600 p-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Madhavi Vaghela</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <ScrollLink to="home" smooth={true} duration={500} className={linkClass} offset={-70}>
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className={linkClass} offset={-70}>
            About
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className={linkClass} offset={-70}>
            Projects
          </ScrollLink>
          <ScrollLink to="resume" smooth={true} duration={500} className={linkClass} offset={-70}>
            Resume
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className={linkClass} offset={-70}>
            Contact
          </ScrollLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-2 space-y-2 text-white">
          {["home", "about", "projects", "resume", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className={linkClass}
              offset={-70}
              onClick={() => setOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
