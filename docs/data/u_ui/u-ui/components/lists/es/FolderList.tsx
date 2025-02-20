import * as React from 'react';
import List from '@u_ui/u-ui/List';
import ListItem from '@u_ui/u-ui/ListItem';
import ListItemText from '@u_ui/u-ui/ListItemText';
import ListItemAvatar from '@u_ui/u-ui/ListItemAvatar';
import Avatar from '@u_ui/u-ui/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fotos" secondary="Enero 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Trabajo" secondary="Enero 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacaciones" secondary="Julio 20, 2014" />
      </ListItem>
    </List>
  );
}
