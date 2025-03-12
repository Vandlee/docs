import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import Box from '@u_ui/u-ui/Box';
import Paper from '@u_ui/u-ui/Paper';
import Grid from '@u_ui/u-ui/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function NestedGridColumns() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={24}>
        <Grid size={8}>
          <Item>size=8/24</Item>
        </Grid>
        <Grid container size={16}>
          <Grid size={12}>
            <Item>nested size=12/24</Item>
          </Grid>
          <Grid size={12}>
            <Item>nested size=12/24</Item>
          </Grid>
        </Grid>
        <Grid size={8}>
          <Item>size=8/24</Item>
        </Grid>
        <Grid container columns={12} size={16}>
          <Grid size={6}>
            <Item>nested size=6/12</Item>
          </Grid>
          <Grid size={6}>
            <Item>nested size=6/12</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
