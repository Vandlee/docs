import * as React from 'react';
import Avatar from '@u_ui/u-ui/Avatar';
import Box from '@u_ui/u-ui/Box';
import Paper from '@u_ui/u-ui/Paper';
import Stack from '@u_ui/u-ui/Stack';
import { styled } from '@u_ui/u-ui/styles';
import Typography from '@u_ui/u-ui/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const message = `El truncamiento debe ser condicionalmente aplicable en esta larga línea de texto
 ya que es una línea mucho más larga de lo que el contenedor puede soportar.`;

export default function ZeroWidthStack() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Avatar>W</Avatar>
          <Typography noWrap>{message}</Typography>
        </Stack>
      </Item>
      <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Stack>
            <Avatar>W</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>{message}</Typography>
          </Stack>
        </Stack>
      </Item>
    </Box>
  );
}
