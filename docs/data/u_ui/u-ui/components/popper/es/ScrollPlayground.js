import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import Grid from '@u_ui/u-ui/Grid';
import Typography from '@u_ui/u-ui/Typography';
import Box from '@u_ui/u-ui/Box';
import Button from '@u_ui/u-ui/Button';
import uiPopper from '@u_ui/u-ui/Popper';
import Paper from '@u_ui/u-ui/Paper';
import { HighlightedCode } from '@vandlee/docs/HighlightedCode';

const Popper = styled(uiPopper, {
  shouldForwardProp: (prop) => prop !== 'arrow',
})(({ theme }) => ({
  zIndex: 1,
  '& > div': {
    position: 'relative',
  },
  '&[data-popper-placement*="bottom"]': {
    '& .uiPopper-arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
      },
    },
  },
  '&[data-popper-placement*="top"]': {
    '& .uiPopper-arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
      },
    },
  },
  '&[data-popper-placement*="right"]': {
    '& .uiPopper-arrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
      },
    },
  },
  '&[data-popper-placement*="left"]': {
    '& .uiPopper-arrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
      },
    },
  },
  variants: [
    {
      props: ({ arrow }) => arrow,
      style: {
        '&[data-popper-placement*="bottom"]': {
          '& > div': {
            marginTop: 2,
          },
        },
      },
    },
    {
      props: ({ arrow }) => !arrow,
      style: {
        '&[data-popper-placement*="bottom"]': {
          '& > div': {
            marginTop: 0,
          },
        },
      },
    },
    {
      props: ({ arrow }) => arrow,
      style: {
        '&[data-popper-placement*="top"]': {
          '& > div': {
            marginBottom: 2,
          },
        },
      },
    },
    {
      props: ({ arrow }) => !arrow,
      style: {
        '&[data-popper-placement*="top"]': {
          '& > div': {
            marginBottom: 0,
          },
        },
      },
    },
    {
      props: ({ arrow }) => arrow,
      style: {
        '&[data-popper-placement*="right"]': {
          '& > div': {
            marginLeft: 2,
          },
        },
      },
    },
    {
      props: ({ arrow }) => !arrow,
      style: {
        '&[data-popper-placement*="right"]': {
          '& > div': {
            marginLeft: 0,
          },
        },
      },
    },
    {
      props: ({ arrow }) => arrow,
      style: {
        '&[data-popper-placement*="left"]': {
          '& > div': {
            marginRight: 2,
          },
        },
      },
    },
    {
      props: ({ arrow }) => !arrow,
      style: {
        '&[data-popper-placement*="left"]': {
          '& > div': {
            marginRight: 0,
          },
        },
      },
    },
  ],
}));

const Arrow = styled('div')({
  position: 'absolute',
  fontSize: 7,
  width: '3em',
  height: '3em',
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    borderStyle: 'solid',
  },
});

export default function ScrollPlayground() {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const [placement, setPlacement] = React.useState('bottom');
  const [disablePortal, setDisablePortal] = React.useState(false);

  const [flip, setFlip] = React.useState({
    enabled: true,
    altBoundary: true,
    rootBoundary: 'document',
  });
  const [preventOverflow, setPreventOverflow] = React.useState({
    enabled: true,
    altAxis: true,
    altBoundary: true,
    tether: true,
    rootBoundary: 'document',
  });

  const [arrow, setArrow] = React.useState(false);
  const [arrowRef, setArrowRef] = React.useState(null);

  const handleClickButton = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const centerScroll = (element) => {
    if (!element) {
      return;
    }

    const container = element.parentElement;
    container.scrollTop = element.clientHeight / 4;
    container.scrollLeft = element.clientWidth / 4;
  };

  const jsx = `
<Popper
  placement="${placement}"
  disablePortal={${disablePortal}}
  modifiers={[
    {
      name: 'flip',
      enabled: ${flip.enabled},
      options: {
        altBoundary: ${flip.altBoundary},
        rootBoundary: '${flip.rootBoundary}',
        padding: 8,
      },
    },
    {
      name: 'preventOverflow',
      enabled: ${preventOverflow.enabled},
      options: {
        altAxis: ${preventOverflow.altAxis},
        altBoundary: ${preventOverflow.altBoundary},
        tether: ${preventOverflow.tether},
        rootBoundary: '${preventOverflow.rootBoundary}',
        padding: 8,
      },
    },
    {
      name: 'arrow',
      enabled: ${arrow},
      options: {
        element: arrowRef,
      },
    },
  ]}
>
  `;
  const id = open ? 'scroll-playground' : null;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ height: 400, overflow: 'auto', mb: 3 }}>
        <Grid
          container
          ref={centerScroll}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '230%',
            bgcolor: 'background.paper',
            height: '230%',
          }}
        >
          <div>
            <Button
              ref={anchorRef}
              variant="contained"
              onClick={handleClickButton}
              aria-describedby={id}
            >
              Alternar Popper
            </Button>
            <Typography sx={{ mt: 2, maxWidth: 300 }}>
              Desplácese por este contenedor para experimentar con los modificadores flip y
              preventOverflow.
            </Typography>
            <Popper
              id={id}
              open={open}
              arrow={arrow}
              anchorEl={anchorRef.current}
              placement={placement}
              disablePortal={disablePortal}
              modifiers={[
                {
                  name: 'flip',
                  enabled: flip.enabled,
                  options: {
                    altBoundary: flip.altBoundary,
                    rootBoundary: flip.rootBoundary,
                    padding: 8,
                  },
                },
                {
                  name: 'preventOverflow',
                  enabled: preventOverflow.enabled,
                  options: {
                    altAxis: preventOverflow.altAxis,
                    altBoundary: preventOverflow.altBoundary,
                    tether: preventOverflow.tether,
                    rootBoundary: preventOverflow.rootBoundary,
                    padding: 8,
                  },
                },
                {
                  name: 'arrow',
                  enabled: arrow,
                  options: {
                    element: arrowRef,
                  },
                },
              ]}
            >
              <div>
                {arrow ? (
                  <Arrow ref={setArrowRef} className="uiPopper-arrow" />
                ) : null}
                <Paper sx={{ maxWidth: 400, overflow: 'auto', p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant='h5'>{"Use Google's location service?"}</Typography>
                  <div>
                    Deja que Google ayude a las aplicaciones a determinar su ubicación.
                  </div>
                  <div>
                    <Button onClick={handleClickButton}>En desacuerdo</Button>
                    <Button onClick={handleClickButton}>De acuerdo</Button>
                  </div>
                </Paper>
              </div>
            </Popper>
          </div>
        </Grid>
      </Box>
      <HighlightedCode code={jsx} language="jsx" />
    </Box>
  );
}
