import * as React from 'react';
import Chip from '@u-shii/u-ui/Chip';
import Stack from '@u-shii/u-ui/Stack';

export default function DeletableChips() {
  const handleDelete = () => {
    console.info('Has pulsado el icono de eliminar.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Se puede eliminar" onDelete={handleDelete} />
      <Chip label="Se puede eliminar" variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
}
