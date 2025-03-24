import * as React from 'react';
import Grid from '@u_ui/u-ui/Grid';
import ComponentShowcaseCard from 'docs/src/components/action/ComponentShowcaseCard';
import { pageToTitleI18n } from '../../utils/helpers';
import { useTranslate } from '@vandlee/docs/i18n';

const surfaceComponents = [
    {
      name: 'App Bar',
      srcLight: '/static/u-ui/react-components/appbar-light.png',
      srcDark: '/static/u-ui/react-components/appbar-dark.png',
      link: '/u_ui/u-ui/react-app-bar/',
      md1: false,
      md2: true,
      md3: false,
      noGuidelines: false,
    },
    {
      name: 'Card',
      srcLight: '/static/u-ui/react-components/card-light.png',
      srcDark: '/static/u-ui/react-components/card-dark.png',
      link: '/u_ui/u-ui/react-card/',
      md1: false,
      md2: true,
      md3: false,
      noGuidelines: false,
    },
    {
      name: 'Paper',
      srcLight: '/static/u-ui/react-components/paper-light.png',
      srcDark: '/static/u-ui/react-components/paper-dark.png',
      link: '/u_ui/u-ui/react-paper/',
      md1: false,
      md2: true,
      md3: false,
      noGuidelines: false,
    },
  ];

export default function UiFeedbackComponents() {
    const t = useTranslate();

    return (
      <Grid container size={{ pt: 1 }} spacing={2}>
        {surfaceComponents.map(({ name, link, srcLight, srcDark, md1, md2, md3, noGuidelines }) => {
            const componentName = pageToTitleI18n({ pathname: link.replace(/\/$/, '') }, t);
            return (
            <Grid size={{ xs: 12, sm: 4 }} sx={{ flexGrow: 1 }} key={name}>
                <ComponentShowcaseCard
                    link={link}
                    name={componentName}
                    srcLight={srcLight}
                    srcDark={srcDark}
                    md1={md1}
                    md2={md2}
                    md3={md3}
                    noGuidelines={noGuidelines}
                    imgLoading="eager"
                />
            </Grid>
            )
        })}
      </Grid>
    );
  }
  