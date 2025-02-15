import * as React from 'react';
import Chip from '@u_ui/u-ui/Chip';
import Stack from '@u_ui/u-ui/Stack';

export default function ClickableAndDeletableChips() {
  const handleClick = () => {
    console.info('Hiciste clic en el Chip.');
  };

  const handleDelete = () => {
    console.info('Hiciste clic en el icono de eliminar.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Cliqueable y eliminable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="Cliqueable y eliminable"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Stack>
  );
}
