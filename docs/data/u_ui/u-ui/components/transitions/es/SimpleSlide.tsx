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

export default function SimpleSlide() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180, width: 130, position: 'relative', zIndex: 1 }}>
      <Button variant="contained" onClick={handleChange}>
        {checked ? 'Ocultar' : 'Mostrar'}
      </Button>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        {icon}
      </Slide>
    </Box>
  );
}
