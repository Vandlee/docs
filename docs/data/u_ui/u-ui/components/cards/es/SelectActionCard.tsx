import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Card from '@u_ui/u-ui/Card';
import CardContent from '@u_ui/u-ui/CardContent';
import Typography from '@u_ui/u-ui/Typography';
import CardActionArea from '@u_ui/u-ui/CardActionArea';

const cards = [
  {
    id: 1,
    title: 'Plantas',
    description: 'Las plantas son esenciales para la vida.',
  },
  {
    id: 2,
    title: 'Animales',
    description: 'Los animales forman parte de la naturaleza.',
  },
  {
    id: 3,
    title: 'Humanos',
    description: 'Los seres humanos dependen de las plantas y los animales para sobrevivir.',
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;
