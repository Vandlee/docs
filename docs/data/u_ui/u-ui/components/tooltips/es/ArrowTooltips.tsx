import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Tooltip from '@u_ui/u-ui/Tooltip';

export default function ArrowTooltips() {
  return (
    <Tooltip title="Añadir" arrow>
      <Button>Flecha</Button>
    </Tooltip>
  );
}
