import * as React from 'react';
import List from '@u_ui/u-ui/List';
import ListItem from '@u_ui/u-ui/ListItem';
import Divider from '@u_ui/u-ui/Divider';
import ListItemText from '@u_ui/u-ui/ListItemText';
import ListItemAvatar from '@u_ui/u-ui/ListItemAvatar';
import Avatar from '@u_ui/u-ui/Avatar';
import Typography from '@u_ui/u-ui/Typography';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="elcheryu-u" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="No se alinea en la parte superior"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — Estaré en tu vecindario haciendo recados este fin de semana para..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Se alinea en la parte superior"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                para Scott, Alex, Jennifer
              </Typography>
              {" — Ojalá pudiera ir, pero estaré fuera de la ciudad está semana y..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — ¿Tiene recomendaciones sobre París? ¿Alguna vez ha...'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
