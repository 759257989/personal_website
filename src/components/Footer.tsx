'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
            <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
                  <p className="text-muted-foreground">
            © {new Date().getFullYear()} Yu (Ray) Wang. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
