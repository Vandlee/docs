import * as React from 'react';
import Chip from '@yushii/u-ui/Chip';
import Box from '@yushii/u-ui/Box';

export default function MultilineChips() {
  return (
    <Box sx={{ width: 100 }}>
      <Chip
        sx={{
          height: 'auto',
          '& .YushiiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
        }}
        label="Este es un chip que tiene varias líneas."
      />
    </Box>
  );
}
