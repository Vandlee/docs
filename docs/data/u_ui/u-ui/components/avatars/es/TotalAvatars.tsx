import * as React from 'react';
import Avatar from '@u_ui/u-ui/Avatar';
import AvatarGroup from '@u_ui/u-ui/AvatarGroup';

export default function TotalAvatars() {
  return (
    <AvatarGroup total={24}>
      <Avatar alt="elcheryu-u" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
  );
}
