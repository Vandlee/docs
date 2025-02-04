import * as React from 'react';
import Stack from '@yushii/ui/Stack';
import Button from '@yushii/ui/Button';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="accent">Accent</Button>
      <Button variant="outlined" color="neutral">Neutral</Button>
      <Button color="success">
        Success
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
    </Stack>
  );
}
