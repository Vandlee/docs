import * as React from 'react';
import Divider from '@u_ui/u-ui/Divider';
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

export default function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>Elemento 1</Item>
        <Item>Elemento 2</Item>
        <Item>Elemento 3</Item>
      </Stack>
    </div>
  );
}
