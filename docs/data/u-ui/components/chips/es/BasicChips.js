import * as React from 'react';
import Chip from '@yushii/u-ui/Chip';
import Stack from '@yushii/u-ui/Stack';

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Relleno" />
      <Chip label="Chip Delineado" variant="outlined" />
    </Stack>
  );
}
