import * as React from 'react';
import Alert from '@u_ui/u-ui/Alert';
import Stack from '@u_ui/u-ui/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Esta es una Alerta de éxito.</Alert>
      <Alert severity="info">Esta es una Alerta de información</Alert>
      <Alert severity="warning">Esta es una Alerta de advertencia.</Alert>
      <Alert severity="error">Esta es una Alerta de error.</Alert>
    </Stack>
  );
}
