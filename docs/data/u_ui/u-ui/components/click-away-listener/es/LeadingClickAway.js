import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Button from '@u_ui/u-ui/Button';
import ClickAwayListener from '@u_ui/u-ui/ClickAwayListener';

export default function LeadingClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Box sx={{ position: 'relative' }}>
        <Button type="button" onClick={handleClick}>
          Open menu dropdown
        </Button>
        {open ? (
          <Box sx={styles}>
            Haz clic en mí, permaneceré visible hasta que hagas clic fuera.
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
