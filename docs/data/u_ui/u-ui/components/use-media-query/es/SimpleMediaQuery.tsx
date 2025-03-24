import * as React from 'react';
import useMediaQuery from '@u_ui/u-ui/useMediaQuery';

export default function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}
