import * as React from 'react';
import Stack from '@u_ui/u-ui/Stack';
import CircularProgress from '@u_ui/u-ui/CircularProgress';

export default function CircularSize() {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <CircularProgress size="30px" />
      <CircularProgress size={40} />
      <CircularProgress size="3rem" />
    </Stack>
  );
}
