import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Paper from '@u_ui/u-ui/Paper';
import Fade from '@u_ui/u-ui/Fade';
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

export default function SimpleFade() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <Button variant="contained" onClick={handleChange}>
        {checked ? 'Ocultar' : 'Mostrar'}
      </Button>
      <Box sx={{ display: 'flex' }}>
        <Fade in={checked}>{icon}</Fade>
      </Box>
    </Box>
  );
}
