import * as React from 'react';
import Grid from '@u_ui/u-ui/Grid';
import ComponentShowcaseCard from 'docs/src/components/action/ComponentShowcaseCard';
import { pageToTitleI18n } from '../../utils/helpers';
import { useTranslate } from '@vandlee/docs/i18n';

const layoutComponents = [
    {
      name: 'Box',
      srcLight: '/static/u-ui/react-components/box-light.png',
      srcDark: '/static/u-ui/react-components/box-dark.png',
      link: '/u_ui/u-ui/react-box/',
      md1: false,
      md2: false,
      md3: false,
      noGuidelines: true,
    },
    {
      name: 'Container',
      srcLight: '/static/u-ui/react-components/container-light.png',
      srcDark: '/static/u-ui/react-components/container-dark.png',
      link: '/u_ui/u-ui/react-container/',
      md1: false,
      md2: false,
      md3: false,
      noGuidelines: true,
    },
    {
      name: 'Grid',
      srcLight: '/static/u-ui/react-components/grid-light.png',
      srcDark: '/static/u-ui/react-components/grid-dark.png',
      link: '/u_ui/u-ui/react-grid/',
      md1: false,
      md2: false,
      md3: false,
      noGuidelines: true,
    },
    {
      name: 'Stack',
      srcLight: '/static/u-ui/react-components/stack-light.png',
      srcDark: '/static/u-ui/react-components/stack-dark.png',
      link: '/u_ui/u-ui/react-stack/',
      md1: false,
      md2: false,
      md3: false,
      noGuidelines: true,
    },
];

export default function UiInputComponents() {
  const t = useTranslate();
  
  return (
    <Grid container spacing={2} sx={{ pt: 1 }}>
      {layoutComponents.map(({ name, link, srcLight, srcDark, md1, md2, md3, noGuidelines }) => {
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
