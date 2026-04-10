// src/components/AllProjectsPage.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, projectTags } from '../projectsData'; // Import data

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.tags.includes(selectedCategory));

  return (
    // We add a dark mode background class here for consistency
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 animate-glow-outline">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A collection of my work. Filter by category to see more.
          </p>
          <Link to="/#projects" className="text-indigo-500 hover:underline">
            ← Back to Home
          </Link>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 my-8">
          {projectTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedCategory(tag)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300
                ${selectedCategory === tag
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-700'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="project-grid mt-12">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card flex flex-col justify-between">
              <div>
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
              </div>
              <div className="mt-4">
                <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">View Live</a>
                <a href={project.repoLink} className="project-link ml-4" target="_blank" rel="noopener noreferrer">View Repo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}