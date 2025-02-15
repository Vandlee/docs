import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Badge from '@u_ui/u-ui/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function DotBadge() {
  return (
    <Box sx={{ color: 'action.active' }}>
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
    </Box>
  );
}
