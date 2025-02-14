import * as React from 'react';
import Button from '@yushii/u-ui/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@yushii/u-ui/Stack';

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
