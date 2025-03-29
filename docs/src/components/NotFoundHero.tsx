import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Typography from '@u_ui/u-ui/Typography';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';

function NotFoundIllustration() {
  return <Box>imagen</Box>;
}

export default function NotFoundHero() {
  return (
    <Section
      bg="gradient"
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& .uiContainer-root': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <NotFoundIllustration />
      <SectionHeadline
        alwaysCenter
        title={
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'semiBold' }}>
            Página no encontrada
          </Typography>
        }
        description="Disculpe, pero la página que buscaba no se ha encontrado. Intente buscar otra con el botón de búsqueda de la barra de navegación."
      />
    </Section>
  );
}
