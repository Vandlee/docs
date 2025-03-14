import * as React from 'react';
import Paper from '@u_ui/u-ui/Paper';
import Stack from '@u_ui/u-ui/Stack';
import { styled } from '@u_ui/u-ui/styles';

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

export default function ResponsiveStack() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>Elemento 1</Item>
        <Item>Elemento 2</Item>
        <Item>Elemento 3</Item>
      </Stack>
    </div>
  );
}
