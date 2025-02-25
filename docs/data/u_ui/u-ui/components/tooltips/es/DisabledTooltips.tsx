import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Tooltip from '@u_ui/u-ui/Tooltip';

export default function DisabledTooltips() {
  return (
    <Tooltip title="No tienes permiso para hacer esto">
      <span>
        <Button disabled>Un botón desactivado</Button>
      </span>
    </Tooltip>
  );
}
