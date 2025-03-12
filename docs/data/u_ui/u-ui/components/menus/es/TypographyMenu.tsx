import * as React from 'react';
import MenuList from '@u_ui/u-ui/MenuList';
import MenuItem from '@u_ui/u-ui/MenuItem';
import Paper from '@u_ui/u-ui/Paper';
import ListItemIcon from '@u_ui/u-ui/ListItemIcon';
import Typography from '@u_ui/u-ui/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function TypographyMenu() {
  return (
    <Paper sx={{ width: 230, px: 1 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Un breve mensaje</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Un texto muy largo que se desborda</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Un texto muy largo que se desborda
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
