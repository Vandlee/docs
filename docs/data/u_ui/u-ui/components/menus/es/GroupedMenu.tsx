import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import ListSubheader from '@u_ui/u-ui/ListSubheader';
import Menu from '@u_ui/u-ui/Menu';
import MenuItem from '@u_ui/u-ui/MenuItem';

export default function GroupedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'grouped-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="grouped-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <ListSubheader>Category 1</ListSubheader>
        <MenuItem onClick={handleClose}>Opción 1</MenuItem>
        <MenuItem onClick={handleClose}>Opción 2</MenuItem>
        <ListSubheader>Category 2</ListSubheader>
        <MenuItem onClick={handleClose}>Opción 3</MenuItem>
        <MenuItem onClick={handleClose}>Opción 4</MenuItem>
      </Menu>
    </div>
  );
}