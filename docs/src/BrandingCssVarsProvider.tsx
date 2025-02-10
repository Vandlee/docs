import * as React from 'react';
import { deepmerge } from '@yushii/utils';
import { CssVarsProvider, extendTheme, PaletteColorOptions } from '@yushii/u-ui/styles';
import CssBaseline from '@yushii/u-ui/CssBaseline';
import { NextNProgressBar } from 'docs/src/modules/components/AppFrame';
import { getDesignTokens, getThemedComponents } from '@yushii/docs/branding';
import SkipLink from 'docs/src/modules/components/SkipLink';
import MarkdownLinks from 'docs/src/modules/components/MarkdownLinks';

declare module '@yushii/u-ui/styles' {
  interface PaletteOptions {
    primaryDark?: PaletteColorOptions;
  }
}

const { palette: lightPalette, typography, ...designTokens } = getDesignTokens('light');
const { palette: darkPalette } = getDesignTokens('dark');

const theme = extendTheme({
  cssVarPrefix: 'yushiidocs',
  colorSchemeSelector: 'data-yushii-color-scheme',
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
      ':where([data-yushii-color-scheme="dark"]) &': {
        color: 'var(--yushiidocs-palette-common-white)',
      },
    },
    h2: {
      ':where([data-yushii-color-scheme="dark"]) &': {
        color: 'var(--yushiidocs-palette-grey-100)',
      },
    },
    h5: {
      ':where([data-yushii-color-scheme="dark"]) &': {
        color: 'var(--yushiidocs-palette-primary-300)',
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
