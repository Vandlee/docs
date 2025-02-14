import * as React from 'react';
import Button from '@yushii/u-ui/Button';
import Stack from '@yushii/u-ui/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contenido</Button>
      <Button variant="contained" disabled>
        Deshabilitado
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Enlace
      </Button>
    </Stack>
  );
}
