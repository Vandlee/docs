import * as React from 'react';
import Chip from '@yushii/u-ui/Chip';
import Stack from '@yushii/u-ui/Stack';

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}
