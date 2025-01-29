import * as React from 'react';
import SystemInitColorSchemeScript from '@yushii/system/InitColorSchemeScript';

export const defaultConfig = {
  attribute: 'data-yushii-color-scheme',
  colorSchemeStorageKey: 'yushii-color-scheme',
  defaultLightColorScheme: 'light',
  defaultDarkColorScheme: 'dark',
  modeStorageKey: 'yushii-mode',
} as const;

export default (function InitColorSchemeScript(props) {
  return <SystemInitColorSchemeScript {...defaultConfig} {...props} />;
} as typeof SystemInitColorSchemeScript);
