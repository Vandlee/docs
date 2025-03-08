import * as React from 'react';
import Card from '@u_ui/u-ui/Card';
import CardActions from '@u_ui/u-ui/CardActions';
import CardContent from '@u_ui/u-ui/CardContent';
import CardMedia from '@u_ui/u-ui/CardMedia';
import Button from '@u_ui/u-ui/Button';
import Typography from '@u_ui/u-ui/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lagarto
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Los lagartos son un extenso grupo de reptiles escamosos, con más de 6.000 especies.
          especies, repartidas por todos los continentes excepto la Antártida.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
