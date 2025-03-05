import * as React from 'react';
import Alert from '@u_ui/u-ui/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Aquí tienes una amable confirmación de que tu acción ha tenido éxito.
    </Alert>
  );
}
