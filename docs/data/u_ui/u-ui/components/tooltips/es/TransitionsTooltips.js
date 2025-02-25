import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Tooltip from '@u_ui/u-ui/Tooltip';
import Fade from '@u_ui/u-ui/Fade';
import Zoom from '@u_ui/u-ui/Zoom';

export default function TransitionsTooltips() {
  return (
    <div>
      <Tooltip title="Añadir">
        <Button>Crecer</Button>
      </Tooltip>
      <Tooltip
        title="Añadir"
        slots={{
          transition: Fade,
        }}
        slotProps={{
          transition: { timeout: 600 },
        }}
      >
        <Button>Desvanecer</Button>
      </Tooltip>
      <Tooltip
        title="Añadir"
        slots={{
          transition: Zoom,
        }}
      >
        <Button>Zoom</Button>
      </Tooltip>
    </div>
  );
}
