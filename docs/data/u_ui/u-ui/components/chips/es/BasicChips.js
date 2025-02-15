import * as React from 'react';
import Chip from '@u_ui/u-ui/Chip';
import Stack from '@u_ui/u-ui/Stack';

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Relleno" />
      <Chip label="Chip Delineado" variant="outlined" />
    </Stack>
  );
}
