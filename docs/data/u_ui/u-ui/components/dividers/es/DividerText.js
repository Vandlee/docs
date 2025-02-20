import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import Divider from '@u_ui/u-ui/Divider';
import Chip from '@u_ui/u-ui/Chip';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {
  const content = (
    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
  );

  return (
    <Root>
      {content}
      <Divider>CENTRO</Divider>
      {content}
      <Divider textAlign="left">IZQUIERDA</Divider>
      {content}
      <Divider textAlign="right">DERECHA</Divider>
      {content}
      <Divider>
        <Chip label="Chip" size="small" />
      </Divider>
      {content}
    </Root>
  );
}
