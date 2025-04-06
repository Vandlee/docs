import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import Container from '@u_ui/u-ui/Container';

const StyledAppContainer = styled(Container)(({ theme }) => {
  return {
    // We're mostly hosting text content so max-width by px does not make sense considering font-size is system-adjustable.
    // 105ch ≈ 930px
    fontFamily: 'Arial',
    maxWidth: '105ch',
    padding: '0 !important',
    '> .content-container': {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      '> .content-container': {
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
      },
    },
  };
});

export default function AppContainer(props) {
  return <StyledAppContainer id="main-content" maxWidth={false} {...props} />;
}
