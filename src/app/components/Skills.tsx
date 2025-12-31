import { motion } from "motion/react";
import { Code, Database, Globe, Cpu, Github, Briefcase } from "lucide-react";

export function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="text-cyan-400" size={32} />,
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Bootstrap", "Tailwind CSS"],
    },
    {
      category: "Backend & Database",
      icon: <Database className="text-cyan-400" size={32} />,
      items: ["Node.js", "Express", "MongoDB", "API Integration", "RESTful APIs"],
    },
    {
      category: "Tools & Technologies",
      icon: <Cpu className="text-cyan-400" size={32} />,
      items: ["Git", "GitHub", "VS Code", "React Router", "Responsive Design"],
    },
    {
      category: "Learning",
      icon: <Globe className="text-cyan-400" size={32} />,
      items: ["Flutter", "Dart", "Mobile Development", "TypeScript", "State Management"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-slate-950">
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
            My <span className="text-cyan-400">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-slate-900 p-6 rounded-lg border border-slate-800 h-full">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-slate-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-slate-900 px-8 py-4 rounded-lg border border-slate-800">
              <p className="text-slate-300 text-lg">
                <span className="text-cyan-400 font-bold">Experience Level:</span> Beginner to Intermediate
              </p>
              <p className="text-slate-400 mt-2">
                Currently seeking opportunities to grow and contribute to impactful projects
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
