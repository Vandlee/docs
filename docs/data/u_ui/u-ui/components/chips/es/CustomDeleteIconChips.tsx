import * as React from 'react';
import Chip from '@u_ui/u-ui/Chip';
import Stack from '@u_ui/u-ui/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info('Hiciste clic en el Chip.');
  };

  const handleDelete = () => {
    console.info('Hiciste clic en el icono de eliminar.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Icono de eliminación personalizado"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Icono de eliminación personalizado"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  );
}
