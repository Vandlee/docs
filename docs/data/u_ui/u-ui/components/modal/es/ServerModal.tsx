import * as React from 'react';
import Modal from '@u_ui/u-ui/Modal';
import Typography from '@u_ui/u-ui/Typography';
import Box from '@u_ui/u-ui/Box';

export default function ServerModal() {
  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
      }}
      ref={rootRef}
    >
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={(theme) => ({
            position: 'relative',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            p: 4,
          })}
        >
          <Typography id="server-modal-title" variant="h6" component="h2">
            Modal del lado del servidor
          </Typography>
          <Typography id="server-modal-description" sx={{ pt: 2 }}>
            Si desactivas JavaScript, seguirás viéndome.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
