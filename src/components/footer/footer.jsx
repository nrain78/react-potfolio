import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-linear-to-r/hsl from-purple-700 to-purple-500 text-white p-1 fixed bottom-0 left-0 right-0" id="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Portfolio Title */}
        <h3 className="text-2xl md:text-3xl cursor-pointer hover:opacity-80 font-bold">
          Noor's Portfolio
        </h3>

        {/* Right Side: Social Media Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          {/* GitHub Link */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-800 transition duration-300 font-bold"
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-800 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Twitter Link */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-800 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>

          {/* Instagram Link */}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-800 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright Notice */}
      <div className="mt-4 text-center text-sm md:text-base">
        <p>&copy; {new Date().getFullYear()} Noor's Portfolio. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
