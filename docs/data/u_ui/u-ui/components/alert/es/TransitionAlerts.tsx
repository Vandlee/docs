import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Alert from '@u_ui/u-ui/Alert';
import IconButton from '@u_ui/u-ui/IconButton';
import Collapse from '@u_ui/u-ui/Collapse';
import Button from '@u_ui/u-ui/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Haz click en el icono de cerrar para ver la transición de colapso en acción!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-abrir
      </Button>
    </Box>
  );
}
