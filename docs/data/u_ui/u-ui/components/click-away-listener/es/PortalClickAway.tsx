import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Button from '@u_ui/u-ui/Button';
import ClickAwayListener from '@u_ui/u-ui/ClickAwayListener';
import Portal from '@u_ui/u-ui/Portal';
import { SxProps } from '@u_ui/system';

export default function PortalClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    position: 'fixed',
    width: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Button type="button" onClick={handleClick}>
          Abrir menú desplegable
        </Button>
        {open ? (
          <Portal>
            <Box sx={styles}>
            Haz clic en mí, permaneceré visible hasta que hagas clic fuera.
            </Box>
          </Portal>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
