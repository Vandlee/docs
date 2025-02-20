import * as React from 'react';
import List from '@u_ui/u-ui/List';
import ListItem from '@u_ui/u-ui/ListItem';
import ListItemText from '@u_ui/u-ui/ListItemText';
import Divider from '@u_ui/u-ui/Divider';

const style = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function ListDividers() {
  return (
    <List sx={style} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary="Bandeja de entrada" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Borradores" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Papelera" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
