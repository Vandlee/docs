import * as React from 'react';
import Stack from '@yushii/u-ui/Stack';
import Badge from '@yushii/u-ui/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function ShowZeroBadge() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={0}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero>
        <MailIcon />
      </Badge>
    </Stack>
  );
}
