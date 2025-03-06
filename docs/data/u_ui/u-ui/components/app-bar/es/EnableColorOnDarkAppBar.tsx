import * as React from 'react';
import AppBar from '@u_ui/u-ui/AppBar';
import Stack from '@u_ui/u-ui/Stack';
import Toolbar from '@u_ui/u-ui/Toolbar';
import Typography from '@u_ui/u-ui/Typography';
import IconButton from '@u_ui/u-ui/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@u_ui/u-ui/styles';

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b39ddb',
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('activar color en modo oscuro')}
        </AppBar>
        <AppBar position="static" color="primary">
          {appBarLabel('por defecto')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
