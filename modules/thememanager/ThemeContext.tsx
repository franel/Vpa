'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import themes from './themes.json';

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [current, setCurrent] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored && themes[stored]) {
      setCurrent(stored);
      document.documentElement.classList.add(themes[stored].mode);
    } else {
      document.documentElement.classList.add('light');
    }
  }, []);

  const switchTheme = (key: string) => {
    if (!themes[key]) return;
    document.documentElement.className = ''; // remove old mode
    document.documentElement.classList.add(themes[key].mode);
    setCurrent(key);
    localStorage.setItem('theme', key);
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[current], switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
