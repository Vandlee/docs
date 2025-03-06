import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Snackbar from '@u_ui/u-ui/Snackbar';
import Fade from '@u_ui/u-ui/Fade';
import Slide, { SlideProps } from '@u_ui/u-ui/Slide';
import Grow, { GrowProps } from '@u_ui/u-ui/Grow';
import { TransitionProps } from '@u_ui/u-ui/transitions';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

export default function TransitionsSnackbar() {
  const [state, setState] = React.useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >,
    ) =>
    () => {
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
