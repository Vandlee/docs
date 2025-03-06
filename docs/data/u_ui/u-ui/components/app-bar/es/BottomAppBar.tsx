import * as React from 'react';
import AppBar from '@u_ui/u-ui/AppBar';
import Box from '@u_ui/u-ui/Box';
import CssBaseline from '@u_ui/u-ui/CssBaseline';
import Toolbar from '@u_ui/u-ui/Toolbar';
import Typography from '@u_ui/u-ui/Typography';
import IconButton from '@u_ui/u-ui/IconButton';
import Paper from '@u_ui/u-ui/Paper';
import List from '@u_ui/u-ui/List';
import ListItemButton from '@u_ui/u-ui/ListItemButton';
import ListItemAvatar from '@u_ui/u-ui/ListItemAvatar';
import ListItemText from '@u_ui/u-ui/ListItemText';
import ListSubheader from '@u_ui/u-ui/ListSubheader';
import Avatar from '@u_ui/u-ui/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const messages = [
  {
    id: 1,
    primary: '¿Brunch esta semana?',
    secondary: 'Estaré en el vecindario esta semana. Vamos a comer algo.',
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Regalo de cumpleaños',
    secondary: `¿Tienes alguna sugerencia para un buen regalo para John en su 
      aniversario de trabajo? Estoy realmente confundido y me encantaría conocer tu opinión.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'Receta para probar',
    secondary: 'Estoy probando una nueva receta de BBQ, creo que podría ser increíble.',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: '¡Sí!',
    secondary: 'Tengo las entradas para la ReactConf de este año.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: 'Cita con el doctor',
    secondary: 'Mi cita con el doctor fue reprogramada para el próximo sábado.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Discusión',
    secondary: `Los menús que son generados por la barra de la parte inferior de la aplicación 
      (como un cajón de navegación inferior o un menú de desbordamiento) se abren como hojas 
      inferiores a una elevación más alta que la barra.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'BBQ de verano',
    secondary: `¿Quién quiere hacer una parrillada este fin de semana? Acabo de comprar 
      algunos muebles para mi patio trasero y me encantaría encender la parrilla.`,
    person: '/static/images/avatar/1.jpg',
  },
];

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Bamdeja de entrada
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Hoy
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Ayer
                </ListSubheader>
              )}
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
