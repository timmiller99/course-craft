import React from 'react';

interface SelectProps {
  children: React.ReactNode;
  className?: string;
}

export const Select = ({ children, className = "" }: SelectProps) => {
  return <div className={`relative inline-block ${className}`}>{children}</div>;
};

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectContent = ({ children, className = "" }: SelectContentProps) => {
  return <div className={`absolute bg-white border rounded mt-1 ${className}`}>{children}</div>;
};

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export const SelectItem = ({ children, value, className = "" }: SelectItemProps) => {
  return (
    <div className={`p-2 cursor-pointer hover:bg-gray-100 ${className}`} data-value={value}>
      {children}
    </div>
  );
};

export const SelectTrigger = ({ children, className = "" }: SelectProps) => {
  return <button className={`border rounded px-3 py-2 ${className}`}>{children}</button>;
};

export const SelectValue = ({ children, className = "" }: SelectProps) => {
  return <span className={className}>{children}</span>;
};

export default Select;
