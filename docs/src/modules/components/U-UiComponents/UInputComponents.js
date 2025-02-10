import * as React from 'react';
import Grid from '@yushii/u-ui/Grid';
import ComponentShowcaseCard from 'docs/src/components/action/ComponentShowcaseCard';

const inputComponents = [
  {
    name: 'Botón',
    srcLight: '/static/u-ui/react-components/button-light.png',
    srcDark: '/static/u-ui/react-components/button-dark.png',
    link: '/u-ui/react-button/',
    md1: false,
    md2: true,
    md3: false,
    noGuidelines: false,
  },
];

export default function UInputComponents() {
  return (
    <Grid container spacing={2} sx={{ pt: 1 }}>
      {inputComponents.map(({ name, link, srcLight, srcDark, md1, md2, md3, noGuidelines }) => (
        <Grid item xs={12} sm={4} sx={{ flexGrow: 1 }} key={name}>
          <ComponentShowcaseCard
            link={link}
            name={name}
            srcLight={srcLight}
            srcDark={srcDark}
            md1={md1}
            md2={md2}
            md3={md3}
            noGuidelines={noGuidelines}
            imgLoading="eager"
          />
        </Grid>
      ))}
    </Grid>
  );
}
