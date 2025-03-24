import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Popper from '@u_ui/u-ui/Popper';
import Fade from '@u_ui/u-ui/Fade';
import Button from '@u_ui/u-ui/Button';

export default function TransitionsPopper() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        Alternar Popper
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              El contenido del Popper.
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
