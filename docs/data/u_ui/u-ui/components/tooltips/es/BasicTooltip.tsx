import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@u_ui/u-ui/IconButton';
import Tooltip from '@u_ui/u-ui/Tooltip';

export default function BasicTooltip() {
  return (
    <Tooltip title="Eliminar">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
