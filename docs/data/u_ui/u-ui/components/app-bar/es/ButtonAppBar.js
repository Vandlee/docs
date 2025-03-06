import * as React from 'react';
import AppBar from '@u_ui/u-ui/AppBar';
import Box from '@u_ui/u-ui/Box';
import Toolbar from '@u_ui/u-ui/Toolbar';
import Typography from '@u_ui/u-ui/Typography';
import Button from '@u_ui/u-ui/Button';
import IconButton from '@u_ui/u-ui/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Noticias
          </Typography>
          <Button color="inherit">Iniciar sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
