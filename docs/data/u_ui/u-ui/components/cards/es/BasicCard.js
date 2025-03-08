import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Card from '@u_ui/u-ui/Card';
import CardActions from '@u_ui/u-ui/CardActions';
import CardContent from '@u_ui/u-ui/CardContent';
import Button from '@u_ui/u-ui/Button';
import Typography from '@u_ui/u-ui/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Palabra del día
        </Typography>
        <Typography variant="h5" component="div">
          au{bull}da{bull}z{bull}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjetivo</Typography>
        <Typography variant="body2">
          Que es valiente, atrevido o arriesgado.
          <br />
          {'"Con un plan audaz, logró el éxito que tanto deseaba"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Aprender más</Button>
      </CardActions>
    </Card>
  );
}
