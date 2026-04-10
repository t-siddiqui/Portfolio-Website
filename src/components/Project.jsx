// src/components/Projects.jsx

import { useInViewAnimation } from './Ani';
import { Link } from 'react-router-dom'; // Import Link
import { projects } from '../projectsData'; // Import projects data

// Get the first 4 projects to feature on the main page
const featuredProjects = projects.slice(0, 4);

export default function Projects() {
  const [ref, inView] = useInViewAnimation();

  return (
    <section
      ref={ref}
      className={`section transition-all duration-1000 ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="section-title animate-glow-outline">Featured Projects</h2>
      
      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Added Image Container */}
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                <img 
                  src={(project.image && project.image.startsWith('http')) ? project.image : (project.image ? `${process.env.PUBLIC_URL}${project.image}` : `https://via.placeholder.com/600x400/93c5fd/1e3a8a?text=${encodeURIComponent(project.title)}`)} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="mt-3">
              <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href={project.repoLink} className="project-link ml-4" target="_blank" rel="noopener noreferrer">View Repo</a>
            </div>
          </div>
        ))}
      </div>

      {/* Glowy "More Projects" Button */}
      <div className="text-center mt-12">
        <Link
          to="/projects"
          className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 glow-card bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105"
        >
          See All Projects
        </Link>
      </div>
    </section>
  );
}