'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
  isLight: false,
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Sync theme with DOM and localStorage on initial mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('strains_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setThemeState(savedTheme);
        applyThemeToDOM(savedTheme);
      } else {
        // Default to dark mode for Strains Group aesthetic
        setThemeState('dark');
        applyThemeToDOM('dark');
      }
    } catch (_) {
      // Fallback for private browsing mode
      applyThemeToDOM('dark');
    }
    setMounted(true);
  }, []);

  const applyThemeToDOM = (newTheme) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const body = document.body;

    root.setAttribute('data-theme', newTheme);

    if (newTheme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      if (body) {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
      }
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      if (body) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
      }
    }
  };

  const setTheme = (newTheme) => {
    const validTheme = newTheme === 'light' ? 'light' : 'dark';
    setThemeState(validTheme);
    applyThemeToDOM(validTheme);
    try {
      localStorage.setItem('strains_theme', validTheme);
    } catch (_) {}
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        isLight: theme === 'light',
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;

