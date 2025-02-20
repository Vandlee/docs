import * as React from 'react';
import Avatar from '@u_ui/u-ui/Avatar';
import Stack from '@u_ui/u-ui/Stack';

export default function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="elcheryu-u"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      />
      <Avatar alt="elcheryu-u" src="/static/images/avatar/1.jpg" />
      <Avatar
        alt="elcheryu-u"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
}
