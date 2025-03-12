import * as React from 'react';
import Paper from '@u_ui/u-ui/Paper';
import Divider from '@u_ui/u-ui/Divider';
import MenuList from '@u_ui/u-ui/MenuList';
import MenuItem from '@u_ui/u-ui/MenuItem';
import ListItemIcon from '@u_ui/u-ui/ListItemIcon';
import ListItemText from '@u_ui/u-ui/ListItemText';
import Check from '@mui/icons-material/Check';

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320, paddingX: 1 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Solo</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Doble</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Personalizado: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Añadir espacio antes del párrafo</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Añadir espacio después del párrafo</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Espaciado personalizado...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
