import * as React from 'react';
import Chip from '@u_ui/u-ui/Chip';
import Box from '@u_ui/u-ui/Box';

export default function MultilineChips() {
  return (
    <Box sx={{ width: 100 }}>
      <Chip
        sx={{
          height: 'auto',
          '& .UshiiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
        }}
        label="Este es un chip que tiene varias líneas."
      />
    </Box>
  );
}
