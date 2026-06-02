'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Marquee ticker */}
      <div className="border-b border-border py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee font-pixel text-[9px] text-muted-foreground">
          {[0, 1].map((dup) => (
            <span key={dup} className="flex">
              {['NOW PLAYING: PORTFOLIO', 'GO', 'JAVA', 'PYTHON', 'REACT', 'AWS', 'OPEN TO WORK', 'INSERT COIN'].map(
                (t) => (
                  <span key={t} className="mx-6 text-accent/80">
                    ● {t}
                  </span>
                )
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-pixel text-[8px] text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} YU (RAY) WANG · BUILT WITH NEXT.JS
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/759257989"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/yu-wang-200658208/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:wang1999yu@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
