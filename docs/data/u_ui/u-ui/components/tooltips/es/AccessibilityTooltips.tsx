import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@u_ui/u-ui/Button';
import IconButton from '@u_ui/u-ui/IconButton';
import Tooltip from '@u_ui/u-ui/Tooltip';

export default function AccessibilityTooltips() {
  return (
    <div>
      <Tooltip title="Eliminar">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip describeChild title="No añade si ya existe.">
        <Button>Añadir</Button>
      </Tooltip>
    </div>
  );
}
