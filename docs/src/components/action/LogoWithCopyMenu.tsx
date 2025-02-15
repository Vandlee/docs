import * as React from 'react';
import copy from 'clipboard-copy';
import { Link } from '@u-shii/docs/Link';
import { Portal } from '@u-shii/base/Portal';
import Box from '@u_ui/u-ui/Box';
import Snackbar from '@u_ui/u-ui/Snackbar';
import Menu from '@u_ui/u-ui/Menu';
import MenuItem from '@u_ui/u-ui/MenuItem';
import Slide from '@u_ui/u-ui/Slide';
import { TextFieldsRounded, CheckCircleRounded } from '@mui/icons-material';
import { RootSvgProps } from 'docs/src/icons/RootSvg';
import SvgUshiiLogomark, {
  UshiiSvgLogoString,
  UshiiSvgWordmarkString
} from 'docs/src/icons/SvgUshiiLogomark';
import { useRouter } from 'next/router';
import getProductInfoFromUrl from 'docs/src/modules/utils/getProductInfoFromUrl';

interface LogoWithCopyMenuProps {
  logo?: React.ComponentType<RootSvgProps>;
  logoSvgString?: string;
  wordmarkSvgString?: string;
  url?: string;
  marginLeft?: boolean;
}

export default function LogoWithCopyMenu({
  logo: LogoSvg = SvgUshiiLogomark,
  logoSvgString = UshiiSvgLogoString,
  wordmarkSvgString = UshiiSvgWordmarkString,
  url = '/',
  marginLeft,
}: LogoWithCopyMenuProps) {
  const router = useRouter();
  const { productCategoryId } = getProductInfoFromUrl(router.asPath);
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
        <LogoSvg height={productCategoryId === 'u-docs' && url !== '/' ? 21 : 30} />
      </Box>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
        }
        sx={(theme) => ({
          '& .UshiiMenuItem-root': {
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
