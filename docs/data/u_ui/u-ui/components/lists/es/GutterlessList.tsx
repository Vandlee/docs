import * as React from 'react';
import List from '@u_ui/u-ui/List';
import ListItem from '@u_ui/u-ui/ListItem';
import ListItemText from '@u_ui/u-ui/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@u_ui/u-ui/IconButton';

export default function GutterlessList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[1, 2, 3].map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
      ))}
    </List>
  );
}
