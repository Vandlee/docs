import * as React from 'react';
import Chip from '@yushii/u-ui/Chip';
import Stack from '@yushii/u-ui/Stack';

export default function SizesChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Pequeño" size="small" />
      <Chip label="Pequeño" size="small" variant="outlined" />
    </Stack>
  );
}
