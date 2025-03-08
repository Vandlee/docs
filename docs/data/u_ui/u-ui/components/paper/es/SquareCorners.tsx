import * as React from 'react';
import Stack from '@u_ui/u-ui/Stack';
import Paper from '@u_ui/u-ui/Paper';
import { styled } from '@u_ui/u-ui/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function SquareCorners() {
  return (
    <Stack direction="row" spacing={2}>
    <DemoPaper square={false}>Equinas redondeadas</DemoPaper>
    <DemoPaper square>Esquinas cuadradas</DemoPaper>
    </Stack>
  );
}
