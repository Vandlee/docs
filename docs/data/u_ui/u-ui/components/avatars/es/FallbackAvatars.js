import * as React from 'react';
import Avatar from '@u_ui/u-ui/Avatar';
import Stack from '@u_ui/u-ui/Stack';
import { deepOrange } from '@u_ui/u-ui/colors';

export default function FallbackAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="elcheryu-u"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="elcheryu-u"
        src="/broken-image.jpg"
      />
      <Avatar src="/broken-image.jpg" />
    </Stack>
  );
}
