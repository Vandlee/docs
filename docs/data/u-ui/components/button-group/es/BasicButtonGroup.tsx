import * as React from 'react';
import Button from '@u-shii/u-ui/Button';
import ButtonGroup from '@u-shii/u-ui/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="Grupo de botones básico">
      <Button>Uno</Button>
      <Button>Dos</Button>
      <Button>Tres</Button>
    </ButtonGroup>
  );
}
