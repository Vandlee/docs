import * as React from 'react';
import List from '@u_ui/u-ui/List';
import ListItem from '@u_ui/u-ui/ListItem';
import ListItemText from '@u_ui/u-ui/ListItemText';
import Divider from '@u_ui/u-ui/Divider';

const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function DividerVariants() {
  return (
    <List sx={style}>
      <ListItem>
        <ListItemText primary="Variante de ancho completo" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Variante encajada abajo" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText primary="Variante central abajo" />
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem>
        <ListItemText primary="Elemento de la lista" />
      </ListItem>
    </List>
  );
}
