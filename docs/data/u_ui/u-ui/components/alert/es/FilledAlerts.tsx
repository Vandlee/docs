import * as React from 'react';
import Alert from '@u_ui/u-ui/Alert';
import Stack from '@u_ui/u-ui/Stack';

export default function FilledAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        Esta es una Alerta de éxito.
      </Alert>
      <Alert variant="filled" severity="info">
        Esta es una Alerta de información
      </Alert>
      <Alert variant="filled" severity="warning">
        Esta es una Alerta de advertencia.
      </Alert>
      <Alert variant="filled" severity="error">
        Esta es una Alerta de error.
      </Alert>
    </Stack>
  );
}
