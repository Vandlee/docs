import * as React from 'react';
import AppBar from '@u_ui/u-ui/AppBar';
import Toolbar from '@u_ui/u-ui/Toolbar';
import Typography from '@u_ui/u-ui/Typography';
import CssBaseline from '@u_ui/u-ui/CssBaseline';
import useScrollTrigger from '@u_ui/u-ui/useScrollTrigger';
import Box from '@u_ui/u-ui/Box';
import Container from '@u_ui/u-ui/Container';
import Slide from '@u_ui/u-ui/Slide';

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Ten en cuenta que normalmente no necesitarás establecer la referencia de la ventana ya que useScrollTrigger
  // por defecto será window.
  // Esto sólo se establece aquí porque la demo está en un iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

interface Props {
  /**
   * Inyectado por la documentación para trabajar en un iframe.
   * No lo necesitarás en tu proyecto.
   */
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

export default function HideAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Desplázate para ocultar la barra de aplicaciones
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}
