import * as React from 'react';
import Button from '@u-shii/u-ui/Button';
import Stack from '@u-shii/u-ui/Stack';

export default function TextButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button>Primario</Button>
      <Button disabled>Deshabilitado</Button>
      <Button href="#text-buttons">Enlace</Button>
    </Stack>
  );
}
