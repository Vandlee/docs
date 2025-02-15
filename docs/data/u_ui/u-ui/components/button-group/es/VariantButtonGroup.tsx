import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import ButtonGroup from '@u_ui/u-ui/ButtonGroup';
import Box from '@u_ui/u-ui/Box';

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
      <ButtonGroup variant="outlined" aria-label="Grupo de botones básico">
        <Button>Uno</Button>
        <Button>Dos</Button>
        <Button>Tres</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="Grupo de botones básico">
        <Button>Uno</Button>
        <Button>Dos</Button>
        <Button>Tres</Button>
      </ButtonGroup>
    </Box>
  );
}
