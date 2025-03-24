import * as React from 'react';
import mediaQuery from 'css-mediaquery';
import { ThemeProvider } from '@u_ui/u-ui/styles';
import useMediaQuery from '@u_ui/u-ui/useMediaQuery';

function MiComponent() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}

export default function ServerSide() {
  const ssrMatchMedia = (query) => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: 800,
    }),
  });

  return (
    <ThemeProvider
      theme={{
        components: {
          uiUseMediaQuery: {
            // Change the default options of useMediaQuery
            defaultProps: { ssrMatchMedia },
          },
        },
      }}
    >
      <MiComponent />
    </ThemeProvider>
  );
}
