import * as React from 'react';
import Badge from '@u-shii/u-ui/Badge';
import Stack from '@u-shii/u-ui/Stack';
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
      <Badge badgeContent={4} color="contrast">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="neutral">
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
}
