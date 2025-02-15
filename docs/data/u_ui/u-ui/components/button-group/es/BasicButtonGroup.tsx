import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import ButtonGroup from '@u_ui/u-ui/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="Grupo de botones básico">
      <Button>Uno</Button>
      <Button>Dos</Button>
      <Button>Tres</Button>
    </ButtonGroup>
  );
}
