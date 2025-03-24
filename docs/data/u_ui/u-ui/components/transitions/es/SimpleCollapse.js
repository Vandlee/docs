import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Paper from '@u_ui/u-ui/Paper';
import Collapse from '@u_ui/u-ui/Collapse';
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

export default function SimpleCollapse() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 300 }}>
      <Button variant="contained" onClick={handleChange}>
        {checked ? 'Ocultar' : 'Mostrar'}
      </Button>
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            justifyContent: 'space-around',
            height: 120,
            width: 250,
          },
        }}
      >
        <div>
          <Collapse in={checked}>{icon}</Collapse>
          <Collapse in={checked} collapsedSize={40}>
            {icon}
          </Collapse>
        </div>
        <div>
          <Box sx={{ width: '50%' }}>
            <Collapse orientation="horizontal" in={checked}>
              {icon}
            </Collapse>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
              {icon}
            </Collapse>
          </Box>
        </div>
      </Box>
    </Box>
  );
}
