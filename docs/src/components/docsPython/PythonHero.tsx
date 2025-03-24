import * as React from 'react';
import { extendTheme, CssVarsProvider } from '@u_ui/u-ui/styles';
import HeroContainer from 'docs/src/layouts/HeroContainer';
import Box from '@u_ui/u-ui/Box';
import Paper from '@u_ui/u-ui/Paper';
import Typography from '@u_ui/u-ui/Typography';
import GradientText from 'docs/src/components/typography/GradientText';
import GetStartedButtons from 'docs/src/components/home/GetStartedButtons';
import ROUTES from 'docs/src/route';
import { getDesignTokens } from '@vandlee/docs/branding';
import { Link } from '@vandlee/docs/Link';

const { palette: lightPalette } = getDesignTokens('light');
const { palette: darkPalette } = getDesignTokens('dark');

const customTheme = extendTheme({
  cssVarPrefix: 'hero',
  colorSchemeSelector: 'data-u-ui-color-scheme',
  colorSchemes: {
    light: {
      palette: {
        ...(lightPalette?.primary && { primary: lightPalette?.primary }),
        ...(lightPalette?.grey && { grey: lightPalette?.grey }),
        ...(lightPalette?.background && { background: lightPalette?.background }),
      },
    },
    dark: {
      palette: {
        ...(darkPalette?.primary && { primary: darkPalette?.primary }),
        ...(darkPalette?.grey && { grey: darkPalette?.grey }),
        ...(darkPalette?.background && { background: darkPalette?.background }),
      },
    },
  },
});

export default function PythonHero() {
  return (
    <HeroContainer
      linearGradient
      left={
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="body2"
            sx={[
              {
                fontWeight: 'regular',
              },
              (theme) => ({
                color: 'primary.600',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: { xs: 'center', md: 'flex-start' },
                ...theme.applyDarkStyles({
                  color: 'primary.100',
                }),
              }),
            ]}
          >
            {/* <IconImage loading="eager" width={28} height={28} name="product-core" />{' '}
            */}<Link href={ROUTES.productDocs}>U-Docs</Link>{' '}
            <Typography component="span" variant="inherit" sx={{ color: 'grey.400' }}>
              /
            </Typography>
            <Typography component="span" variant="inherit" sx={{ color: 'text.primary' }}>
              Python
            </Typography>
          </Typography>
          <Typography variant="h1" sx={{ my: 2, maxWidth: 500 }}>
            Código <br/>
            <GradientText color="secondary">limpio y versátil</GradientText>
            <br />
            para cualquier proyecto.
          </Typography>
          <GetStartedButtons
            primaryColor="secondary"
            primaryLabel='Leer documentación'
            primaryUrl={ROUTES.pythonDocs}
          />
        </Box>
      }
      rightSx={{
        p: 3,
        minWidth: 2000,
        flexDirection: 'column',
        overflow: 'hidden', // the components on the Hero section are mostly illustrative, even though they're interactive. That's why scrolling is disabled.
      }}
      right={
        <CssVarsProvider theme={customTheme}>
          <Paper sx={{ maxWidth: 780, p: 2, mb: 4 }}>
          </Paper>
          <Box
            sx={{
              '& > div': {
                width: 370,
                display: 'inline-flex',
                verticalAlign: 'top',
              },
            }}
          >
            
          </Box>
        </CssVarsProvider>
      }
    />
  );
}
