import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import Card from '@u_ui/u-ui/Card';
import CardHeader from '@u_ui/u-ui/CardHeader';
import CardMedia from '@u_ui/u-ui/CardMedia';
import CardContent from '@u_ui/u-ui/CardContent';
import CardActions from '@u_ui/u-ui/CardActions';
import Collapse from '@u_ui/u-ui/Collapse';
import Avatar from '@u_ui/u-ui/Avatar';
import IconButton from '@u_ui/u-ui/IconButton';
import Typography from '@u_ui/u-ui/Typography';
import { red } from '@u_ui/u-ui/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Paella de gambas y chorizo"
        subheader="Septiembre 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Plato de Paella"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Esta impresionante paella es un plato de fiesta perfecto y una comida divertida para cocinar
          con tus invitados. Añada 1 taza de guisantes congelados junto con los mejillones
          si lo desea.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="añadir a favoritos">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="compartir">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="mostrar más"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Método:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Caliente 1/2 taza de caldo en una olla hasta que hierva a fuego lento, añada el azafrán y déjelo reposar durante 10 minutos.
            10 minutos.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Caliente el aceite en una paellera (de 14 a 16 pulgadas) o en una sartén grande y honda a fuego medio-alto.
            fuego medio-alto. Añada el pollo, las gambas y el chorizo, y cocine, removiendo
            de vez en cuando hasta que se doren ligeramente, de 6 a 8 minutos. Ponga las gambas en un
            plato grande y reserve, dejando el pollo y el chorizo en la sartén. Añada
            el pimentón, las hojas de laurel, el ajo, los tomates, la cebolla, la sal y la pimienta, y cocine
            revolviendo a menudo hasta que espese y desprenda aroma, unos 10 minutos. Añada
            el caldo de azafrán y las 4 1/2 tazas de caldo de pollo restantes; llevar a ebullición.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Añadir el arroz y remover muy suavemente para distribuirlo. Añada las alcachofas y los pimientos
            pimientos, y cocine sin remover, hasta que se absorba la mayor parte del líquido,
            de 15 a 18 minutos. Reduzca el fuego a medio-bajo, añada las gambas y los mejillones
            mejillones reservados, metiéndolos en el arroz, y cocine de nuevo sin remover, hasta que los mejillones se hayan absorbido, de 15 a 18 minutos.
            hasta que los mejillones se abran y el arroz esté tierno, de 5 a 7 minutos más.
            minutos más. (Deseche los mejillones que no se abran).
          </Typography>
          <Typography>
            Apartar del fuego, dejar reposar 10 minutos y servir.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
