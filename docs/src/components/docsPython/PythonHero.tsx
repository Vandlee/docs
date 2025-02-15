import * as React from 'react';
import { extendTheme, CssVarsProvider } from '@u-shii/u-ui/styles';
import HeroContainer from 'docs/src/layouts/HeroContainer';
import Box from '@u-shii/u-ui/Box';
import Paper from '@u-shii/u-ui/Paper';
import Typography from '@u-shii/u-ui/Typography';
import GradientText from 'docs/src/components/typography/GradientText';
import GetStartedButtons from 'docs/src/components/home/GetStartedButtons';
import ROUTES from 'docs/src/route';
import { getDesignTokens } from '@u-shii/docs/branding';
import { Link } from '@u-shii/docs/Link';

const { palette: lightPalette } = getDesignTokens('light');
const { palette: darkPalette } = getDesignTokens('dark');

const customTheme = extendTheme({
  cssVarPrefix: 'hero',
  colorSchemeSelector: 'data-u-shii-color-scheme',
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
                        {/* <Stepper activeStep={1}>
                            <Step>
                                <StepLabel>Search for React UI libraries</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Spot Material UI</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Choose Material UI</StepLabel>
                            </Step>
                        </Stepper> */}
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
            {/* <Stack spacing={4} useFlexGap>
                        <div>
                            <Accordion
                            elevation={0}
                            variant="outlined"
                            defaultExpanded
                            disableGutters
                            sx={{ borderBottom: 0 }}
                            >
                            <AccordionSummary
                                expandIcon={<ExpandMoreRoundedIcon fontSize="small" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="body2">Usage</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2">
                                Material UI components work in isolation. They are self-contained, and will
                                only inject the styles they need to display.
                                </Typography>
                            </AccordionDetails>
                            </Accordion>
                            <Accordion elevation={0} variant="outlined" disableGutters>
                            <AccordionSummary
                                expandIcon={<ExpandMoreRoundedIcon fontSize="small" />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography variant="body2">Globals</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2">
                                Material UI understands a handful of important globals that you&apos;ll need
                                to be aware of.
                                </Typography>
                            </AccordionDetails>
                            </Accordion>
                            <Accordion disabled elevation={0} disableGutters>
                            <AccordionSummary
                                expandIcon={<ExpandMoreRoundedIcon fontSize="small" />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography variant="body2">Secret Files</Typography>
                            </AccordionSummary>
                            </Accordion>
                        </div>
                        <Alert variant="filled" color="info" icon={<CheckCircleRounded fontSize="small" />}>
                            Check Material UI out now!
                        </Alert>
                        <SwitchToggleDemo />
                        <TabsDemo />
                        <Paper elevation={0} variant="outlined" sx={{ overflow: 'hidden' }}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        Michael Scott
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        to Jim, Pam and Ryan
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                            </List>
                        </Paper>
                        </Stack> */}
            {/* <Stack
                        spacing={4}
                        useFlexGap
                        sx={{ ml: 4, '& > .MuiPaper-root': { maxWidth: 'none' } }}
                        >
                        <Box sx={{ display: 'flex', gap: 2, '& button': { textWrap: 'nowrap' } }}>
                            <Button variant="contained" startIcon={<DownloadIcon fontSize="small" />} fullWidth>
                            Install library
                            </Button>
                            <Button variant="outlined" startIcon={<DownloadIcon fontSize="small" />} fullWidth>
                            Install library
                            </Button>
                        </Box>
                        <Paper elevation={0} variant="outlined" sx={{ p: 2 }}>
                            <Typography
                            id="temperature-slider"
                            component="div"
                            variant="subtitle2"
                            sx={{ mb: 1, fontWeight: 400 }}
                            >
                            Temperature range
                            </Typography>
                            <SlideDemo />
                        </Paper>
                        <TextField
                            id="core-hero-input"
                            defaultValue="Material UI"
                            label="Component library"
                        />
                        <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: 2,
                            }}
                        >
                            <BadgeVisibilityDemo />
                            <Paper
                            variant="outlined"
                            elevation={0}
                            sx={{
                                width: '100%',
                                py: 2,
                                px: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Paper>
                        </Box>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                            avatar={
                                <Avatar
                                sx={{ bgcolor: 'primary.50', color: 'primary.600', fontWeight: 'bold' }}
                                >
                                YN
                                </Avatar>
                            }
                            title="Yosemite National Park"
                            subheader="California, United States"
                            />
                            <CardMedia
                            height={125}
                            alt=""
                            component="img"
                            image="/static/images/cards/yosemite.jpeg"
                            />
                            <CardContent sx={{ pb: 0 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Not just a great valley, but a shrine to human foresight, the strength of
                                granite, the power of glaciers, the persistence of life, and the tranquility of
                                the High Sierra.
                            </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteBorderRounded fontSize="small" />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareRounded fontSize="small" />
                            </IconButton>
                            <IconButton aria-label="share" sx={{ ml: 'auto' }}>
                                <RateReviewOutlined fontSize="small" />
                            </IconButton>
                            </CardActions>
                        </Card>
                        </Stack> */}
          </Box>
        </CssVarsProvider>
      }
    />
  );
}
