import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function TypographyTheme() {
  return <Div>{"El texto de este div se parece al de un botón."}</Div>;
}
