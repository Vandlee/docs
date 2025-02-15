import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Rating from '@u_ui/u-ui/Rating';
import StarIcon from '@mui/icons-material/Star';

const etiquetas: { [index: string]: string } = {
  0.5: 'Inútil',
  1: 'Inútil+',
  1.5: 'Pobre',
  2: 'Pobre+',
  2.5: 'Bien',
  3: 'Aceptable+',
  3.5: 'Bueno',
  4: 'Bueno+',
  4.5: 'Excelente',
  5: 'Excelente+',
};

export default function TextRating() {
  const value = 3.5;

  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="texto-de-respuesta"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{etiquetas[value]}</Box>
    </Box>
  );
}
