import * as React from 'react';
import copy from 'clipboard-copy';
import { Link } from '@yushii/docs/Link';
import { Portal } from '@yushii/base/Portal';
import Box from '@yushii/u-ui/Box';
import Snackbar from '@yushii/u-ui/Snackbar';
import Menu from '@yushii/u-ui/Menu';
import MenuItem from '@yushii/u-ui/MenuItem';
import Slide from '@yushii/u-ui/Slide';
import { TextFieldsRounded, CheckCircleRounded } from '@mui/icons-material';
import { RootSvgProps } from 'docs/src/icons/RootSvg';
import SvgYushiiLogomark, {
  yushiiSvgLogoString,
  yushiiSvgWordmarkString
} from 'docs/src/icons/SvgYushiiLogomark';

interface LogoWithCopyMenuProps {
  logo?: React.ComponentType<RootSvgProps>;
  logoSvgString?: string;
  wordmarkSvgString?: string;
  url?: string;
  marginLeft?: boolean;
}

export default function LogoWithCopyMenu({
  logo: LogoSvg = SvgYushiiLogomark,
  logoSvgString = yushiiSvgLogoString,
  wordmarkSvgString = yushiiSvgWordmarkString,
  url = '/',
  marginLeft,
}: LogoWithCopyMenuProps) {
  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

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

  const handleClose = () => {
    setContextMenu(null);
  };

  const [copied, setCopied] = React.useState(false);
  const handleCopy = (svgSnippet: string) => {
    setCopied(true);
    copy(svgSnippet).then(() => {
      setTimeout(() => setCopied(false), 3500);
      handleClose();
    });
  };

  return (
    <React.Fragment>
      <Box
        component={Link}
        href={url}
        aria-label="Ir al inicio"
        onContextMenu={handleContextMenu}
        sx={{
          mr: 1,
          ml: marginLeft ? 1.5 : undefined,
          color: 'text.primary',
          display: 'flex',
          '& > svg': { m: '0 !important' },
        }}
      >
        <LogoSvg height={30} />
      </Box>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
        }
        sx={(theme) => ({
          '& .YushiiMenuItem-root': {
            gap: 1,
            '& path': {
              fill: (theme.vars || theme).palette.text.tertiary,
              color: (theme.vars || theme).palette.text.tertiary,
            },
            '&:hover, &:focus-visible': {
              '& path': {
                fill: (theme.vars || theme).palette.text.primary,
                color: (theme.vars || theme).palette.text.primary,
              },
            },
          },
        })}
      >
        <MenuItem onClick={() => handleCopy(logoSvgString)}>
          <LogoSvg height={24} />
          Copy logo as SVG
        </MenuItem>
        <MenuItem onClick={() => handleCopy(wordmarkSvgString)}>
          <TextFieldsRounded sx={{ fontSize: '18px' }} />
          Copy wordmark as SVG
        </MenuItem>
      </Menu>
      <Portal container={() => document.body}>
        <Snackbar 
          open={copied}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          TransitionComponent={Slide}
          message={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircleRounded sx={{ fontSize: '18px', color: 'success.main'}} />
              Logo SVG copied to clipboard!
            </Box>
          }
        />
      </Portal>
    </React.Fragment>
  );
}
