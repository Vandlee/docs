import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Snackbar from '@u_ui/u-ui/Snackbar';

export default function AutohideSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Abrir Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Este Snackbar se cerrará en 5 segundos."
      />
    </div>
  );
}
