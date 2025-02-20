import * as React from 'react';
import Avatar from '@u_ui/u-ui/Avatar';
import Stack from '@u_ui/u-ui/Stack';
import { deepOrange, green } from '@u_ui/u-ui/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
        N
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}
