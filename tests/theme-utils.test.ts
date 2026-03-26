import { describe, it, expect } from 'vitest';
import { resolveEffectiveTheme, getStoredThemePreference } from '../src/utils/themeUtils';

describe('Theme Resolution Utilities', () => {
  it('resolves system mode based on OS preference', () => {
    expect(resolveEffectiveTheme('system', true)).toBe('dark');
    expect(resolveEffectiveTheme('system', false)).toBe('light');
  });

  it('respects explicit light or dark overrides', () => {
    expect(resolveEffectiveTheme('dark', false)).toBe('dark');
    expect(resolveEffectiveTheme('light', true)).toBe('light');
  });

  it('reads stored preference with fallback', () => {
    const mockStorage = {
      getItem: (key: string) => (key === 'portfolio-theme' ? 'light' : null)
    } as Storage;

    expect(getStoredThemePreference(mockStorage)).toBe('light');
    expect(getStoredThemePreference(null, 'dark')).toBe('dark');
  });
});
