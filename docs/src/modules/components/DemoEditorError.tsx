import * as React from 'react';
import Alert, { AlertProps } from '@yushii/ui/Alert';

export default function DemoEditorError(props: AlertProps) {
  if (!props.children) {
    return null;
  }

  return (
    <Alert
      aria-live="polite"
      variant="filled"
      severity="error"
      sx={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        py: '2px',
        px: '6px',
        '& .YushiiAlert-icon': {
          fontSize: 14,
          mr: 0.5,
          mt: 0.25,
          py: 0,
        },
        '& .YushiiAlert-message': {
          fontSize: 12,
          py: 0,
        },
      }}
      {...props}
    />
  );
}
