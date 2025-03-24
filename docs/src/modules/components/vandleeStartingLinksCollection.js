import * as React from 'react';
import Grid from '@u_ui/u-ui/Grid';
import { InstallDesktopRounded, WebRounded, DrawRounded, PlayCircleFilledWhiteRounded, DesignServicesRounded } from '@mui/icons-material';
import { InfoCard } from '@vandlee/docs/InfoCard';
import { useTranslate } from '@vandlee/docs/i18n';
import { pageToTitleI18n } from '../utils/helpers';

const content = [
  {
    title: "Installation",
    link: '/u_ui/u-ui/getting-started/installation/',
    icon: <InstallDesktopRounded color="primary" />,
  },
  {
    title: 'Usage',
    link: '/u_ui/u-ui/getting-started/usage/',
    icon: <DrawRounded color="primary" />,
  },
]

export default function VandleeStartingLinksCollection() {
    const t = useTranslate();
    return (
      <Grid container spacing={2}>
        {content.map(({ icon, title, description, link }) => {
          const componentName = pageToTitleI18n({ pathname: link.replace(/\/$/, '') }, t);
          return (
            <Grid key={title} size={{ xs: 12, sm: 6, md: 6 }}>
              <InfoCard
                classNameTitle="algolia-lvl3"
                classNameDescription="algolia-content"
                link={link}
                title={componentName}
                icon={icon}
              />
            </Grid>
          )
        })}
      </Grid>
    );
  }