import * as React from 'react';
import Alert from '@u_ui/u-ui/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@u_ui/u-ui/Stack';

export default function IconAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Esta es una Alerta de éxito con un icono personalizado.
      </Alert>
      <Alert icon={false} severity="success">
        Esta es una Alerta de éxito sin icono.
      </Alert>
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        Esta es una Alerta de éxito que usa `iconMapping` para anular el icono predeterminado.
      </Alert>
    </Stack>
  );
}
