import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import { Box, Button, createTheme, ThemeProvider, Typography } from '@u_ui/u-ui';
import { PortraitRounded } from '@mui/icons-material';

const Dropdown = styled('div')(({ theme }) => [
  {
    width: '100%',
    height: '50vh',
    minHeight: '400px',
    backgroundColor: '#FFF',
    color: '#000',
    paddingInline: '2rem',
    display: 'flex',
    flexFlow: 'column',
    button: {
      color: (theme.vars || theme).palette.neutral[400],
      '&:hover': {
        backgroundColor: (theme.vars || theme).palette.neutral[50],
      },
      '.UshiiTypography-root': {
        flex: 1,
      },
    },
  },
]);

export default function HeaderDropdown() {  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Dropdown>
        <Box
          sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', paddingBlock: '1rem' }}
        >
          <svg height={26} viewBox="0 0 89 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M82.3276 39.0086C84.1954 39.0086 85.704 39.6552 86.8534 40.9483C88.1466 42.2414 88.7931 43.75 88.7931 45.4741V106.25C88.7931 120.474 84.7701 131.322 76.7241 138.793C68.6782 146.264 57.8305 150 44.181 150C30.6753 150 19.8994 146.264 11.8534 138.793C3.95115 131.322 0 120.474 0 106.25V45.4741C0 43.75 0.574713 42.2414 1.72414 40.9483C3.01724 39.6552 4.5977 39.0086 6.46552 39.0086C8.33333 39.0086 9.84195 39.6552 10.9914 40.9483C12.2845 42.2414 12.931 43.75 12.931 45.4741V106.25C12.931 116.595 15.6609 124.497 21.1207 129.957C26.7241 135.273 34.4109 137.931 44.181 137.931C54.0948 137.931 61.8534 135.273 67.4569 129.957C73.0603 124.497 75.8621 116.595 75.8621 106.25V45.4741C75.8621 43.75 76.4368 42.2414 77.5862 40.9483C78.7356 39.6552 80.3161 39.0086 82.3276 39.0086ZM62.931 19.3965C60.0575 19.3965 57.8305 18.6782 56.25 17.2414C54.8132 15.6609 54.0948 13.5057 54.0948 10.7759V8.62068C54.0948 5.8908 54.8851 3.80746 56.4655 2.37068C58.046 0.790228 60.273 0 63.1465 0C65.8764 0 67.9598 0.790228 69.3966 2.37068C70.977 3.80746 71.7672 5.8908 71.7672 8.62068V10.7759C71.7672 13.6494 70.977 15.8046 69.3966 17.2414C67.8161 18.6782 65.6609 19.3965 62.931 19.3965ZM25.8621 19.3965C22.9885 19.3965 20.7615 18.6782 19.181 17.2414C17.7443 15.6609 17.0259 13.5057 17.0259 10.7759V8.62068C17.0259 5.8908 17.8161 3.80746 19.3966 2.37068C20.977 0.790228 23.1322 0 25.8621 0C28.7356 0 30.8908 0.790228 32.3276 2.37068C33.908 3.80746 34.6983 5.8908 34.6983 8.62068V10.7759C34.6983 13.6494 33.908 15.8046 32.3276 17.2414C30.7471 18.6782 28.592 19.3965 25.8621 19.3965Z"
              fill="currentColor"
            />
          </svg>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ maxWidth: '300px', width: '100%' }}>
            <Typography>Nosotros</Typography>
            <Box sx={{ display: 'flex', flexFlow: 'column' }}>
              <Button justify="start" endIcon={<PortraitRounded />}>
                <Typography variant="button">Cuentas</Typography>
              </Button>
              <Button justify="start">Yügashiki</Button>
            </Box>
          </Box>
          <Box>Hola</Box>
        </Box>
      </Dropdown>
    </ThemeProvider>
  );
}
