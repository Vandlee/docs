import * as React from 'react';
import SystemInitColorSchemeScript from '@u_ui/system/InitColorSchemeScript';

export const defaultConfig = {
  attribute: 'data-u-ui-color-scheme',
  colorSchemeStorageKey: 'u-ui-color-scheme',
  defaultLightColorScheme: 'light',
  defaultDarkColorScheme: 'dark',
  modeStorageKey: 'u-ui-mode',
} as const;

export default (function InitColorSchemeScript(props) {
  return <SystemInitColorSchemeScript {...defaultConfig} {...props} />;
} as typeof SystemInitColorSchemeScript);
