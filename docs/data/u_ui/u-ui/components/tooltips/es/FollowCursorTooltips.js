import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Tooltip from '@u_ui/u-ui/Tooltip';

export default function FollowCursorTooltips() {
  return (
    <Tooltip title="No tienes permiso para hacer esto" followCursor>
      <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>
        Acción deshabilitada
      </Box>
    </Tooltip>
  );
}
