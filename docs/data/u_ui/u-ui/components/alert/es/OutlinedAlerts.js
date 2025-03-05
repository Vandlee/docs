import * as React from 'react';
import Alert from '@u_ui/u-ui/Alert';
import Stack from '@u_ui/u-ui/Stack';

export default function OutlinedAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        Esta es una Alerta delineada de éxito.
      </Alert>
      <Alert variant="outlined" severity="info">
        Esta es una Alerta delineada de información.
      </Alert>
      <Alert variant="outlined" severity="warning">
        Esta es una Alerta delineada de advertencia.
      </Alert>
      <Alert variant="outlined" severity="error">
        Esta es una Alerta delineada de error.
      </Alert>
    </Stack>
  );
}
