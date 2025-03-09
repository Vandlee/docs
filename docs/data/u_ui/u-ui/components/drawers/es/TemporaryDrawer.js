import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Drawer from '@u_ui/u-ui/Drawer';
import Button from '@u_ui/u-ui/Button';
import List from '@u_ui/u-ui/List';
import Divider from '@u_ui/u-ui/Divider';
import ListItem from '@u_ui/u-ui/ListItem';
import ListItemButton from '@u_ui/u-ui/ListItemButton';
import ListItemIcon from '@u_ui/u-ui/ListItemIcon';
import ListItemText from '@u_ui/u-ui/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Bandeja de entrada', 'Destacado', 'Enviar email', 'Borradores'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Todos los correos', 'Papelera', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Abrir cajón</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
