'use client';
import * as React from 'react';
import { useTheme as useThemeSystem } from '@u_ui/system';
import defaultTheme from './defaultTheme';
import THEME_ID from './identifier';

export default function useTheme() {
  const theme = useThemeSystem(defaultTheme);

  if (process.env.NODE_ENV !== 'production') {
    React.useDebugValue(theme);
  }

  return theme[THEME_ID] || theme;
}
