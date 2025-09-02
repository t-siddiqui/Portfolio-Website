// src/components/SharedLayout.js

import {Outlet } from 'react-router-dom';
import Footer from './Footer';

// This component contains the elements visible on every page (Navbar, Footer)
export default function SharedLayout({ darkMode, setDarkMode }) {
  return (
    <div className="relative z-10">
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 p-4 flex justify-between items-center shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        {/* Navigation Links - CRITICAL: Use <Link> and 'to', not <a> and 'href' */}
        
           <nav className="flex flex-wrap gap-4">
          <a href="/Portfolio-Website/#about" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">About Me</a>
          <a href="/Portfolio-Website/#projects" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">Projects</a>
          <a href="/Portfolio-Website/#achievements" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">Achievements</a>
          {/* Note the capital 'S' to match your id="Skills" */}
          <a href="/Portfolio-Website/#Skills" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">Skills</a>
          <a href="/Portfolio-Website/#resume" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">Resume</a>
          <a href="/Portfolio-Website/#contact" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">Contact</a>
        </nav>

        {/* Dark Mode Toggle Button */}
        {/* <div className="toggle-wrapper p-0">
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn glow-card dark:bg-gray-900 bg-white dark:border-gray-500">
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div> */}
      </div>

      {/* This Outlet is where React Router will render the current page's component */}
      <main>
        <Outlet />
      </main>
      
      {/* The footer is also part of the shared layout, so it appears on every page */}
      <Footer />
    </div>
  );
}