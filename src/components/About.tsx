import { Code, Palette, Zap, Globe } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Web Development",
      description: "Expertise in both frontend and backend technologies"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Building fast and efficient applications"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Modern Technologies",
      description: "Always staying up-to-date with the latest tools"
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gray-50 dark:bg-gray-800 bg-dots-pattern">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-blue-900/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that combine beautiful design with robust functionality. 
              My journey in technology started with a curiosity about how things work, 
              and it has evolved into a career dedicated to building applications that 
              make a real difference.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences 
              that are not just functional, but delightful. When I'm not coding, you'll 
              find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                Resilient
              </span>
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium">
                Continuous Learner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}