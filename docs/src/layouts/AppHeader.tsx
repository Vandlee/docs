import * as React from 'react';
import { styled, alpha } from '@u_ui/u-ui/styles';
import GlobalStyles from '@u_ui/u-ui/GlobalStyles';
import Box from '@u_ui/u-ui/Box';
import Stack from '@u_ui/u-ui/Stack';
import Container from '@u_ui/u-ui/Container';
import Tooltip from '@u_ui/u-ui/Tooltip';
import IconButton from '@u_ui/u-ui/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoWithCopyMenu from 'docs/src/components/action/LogoWithCopyMenu';
import HeaderNavBar from 'docs/src/components/header/HeaderNavBar';
import LogoWithDropdown from 'docs/src/components/action/LogoWithDropdown';
import { useTranslate } from '@vandlee/docs/i18n';
import HeaderNavDropdown from '../components/header/HeaderNavDropdown';
import ThemeModeToggle from '../components/header/ThemeModeToggle';

const Header = styled('header')(({ theme }) => [
  {
    position: 'sticky',
    top: 0,
    transition: theme.transitions.create('top'),
    zIndex: theme.zIndex.appBar,
    backgroundColor: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(8px)',
    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  } as const,
  theme.applyDarkStyles({
    backgroundColor: alpha(theme.palette.primaryDark[900], 0.7),
  }),
]);

const HEIGHT = 60;

interface AppHeaderProps {
  gitHubRepository?: string;
}

export default function AppHeader(props: AppHeaderProps) {
  const { gitHubRepository = 'https://github.com/Vandlee' } = props;
  const t = useTranslate();
  return (
    <Header>
      <GlobalStyles
        styles={{
          ':root': {
            '--uidocs-header-height': `${HEIGHT}px`,
          },
        }}
      />
      <Container sx={{ display: 'flex', alignItems: 'center', minHeight: HEIGHT }}>
        <LogoWithDropdown />
        <LogoWithCopyMenu />
        <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
          <HeaderNavBar />
        </Box>
        <Box sx={{ ml: 'auto' }} />
        <Stack direction="row" spacing={1}>
          <Tooltip title={t('appFrame.github')} enterDelay={300}>
            <IconButton
              component="a"
              size="small"
              href={gitHubRepository}
              target="_blank"
              rel="noopener"
              data-ga-event-category="header"
              data-ga-event-action="github"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <ThemeModeToggle />
        </Stack>
        <Box sx={{ display: { md: 'none' }, ml: 1}}>
          <HeaderNavDropdown />
        </Box>
      </Container>
    </Header>
  );
}
