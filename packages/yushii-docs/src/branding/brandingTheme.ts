import type { CSSObject } from '@yushii/system';
import type {} from '@yushii/u-ui/themeCssVarsAugmentation';
/* import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded'; */
import { createTheme, ThemeOptions, Theme, alpha } from '@yushii/u-ui/styles';

interface ApplyDarkStyles {
  (scheme: CSSObject): CSSObject;
}

declare module '@yushii/u-ui/styles' {
  interface Theme {
    applyDarkStyles: ApplyDarkStyles;
  }
}

declare module '@yushii/u-ui/styles/createPalette' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    primaryDark: PaletteColor;
    gradients: {
      radioSubtle: string;
      linearSubtle: string;
    };
  }

  interface TypeText {
    tertiary: string;
  }
}

declare module '@yushii/u-ui/styles/createTypography' {
  interface TypographyOptions {
    fontWeightSemiBold?: number;
    fontWeightExtraBold?: number;
    fontFamilyCode?: string;
    fontFamilySystem?: string;
  }

  interface Typography {
    fontWeightSemiBold: number;
    fontWeightExtraBold: number;
    fontFamilyCode: string;
    fontFamilySystem: string;
  }
}

declare module '@yushii/u-ui/Chip' {
  interface ChipPropsColorOverrides {
    grey: true;
  }
}

declare module '@yushii/u-ui/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    danger: true;
  }
  interface SvgIconPropsSizeOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xl2: true;
    xl3: true;
    xl4: true;
  }
}

// TODO: enable this once types conflict is fixed
// declare module '@mui/material/Button' {
//   interface ButtonPropsVariantOverrides {
//     code: true;
//   }
// }

const defaultTheme = createTheme();

export const blue = {
  50: 'hsl(210, 100%, 96%)',
  100: 'hsl(210, 100%, 90%)',
  200: 'hsl(210, 100%, 80%)',
  300: 'hsl(210, 100%, 70%)',
  400: 'hsl(210, 100%, 60%)',
  main: 'hsl(210, 100%, 45%)',
  500: 'hsl(210, 100%, 45%)',
  600: 'hsl(210, 100%, 42%)',
  700: 'hsl(210, 100%, 38%)',
  800: 'hsl(210, 100%, 30%)',
  900: 'hsl(210, 100%, 23%)',
};
export const blueDark = {
  50: 'hsl(210, 14%, 92%)',
  100: 'hsl(210, 14%, 87%)',
  200: 'hsl(210, 14%, 72%)',
  300: 'hsl(210, 14%, 56%)',
  main: 'hsl(210, 14%, 56%)',
  400: 'hsl(210, 14%, 36%)',
  500: 'hsl(210, 14%, 28%)',
  600: 'hsl(210, 14%, 22%)',
  700: 'hsl(210, 14%, 13%)',
  800: 'hsl(210, 14%, 9%)',
  900: 'hsl(210, 14%, 7%)',
};
export const deepPurple = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  main: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
};
export const grey = {
  50: 'hsl(215, 15%, 97%)',
  100: 'hsl(215, 15%, 92%)',
  200: 'hsl(215, 15%, 89%)',
  300: 'hsl(215, 15%, 82%)',
  400: 'hsl(215, 15%, 75%)',
  500: 'hsl(215, 15%, 65%)',
  600: 'hsl(215, 15%, 50%)',
  700: 'hsl(215, 15%, 40%)',
  800: 'hsl(215, 15%, 20%)',
  900: 'hsl(225, 15%, 5%)',
};
export const error = {
  50: 'hsl(355, 98%, 97%)',
  100: 'hsl(355, 98%, 93%)',
  200: 'hsl(355, 98%, 87%)',
  300: 'hsl(355, 98%, 80%)',
  400: 'hsl(355, 98%, 74%)',
  500: 'hsl(355, 98%, 66%)',
  main: 'hsl(355, 98%, 66%)',
  600: 'hsl(355, 98%, 46%)',
  700: 'hsl(355, 98%, 39%)',
  800: 'hsl(355, 98%, 29%)',
  900: 'hsl(355, 98%, 17%)',
};
export const success = {
  50: 'hsl(144, 72%, 95%)',
  100: 'hsl(144, 72%, 87%)',
  200: 'hsl(144, 72%, 77%)',
  300: 'hsl(144, 72%, 66%)',
  400: 'hsl(144, 72%, 56%)',
  500: 'hsl(144, 72%, 46%)',
  600: 'hsl(144, 72%, 41%)',
  700: 'hsl(144, 72%, 37%)',
  800: 'hsl(144, 72%, 32%)',
  900: 'hsl(144, 72%, 21%)',
};
export const warning = {
  50: 'hsl(48, 100%, 96%)',
  100: 'hsl(48, 100%, 88%)',
  200: 'hsl(48, 100%, 82%)',
  300: 'hsl(48, 100%, 64%)',
  400: 'hsl(48, 100%, 48%)',
  500: 'hsl(48, 100%, 44%)',
  main: 'hsl(48, 100%, 44%)',
  600: 'hsl(40, 100%, 40%)',
  700: 'hsl(36, 100%, 34%)',
  800: 'hsl(36, 100%, 27%)',
  900: 'hsl(36, 100%, 18%)',
};

const systemFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

export const getMetaThemeColor = (mode: 'light' | 'dark') => {
  const themeColor = {
    light: blue[600],
    dark: blueDark[900],
  };
  return themeColor[mode];
};

export const getDesignTokens = (mode: 'light' | 'dark') =>
  ({
    palette: {
      primary: {
        ...deepPurple,
        ...(mode === 'light' && {
          main: deepPurple[300],
        }),
        ...(mode === 'dark' && {
          main: deepPurple[200],
          dark: deepPurple[300],
        }),
      },
      secondary: {
        ...blue,
        ...(mode === 'light' && {
          main: blue[50],
        }),
        ...(mode === 'dark' && {
          main: blue[200],
        }),
      },
      contrast: {
        ...grey,
        ...(mode === 'light' && {
          main: grey[300],
        }),
        ...(mode === 'dark' && {
          main: grey[200],
          dark: grey[300],
        }),
      },
      neutral: {
        ...deepPurple,
        ...(mode === 'light' && {
          main: deepPurple[300],
        }),
        ...(mode === 'dark' && {
          main: deepPurple[200],
          dark: deepPurple[300],
        }),
      },
      divider: mode === 'dark' ? alpha(grey[600], .4) : grey[100],
      primaryDark: blueDark,
      mode,
      ...(mode === 'dark' && {
        background: {
          default: grey[900],
          paper: alpha(grey[800], 0.8),
        },
      }),
      common: {
        black: 'hsl(200, 10%, 4%)',
      },
      text: {
        ...(mode === 'light' && {
          primary: grey[900],
          secondary: grey[800],
          tertiary: grey[700],
        }),
        ...(mode === 'dark' && {
          primary: '#fff',
          secondary: grey[400],
          tertiary: grey[500],
        }),
      },
      grey: {
        ...grey,
        ...(mode === 'light' && {
          main: grey[100],
          contrastText: grey[600],
        }),
        ...(mode === 'dark' && {
          main: grey[700],
          contrastText: grey[600],
        }),
      },
      error,
      success: {
        ...success,
        ...(mode === 'dark' && {
          main: success[600],
        }),
        ...(mode === 'light' && {
          main: success[700],
        }),
      },
      warning,
      gradients: {
        radioSubtle:
          mode === 'dark'
            ? `radial-gradient(100% 100% at 100% 100%, transparent 0, ${alpha(blue[900], 0.3)} 300%)`
            : `radial-gradient(100% 90% at 50% 0, transparent 0, ${alpha(blue[100], 0.3)} 300%)`,
        linearSubtle:
          mode === 'dark'
            ? `linear-gradient(0deg, ${alpha(blue[900], 0.1)}, ${alpha(blueDark[900], 0.5)})`
            : `linear-gradient(0deg, ${alpha(blue[50], 0.4)}, ${alpha(grey[50], 0.1)})`,
      },
    },
    shape: {
      borderRadius: 12,
    },
    spacing: 8,
    typography: {
      fontFamily: ['"IBM Plex Sans"', ...systemFont].join(','),
      // Match VS Code
      // https://github.com/microsoft/vscode/blob/b38691f611d1ce3ef437c67a1b047c757b7b4e53/src/vs/editor/common/config/editorOptions.ts#L4578-L4580
      // https://github.com/microsoft/vscode/blob/d950552131d7350a45dac8b59bf179469c36c2ac/src/vs/editor/standalone/browser/standalone-tokens.css#L10
      fontFamilyCode: [
        'Menlo', // macOS
        'Consolas', // Windows
        '"Droid Sans Mono"', // Linux
        'monospace', // fallback
      ].join(','),
      fontFamilyTagline: ['"IBM Plex Sans"', ...systemFont].join(','),
      fontFamilySystem: systemFont.join(','),
      fontWeightSemiBold: 600,
      fontWeightExtraBold: 800,
      h1: {
        fontFamily: ['"Quicksand"', ...systemFont].join(','),
        fontSize: 'clamp(2.5rem, 1.125rem + 3.5vw, 3.5em)',
        fontWeight: 600,
        lineHeight: 78 / 70,
        letterSpacing: -0.2,
      },
      h2: {
        fontFamily: ['"Quicksand"', ...systemFont].join(','),
        fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
        fontWeight: 600,
        lineHeight: 44 / 36,
        letterSpacing: -0.2,
        color: mode === 'dark' ? grey[100] : blueDark[700],
      },
      h3: {
        fontFamily: ['"Quicksand"', ...systemFont].join(','),
        fontSize: defaultTheme.typography.pxToRem(36),
        lineHeight: 44 / 36,
        letterSpacing: 0.2,
      },
      h4: {
        fontFamily: ['"Quicksand"', ...systemFont].join(','),
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 42 / 28,
        letterSpacing: 0.2,
      },
      h5: {
        fontFamily: ['"Quicksand"', ...systemFont].join(','),
        lineHeight: 36 / 24,
        letterSpacing: 0.1,
        color: mode === 'dark' ? blue[300] : blue.main,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(20),
        lineHeight: 30 / 20,
      },
      button: {
        fontFamily: ['"Quicksand"', ...systemFont].join(','),
        textTransform: 'initial',
        fontWeight: 600,
        letterSpacing: 0,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
        lineHeight: 24 / 18,
        letterSpacing: 0,
        fontWeight: 500,
      },
      body1: {
        fontFamily: ['"Quicksand"', ...systemFont].join(','),
        fontSize: defaultTheme.typography.pxToRem(16),
        lineHeight: 24 / 16,
        letterSpacing: 0,
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        lineHeight: 21 / 14,
        letterSpacing: 0,
      },
      caption: {
        display: 'inline-block',
        fontSize: defaultTheme.typography.pxToRem(12),
        lineHeight: 18 / 12,
        letterSpacing: 0,
        fontWeight: 700,
      },
      allVariants: {
        scrollMarginTop: 'calc(var(--YushiiDocs-header-height) + 32px)',
      },
    },
    /**
     * This utility exists to help transitioning to CSS variables page by page (prevent dark mode flicker).
     * It will use the proper styling method based on the theme because the component might be on the page that does not support CSS variables yet.
     *
     * 😓 Without this utility:
     * {
     *   ...theme.vars ? {
     *     color: theme.vars.palette.primary.main,
     *     [theme.getColorScheme('dark')]: {
     *       color: '#fff',
     *     }
     *   } : {
     *     color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary.main,
     *   }
     * }
     *
     * 🤩 Using the utility:
     * {
     *   color: (theme.vars || theme).palette.primary.main,
     *   ...theme.applyDarkStyles({
     *     color: '#fff',
     *   }),
     * }
     *
     * -------------------------------------------------------------------------------------------------
     * 💡 This util should be used in an array if the styles contain pseudo classes or nested selectors:
     *
     * ❌ There is a chance that the upper selectors could be overridden
     * {
     *    // the whole selector could be overridden
     *   '&::before': {
     *     color: ...
     *   },
     *   ...theme.applyDarkStyles({
     *      '&::before': {
     *        color: ...
     *      }
     *   })
     * }
     *
     * ✅ use an array (supports in both emotion and styled-components)
     * Only the `color` will be overridden in dark mode.
     *  [
     *    '&::before': {
     *      color: ...
     *    },
     *    theme.applyDarkStyles({
     *      '&::before': {
     *        color: ...
     *      }
     *    })
     *  ]
     */
    applyDarkStyles(css: Parameters<ApplyDarkStyles>[0]) {
      return (this as Theme).applyStyles('dark', css);
    },
  }) as ThemeOptions;

