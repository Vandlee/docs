import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@u_ui/u-ui/Stack';
import Divider from '@u_ui/u-ui/Divider';

export default function LoadingButtons() {
  const [loading, setLoading] = React.useState(false);
    
  return (
    <Stack spacing={2}>
      <Button color="contrast" variant="contained" onClick={() => setLoading((prev) => !prev)}>
        {!loading ? 'Iniciar carga' : 'Cancelar carga'}
      </Button>
      <Divider />
      <Stack direction="row" spacing={2}>
        <Button loading={loading} variant="outlined">
          Enviar
        </Button>
        <Button loading={loading} loadingIndicator="Cargando..." variant="outlined">
          Obtener datos
        </Button>
        <Button
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Guardar
        </Button>
      </Stack>
      <Button
        fullWidth
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Ancho completo
      </Button>
      <Button
        fullWidth
        loading={loading}
        loadingPosition="end"
        endIcon={<SaveIcon />}
        variant="outlined"
      >
        Ancho completo
      </Button>
      <Stack direction="row" spacing={2}>
        <Button loading={loading} variant="outlined" loadingPosition="start">
          Enviar
        </Button>
        <Button loading={loading} variant="outlined" loadingPosition="end">
          Enviar
        </Button>
        <Button
          loading={loading}
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
