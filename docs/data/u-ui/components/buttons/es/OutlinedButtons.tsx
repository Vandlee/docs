import * as React from 'react';
import Button from '@yushii/u-ui/Button';
import Stack from '@yushii/u-ui/Stack';

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">Primario</Button>
      <Button variant="outlined" disabled>
        Deshabilitado
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Enlace
      </Button>
    </Stack>
  );
}
