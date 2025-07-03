import React from 'react';
import Link from 'next/link';

type ErstgespraechButtonProps = {
  className?: string;
  variant?: 'primary' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
};

export default function ErstgespraechButton({
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}: ErstgespraechButtonProps) {
  // Base classes
  let buttonClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 shadow-soft';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2',
    white: 'bg-white text-primary hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2',
  };
  
  // Full width class
  const widthClass = fullWidth ? 'w-full block text-center' : '';
  
  // Combine all classes
  buttonClasses = `${buttonClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;
  
  return (
    <Link href="/erstgespraech" className={buttonClasses}>
      Jetzt Erstgespräch vereinbaren
    </Link>
  );
} 