import * as React from 'react';
import Box from '@u-shii/u-ui/Box';
import Button from '@u-shii/u-ui/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">Pequeño</Button>
        <Button size="medium">Mediano</Button>
        <Button size="large">Grande</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Pequeño
        </Button>
        <Button variant="outlined" size="medium">
          Mediana
        </Button>
        <Button variant="outlined" size="large">
          Grande
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Pequeño
        </Button>
        <Button variant="contained" size="medium">
          Mediana
        </Button>
        <Button variant="contained" size="large">
          Grande
        </Button>
      </div>
    </Box>
  );
}
