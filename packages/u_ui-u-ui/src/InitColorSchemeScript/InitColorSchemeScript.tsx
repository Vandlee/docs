import * as React from 'react';
import SystemInitColorSchemeScript from '@u-shii/system/InitColorSchemeScript';

export const defaultConfig = {
  attribute: 'data-u-shii-color-scheme',
  colorSchemeStorageKey: 'u-shii-color-scheme',
  defaultLightColorScheme: 'light',
  defaultDarkColorScheme: 'dark',
  modeStorageKey: 'u-shii-mode',
} as const;

export default (function InitColorSchemeScript(props) {
  return <SystemInitColorSchemeScript {...defaultConfig} {...props} />;
} as typeof SystemInitColorSchemeScript);
