import { createTheme } from "@u_ui/u-ui";
import { getDesignTokens } from "@vandlee/docs/branding";

function getTheme(theme: 'light' | 'dark', outerTheme: any) {
  const brandingDesignToken = getDesignTokens(theme);

  if (brandingDesignToken.palette?.primary) {
    const isCustomized =
      outerTheme.palette.primary?.main &&
      outerTheme.palette.primary.main !== brandingDesignToken.palette.primary;
  
    const resultTheme = createTheme(
      {
        palette: {
          mode: theme,
          ...(isCustomized && {
            primary: { main: outerTheme.palette.primary.main },
            secondary: { main: outerTheme.palette.secondary.main },
          }),
        },
      },
    );
    
  return resultTheme;
  }
}

export default getTheme;