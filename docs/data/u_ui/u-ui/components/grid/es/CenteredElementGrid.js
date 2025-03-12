import * as React from 'react';
import Avatar from '@u_ui/u-ui/Avatar';
import Box from '@u_ui/u-ui/Box';
import Grid from '@u_ui/u-ui/Grid';

export default function CenteredElementGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
        <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
          <Avatar src="/static/images/avatar/1.jpg" />
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Avatar src="/static/images/avatar/2.jpg" />
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
          <Avatar src="/static/images/avatar/3.jpg" />
        </Grid>
      </Grid>
    </Box>
  );
}
