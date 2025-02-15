import * as React from 'react';
import Button from '@u-shii/u-ui/Button';
import Box from '@u-shii/u-ui/Box';
import ButtonGroup from '@u-shii/u-ui/ButtonGroup';

const buttons = [
  <Button key="uno">Uno</Button>,
  <Button key="dos">Dos</Button>,
  <Button key="tres">Tres</Button>,
];

export default function GroupSizesColors() {
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
      <ButtonGroup size="small" aria-label="Grupo de botones pequeños">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="Grupo de botones mediano">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="contrast" size="large" aria-label="Grupo de botones grande">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
