import * as React from 'react';
import NoSsr from '@u_ui/u-ui/NoSsr';
import Box from '@u_ui/u-ui/Box';

export default function SimpleNoSsr() {
  return (
    <div>
      <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        Servidor y Cliente
      </Box>
      <NoSsr>
        <Box
          sx={{ p: 2, bgcolor: 'secondary.main', color: 'secondary.contrastText' }}
        >
          Solo Cliente
        </Box>
      </NoSsr>
    </div>
  );
}
