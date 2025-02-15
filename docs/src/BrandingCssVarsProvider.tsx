import * as React from 'react';
import { deepmerge } from '@u-shii/utils';
import { CssVarsProvider, extendTheme, PaletteColorOptions } from '@u-shii/u-ui/styles';
import CssBaseline from '@u-shii/u-ui/CssBaseline';
import { NextNProgressBar } from 'docs/src/modules/components/AppFrame';
import { getDesignTokens, getThemedComponents } from '@u-shii/docs/branding';
import SkipLink from 'docs/src/modules/components/SkipLink';
import MarkdownLinks from 'docs/src/modules/components/MarkdownLinks';

declare module '@u-shii/u-ui/styles' {
  interface PaletteOptions {
    primaryDark?: PaletteColorOptions;
  }
}

const { palette: lightPalette, typography, ...designTokens } = getDesignTokens('light');
const { palette: darkPalette } = getDesignTokens('dark');

const theme = extendTheme({
  cssVarPrefix: 'ushiidocs',
  colorSchemeSelector: 'data-u-shii-color-scheme',
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
      ':where([data-u-shii-color-scheme="dark"]) &': {
        color: 'var(--ushiidocs-palette-common-white)',
      },
    },
    h2: {
      ':where([data-u-shii-color-scheme="dark"]) &': {
        color: 'var(--ushiidocs-palette-grey-100)',
      },
    },
    h5: {
      ':where([data-u-shii-color-scheme="dark"]) &': {
        color: 'var(--ushiidocs-palette-primary-300)',
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
