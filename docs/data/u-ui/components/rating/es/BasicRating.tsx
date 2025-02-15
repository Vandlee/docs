import * as React from 'react';
import Box from '@u-shii/u-ui/Box';
import Rating from '@u-shii/u-ui/Rating';
import Typography from '@u-shii/u-ui/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">Controlado</Typography>
      <Rating
        name="simple-controlado"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">No controlado</Typography>
      <Rating
        name="simple-no-controlado"
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
        defaultValue={2}
      />
      <Typography component="legend">Sólo lectura</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Desactivado</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">Sin valoración</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}
