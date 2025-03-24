import * as React from 'react';
import Grid from '@u_ui/u-ui/Grid';
import { InfoCard } from '@vandlee/docs/InfoCard';
import HighlightAltRoundedIcon from '@mui/icons-material/HighlightAltRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PictureInPictureRoundedIcon from '@mui/icons-material/PictureInPictureRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import MoveUpRoundedIcon from '@mui/icons-material/MoveUpRounded';
import FlipToFrontRoundedIcon from '@mui/icons-material/FlipToFrontRounded';
import ZoomOutMapRoundedIcon from '@mui/icons-material/ZoomOutMapRounded';
import DevicesOtherRoundedIcon from '@mui/icons-material/DevicesOtherRounded';
import { pageToTitleI18n } from '../../utils/helpers';
import { useTranslate } from '@vandlee/docs/i18n';

const utilComponents = [
  {
    title: 'Click-Away Listener',
    link: '/u_ui/u-ui/react-click-away-listener/',
    icon: <HighlightAltRoundedIcon color="primary" />,
  },
  {
    title: 'CSS Baseline',
    link: '/u_ui/u-ui/react-css-baseline/',
    icon: <CssRoundedIcon color="primary" />,
  },
  {
    title: 'Modal',
    link: '/u_ui/u-ui/react-modal/',
    icon: <PictureInPictureRoundedIcon color="primary" />,
  },
  {
    title: 'No SSR',
    link: '/u_ui/u-ui/react-no-ssr/',
    icon: <DnsRoundedIcon color="primary" />,
  },
  {
    title: 'Popover',
    link: '/u_ui/u-ui/react-popover/',
    icon: <MenuOpenRoundedIcon color="primary" />,
  },
  {
    title: 'Popper',
    link: '/u_ui/u-ui/react-popper/',
    icon: <FlipToFrontRoundedIcon color="primary" />,
  },
  {
    title: 'Portal',
    link: '/u_ui/u-ui/react-portal/',
    icon: <MoveUpRoundedIcon color="primary" />,
  },
  {
    title: 'Transitions',
    link: '/u_ui/u-ui/transitions/',
    icon: <ZoomOutMapRoundedIcon color="primary" />,
  },
  {
    title: 'useMediaQuery',
    link: '/u_ui/u-ui/react-use-media-query/',
    icon: <DevicesOtherRoundedIcon color="primary" />,
  },
];

export default function UiUtilComponents() {
  const t = useTranslate();
  return (
    <Grid container spacing={2}>
      {utilComponents.map(({ icon, title, link }) => {
        const componentName = pageToTitleI18n({ pathname: link.replace(/\/$/, '') }, t);

        return (
          <Grid key={title} size={{ xs: 12, sm: 4 }}>
            <InfoCard link={link} title={componentName} icon={icon} />
          </Grid>
        )
      })}
    </Grid>
  );
}
