import * as React from 'react';
import CircularProgress from '@u_ui/u-ui/CircularProgress';
import Box from '@u_ui/u-ui/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
