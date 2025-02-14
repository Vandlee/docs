import * as React from 'react';
import Button from '@yushii/u-ui/Button';
import ButtonGroup from '@yushii/u-ui/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="Grupo de botones básico">
      <Button>Uno</Button>
      <Button>Dos</Button>
      <Button>Tres</Button>
    </ButtonGroup>
  );
}
