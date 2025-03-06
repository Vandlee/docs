import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import Stack from '@u_ui/u-ui/Stack';
import SnackbarContent from '@u_ui/u-ui/SnackbarContent';

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

export default function LongTextSnackbar() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <SnackbarContent message="Me encantan los snacks." action={action} />
      <SnackbarContent
        message={
          'Me encantan los dulces. Me encantan las galletas. Me encantan las magdalenas. \
          Me encanta la tarta de queso. Me encanta el chocolate.'
        }
      />
      <SnackbarContent
        message="Me encantan los dulces. Me encantan las galletas. Me encantan las magdalenas."
        action={action}
      />
      <SnackbarContent
        message={
          'Me encantan los dulces. Me encantan las galletas. Me encantan las magdalenas. \
          Me encanta la tarta de queso. Me encanta el chocolate.'
        }
        action={action}
      />
    </Stack>
  );
}
