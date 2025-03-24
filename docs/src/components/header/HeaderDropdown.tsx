import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import { Box, Button, Divider, Drawer, ThemeProvider, Typography } from '@u_ui/u-ui';
import { PortraitRounded } from '@mui/icons-material';
import getTheme from 'docs/src/modules/utils/getLightTheme';

const Dropdown = styled('div')(({ theme }) => [
  {
    width: '100%',
    minHeight: '100px',
    paddingInline: '2rem',
    paddingBottom: '2rem',
    display: 'flex',
    flexFlow: 'column',
    color: theme.palette.text.primary,
    background: theme.palette.background.default,
    button: {
      '.uiTypography-root': {
        flex: 1,
      },
    },
  },
]);

interface HeaderDropdownProps {
  open: boolean;
  onClose: () => void;
}

export default function HeaderDropdown({ open, onClose }: HeaderDropdownProps) {  
  
  return (
    <ThemeProvider theme={(outerTheme) => getTheme('light', outerTheme)}>
      <Drawer anchor='top' open={open} onClose={onClose}>
        <Dropdown>
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', paddingBlock: '1rem' }}
          >
            <Typography variant='h1' component='span' fontSize={32} fontWeight={500}>Vandlee</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box sx={{ maxWidth: '300px', width: '100%' }}>
              <Typography variant='h2' fontSize={18} fontWeight={600}>Nosotros</Typography>
              <Divider sx={{ my: 1}} />
              <Box sx={{ display: 'flex', flexFlow: 'column', marginLeft: -1.6, marginRight: -1.2 }}>
                <Button color="neutral" justify="start" endIcon={<PortraitRounded />}>
                  <Typography variant="button">Cuentas</Typography>
                </Button>
                <Button justify="start">Yügashiki</Button>
              </Box>
            </Box>
            <Box sx={{ maxWidth: '300px', width: '100%' }}>
              <Typography variant='h2' fontSize={18} fontWeight={600}>Nosotros</Typography>
              <Divider sx={{ my: 1}} />
              <Box sx={{ display: 'flex', flexFlow: 'column', marginLeft: -1.6, marginRight: -1.2 }}>
                <Button color="neutral" justify="start" endIcon={<PortraitRounded />}>
                  <Typography variant="button">Cuentas</Typography>
                </Button>
                <Button justify="start">Yügashiki</Button>
              </Box>
            </Box>
          </Box>
        </Dropdown>
      </Drawer>
    </ThemeProvider>
  );
}
