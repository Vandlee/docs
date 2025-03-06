import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('Me encantan los snacks.');
  };

  const handleClickVariant = (variant) => () => {
    // La variante puede ser success, error, warning, info, or default
    enqueueSnackbar('¡Este es un mensaje de éxito!', { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>Mostrar snackbar</Button>
      <Button onClick={handleClickVariant('success')}>Mostrar snackbar de éxito</Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
