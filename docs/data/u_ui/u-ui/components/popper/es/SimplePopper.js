import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Popper from '@u_ui/u-ui/Popper';
import Button from '@u_ui/u-ui/Button';

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        Alternar Popper
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          El contenido del Popper.
        </Box>
      </Popper>
    </div>
  );
}
