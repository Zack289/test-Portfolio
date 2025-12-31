import { motion } from "motion/react";
import { GraduationCap, Code, Briefcase } from "lucide-react";

export function Education() {
  const milestones = [
    {
      icon: <GraduationCap className="text-cyan-400" size={32} />,
      title: "Self-Taught Journey",
      period: "2022 - Present",
      description: "Started learning web development through online courses, documentation, and hands-on projects. Focused on mastering React and modern JavaScript.",
      highlights: ["Completed multiple React projects", "Built full-stack applications", "Learned Git and version control"],
    },
    {
      icon: <Code className="text-cyan-400" size={32} />,
      title: "Frontend Specialization",
      period: "2023",
      description: "Deepened expertise in React ecosystem, including React Router, state management, and component architecture. Started exploring backend technologies.",
      highlights: ["Mastered React hooks and patterns", "API integration and data fetching", "Responsive design principles"],
    },
    {
      icon: <Briefcase className="text-cyan-400" size={32} />,
      title: "Expanding to Mobile",
      period: "2024 - Present",
      description: "Currently learning Flutter and Dart to expand into mobile app development. Building cross-platform applications and exploring new possibilities.",
      highlights: ["Learning Flutter fundamentals", "Understanding mobile UI/UX", "Exploring cross-platform development"],
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="education" className="py-20 bg-slate-950">
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
            Learning <span className="text-cyan-400">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative bg-slate-900 p-6 rounded-lg border border-slate-800">
                        <div className="mb-4">{milestone.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-cyan-400 mb-4">{milestone.period}</p>
                        <p className="text-slate-400 mb-4">{milestone.description}</p>
                        <div className="space-y-2">
                          {milestone.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-center gap-2 text-slate-300">
                              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-slate-900 px-8 py-6 rounded-lg border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-3">Career Goals</h3>
              <p className="text-slate-300 max-w-2xl">
                Seeking an <span className="text-cyan-400 font-bold">internship</span> or{" "}
                <span className="text-cyan-400 font-bold">junior developer role</span> to apply my skills,
                learn from experienced developers, and contribute to meaningful projects.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
