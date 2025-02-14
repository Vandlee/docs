import * as React from 'react';
import Chip from '@yushii/u-ui/Chip';
import Stack from '@yushii/u-ui/Stack';

export default function ColorChips() {
  return (
    <Stack spacing={1} sx={{ alignItems: 'center' }}>
      <Stack direction="row" spacing={1}>
        <Chip label="Primario" color="primary" />
        <Chip label="Secundario" color="secondary" />
        <Chip label="Contraste" color="contrast" />
        <Chip label="Éxito" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="Primario" color="primary" variant="outlined" />
        <Chip label="Secundario" color="secondary" variant="outlined" />
        <Chip label="Contraste" color="contrast" variant="outlined" />
        <Chip label="Éxito" color="success" variant="outlined" />
      </Stack>
    </Stack>
  );
}
