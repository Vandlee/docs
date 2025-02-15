import * as React from 'react';
import Stack from '@u_ui/u-ui/Stack';
import Badge from '@u_ui/u-ui/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function BadgeMax() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MailIcon />
      </Badge>
    </Stack>
  );
}
