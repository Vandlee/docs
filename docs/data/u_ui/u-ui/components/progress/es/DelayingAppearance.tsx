import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Fade from '@u_ui/u-ui/Fade';
import Button from '@u_ui/u-ui/Button';
import CircularProgress from '@u_ui/u-ui/CircularProgress';
import Typography from '@u_ui/u-ui/Typography';

export default function DelayingAppearance() {
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState('idle');
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  const handleClickLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== 'inactivo') {
      setQuery('inactivo');
      return;
    }

    setQuery('progreso');
    timerRef.current = setTimeout(() => {
      setQuery('exito');
    }, 2000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ height: 40 }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box>
      <Button onClick={handleClickLoading} sx={{ m: 2 }}>
        {loading ? 'Detener la carga' : 'Cargando'}
      </Button>
      <Box sx={{ height: 40 }}>
        {query === 'exito' ? (
          <Typography>¡Éxito!</Typography>
        ) : (
          <Fade
            in={query === 'progreso'}
            style={{
              transitionDelay: query === 'progreso' ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        )}
      </Box>
      <Button onClick={handleClickQuery} sx={{ m: 2 }}>
        {query !== 'inactivo' ? 'Restablecer' : 'Simular una carga'}
      </Button>
    </Box>
  );
}
