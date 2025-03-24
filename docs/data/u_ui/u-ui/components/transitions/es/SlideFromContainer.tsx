import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Paper from '@u_ui/u-ui/Paper';
import Slide from '@u_ui/u-ui/Slide';
import Button from '@u_ui/u-ui/Button';

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={(theme) => ({
          fill: theme.palette.common.white,
          stroke: theme.palette.divider,
          strokeWidth: 1,
        })}
      />
    </svg>
  </Paper>
);

export default function SlideFromContainer() {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef<HTMLElement>(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: 240,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.default',
      }}
    >
      <Box sx={{ p: 2, height: 200, overflow: 'hidden' }} ref={containerRef}>
        <Button variant="contained" onClick={handleChange}>
          {checked ? 'Ocultar' : 'Mostrar'}
        </Button>
        <Slide in={checked} container={containerRef.current}>
          {icon}
        </Slide>
      </Box>
    </Box>
  );
}
