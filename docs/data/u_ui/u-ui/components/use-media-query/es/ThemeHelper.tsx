import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@u_ui/u-ui/styles';
import useMediaQuery from '@u_ui/u-ui/useMediaQuery';

function MiComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
}

const theme = createTheme();

export default function ThemeHelper() {
  return (
    <ThemeProvider theme={theme}>
      <MiComponent />
    </ThemeProvider>
  );
}
