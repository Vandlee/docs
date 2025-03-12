import * as React from 'react';
import Box from '@u_ui/u-ui/Box';

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      Esta caja se representa como un elemento de sección HTML.
    </Box>
  );
}
