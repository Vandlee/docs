import * as React from 'react';
import Button from '@u-shii/u-ui/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@u-shii/u-ui/Stack';

export default function LoadingButtons() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Button loading variant="outlined">
          Enviar
        </Button>
        <Button loading loadingIndicator="Loading…" variant="outlined">
          Obtener datos
        </Button>
        <Button
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Guardar
        </Button>
      </Stack>
      <Button
        fullWidth
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Ancho completo
      </Button>
      <Button
        fullWidth
        loading
        loadingPosition="end"
        endIcon={<SaveIcon />}
        variant="outlined"
      >
        Ancho completo
      </Button>
      <Stack direction="row" spacing={2}>
        <Button loading variant="outlined" loadingPosition="start">
          Enviar
        </Button>
        <Button loading variant="outlined" loadingPosition="end">
          Enviar
        </Button>
        <Button
          loading
          variant="outlined"
          loadingPosition="end"
          startIcon={<SaveIcon />}
        >
          Guardar
        </Button>
      </Stack>
    </Stack>
  );
}
