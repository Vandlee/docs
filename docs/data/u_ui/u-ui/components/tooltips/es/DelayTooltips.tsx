import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Tooltip from '@u_ui/u-ui/Tooltip';

export default function DelayTooltips() {
  return (
    <Tooltip title="Añadir" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms]</Button>
    </Tooltip>
  );
}
