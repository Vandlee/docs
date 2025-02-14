import * as React from 'react';
import Stack from '@yushii/u-ui/Stack';
import Button from '@yushii/u-ui/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Texto</Button>
      <Button variant="contained">Contenido</Button>
      <Button variant="outlined">Delineado</Button>
    </Stack>
  );
}
