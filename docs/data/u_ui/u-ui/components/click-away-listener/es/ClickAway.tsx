import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Button from '@u_ui/u-ui/Button';
import ClickAwayListener from '@u_ui/u-ui/ClickAwayListener';
import { SxProps } from '@u_ui/system'

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
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
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <Button type="button" onClick={handleClick}>
          Abrir menú desplegable
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
