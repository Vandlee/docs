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
import { Alert, Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack } from '@u_ui/u-ui';
import { CheckCircleRounded } from '@mui/icons-material';
import { DownloadRounded } from '@mui/icons-material';

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

export default function UIHero() {
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
            */}<Link href={ROUTES.productu_ui}>u_ui</Link>{' '}
            <Typography component="span" variant="inherit" sx={{ color: 'grey.400' }}>
              /
            </Typography>
            <Typography component="span" variant="inherit" sx={{ color: 'text.primary' }}>
              U-Ui
            </Typography>
          </Typography>
          <Typography variant="h1" sx={{ my: 2, maxWidth: 500 }}>
            Componentes <br />
            <GradientText color="primary">React</GradientText>
            <br />
            Listos para usar
          </Typography>
          <GetStartedButtons
            primaryUrl={ROUTES['docs-u_ui-u-ui']}
            secondaryLabel="View templates"
            secondaryUrl={ROUTES.freeTemplates}
            altInstallation="npm install @u_ui/u-ui @emotion/react @emotion/styled"
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
          <Box
            sx={{
              '& > div': {
                width: 370,
                display: 'inline-flex',
                verticalAlign: 'top',
              },
            }}
          >
            <Stack spacing={4}>
              <Alert variant="filled" color="info" icon={<CheckCircleRounded fontSize="small" />}>
                ¡Dale un vistazo a U-Ui ahora!
              </Alert>
              <Paper elevation={0} variant='outlined' sx={{ overflow: 'hidden'}}>
                <List sx={{ width: '100%', maxWidth: 360, bgColor: 'background.paper'}}>
                  <ListItem alignItems='flex-start'>
                    <ListItemAvatar>
                      <Avatar alt="elchery" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="¿Almuerzo este fin de semana?"
                      secondary={ 
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline'}}
                          >
                            El Chery
                          </Typography>
                          {" — Estaré en tu vecindario haciendo recados este..."}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Colp Code" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Barbacoa de verano"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                          >
                            para elchery
                          </Typography>
                          {" — Ojalá pudiera ir, pero estoy fuera de la ciudad..."}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Stack>
            <Stack
              spacing={4}
              useFlexGap
              sx={{ ml: 4, '& > .uiPaper-root': { maxWidth: 'none' }}}
            >
              <Box sx={{ display: 'flex', gap: 2, '& button': { textWrap: 'nowrap' } }}>
                <Button variant="contained" startIcon={<DownloadRounded fontSize="small" />} fullWidth>
                  Instalar libreria
                </Button>
                <Button variant="outlined" startIcon={<DownloadRounded fontSize="small" />} fullWidth>
                  Instalar libreria
                </Button>
              </Box>
            </Stack>
          </Box>
        </CssVarsProvider>
      }
    />
  );
}
