import * as React from 'react';
import Avatar from '@u_ui/u-ui/Avatar';
import Stack from '@u_ui/u-ui/Stack';
import { deepOrange, deepPurple } from '@u_ui/u-ui/colors';

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Stack>
  );
}
