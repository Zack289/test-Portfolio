import { motion } from "motion/react";
import { Github, Linkedin, Mail, Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-cyan-400 mb-4"
            >
              &lt;Laxman /&gt;
            </motion.div>
            <p className="text-slate-400">
              Frontend Developer passionate about building beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/laxman"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 rounded-full hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/laxman"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 rounded-full hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:laxman.dev@example.com"
                className="p-3 bg-slate-900 rounded-full hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
            <p className="text-slate-400 mt-4">
              laxman.dev@example.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Laxman. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Code size={16} className="text-cyan-400" />
            <span>Designed & Developed with passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
