import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import IconButton from '@u_ui/u-ui/IconButton';
import Badge, { badgeClasses } from '@u_ui/u-ui/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function IconButtonWithBadge() {
  return (
    <IconButton>
      <ShoppingCartIcon fontSize="small" />
      <CartBadge badgeContent={2} color="primary" overlap="circular" />
    </IconButton>
  );
}
