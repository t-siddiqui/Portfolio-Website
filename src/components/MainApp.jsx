// src/components/MainApp.js

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Layout and Page components
import SharedLayout from './SharedLayout';
import HomePage from './HomePage';
import AllProjectsPage from './AllProjectsPage';

// You will need to create and import these page components
// import AboutPage from './AboutPage';
// import AchievementsPage from './AchievementsPage';
// import SkillsPage from './SkillsPage';
// import ResumePage from './ResumePage';

// Import background components if they are used here
import DBackground from './DBackground';

function MainApp() {
  // This effect runs once on mount to set the dark theme permanently.
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('dark');
    
    // Cleanup function in case the component ever unmounts.
    return () => {
      html.classList.remove('dark');
    };
  }, []); // Empty dependency array ensures it runs only once.

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <DBackground />
      
      {/* This Routes component is controlled by the BrowserRouter in App.js */}
      <Routes>
        {/* The SharedLayout acts as a wrapper for all nested routes */}
        <Route 
          path="/" 
          element={<SharedLayout />}
        >
          {/* 'index' specifies this as the default route for "/" */}
          <Route index element={<HomePage />} />
          
          {/* Other pages that will be rendered inside the SharedLayout's <Outlet /> */}
          <Route path="projects" element={<AllProjectsPage />} />
          
          {/* 
            You must create components for these routes for them to work.
            For now, you can use a placeholder.
          */}
          {/* <Route path="about" element={<AboutPage />} /> */}
          {/* <Route path="achievements" element={<AchievementsPage />} /> */}
          {/* <Route path="skills" element={<SkillsPage />} /> */}
          {/* <Route path="resume" element={<ResumePage />} /> */}

          {/* Note: The "Contact" link is an anchor to the homepage, so it doesn't need its own route. */}
        </Route>
      </Routes>
    </div>
  );
}

export default MainApp;