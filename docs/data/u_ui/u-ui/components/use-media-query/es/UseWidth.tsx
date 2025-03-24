import * as React from 'react';
import {
  Breakpoint,
  Theme,
  ThemeProvider,
  useTheme,
  createTheme,
} from '@u_ui/u-ui/styles';
import useMediaQuery from '@u_ui/u-ui/useMediaQuery';

type BreakpointOrNull = Breakpoint | null;

/**
 * Ten cuidado al usar este gancho. Sólo funciona porque el número de
 * puntos de interrupción en el tema es estático. Se romperá una vez que cambie el número de
 * puntos de interrupción. Ver https://legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
function useWidth() {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // TODO: descomentar una vez que habilitemos eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- useMediaQuery se llama dentro de la devolución de llamada
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

function MiComponent() {
  const width = useWidth();
  return <span>{`width: ${width}`}</span>;
}

const theme = createTheme();

export default function UseWidth() {
  return (
    <ThemeProvider theme={theme}>
      <MiComponent />
    </ThemeProvider>
  );
}
