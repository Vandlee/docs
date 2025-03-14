import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Box from '@u_ui/u-ui/Box';

export default function DisableElevation() {
  return (
    <Box sx={{ gap: 1, display: 'flex'}}>
      <Button variant="contained">
        Sin elevación
      </Button>
      <Button variant="contained" enableElevation>
        Con elevación
      </Button>
    </Box>
  );
}
