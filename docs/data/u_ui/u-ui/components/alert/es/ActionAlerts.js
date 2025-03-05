import * as React from 'react';
import Alert from '@u_ui/u-ui/Alert';
import Button from '@u_ui/u-ui/Button';
import Stack from '@u_ui/u-ui/Stack';

export default function ActionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning" onClose={() => {}}>
        Esta alerta muestra el icono de cierre predeterminado.
      </Alert>
      <Alert
        severity="success"
        action={
          <Button color="inherit" size="small">
            DESHACER
          </Button>
        }
      >
        Esta Alerta usa un componente Button para su acción.
      </Alert>
    </Stack>
  );
}
