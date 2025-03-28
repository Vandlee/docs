import * as React from 'react';
import { deepmerge } from '@vandlee/utils';
import { CssVarsProvider, extendTheme, PaletteColorOptions } from '@u_ui/u-ui/styles';
import CssBaseline from '@u_ui/u-ui/CssBaseline';
import { NextNProgressBar } from 'docs/src/modules/components/AppFrame';
import { getDesignTokens, getThemedComponents } from '@vandlee/docs/branding';
import SkipLink from 'docs/src/modules/components/SkipLink';
import MarkdownLinks from 'docs/src/modules/components/MarkdownLinks';

declare module '@u_ui/u-ui/styles' {
  interface PaletteOptions {
    primaryDark?: PaletteColorOptions;
  }
}

const { palette: lightPalette, typography, ...designTokens } = getDesignTokens('light');
const { palette: darkPalette } = getDesignTokens('dark');

const theme = extendTheme({
  cssVarPrefix: 'uidocs',
  colorSchemeSelector: 'data-u-ui-color-scheme',
  colorSchemes: {
    light: {
      palette: lightPalette,
    },
    dark: {
      palette: darkPalette,
    },
  },
  ...designTokens,
  typography: deepmerge(typography, {
    h1: {
      ':where([data-u-ui-color-scheme="dark"]) &': {
        color: 'var(--uidocs-palette-common-white)',
      },
    },
    h2: {
      ':where([data-u-ui-color-scheme="dark"]) &': {
        color: 'var(--uidocs-palette-grey-100)',
      },
    },
    h5: {
      ':where([data-u-ui-color-scheme="dark"]) &': {
        color: 'var(--uidocs-palette-primary-300)',
      },
    },
  }),
  ...getThemedComponents(),
});

export default function BrandingCssVarsProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <CssVarsProvider theme={theme} disableTransitionOnChange>
      <NextNProgressBar />
      <CssBaseline />
      <SkipLink />
      <MarkdownLinks />
      {children}
    </CssVarsProvider>
  );
}
