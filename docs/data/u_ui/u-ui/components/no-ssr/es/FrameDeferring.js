import * as React from 'react';
import NoSsr from '@u_ui/u-ui/NoSsr';
import Button from '@u_ui/u-ui/Button';
import Box from '@u_ui/u-ui/Box';

function LargeTree() {
  return Array.from(new Array(5000)).map((_, index) => <span key={index}>.</span>);
}

export default function FrameDeferring() {
  const [state, setState] = React.useState({
    open: false,
    defer: false,
  });

  return (
    <div>
      <Button
        type="button"
        fullWidth
        onClick={() =>
          setState({
            open: !state.open,
            defer: false,
          })
        }
      >
        {'Render NoSsr defer="false"'}
      </Button>
      <br />
      <Button
        type="button"
        fullWidth
        onClick={() =>
          setState({
            open: !state.open,
            defer: true,
          })
        }
      >
        {'Render NoSsr defer="true"'}
      </Button>
      <br />
      <br />
      <Box sx={{ width: 300, display: 'flex', flexWrap: 'wrap' }}>
        {state.open ? (
          <React.Fragment>
            <div>Fuera de NoSsr</div>
            <NoSsr defer={state.defer}>
              .....Dentro de NoSsr
              <LargeTree />
            </NoSsr>
          </React.Fragment>
        ) : null}
      </Box>
    </div>
  );
}
