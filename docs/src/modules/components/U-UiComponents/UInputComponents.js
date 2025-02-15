import * as React from 'react';
import Grid from '@u_ui/u-ui/Grid';
import ComponentShowcaseCard from 'docs/src/components/action/ComponentShowcaseCard';
import { pageToTitleI18n } from '../../utils/helpers';
import { useTranslate } from '@u-shii/docs/i18n';

const inputComponents = [
  {
    srcLight: '/static/u-ui/react-components/button-light.png',
    srcDark: '/static/u-ui/react-components/button-dark.png',
    link: '/u-ui/react-button/',
    md1: false,
    md2: true,
    md3: false,
    noGuidelines: false,
  },
  {
    srcLight: '/static/u-ui/react-components/button-group-light.png',
    srcDark: '/static/u-ui/react-components/button-group-dark.png',
    link: '/u-ui/react-button-group/',
    md1: false,
    md2: false,
    md3: false,
    noGuidelines: true,
  },
  {
    srcLight: '/static/u-ui/react-components/rating-light.png',
    srcDark: '/static/u-ui/react-components/rating-dark.png',
    link: '/u-ui/react-rating/',
    md1: false,
    md2: false,
    md3: false,
    noGuidelines: true,
  },
  {
    srcLight: '/static/u-ui/react-components/toggle-button-light.png',
    srcDark: '/static/u-ui/react-components/toggle-button-dark.png',
    link: '/u-ui/react-toggle-button/',
    md1: false,
    md2: false,
    md3: false,
    noGuidelines: true,
  },
];

export default function UInputComponents() {
  const t = useTranslate();
  
  return (
    <Grid container spacing={2} sx={{ pt: 1 }}>
      {inputComponents.map(({ name, link, srcLight, srcDark, md1, md2, md3, noGuidelines }) => {
        const componentName = pageToTitleI18n({ pathname: link.replace(/\/$/, '') }, t);
        return (
          <Grid item xs={12} sm={4} sx={{ flexGrow: 1 }} key={name}>
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
