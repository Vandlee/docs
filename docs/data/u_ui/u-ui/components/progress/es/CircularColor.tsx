import * as React from 'react';
import Stack from '@u_ui/u-ui/Stack';
import CircularProgress from '@u_ui/u-ui/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="accent" />
      <CircularProgress color="neutral" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
