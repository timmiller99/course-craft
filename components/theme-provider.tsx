import React from 'react';

export const ThemeProvider = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => {
  return <div {...props}>{children}</div>;
};

export default ThemeProvider;
