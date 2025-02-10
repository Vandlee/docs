import * as React from 'react';
import Button from '@yushii/u-ui/Button';
import Stack from '@yushii/u-ui/Stack';

export default function TextButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
  );
}
