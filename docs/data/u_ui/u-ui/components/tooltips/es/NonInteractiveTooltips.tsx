import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Tooltip from '@u_ui/u-ui/Tooltip';

export default function NonInteractiveTooltips() {
  return (
    <Tooltip title="Añadir" disableInteractive>
      <Button>No interactivo</Button>
    </Tooltip>
  );
}
