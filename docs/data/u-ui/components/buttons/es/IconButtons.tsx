import * as React from 'react';
import IconButton from '@yushii/u-ui/IconButton';
import Stack from '@yushii/u-ui/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="eliminar">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="eliminar" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="añadir una alarma">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="añadir al carrito de la compra">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  );
}
