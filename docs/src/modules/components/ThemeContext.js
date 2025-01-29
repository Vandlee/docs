import * as React from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider as YushiiThemeProvider,
  createTheme as createYushiiTheme,
} from '@yushii/ui/styles';
import { deepmerge } from '@yushii/utils';
// import { enUS, zhCN, ptBR } from '@yushii/material/locale';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@yushii/ui/utils';
import { getCookie } from 'docs/src/modules/utils/helpers';
import useLazyCSS from 'docs/src/modules/utils/useLazyCSS';
import { useUserLanguage } from '@yushii/docs/i18n';
import { getDesignTokens, getThemedComponents, getMetaThemeColor } from '@yushii/docs/branding';
import useMediaQuery from '@yushii/ui/useMediaQuery';
import useLocalStorageState from '@yushii/utils/useLocalStorageState';

const themeInitialOptions = {
  dense: false,
  direction: 'ltr',
  paletteColors: {},
  spacing: 8,
  paletteMode: 'dark',
};

export const highDensity = {
  components: {
    YushiiButton: {
      defaultProps: {
        size: 'small',
      },
    },
    YushiiFilledInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    YushiiFormControl: {
      defaultProps: {
        margin: 'dense',
      },
    },
    YushiiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    YushiiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    YushiiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    YushiiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    YushiiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    YushiiOutlinedInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    YushiiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    YushiiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    YushiiTextField: {
      defaultProps: {
        margin: 'dense',
      },
    },
    YushiiToolbar: {
      defaultProps: {
        variant: 'dense',
      },
    },
  },
};

export const DispatchContext = React.createContext(() => {
  throw new Error('Forgot to wrap component in `ThemeProvider`');
});

if (process.env.NODE_ENV !== 'production') {
  DispatchContext.displayName = 'ThemeDispatchContext';
}

export function ThemeProvider(props) {
  const { children } = props;

  const [themeOptions, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'SET_SPACING':
        return {
          ...state,
          spacing: action.payload,
        };
      case 'INCREASE_SPACING': {
        return {
          ...state,
          spacing: state.spacing + 1,
        };
      }
      case 'DECREASE_SPACING': {
        return {
          ...state,
          spacing: state.spacing - 1,
        };
      }
      case 'SET_DENSE':
        return {
          ...state,
          dense: action.payload,
        };
      case 'RESET_DENSITY':
        return {
          ...state,
          dense: themeInitialOptions.dense,
          spacing: themeInitialOptions.spacing,
        };
      case 'RESET_COLORS':
        return {
          ...state,
          paletteColors: themeInitialOptions.paletteColors,
        };
      case 'CHANGE':
        // No value changed
        if (
          (!action.payload.paletteMode || action.payload.paletteMode === state.paletteMode) &&
          (!action.payload.direction || action.payload.direction === state.direction) &&
          (!action.payload.paletteColors || action.payload.paletteColors === state.paletteColors)
        ) {
          return state;
        }

        return {
          ...state,
          paletteMode: action.payload.paletteMode || state.paletteMode,
          direction: action.payload.direction || state.direction,
          paletteColors: action.payload.paletteColors || state.paletteColors,
        };
      default:
        throw new Error(`Unrecognized type ${action.type}`);
    }
  }, themeInitialOptions);

  const userLanguage = useUserLanguage();
  const { dense, direction, paletteColors, paletteMode, spacing } = themeOptions;

  useLazyCSS('/static/styles/prism-okaidia.css', '#prismjs');

  // TODO replace with useColorScheme once all pages support css vars
  const { mode, systemMode } = useColorSchemeShim();
  const calculatedMode = mode === 'system' ? systemMode : mode;

  useEnhancedEffect(() => {
    let nextPaletteColors = JSON.parse(getCookie('paletteColors') || 'null');
    // Set default value if no value is found in cookie
    if (nextPaletteColors === null) {
      nextPaletteColors = themeInitialOptions.paletteColors;
    }

    dispatch({
      type: 'CHANGE',
      payload: {
        paletteColors: nextPaletteColors,
        paletteMode: calculatedMode,
      },
    });
  }, [calculatedMode]);

  useEnhancedEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  useEnhancedEffect(() => {
    // To support light and dark mode images in the docs
    if (paletteMode === 'dark') {
      document.body.classList.remove('mode-light');
      document.body.classList.add('mode-dark');
    } else {
      document.body.classList.remove('mode-dark');
      document.body.classList.add('mode-light');
    }

    const metas = document.querySelectorAll('meta[name="theme-color"]');
    metas.forEach((meta) => {
      meta.setAttribute('content', getMetaThemeColor(paletteMode));
    });
  }, [paletteMode]);

  const theme = React.useMemo(() => {
    const brandingDesignTokens = getDesignTokens(paletteMode);
    const nextPalette = deepmerge(brandingDesignTokens.palette, paletteColors);
    let nextTheme = createYushiiTheme(
      {
        direction,
        ...brandingDesignTokens,
        palette: {
          ...nextPalette,
          mode: paletteMode,
        },
        // v5 migration
        props: {
          YushiiBadge: {
            overlap: 'rectangular',
          },
        },
        spacing,
      },
      dense ? highDensity : null,
      {
        components: {
          YushiiCssBaseline: {
            defaultProps: {
              enableColorScheme: true,
            },
          },
        },
      },
      /* languageMap[userLanguage], */
    );

    nextTheme = deepmerge(nextTheme, getThemedComponents(nextTheme));

    return nextTheme;
  }, [dense, direction, paletteColors, paletteMode, spacing /* `userLanguage`*/]);

  React.useEffect(() => {
    // Expose the theme as a global variable so people can play with it.
    window.theme = theme;
    window.createTheme = createYushiiTheme;
  }, [theme]);

  return (
    <YushiiThemeProvider theme={theme}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </YushiiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

/**
 * @returns {(nextOptions: Partial<typeof themeInitialOptions>) => void}
 */
export function useChangeTheme() {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback((options) => dispatch({ type: 'CHANGE', payload: options }), [dispatch]);
}

// TODO: remove once all pages support css vars and replace call sites with useColorScheme()
export function useColorSchemeShim() {
  const [mode, setMode] = useLocalStorageState('yushii-mode', 'system');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
  const systemMode = prefersDarkMode ? 'dark' : 'light';

  return {
    mode,
    systemMode,
    setMode,
  };
}