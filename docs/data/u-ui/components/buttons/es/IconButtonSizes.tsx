import * as React from 'react';
import Stack from '@u-shii/u-ui/Stack';
import IconButton from '@u-shii/u-ui/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function IconButtonSizes() {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <IconButton aria-label="eliminar" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="eliminar" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="eliminar" size="large">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="eliminar" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}
