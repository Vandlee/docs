import * as React from 'react';
import Badge from '@u_ui/u-ui/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
