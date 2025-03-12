import * as React from 'react';
import CssBaseline from '@u_ui/u-ui/CssBaseline';
import Box from '@u_ui/u-ui/Box';
import Container from '@u_ui/u-ui/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
