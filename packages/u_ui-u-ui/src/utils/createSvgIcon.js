'use client';
import * as React from 'react';
import SvgIcon from '../SvgIcon';

/**
 * Private module reserved for @u_ui | @vandlee packages.
 */
export default function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (
      <SvgIcon data-testid={`${displayName}Icon`} ref={ref} {...props}>
        {path}
      </SvgIcon>
    );
  }

  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  Component.uiName = SvgIcon.uiName;

  return React.memo(React.forwardRef(Component));
}
