import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Grid from '@u_ui/u-ui/Grid';
import Paper from '@u_ui/u-ui/Paper';
import { HighlightedCode } from '@vandlee/docs/HighlightedCode';

export default function SpacingGrid() {
  const [spacing] = React.useState(2);

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        pt: 2,
        '&& pre': { margin: 0 },
      }}
    >
      <Grid container justifyContent="center" spacing={spacing}>
        {[0, 1, 2].map((value) => (
          <Grid key={value}>
            <Paper
              sx={(theme) => ({
                height: 140,
                width: 100,
                backgroundColor: '#fff',
                ...theme.applyStyles('dark', {
                  backgroundColor: '#1A2027',
                }),
              })}
            />
          </Grid>
        ))}
      </Grid>
      <HighlightedCode code={jsx} language="jsx" />
    </Box>
  );
}
