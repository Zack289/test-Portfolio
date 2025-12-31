import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="text-cyan-400" size={32} />,
      label: "Email",
      value: "laxman.dev@example.com",
      link: "mailto:laxman.dev@example.com",
    },
    {
      icon: <Github className="text-cyan-400" size={32} />,
      label: "GitHub",
      value: "github.com/laxman",
      link: "https://github.com/laxman",
    },
    {
      icon: <Linkedin className="text-cyan-400" size={32} />,
      label: "LinkedIn",
      value: "linkedin.com/in/laxman",
      link: "https://linkedin.com/in/laxman",
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
    <section id="contact" className="py-20 bg-slate-900">
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
            Get In <span className="text-cyan-400">Touch</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto"
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-slate-950 rounded-lg border border-slate-800 hover:border-cyan-500 transition-colors group"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{method.label}</p>
                    <p className="text-white group-hover:text-cyan-400 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-950 text-white rounded-lg border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-950 text-white rounded-lg border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-950 text-white rounded-lg border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
