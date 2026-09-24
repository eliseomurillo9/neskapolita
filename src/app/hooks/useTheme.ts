import { useState } from 'react';
import { DARK, LIGHT, Theme } from '../theme';

export function useTheme(defaultDark = false) {
  const [isDark, setIsDark] = useState(defaultDark);
  const theme: Theme = isDark ? DARK : LIGHT;
  const toggleTheme = () => setIsDark(d => !d);

  return { isDark, theme, toggleTheme };
}