export function getThemedComponents(): ThemeOptions {
  return {
    components: {
      YushiiAlert: {
        styleOverrides: {
          root: {
            padding: '16px',
            gap: '8px',
            fontSize: '1rem',
            '& * ul': { paddingLeft: '24px !important', marginBottom: '0 !important' }, // !important is used here to override the anchor tag color coming from MarkdownElement
            '& .YushiiAlert-icon': {
              margin: 0,
              marginTop: '2px',
              padding: 0,
            },
            '& .YushiiAlert-message': { padding: 0 },
          },
          icon: {
            paddingTop: 10,
            paddingBottom: 0,
          },
          standardWarning: ({ theme }) => [
            // same styles from the MarkdownElement callout
            {
              backgroundColor: alpha(theme.palette.warning[50], 0.5),
              color: (theme.vars || theme).palette.grey[900],
              border: '1px solid',
              borderColor: alpha(theme.palette.warning[700], 0.15),
              '& .YushiiAlert-icon': {
                color: (theme.vars || theme).palette.warning[600],
              },
              '& * a': {
                // !important is used here to override the anchor tag color coming from MarkdownElement
                color: `${(theme.vars || theme).palette.warning[900]} !important`,
                textDecorationColor: `${alpha(theme.palette.warning.main, 0.4)} !important`,
                '&:hover': {
                  textDecorationColor: `${(theme.vars || theme).palette.warning[900]} !important`,
                },
              },
            },
            theme.applyDarkStyles({
              backgroundColor: alpha(theme.palette.warning[700], 0.12),
              color: (theme.vars || theme).palette.warning[50],
              '& .YushiiAlert-icon': {
                color: (theme.vars || theme).palette.warning[400],
              },
              '& * a': {
                color: `${(theme.vars || theme).palette.warning[100]} !important`,
                textDecorationColor: `${alpha(theme.palette.warning[600], 0.4)} !important`,
                '&:hover': {
                  textDecorationColor: `${(theme.vars || theme).palette.warning[600]} !important`,
                },
              },
            }),
          ],
          standardSuccess: ({ theme }) => [
            // same styles from the MarkdownElement callout
            {
              backgroundColor: alpha(theme.palette.success[50], 0.5),
              color: (theme.vars || theme).palette.success[900],
              border: `1px solid ${(theme.vars || theme).palette.success[100]}`,
              '& .YushiiAlert-icon': {
                color: (theme.vars || theme).palette.success[600],
              },
              '& * a': {
                // !important is used here to override the anchor tag color coming from MarkdownElement
                color: `${(theme.vars || theme).palette.success[900]} !important`,
                textDecorationColor: `${alpha(theme.palette.success.main, 0.4)} !important`,
                '&:hover': {
                  textDecorationColor: `${(theme.vars || theme).palette.success[900]} !important`,
                },
              },
            },
            theme.applyDarkStyles({
              backgroundColor: alpha(theme.palette.success[700], 0.12),
              color: (theme.vars || theme).palette.success[50],
              borderColor: alpha(theme.palette.success[400], 0.1),
              '& .YushiiAlert-icon': {
                color: (theme.vars || theme).palette.success[500],
              },
              '& * a': {
                color: `${(theme.vars || theme).palette.success[100]} !important`,
                textDecorationColor: `${alpha(theme.palette.success[600], 0.4)} !important`,
                '&:hover': {
                  textDecorationColor: `${(theme.vars || theme).palette.success[600]} !important`,
                },
              },
            }),
          ],
        },
      },
      YushiiButtonBase: {
        defaultProps: {
          disableTouchRipple: false,
          disableRipple: false,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            transition: 'all 100ms ease-in',
            '& > .YushiiTouchRipple-root': { marginLeft: '0px', marginRight: '0px', transform: 'unset !important' },
            '&:focus-visible': {
              outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
              outlineOffset: 2,
            },
          }),
        },
      },
      YushiiButton: {
        defaultProps: {
          disableElevation: true
        },
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            transition: 'all 120ms ease-in',
            '& > .YushiiTouchRipple-root': { marginLeft: '0px', marginRight: '0px', transform: 'unset !important' },
            ...(ownerState.size === 'large' && {
              ...theme.typography.body1,
              fontWeight: theme.typography.fontWeightMedium,
              padding: theme.spacing('8px', '12px', '8px', '14px'),
              '& > span': { transition: '0.2s', marginLeft: 4 },
              '&:hover > span': { transform: 'translateX(2px)' },
            }),
            ...(ownerState.size === 'medium' && {
              fontSize: defaultTheme.typography.pxToRem(16),
              fontWeight: theme.typography.fontWeightMedium,
              lineHeight: 1.25,
              padding: theme.spacing('8px', '10px', '10px', '12px'),
              '& > span': { transition: '0.2s', marginLeft: 4 },
              '&:hover > span': { transform: 'translateX(2px)' },
            }),
            ...(ownerState.size === 'small' && {
              padding: '6px 10px',
              fontFamily: theme.typography.fontFamily,
              fontSize: defaultTheme.typography.pxToRem(13),
              fontWeight: theme.typography.fontWeightMedium,
            }),
          })
        }
      },
      YushiiIconButton: {
          styleOverrides: {
            root: ({ theme, ownerState }) => ({
              borderRadius: theme.shape.borderRadius,
              transition: 'all 100ms ease-in',
              '&:hover': {
                borderColor: (theme.vars || theme).palette.grey[300],
                background: (theme.vars || theme).palette.grey[50],
                ...theme.applyDarkStyles({
                  borderColor: (theme.vars || theme).palette.primaryDark[600],
                  background: alpha(theme.palette.primaryDark[700], 0.8),
                }),
              },
              '&:active': {
                background: (theme.vars || theme).palette.grey[100],
                ...theme.applyDarkStyles({
                  background: theme.palette.primaryDark[800],
                }),
              },
              ...(ownerState.size === 'small' && {
                height: 32,
                width: 32,
                '& .YushiiSvgIcon-root': {
                  fontSize: defaultTheme.typography.pxToRem(18),
                },
              }),
            }),
          },
          variants: [
            {
              props: { color: 'primary' },
              style: ({ theme }) => [
                {
                  color: (theme.vars || theme).palette.primary.main,
                  backgroundColor: alpha(theme.palette.primaryDark[50], 0.1),
                  border: `1px solid ${(theme.vars || theme).palette.primaryDark[100]}`,
                  boxShadow: `#FFF 0 1px 0 inset, ${alpha(theme.palette.grey[200], 0.4)} 0 -1px 0 inset, ${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
                  '&:hover': {
                    borderColor: (theme.vars || theme).palette.grey[300],
                    background: (theme.vars || theme).palette.grey[50],
                    boxShadow: `${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
                  },
                  '&:active': {
                    background: (theme.vars || theme).palette.grey[100],
                  },
                },
                theme.applyDarkStyles({
                  color: (theme.vars || theme).palette.primary[300],
                  borderColor: alpha(theme.palette.primaryDark[600], 0.5),
                  backgroundColor: alpha(theme.palette.primaryDark[700], 0.2),
                  boxShadow: `${alpha(theme.palette.primaryDark[600], 0.3)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
                  '&:hover': {
                    borderColor: (theme.vars || theme).palette.primaryDark[600],
                    background: alpha(theme.palette.primaryDark[700], 0.8),
                    boxShadow: `${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
                  },
                  '&:active': {
                    background: theme.palette.primaryDark[800],
                  },
                }),
              ],
            },
            {
              props: { color: 'info' },
              style: ({ theme }) => [
                {
                  color: (theme.vars || theme).palette.text.secondary,
                  backgroundColor: alpha(theme.palette.primaryDark[50], 0.1),
                  border: `1px solid ${(theme.vars || theme).palette.primaryDark[100]}`,
                  boxShadow: `#FFF 0 1px 0 inset, ${alpha(theme.palette.grey[200], 0.4)} 0 -1px 0 inset, ${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
                  '&:hover': {
                    color: (theme.vars || theme).palette.text.primary,
                    borderColor: (theme.vars || theme).palette.grey[300],
                    background: (theme.vars || theme).palette.grey[50],
                    boxShadow: `${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
                  },
                  '&:active': {
                    background: (theme.vars || theme).palette.grey[100],
                  },
                },
                theme.applyDarkStyles({
                  borderColor: alpha(theme.palette.primaryDark[600], 0.5),
                  backgroundColor: alpha(theme.palette.primaryDark[700], 0.2),
                  boxShadow: `${alpha(theme.palette.primaryDark[600], 0.3)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
                  '&:hover': {
                    borderColor: (theme.vars || theme).palette.primaryDark[600],
                    background: alpha(theme.palette.primaryDark[700], 0.8),
                    boxShadow: `${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
                  },
                  '&:active': {
                    background: theme.palette.primaryDark[800],
                  },
                }),
              ],
            },
          ],
      },
      YushiiMenu: {
          styleOverrides: {
            paper: ({ theme }) => [
              {
                padding: '6px',
                minWidth: 160,
                color: (theme.vars || theme).palette.text.secondary,
                backgroundImage: 'none',
                border: '1px solid',
                backgroundColor: (theme.vars || theme).palette.background.paper,
                borderColor: (theme.vars || theme).palette.grey[200],
                '& .YushiiMenu-list': {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  '& .YushiiDivider-root': {
                    margin: '4px -8px 4px -8px',
                  },
                },
                '& .YushiiMenuItem-root': {
                  padding: '6px 8px',
                  borderRadius: '6px',
                  fontSize: theme.typography.pxToRem(14),
                  fontWeight: theme.typography.fontWeightMedium,
                  '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.grey[100],
                    color: (theme.vars || theme).palette.text.primary,
                  },
                  '&:focus-visible': {
                    outline: 'none',
                  },
                  '&.Yushii-selected': {
                    fontWeight: 500,
                    color: (theme.vars || theme).palette.primary[600],
                    backgroundColor: alpha(theme.palette.primary[100], 0.6),
                  },
                },
              },
              theme.applyDarkStyles({
                backgroundColor: (theme.vars || theme).palette.primaryDark[900],
                borderColor: (theme.vars || theme).palette.primaryDark[700],
                '& .YushiiMenuItem-root': {
                  '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                  },
                  '&.Yushii-selected': {
                    color: (theme.vars || theme).palette.primary[200],
                    backgroundColor: alpha(theme.palette.primary[900], 0.4),
                  },
                },
              }),
            ],
          },
        },
      YushiiPopover: {
          styleOverrides: {
            paper: ({ theme }) => ({
              boxShadow: '0px 4px 20px rgba(170, 180, 190, 0.3)',
              ...theme.applyDarkStyles({
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
              }),
            }),
          },
        },
      YushiiDivider: {
          styleOverrides: {
            root: ({ theme }) => ({
              borderColor: (theme.vars || theme).palette.divider,
            }),
          },
        },
      YushiiLink: {
        defaultProps: {
          underline: 'none',
        },
        styleOverrides: {
          root: ({ theme }) => ({
            display: 'inline-flex',
            alignItems: 'center',
            fontWeight: theme.typography.fontWeightSemiBold,
            '&.YushiiTypography-body1 > svg': {
              marginTop: 2,
            },
            '& svg:last-child': {
              marginLeft: 2,
            },
            '&:focus-visible': {
              outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
              outlineOffset: 2,
            },
          }),
        },
        variants: [
          {
            props: { color: 'primary' },
            style: ({ theme }) => [
              {
                color: (theme.vars || theme).palette.primary[600],
                '&:hover': {
                  color: (theme.vars || theme).palette.primary[700],
                },
              },
              theme.applyDarkStyles({
                color: (theme.vars || theme).palette.primary[300],
                '&:hover': {
                  color: (theme.vars || theme).palette.primary[200],
                },
              }),
            ],
          },
        ],
      },
      YushiiChip: {
        styleOverrides: {
          root: ({ ownerState: { color, variant }, theme }) => ({
            fontWeight: theme.typography.fontWeightSemiBold,
            paddingBottom: 0.2,
            ...(variant === 'outlined' &&
              color === 'default' && {
                backgroundColor: alpha(theme.palette.grey[50], 0.5),
                color: (theme.vars || theme).palette.grey[900],
                borderColor: (theme.vars || theme).palette.grey[200],
                '&:hover': {
                  backgroundColor: (theme.vars || theme).palette.grey[100],
                  color: (theme.vars || theme).palette.grey[900],
                },
                ...theme.applyDarkStyles({
                  backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
                  color: (theme.vars || theme).palette.grey[300],
                  borderColor: alpha(theme.palette.primaryDark[500], 0.5),
                  '&:hover': {
                    color: (theme.vars || theme).palette.grey[300],
                    backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                  },
                }),
              }),
            ...(variant === 'outlined' &&
              color === 'info' && {
                backgroundColor: alpha(theme.palette.grey[50], 0.5),
                color: (theme.vars || theme).palette.grey[900],
                borderColor: (theme.vars || theme).palette.grey[200],
                ...theme.applyDarkStyles({
                  color: (theme.vars || theme).palette.grey[300],
                  backgroundColor: alpha(theme.palette.primaryDark[700], 0.5),
                  borderColor: (theme.vars || theme).palette.primaryDark[600],
                }),
              }),
            ...(variant === 'outlined' &&
              color === 'primary' && {
                borderColor: (theme.vars || theme).palette.primary[100],
                backgroundColor: alpha(theme.palette.primary[100], 0.2),
                ...theme.applyDarkStyles({
                  color: (theme.vars || theme).palette.primary[300],
                  borderColor: alpha(theme.palette.primary[500], 0.2),
                  backgroundColor: alpha(theme.palette.primary[700], 0.2),
                }),
              }),
            ...(variant === 'outlined' &&
              color === 'success' && {
                borderColor: (theme.vars || theme).palette.success[100],
                backgroundColor: (theme.vars || theme).palette.success[50],
                color: (theme.vars || theme).palette.success[900],
                ...theme.applyDarkStyles({
                  color: (theme.vars || theme).palette.success[300],
                  borderColor: alpha(theme.palette.success[300], 0.2),
                  background: alpha(theme.palette.success[800], 0.2),
                }),
              }),
            ...(variant === 'filled' && {
              ...(color === 'default' && {
                border: '1px solid transparent',
                color: (theme.vars || theme).palette.primary[700],
                backgroundColor: alpha(theme.palette.primary[100], 0.5),
                '&:hover': {
                  backgroundColor: (theme.vars || theme).palette.primary[100],
                },
                ...theme.applyDarkStyles({
                  color: '#fff',
                  backgroundColor: alpha(theme.palette.primaryDark[500], 0.8),
                  '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.primaryDark[600],
                  },
                }),
              }),
              ...(color === 'primary' && {
                color: (theme.vars || theme).palette.primary[600],
                backgroundColor: alpha(theme.palette.primary[100], 0.4),
                '&:hover': {
                  backgroundColor: (theme.vars || theme).palette.primary[100],
                },
                '& .YushiiChip-deleteIcon': {
                  color: (theme.vars || theme).palette.primary[600],
                  '&:hover': {
                    color: (theme.vars || theme).palette.primary[700],
                  },
                },
                '&.Yushii-focusVisible': {
                  backgroundColor: (theme.vars || theme).palette.primary[200],
                },
                ...theme.applyDarkStyles({
                  color: (theme.vars || theme).palette.primary[100],
                  backgroundColor: alpha(theme.palette.primary[800], 0.5),
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary[900], 0.5),
                  },
                  '& .YushiiChip-deleteIcon': {
                    color: (theme.vars || theme).palette.primary[100],
                    '&:hover': {
                      color: (theme.vars || theme).palette.primary[50],
                    },
                  },
                }),
              }),
            }),
            // for labelling product in the search
            // @ts-ignore internal repo module augmentation issue
            ...(variant === 'light' && {
              ...(color === 'default' && {
                color: (theme.vars || theme).palette.primary[700],
                backgroundColor: alpha(theme.palette.primary[100], 0.3),
                ...theme.applyDarkStyles({
                  color: (theme.vars || theme).palette.primary[200],
                  backgroundColor: alpha(theme.palette.primaryDark[700], 0.5),
                }),
              }),
              ...(color === 'warning' && {
                color: (theme.vars || theme).palette.warning[900],
                backgroundColor: (theme.vars || theme).palette.warning[100],
                ...theme.applyDarkStyles({
                  color: '#fff',
                  backgroundColor: (theme.vars || theme).palette.warning[900],
                }),
              }),
              ...(color === 'success' && {
                color: (theme.vars || theme).palette.success[900],
                backgroundColor: (theme.vars || theme).palette.success[100],
                ...theme.applyDarkStyles({
                  color: '#fff',
                  backgroundColor: (theme.vars || theme).palette.success[900],
                }),
              }),
            }),
          }),
        },
      },
      YushiiList: {
          styleOverrides: {
            root: {
              padding: 0,
            },
          },
        },
      /* YushiiListItemButton: {
          styleOverrides: {
            root: ({ theme }) => [
              {
                padding: '8px',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: theme.typography.pxToRem(14),
                color: theme.palette.grey[700],
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: theme.palette.grey[50],
                },
                '&.Yushii-selected': {
                  borderRadius: 10,
                  border: '1px solid',
                  color: (theme.vars || theme).palette.primary[500],
                  borderColor: `${(theme.vars || theme).palette.primary[500]} !important`,
                  backgroundColor: (theme.vars || theme).palette.primary[50],
                  '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.primary[100],
                  },
                },
              } as const,
              theme.applyDarkStyles({
                color: theme.palette.grey[300],
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
                },
                '&.Yushii-selected': {
                  color: '#fff',
                  borderColor: `${(theme.vars || theme).palette.primary[700]} !important`,
                  backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                  '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.primaryDark[600],
                  },
                },
              }),
            ],
          },
        }, */
      /* YushiiSelect: {
          defaultProps: {
            IconComponent: ArrowDropDownRounded,
          },
          styleOverrides: {
            iconFilled: {
              top: 'calc(50% - .25em)',
            },
            root: ({ theme }) => ({
              variants: [
                {
                  props: { variant: 'outlined' },
                  style: {
                    backgroundColor: alpha(theme.palette.primaryDark[50], 0.1),
                    '& .YushiiOutlinedInput-notchedOutline': {
                      border: `1px solid ${(theme.vars || theme).palette.primaryDark[100]}`,
                      boxShadow: `#FFF 0 1px 0 inset, ${alpha(theme.palette.grey[200], 0.4)} 0 -1px 0 inset, ${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
                    },
                    '&:not(.Yushii-focused):hover': {
                      background: (theme.vars || theme).palette.grey[50],
                      '& .YushiiOutlinedInput-notchedOutline': {
                        borderColor: (theme.vars || theme).palette.grey[300],
                        boxShadow: `${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
                      },
                    },
                    ...theme.applyDarkStyles({
                      color: (theme.vars || theme).palette.primary[300],
                      backgroundColor: alpha(theme.palette.primaryDark[700], 0.2),
                      '& .YushiiOutlinedInput-notchedOutline': {
                        borderColor: alpha(theme.palette.primaryDark[600], 0.5),
                        boxShadow: `${alpha(theme.palette.primaryDark[600], 0.3)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
                      },
                      '&:not(.Yushii-focused):hover': {
                        background: alpha(theme.palette.primaryDark[700], 0.8),
                        '& .YushiiOutlinedInput-notchedOutline': {
                          borderColor: (theme.vars || theme).palette.primaryDark[600],
                          boxShadow: `${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
                        },
                      },
                    }),
                  },
                },
                {
                  props: { size: 'small' },
                  style: {
                    minHeight: 32,
                    '& [role="combobox"]': {
                      paddingBlock: 5,
                    },
                  },
                },
              ],
            }),
          },
        }, */
      /* YushiiTab: {
          defaultProps: {
            disableTouchRipple: true,
          },
        }, */
      YushiiPaper: {
        styleOverrides: {
          root: ({ theme, ownerState }) => [
            {
              backgroundImage: 'none',
              backgroundColor: '#fff',
              '&[href]': {
                textDecorationLine: 'none',
              },
              transition: theme.transitions.create(['border', 'box-shadow'], {
                duration: theme.transitions.duration.shortest,
              }),
              ...(ownerState.variant === 'outlined' && {
                display: 'block',
                borderColor: (theme.vars || theme).palette.grey[100],
                '&[href]': {
                  textDecorationLine: 'none',
                  boxShadow: `hsl(200, 0%, 100%) 0 2px 0 inset, ${alpha(theme.palette.grey[100], 0.3)} 0 -2px 0 inset, ${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
                  '&:hover': {
                    borderColor: (theme.vars || theme).palette.primary[200],
                    boxShadow: `0px 2px 8px ${(theme.vars || theme).palette.primary[100]}`,
                  },
                  '&:focus-visible': {
                    outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
                    outlineOffset: 2,
                  },
                },
                ':is(a&), :is(button&)': {
                  '&:hover': {
                    borderColor: (theme.vars || theme).palette.primary[200],
                    boxShadow: `0px 4px 16px ${(theme.vars || theme).palette.grey[200]}`,
                  },
                },
              }),
            },
            theme.applyDarkStyles({
              backgroundColor: (theme.vars || theme).palette.primaryDark[900],
              ...(ownerState.variant === 'outlined' && {
                borderColor: (theme.vars || theme).palette.primaryDark[700],
                backgroundColor: alpha(theme.palette.primaryDark[800], 0.6),
                '&[href]': {
                  textDecorationLine: 'none',
                  boxShadow: `${alpha(theme.palette.primaryDark[700], 0.4)} 0 2px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -2px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
                  '&:hover': {
                    borderColor: alpha(theme.palette.primary[600], 0.5),
                    boxShadow: `0px 2px 8px ${alpha(theme.palette.primary[900], 0.6)}`,
                  },
                },
                ':is(a&), :is(button&)': {
                  '&:hover': {
                    boxShadow: `0px 4px 24px ${(theme.vars || theme).palette.common.black}`,
                  },
                },
              }),
            }),
          ],
        },
      },
      /* YushiiTableCell: {
          styleOverrides: {
            root: ({ theme, ownerState }) => ({
              padding: theme.spacing(1, 2),
              borderColor: (theme.vars || theme).palette.divider,
              ...(ownerState.variant === 'head' && {
                color: (theme.vars || theme).palette.text.primary,
                fontWeight: 700,
              }),
              ...(ownerState.variant === 'body' && {
                color: (theme.vars || theme).palette.text.secondary,
              }),
            }),
          },
        }, */
      YushiiToggleButtonGroup: {
          styleOverrides: {
            root: ({ theme }) => ({
              backgroundColor: '#fff',
              ...theme.applyDarkStyles({
                backgroundColor: (theme.vars || theme).palette.primaryDark[900],
              }),
            }),
          },
        },
      YushiiToggleButton: {
          styleOverrides: {
            root: ({ theme, ownerState }) => [
              {
                textTransform: 'none',
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.secondary,
                borderColor: theme.palette.grey[200],
                ...(ownerState.size === 'small' && {
                  padding: '0.375rem 0.75rem',
                }),
                '&.Yushii-selected': {
                  color: (theme.vars || theme).palette.primary[700],
                  borderColor: `${(theme.vars || theme).palette.primary[200]} !important`,
                  backgroundColor: (theme.vars || theme).palette.primary[50],
                  '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.primary[100],
                  },
                },
              } as const,
              theme.applyDarkStyles({
                borderColor: theme.palette.primaryDark[700],
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primaryDark[600], 0.2),
                },
                '&.Yushii-selected': {
                  color: (theme.vars || theme).palette.primary[200],
                  borderColor: `${(theme.vars || theme).palette.primary[800]} !important`,
                  backgroundColor: alpha(theme.palette.primary[900], 0.4),
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary[900], 0.8),
                    borderColor: `${(theme.vars || theme).palette.primary[400]} !important`,
                  },
                },
              }),
            ],
          },
        },
      YushiiTooltip: {
        defaultProps: {
          arrow: true,
        },
        styleOverrides: {
          tooltip: ({ theme }) => ({
            padding: '6px 8px',
            borderRadius: 6,
            backgroundColor: (theme.vars || theme).palette.grey[800],
            '& .YushiiTooltip-arrow': {
              color: (theme.vars || theme).palette.grey[800],
            },
          }),
        },
      },
      /* YushiiSwitch: {
          styleOverrides: {
            root: ({ theme }) => ({
              width: 32,
              height: 20,
              padding: 0,
              borderRadius: 10,
              '&:has(input:focus-visible)': {
                outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
                outlineOffset: 2,
              },
              '& .YushiiSwitch-switchBase': {
                '&.Yushii-checked': {
                  transform: 'translateX(12px)',
                  color: '#fff',
                },
              },
            }),
            switchBase: {
              height: 20,
              width: 20,
              padding: 0,
              color: '#fff',
              '&.Yushii-checked + .YushiiSwitch-track': {
                opacity: 1,
              },
            },
            track: ({ theme }) => ({
              opacity: 1,
              borderRadius: 32,
              backgroundColor: theme.palette.grey[400],
              ...theme.applyDarkStyles({
                backgroundColor: theme.palette.grey[800],
              }),
            }),
            thumb: {
              flexShrink: 0,
              width: '14px',
              height: '14px',
            },
          },
        }, */
      YushiiSnackbar: {
          styleOverrides: {
            root: ({ theme }) => ({
              '& .YushiiSnackbarContent-root': {
                backgroundColor: '#FFF',
                color: (theme.vars || theme).palette.text.primary,
                fontWeight: theme.typography.fontWeightMedium,
                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                boxShadow: `0 4px 16px ${alpha(theme.palette.grey[400], 0.2)}`,
                ...theme.applyDarkStyles({
                  backgroundColor: (theme.vars || theme).palette.primaryDark[800],
                  boxShadow: '0 4px 16px hsl(0, 100%, 1%)',
                }),
              },
            }),
          },
        },
      /* YushiiPaginationItem: {
          styleOverrides: {
            root: ({ theme }) => [
              {
                textTransform: 'none',
                fontWeight: theme.typography.fontWeightSemiBold,
                color: theme.palette.grey[700],
                borderColor: theme.palette.grey[200],
                borderRadius: '8px',
                '&.Yushii-selected': {
                  color: (theme.vars || theme).palette.primary[500],
                  borderColor: `${(theme.vars || theme).palette.primary[500]} !important`,
                  backgroundColor: (theme.vars || theme).palette.primary[50],
                  '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.primary[100],
                  },
                },
              } as const,
              theme.applyDarkStyles({
                color: theme.palette.grey[200],
                borderColor: theme.palette.primaryDark[700],
                '&.Yushii-selected': {
                  color: theme.palette.primary[100],
                  borderColor: `${(theme.vars || theme).palette.primary[700]} !important`,
                  backgroundColor: alpha(theme.palette.primary[900], 0.5),
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary[900], 0.8),
                  },
                },
              }),
            ],
          },
        }, */
      YushiiCssBaseline: {
        defaultProps: {
          enableColorScheme: true,
        },
        styleOverrides: {
          html: {
            overflowY: 'scroll',
            // TODO add support for it,
            // https://github.com/mui/material-ui/issues/40748
            // scrollbarGutter: 'stable',
          },
        },
      },
      /* YushiiCard: {
          styleOverrides: {
            root: ({ theme, ownerState }) => ({
              ...(ownerState.variant === 'elevation' && {
                border: '1px solid',
                borderColor: (theme.vars || theme).palette.grey[100],
                boxShadow: `${alpha(theme.palette.grey[200], 0.4)} 0 -1px 0 inset, ${alpha(theme.palette.grey[300], 0.5)} 0 1px 8px 0`,
                ...theme.applyDarkStyles({
                  borderColor: (theme.vars || theme).palette.primaryDark[700],
                  boxShadow: `${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 8px 0`,
                }),
              }),
            }),
          },
        }, */
    },
  };
}

export const brandingDarkTheme = createTheme({
  ...getDesignTokens('dark'),
  ...getThemedComponents(),
});

export const brandingLightTheme = createTheme({
  ...getDesignTokens('light'),
  ...getThemedComponents(),
});
