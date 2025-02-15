import * as React from 'react';
import Chip from '@u-shii/u-ui/Chip';
import Stack from '@u-shii/u-ui/Stack';

export default function ClickableChips() {
  const handleClick = () => {
    console.info('Hiciste clic en el Chip.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Cliqueable" onClick={handleClick} />
      <Chip label="Cliqueable" variant="outlined" onClick={handleClick} />
    </Stack>
  );
}
