'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const Card = ({ children, className = '', hover = true, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -2, scale: 1.01 } : {}}
      className={`bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm ${className}`}
      style={{
        background: 'rgba(44, 44, 44, 0.8)',
        border: '1px solid rgba(58, 58, 58, 0.5)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
