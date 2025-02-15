import * as React from 'react';
import Button from '@u-shii/u-ui/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@u-shii/u-ui/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Eliminar
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Enviar
      </Button>
    </Stack>
  );
}
