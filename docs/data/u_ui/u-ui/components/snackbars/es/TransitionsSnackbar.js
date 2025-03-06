import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Snackbar from '@u_ui/u-ui/Snackbar';
import Fade from '@u_ui/u-ui/Fade';
import Slide from '@u_ui/u-ui/Slide';
import Grow from '@u_ui/u-ui/Grow';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

export default function TransitionsSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16}}>
      <Button onClick={handleClick(GrowTransition)}>Transición de crecimiento</Button>
      <Button onClick={handleClick(Fade)}>Transición de desvanecimienton</Button>
      <Button onClick={handleClick(SlideTransition)}>Transición de deslizamiento</Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="Me encantan los snacks"
        key={state.Transition.name}
        autoHideDuration={1200}
      />
    </div>
  );
}
