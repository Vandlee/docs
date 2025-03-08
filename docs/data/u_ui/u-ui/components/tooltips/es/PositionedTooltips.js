import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Grid from '@u_ui/u-ui/Grid';
import Button from '@u_ui/u-ui/Button';
import Tooltip from '@u_ui/u-ui/Tooltip';

export default function PositionedTooltips() {
  return (
    <Box sx={{ width: 500 }}>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Tooltip title="Añadir" placement="top-start">
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip title="Añadir" placement="top">
            <Button>top</Button>
          </Tooltip>
          <Tooltip title="Añadir" placement="top-end">
            <Button>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={{ xs: 6 }}>
          <Tooltip title="Añadir" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip title="Añadir" placement="left">
            <Button>left</Button>
          </Tooltip>
          <br />
          <Tooltip title="Añadir" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid
          container
          size={{ xs: 6 }}
          direction="column"
          sx={{ alignItems: 'flex-end' }}
        >
          <Grid>
            <Tooltip title="Añadir" placement="right-start">
              <Button>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Añadir" placement="right">
              <Button>right</Button>
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Añadir" placement="right-end">
              <Button>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Tooltip title="Añadir" placement="bottom-start">
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip title="Añadir" placement="bottom">
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip title="Añadir" placement="bottom-end">
            <Button>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
