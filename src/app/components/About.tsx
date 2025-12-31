import { motion } from "motion/react";
import { User, Briefcase, Code } from "lucide-react";

export function About() {
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
    <section id="about" className="py-20 bg-slate-900">
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
            About <span className="text-cyan-400">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-slate-800 p-8 rounded-lg">
                  <p className="text-slate-300 text-lg mb-4">
                    I'm Laxman, a passionate frontend developer with a strong foundation in React and modern web technologies. I love transforming ideas into beautiful, functional web applications.
                  </p>
                  <p className="text-slate-300 text-lg mb-4">
                    Currently, I'm expanding my skill set by learning Flutter to build cross-platform mobile applications. I believe in writing clean, maintainable code and creating intuitive user experiences.
                  </p>
                  <p className="text-slate-300 text-lg">
                    My goal is to secure an internship or junior developer role where I can contribute to meaningful projects while continuing to grow as a developer.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Clean Code Advocate</h3>
                  <p className="text-slate-400">
                    I prioritize writing readable, maintainable code that follows best practices and industry standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Briefcase className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Problem Solver</h3>
                  <p className="text-slate-400">
                    I enjoy tackling complex challenges and finding elegant solutions through creative thinking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <User className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Continuous Learner</h3>
                  <p className="text-slate-400">
                    Always exploring new technologies and staying updated with the latest trends in web development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
