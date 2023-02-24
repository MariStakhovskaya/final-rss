import { useState, useLayoutEffect } from 'react';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = () => {
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem('app-theme') || defaultTheme
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', themeColor);
    localStorage.setItem('app-theme', themeColor);
  }, [themeColor]);

  return { themeColor, setThemeColor };
};
