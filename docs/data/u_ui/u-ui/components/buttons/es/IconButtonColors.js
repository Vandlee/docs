import * as React from 'react';
import Stack from '@u_ui/u-ui/Stack';
import IconButton from '@u_ui/u-ui/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

export default function IconButtonColors() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="huella dactilar" color="primary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="huella dactilar" color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="huella dactilar" color="contrast">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="huella dactilar" color="neutral">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="huella dactilar" color="success">
        <Fingerprint />
      </IconButton>
    </Stack>
  );
}
