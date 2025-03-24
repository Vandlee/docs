import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Popper, { PopperPlacementType } from '@u_ui/u-ui/Popper';
import Typography from '@u_ui/u-ui/Typography';
import Grid from '@u_ui/u-ui/Grid';
import Button from '@u_ui/u-ui/Button';
import Fade from '@u_ui/u-ui/Fade';
import Paper from '@u_ui/u-ui/Paper';

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  return (
    <Box sx={{ width: 500 }}>
      <Popper
        // Nota: El siguiente estilo zIndex es específicamente para fines de documentación y puede no ser necesario en su aplicación.
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>El contenido del Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Button onClick={handleClick('top-start')}>top-start</Button>
          <Button onClick={handleClick('top')}>top</Button>
          <Button onClick={handleClick('top-end')}>top-end</Button>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={{ xs: 6 }}>
          <Button onClick={handleClick('left-start')}>left-start</Button>
          <br />
          <Button onClick={handleClick('left')}>left</Button>
          <br />
          <Button onClick={handleClick('left-end')}>left-end</Button>
        </Grid>
        <Grid
          container
          size={{ xs: 6 }}
          direction="column"
          sx={{ alignItems: 'flex-end' }}
        >
          <Grid>
            <Button onClick={handleClick('right-start')}>right-start</Button>
          </Grid>
          <Grid>
            <Button onClick={handleClick('right')}>right</Button>
          </Grid>
          <Grid>
            <Button onClick={handleClick('right-end')}>right-end</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Button onClick={handleClick('bottom-start')}>bottom-start</Button>
          <Button onClick={handleClick('bottom')}>bottom</Button>
          <Button onClick={handleClick('bottom-end')}>bottom-end</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
