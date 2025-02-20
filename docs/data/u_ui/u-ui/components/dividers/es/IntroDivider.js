import * as React from 'react';
import Card from '@u_ui/u-ui/Card';
import Box from '@u_ui/u-ui/Box';
import Chip from '@u_ui/u-ui/Chip';
import Stack from '@u_ui/u-ui/Stack';
import Divider from '@u_ui/u-ui/Divider';
import Typography from '@u_ui/u-ui/Typography';

export default function IntroDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Cepillo de dientes
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            $4.50
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          La blusa de algodón azul aciano a rayas te lleva de paseo al parque o
          por el pasillo.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Seleccionar tipo
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Suave" size="small" />
          <Chip label="Medio" size="small" />
          <Chip label="Duro" size="small" />
        </Stack>
      </Box>
    </Card>
  );
}
