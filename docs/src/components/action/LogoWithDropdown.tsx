import * as React from 'react';
import { Box, Slide } from '@u-shii/u-ui';
import { RootSvgProps } from 'docs/src/icons/RootSvg';
import SvgYugashikiLogomark from 'docs/src/icons/SvgYugashikiLogomark';
import { ExpandMoreRounded, ExpandLessRounded } from '@mui/icons-material';
import HeaderDropdown from 'docs/src/components/header/HeaderDropdown';

interface LogoWithDropdownProps {
  logo?: React.ComponentType<RootSvgProps>;
  logoSvgString?: string;
  wordmarkSvgString?: string;
  marginLeft?: boolean;
}

export default function LogoWithDropdown({
  logo: LogoSvg = SvgYugashikiLogomark,
  marginLeft,
}: LogoWithDropdownProps) {
  const [dropdown, setDropdown] = React.useState(false);
  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleDropDown = (event: React.MouseEvent) => {
    event.preventDefault();
    setDropdown(!dropdown);
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 8,
            mouseY: event.clientY - 8,
          }
        : null,
    );
  };


  return (
    <React.Fragment>
      <Box
        aria-label="Yügashiki"
        onContextMenu={handleContextMenu}
        onClick={handleDropDown}
        sx={{
          mr: 1,
          ml: marginLeft ? 1.5 : undefined,
          alignItems: 'center',
          display: 'flex',
          color: dropdown ? '#000' : 'text.primary',
          padding: '.25rem .75rem',
          borderRadius: '100px',
          zIndex: 100,
          '&:hover': {
            background: dropdown ? '#000' : '#FFF',
            color: dropdown ? '#fFF' : '#000',
          },
          '& > svg': { m: '0 !important' },
        }}
      >
        <LogoSvg />
        {dropdown ? <ExpandLessRounded /> : <ExpandMoreRounded />}
      </Box>
      <Slide
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 99 }}
        direction="down"
        in={dropdown}
        mountOnEnter
        unmountOnExit
      >
        <Box sx={{ width: '100%' }}>
          <HeaderDropdown />
        </Box>
      </Slide>
    </React.Fragment>
  );
}
