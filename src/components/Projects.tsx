import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image_url?: string;
  demo_url?: string;
  github_url?: string;
  featured: boolean;
  created_at: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Set demo projects directly
    setProjects(demoProjects);
    setLoading(false);
  }, []);

  const demoProjects: Project[] = [
    {
      id: '1',
      title: 'Resort Vacation Static Website',
      description: 'Curated guides to beaches, caves, island-hopping, snorkeling, and local cuisine in a modern travel interface.',
      technologies: ['Vite', 'Typescript', 'React', 'Shadcn-ui', 'Tailwind CSS'],
      image_url: '/public/images/resort.png',
      demo_url: 'https://resort-vacation.vercel.app',
      github_url: 'https://github.com/Tatakai7/Resort-Vacation-Static-Website',
      featured: true,
      created_at: '2025-01-01'
    },
    {
      id: '2',
      title: 'Chat Application Web App',
      description: 'Real-time MERN chat app with authentication, messaging, status, and rooms.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image_url: '/public/images/messenger_login.png',
    //   demo_url: 'https://demo.example.com',
      github_url: 'https://github.com/Tatakai7/Chat_Application_Web_App',
      featured: true,
      created_at: '2024-12-15'
    },
    {
      id: '3',
      title: 'Equipment Requisition Web App',
      description: 'Comprehensive equipment requisition system with user roles, inventory management, and reporting features.',
      technologies: ['Vite', 'SolidJS', 'Node.js', 'Bootstrap', 'SQL'],
      image_url: '/public/images/adminPage.png',
    //   demo_url: 'https://demo.example.com',
      github_url: 'https://github.com/Tatakai7/Equipment_Requisition_Web_App',
      featured: true,
      created_at: '2024-11-30'
    }
  ];

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative py-20 bg-gray-50 dark:bg-gray-800">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg rotate-45 blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg rotate-12 blur-xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Scroll Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-600"
            aria-label="Scroll projects left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-600"
            aria-label="Scroll projects right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Scrollable Projects Container */}
          <div
            ref={scrollContainer}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 px-12 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-80 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {project.image_url && (
                <div className="relative overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
}