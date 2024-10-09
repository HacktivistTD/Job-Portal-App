"use client";

import { FaYoutube, FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaAppStore, FaGooglePlay } from 'react-icons/fa';

const Footerbar = () => {
  return (
    <footer className=" py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* App store links */}
        <div className="flex items-center text-white hover:text-yellow-400">
          <FaAppStore size="1.5em" className="px-3" />
          <FaGooglePlay size="1.5em" className="px-3" />
        </div>

        {/* Footer navigation links */}
        <nav className="flex flex-wrap justify-center md:justify-start dark:text-white">
          <a href="#" className="px-2 hover:text-green-400">T & C</a>
          <a href="#" className="px-2 hover:text-green-400">Privacy Policy</a>
          <a href="#" className="px-2 hover:text-green-400">Contact Us</a>
          <a href="#" className="px-2 hover:text-green-400">Careers</a>
        </nav>

        {/* Copyright section */}
        <div className="text-center font-bold mt-4 md:mt-0 dark:text-green-500">
          <p className="text-sm">
            &copy; Copyright 2024 - Career Quest.<br />
            All rights reserved - Realisation: "HACKTIVIST"<br />
            Using this website means you accept our terms and conditions.
          </p>
        </div>

        {/* Social media icons */}
        <div className="flex mt-4 md:mt-0 dark:text-white">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-green-400">
            <FaYoutube size="1.5em" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-green-400">
            <FaWhatsapp size="1.5em" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-green-400">
            <FaInstagram size="1.5em" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-green-400">
            <FaFacebook size="1.5em" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:textgreen-400">
            <FaTiktok size="1.5em" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footerbar;
