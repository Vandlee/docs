import * as React from 'react';
import Grid from '@u_ui/u-ui/Grid';
import ComponentShowcaseCard from 'docs/src/components/action/ComponentShowcaseCard';
import { pageToTitleI18n } from '../../utils/helpers';
import { useTranslate } from '@vandlee/docs/i18n';

const feedbackComponents = [
    {
      srcLight: '/static/u-ui/react-components/alert-light.png',
      srcDark: '/static/u-ui/react-components/alert-dark.png',
      link: '/u_ui/u-ui/react-alert/',
      md1: false,
      md2: false,
      md3: false,
      noGuidelines: true,
    },
    {
      srcLight: '/static/u-ui/react-components/backdrop-light.png',
      srcDark: '/static/u-ui/react-components/backdrop-dark.png',
      link: '/u_ui/u-ui/react-backdrop/',
      md1: false,
      md2: false,
      md3: false,
      noGuidelines: true,
    },
    {
      srcLight: '/static/u-ui/react-components/progress-light.png',
      srcDark: '/static/u-ui/react-components/progress-dark.png',
      link: '/u_ui/u-ui/react-progress/',
      md1: false,
      md2: true,
      md3: false,
      noGuidelines: false,
    },
    {
      srcLight: '/static/u-ui/react-components/snackbar-light.png',
      srcDark: '/static/u-ui/react-components/snackbar-dark.png',
      link: '/u_ui/u-ui/react-snackbar/',
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
        {feedbackComponents.map(({ name, link, srcLight, srcDark, md1, md2, md3, noGuidelines }) => {
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
  