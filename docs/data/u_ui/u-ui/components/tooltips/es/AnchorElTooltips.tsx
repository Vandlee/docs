import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Tooltip from '@u_ui/u-ui/Tooltip';
import { Instance } from '@popperjs/core';

export default function AnchorElTooltips() {
  const positionRef = React.useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef<Instance>(null);
  const areaRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
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
                areaRef.current!.getBoundingClientRect().y,
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
