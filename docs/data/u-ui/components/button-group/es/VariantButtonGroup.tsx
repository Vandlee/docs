import * as React from 'react';
import Button from '@yushii/u-ui/Button';
import ButtonGroup from '@yushii/u-ui/ButtonGroup';
import Box from '@yushii/u-ui/Box';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>Uno</Button>
        <Button>Dos</Button>
        <Button>Tres</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>Uno</Button>
        <Button>Dos</Button>
        <Button>Tres</Button>
      </ButtonGroup>
    </Box>
  );
}
