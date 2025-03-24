import * as React from 'react';
import { ThemeProvider, useTheme, createTheme } from '@u_ui/u-ui/styles';
import useMediaQuery from '@u_ui/u-ui/useMediaQuery';

/**
 * Ten cuidado al usar este gancho. Sólo funciona porque el número de
 * puntos de interrupción en el tema es estático. Se romperá una vez que cambie el número de
 * puntos de interrupción. Ver https://legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // TODO: descomentar una vez que habilitemos eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- useMediaQuery se llama dentro de la devolución de llamada
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

function MyComponent() {
  const width = useWidth();
  return <span>{`width: ${width}`}</span>;
}

const theme = createTheme();

export default function UseWidth() {
  return (
    <ThemeProvider theme={theme}>
      <MyComponent />
    </ThemeProvider>
  );
}
