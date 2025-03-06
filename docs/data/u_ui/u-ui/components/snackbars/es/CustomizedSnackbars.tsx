import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Snackbar, { SnackbarCloseReason } from '@u_ui/u-ui/Snackbar';
import Alert from '@u_ui/u-ui/Alert';

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Abrir Snackbar</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          ¡Esta es una Alerta de éxito dentro de un Snackbar!
        </Alert>
      </Snackbar>
    </div>
  );
}
