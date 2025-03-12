import * as React from 'react';
import Avatar from '@u_ui/u-ui/Avatar';
import AvatarGroup from '@u_ui/u-ui/AvatarGroup';
import Stack from '@u_ui/u-ui/Stack';

export default function Spacing() {
  return (
    <Stack spacing={4}>
      <AvatarGroup spacing="medium">
        <Avatar alt="elcheryu-u" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="ColpCode" src="/static/images/avatar/3.jpg" />
      </AvatarGroup>
      <AvatarGroup spacing="small">
        <Avatar alt="elcheryu-u" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="ColpCode" src="/static/images/avatar/3.jpg" />
      </AvatarGroup>
      <AvatarGroup spacing={24}>
        <Avatar alt="elcheryu-u" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="ColpCode" src="/static/images/avatar/3.jpg" />
      </AvatarGroup>
    </Stack>
  );
}
