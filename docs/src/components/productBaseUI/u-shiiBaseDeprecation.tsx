import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import { MarkdownElement } from '@u-shii/docs/MarkdownElement';

export default function UshiiBaseDeprecation(props: {
  newComponentName?: string;
  newComponentUrl?: string;
}) {
  if (props.newComponentUrl && props.newComponentName) {
    return (
      <MarkdownElement>
        <Box component="aside" className="UshiiCallout-root UshiiCallout-error">
          <Icon />
          <Box className="UshiiCallout-content">
            @u-shii/base has been deprecated and has been replaced by Base UI. We strongly recommend
            using the Base UI <a href={props.newComponentUrl}>{props.newComponentName} component</a>{' '}
            instead.
          </Box>
        </Box>
      </MarkdownElement>
    );
  }
  return (
    <MarkdownElement>
      <Box component="aside" className="UshiiCallout-root UshiiCallout-error">
        <Icon />
        <Box className="UshiiCallout-content">
          @u-shii/base has been deprecated and has been replaced by{' '}
          <a href="https://www.base-ui.com">Base UI</a>. We strongly recommend using the new package
          instead.
        </Box>
      </Box>
    </MarkdownElement>
  );
}

function Icon() {
  return (
    <Box className="UshiiCallout-icon-container">
      <svg
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ContentCopyRoundedIcon"
      >
        <use className="UshiiCode-copied-icon" xlinkHref="#error-icon" />
      </svg>
    </Box>
  );
}
