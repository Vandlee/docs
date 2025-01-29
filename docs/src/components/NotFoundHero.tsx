import * as React from 'react';
import Box from '@yushii/ui/Box';
import Typography from '@yushii/ui/Typography';
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
        '& .YushiiContainer-root': {
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
        description="Apologies, but the page you were looking for wasn't found. Try reaching for the search button on the nav bar above to look for another one."
      />
    </Section>
  );
}
