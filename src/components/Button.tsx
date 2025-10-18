'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background';
  
  const variantClasses = {
    primary: 'bg-accent hover:bg-accent/90 text-accent-foreground focus:ring-accent',
    secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground focus:ring-secondary',
    outline: 'border border-border bg-transparent hover:bg-accent hover:text-accent-foreground text-foreground focus:ring-accent',
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  const buttonContent = (
    <motion.div
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {buttonContent}
    </button>
  );
};

export default Button;
