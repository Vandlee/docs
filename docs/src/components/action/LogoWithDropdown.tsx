import * as React from 'react';
import { Box, Drawer, Slide } from '@u_ui/u-ui';
import { RootSvgProps } from 'docs/src/icons/RootSvg';
import SvgZuroLogomark from 'docs/src/icons/SvgZuro';
import { ExpandMoreRounded, ExpandLessRounded } from '@mui/icons-material';
import HeaderDropdown from 'docs/src/components/header/HeaderDropdown';

interface LogoWithDropdownProps {
  logo?: React.ComponentType<RootSvgProps>;
  logoSvgString?: string;
  wordmarkSvgString?: string;
  marginLeft?: boolean;
}

export default function LogoWithDropdown({
  logo: LogoSvg = SvgZuroLogomark,
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
          ml: marginLeft ? 1 : undefined,
          alignItems: 'center',
          display: 'flex',
          color: dropdown ? '#000' : 'text.primary',
          padding: '.25rem',
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
      <HeaderDropdown open={dropdown} onClose={() => setDropdown((prev) => !prev)} />
    </React.Fragment>
  );
}
