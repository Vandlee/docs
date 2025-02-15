import * as React from 'react';
import Stack from '@u_ui/u-ui/Stack';
import Button from '@u_ui/u-ui/Button';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secundario</Button>
      <Button variant="contained" color="contrast">Contraste</Button>
      <Button variant="outlined" color="neutral">Neutro</Button>
      <Button color="success">
        Éxito
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
    </Stack>
  );
}
