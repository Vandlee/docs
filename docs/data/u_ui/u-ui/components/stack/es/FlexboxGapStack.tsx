import * as React from 'react';
import Paper from '@u_ui/u-ui/Paper';
import Stack from '@u_ui/u-ui/Stack';
import Box from '@u_ui/u-ui/Box';
import { styled } from '@u_ui/u-ui/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FlexboxGapStack() {
  return (
    <Box sx={{ width: 200 }}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: 'wrap' }}
      >
        <Item>Elemento 1</Item>
        <Item>Elemento 2</Item>
        <Item>Contenido largo</Item>
      </Stack>
    </Box>
  );
}
