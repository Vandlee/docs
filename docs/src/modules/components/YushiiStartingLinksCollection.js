import * as React from 'react';
import Grid from '@yushii/u-ui/Grid2';
import { InstallDesktopRounded, WebRounded, DrawRounded, PlayCircleFilledWhiteRounded, DesignServicesRounded } from '@mui/icons-material';
import { InfoCard } from '@yushii/docs/InfoCard';

const content = [
    {
        title: "Installation",
        description: "Add u-ui to your project with a few commands.",
        link: '/u-ui/getting-started/installation/'
    }
]

export default function YushiiStartingLinksCollection() {
    return (
      <Grid container spacing={2}>
        {content.map(({ icon, title, description, link }) => (
          <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
            <InfoCard
              classNameTitle="algolia-lvl3"
              classNameDescription="algolia-content"
              link={link}
              title={title}
              icon={icon}
              description={description}
            />
          </Grid>
        ))}
      </Grid>
    );
  }