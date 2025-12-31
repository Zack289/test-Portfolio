import { motion } from "motion/react";
import { Github, ExternalLink, Code } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "News Application",
      description: "A dynamic news aggregator that fetches and displays the latest news articles from various categories. Features include category filtering, search functionality, and responsive design.",
      techStack: ["React", "React Router", "NewsAPI", "Bootstrap", "JavaScript"],
      github: "https://github.com/laxman/news-app",
      demo: "#",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Form with Validation",
      description: "Full-stack form application with comprehensive validation, user authentication, and data persistence. Implements secure backend API with MongoDB integration.",
      techStack: ["React", "Express", "MongoDB", "Node.js", "Validation"],
      github: "https://github.com/laxman/form-validation",
      demo: "#",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "CRUD Application",
      description: "Complete CRUD (Create, Read, Update, Delete) application demonstrating fundamental database operations with a clean, intuitive user interface.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      github: "https://github.com/laxman/crud-app",
      demo: "#",
      gradient: "from-green-500 to-teal-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          >
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
                <div className="relative bg-slate-950 p-6 rounded-lg border border-slate-800 h-full flex flex-col">
                  <div className="mb-4">
                    <Code className="text-cyan-400" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-slate-300 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-slate-400 mb-4">Want to see more of my work?</p>
            <motion.a
              href="https://github.com/laxman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              Visit My GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
