import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Tooltip from '@u_ui/u-ui/Tooltip';

export default function AnchorElTooltips() {
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <Tooltip
      title="Añadir"
      placement="top"
      arrow
      slotProps={{
        popper: {
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                positionRef.current.x,
                areaRef.current.getBoundingClientRect().y,
                0,
                0,
              );
            },
          },
        },
      }}
    >
      <Box
        ref={areaRef}
        onMouseMove={handleMouseMove}
        sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}
      >
        Pasa el ratón por aquí
      </Box>
    </Tooltip>
  );
}
