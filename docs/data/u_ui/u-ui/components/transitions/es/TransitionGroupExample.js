import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Collapse from '@u_ui/u-ui/Collapse';
import IconButton from '@u_ui/u-ui/IconButton';
import List from '@u_ui/u-ui/List';
import ListItem from '@u_ui/u-ui/ListItem';
import ListItemText from '@u_ui/u-ui/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';

const FRUITS = [
  '🍏 Manzana',
  '🍌 Banana',
  '🍍 Piña',
  '🥥 Coco',
  '🍉 Sandía',
];

function renderItem({ item, handleRemoveFruit }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  );
}

export default function TransitionGroupExample() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveFruit = (item) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };

  const addFruitButton = (
    <Button
      variant="contained"
      disabled={fruitsInBasket.length >= FRUITS.length}
      onClick={handleAddFruit}
    >
      Añadir fruta a la cesta
    </Button>
  );

  return (
    <div>
      {addFruitButton}
      <List sx={{ mt: 1 }}>
        <TransitionGroup>
          {fruitsInBasket.map((item) => (
            <Collapse key={item}>{renderItem({ item, handleRemoveFruit })}</Collapse>
          ))}
        </TransitionGroup>
      </List>
    </div>
  );
}
