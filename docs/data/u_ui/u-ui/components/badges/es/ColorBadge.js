import * as React from 'react';
import Badge from '@u_ui/u-ui/Badge';
import Stack from '@u_ui/u-ui/Stack';
import MailIcon from '@mui/icons-material/Mail';

export default function ColorBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
}
