'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import Image from "next/image";
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
 
    { name: 'Gallery', href: '#gaming-gallery' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
            <motion.header
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
            >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-foreground"
          >
            <Image
              src="/spring-boot-svgrepo-com.svg"
              alt="Spring Boot"
              width={40}
              height={40}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                        className="text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Resume Button */}
            <motion.button
              onClick={() => window.open('/YuWang_resume_sde_v1.pdf', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                        className="text-foreground hover:text-accent transition-colors"
            >
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Resume Button */}
              <button
                onClick={() => window.open('/YuWang_resume_sde_v1.pdf', '_blank')}
                className="text-left text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
