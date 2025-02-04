import * as React from 'react';
import Stack from '@yushii/ui/Stack';
import IconButton from '@yushii/ui/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

export default function IconButtonColors() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="accent">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="neutral">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </Stack>
  );
}
