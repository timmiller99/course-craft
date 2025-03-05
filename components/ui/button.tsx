import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  className?: string;
  disabled?: boolean;
}

export const Button = ({ children, onClick, variant = 'default', className = '', disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`border rounded px-4 py-2 ${variant} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
