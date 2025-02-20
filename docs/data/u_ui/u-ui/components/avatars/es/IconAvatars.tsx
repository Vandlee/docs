import * as React from 'react';
import { green, pink } from '@u_ui/u-ui/colors';
import Avatar from '@u_ui/u-ui/Avatar';
import Stack from '@u_ui/u-ui/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function IconAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: pink[500] }}>
        <PageviewIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }}>
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}
