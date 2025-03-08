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

export default function Variants() {
  return (
    <Stack direction="row" spacing={2}>
    <DemoPaper variant="elevation">Variante por defecto</DemoPaper>
    <DemoPaper variant="outlined">Variante delineada</DemoPaper>
    </Stack>
  );
}
