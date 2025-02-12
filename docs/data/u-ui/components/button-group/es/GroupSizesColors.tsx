import * as React from 'react';
import Button from '@yushii/u-ui/Button';
import Box from '@yushii/u-ui/Box';
import ButtonGroup from '@yushii/u-ui/ButtonGroup';

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
      <ButtonGroup size="small" aria-label="Small button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="Medium-sized button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="contrast" size="large" aria-label="Large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
