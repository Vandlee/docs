import * as React from 'react';
import json2mq from 'json2mq';
import useMediaQuery from '@u_ui/u-ui/useMediaQuery';

export default function JavaScriptMedia() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    }),
  );

  return <span>{`{ minWidth: 600 } matches: ${matches}`}</span>;
}
