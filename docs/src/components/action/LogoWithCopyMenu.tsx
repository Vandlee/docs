import * as React from 'react';
/* import copy from 'clipboard-copy'; */
import { Link } from '@yushii/docs/Link';
import Box from '@yushii/ui/Box';
import { RootSvgProps } from 'docs/src/icons/RootSvg';
import SvgYushiiLogomark /* {
  yushiiSvgLogoString,
  yushiiSvgWordmarkString,
} */ from 'docs/src/icons/SvgYushiiLogomark';

interface LogoWithCopyMenuProps {
  logo?: React.ComponentType<RootSvgProps>;
  logoSvgString?: string;
  wordmarkSvgString?: string;
  marginLeft?: boolean;
}

export default function LogoWithCopyMenu({
  logo: LogoSvg = SvgYushiiLogomark,
  /* logoSvgString = yushiiSvgLogoString, */
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

 /*  const handleClose = () => {
    setContextMenu(null);
  }; */

  /* const [copied, setCopied] = React.useState(false);
  const handleCopy = (svgSnippet: string) => {
    setCopied(true);
    copy(svgSnippet).then(() => {
      setTimeout(() => setCopied(false), 3500);
      handleClose();
    });
  }; */

  return (
    <React.Fragment>
      <Box
        component={Link}
        href="/"
        aria-label="Ir al inicio"
        onContextMenu={handleContextMenu}
        sx={{
          mr: 1,
          ml: marginLeft ? 1.5 : undefined,
          color: 'text.primary',
          '& > svg': { m: '0 !important' },
        }}
      >
        <LogoSvg />
      </Box>
    </React.Fragment>
  );
}
