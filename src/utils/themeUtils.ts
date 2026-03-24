export type ThemeMode = 'light' | 'dark' | 'system';

export function resolveEffectiveTheme(mode: ThemeMode, prefersDarkMode: boolean): 'light' | 'dark' {
  if (mode === 'system') {
    return prefersDarkMode ? 'dark' : 'light';
  }
  return mode;
}

export function getStoredThemePreference(storage: Storage | null, defaultTheme: ThemeMode = 'dark'): ThemeMode {
  if (!storage) return defaultTheme;
  const val = storage.getItem('portfolio-theme');
  if (val === 'light' || val === 'dark' || val === 'system') {
    return val;
  }
  return defaultTheme;
}
