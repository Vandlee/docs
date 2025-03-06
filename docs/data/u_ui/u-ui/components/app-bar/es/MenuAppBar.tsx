import * as React from 'react';
import AppBar from '@u_ui/u-ui/AppBar';
import Box from '@u_ui/u-ui/Box';
import Toolbar from '@u_ui/u-ui/Toolbar';
import Typography from '@u_ui/u-ui/Typography';
import IconButton from '@u_ui/u-ui/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@u_ui/u-ui/MenuItem';
import Menu from '@u_ui/u-ui/Menu';
import Button from '@u_ui/u-ui/Button';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = () => {
    setAuth((prev) => !prev);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            Fotos
          </Typography>
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
              >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                <MenuItem onClick={handleChange}>Cerrar sesión</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button color="inherit" onClick={handleChange}>Iniciar sesión</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
