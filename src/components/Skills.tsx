import { 
  FaReact, 
  FaHtml5, 
  FaBootstrap, 
  FaNode, 
  FaPython, 
  FaGitAlt, 
  FaDocker, 
  FaFigma, 
  FaJava
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVuedotjs, 
  SiRedux, 
  SiShadcnui, 
  SiPostgresql, 
  SiMongodb, 
  SiGraphql, 
  SiMysql, 
  SiVercel,
  SiPhp,
  SiSqlite
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="w-5 h-5 text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-600" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-black dark:text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-cyan-500" /> },
        { name: "Vue.js", icon: <SiVuedotjs className="w-5 h-5 text-green-500" /> },
        { name: "Redux", icon: <SiRedux className="w-5 h-5 text-purple-600" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="w-5 h-5 text-purple-700" /> },
        { name: "HTML5", icon: <FaHtml5 className="w-5 h-5 text-orange-600" /> },
        { name: "Shadcn/ui", icon: <SiShadcnui className="w-5 h-5 text-gray-800 dark:text-gray-200" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNode className="w-5 h-5 text-green-600" /> },
        { name: "Python", icon: <FaPython className="w-5 h-5 text-yellow-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-blue-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-green-500" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-5 h-5 text-pink-600" /> },
        { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-blue-600" /> },
        { name: "Java", icon: <FaJava className="w-5 h-5 text-red-600" /> },
        { name: "PHP", icon: <SiPhp className="w-5 h-5 text-indigo-600" /> },
        { name: "SQL", icon: <SiSqlite className="w-5 h-5 text-blue-500" /> }
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-5 h-5 text-orange-600" /> },
        { name: "Docker", icon: <FaDocker className="w-5 h-5 text-blue-500" /> },
        { name: "Vercel", icon: <SiVercel className="w-5 h-5 text-black dark:text-white" /> },
        { name: "Figma", icon: <FaFigma className="w-5 h-5 text-purple-500" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-gray-900 bg-diagonal-lines">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100/30 to-blue-100/30 dark:from-teal-900/20 dark:to-blue-900/20 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 w-full transform hover:-translate-y-1"
            >
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center p-2 md:p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-600">
                      {skill.icon}
                      <span className="text-gray-700 dark:text-gray-300 font-medium ml-2 md:ml-3 text-sm md:text-base">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">100%</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}