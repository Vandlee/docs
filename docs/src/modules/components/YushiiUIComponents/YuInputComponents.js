import * as React from 'react';
import Grid from '@yushii/ui/Grid';
import ComponentShowcaseCard from 'docs/src/components/action/ComponentShowcaseCard';

const inputComponents = [
  {
    name: 'Button',
    srcLight: '/static/material-ui/react-components/button-light.png',
    srcDark: '/static/material-ui/react-components/button-dark.png',
    link: '/material-ui/react-button/',
    md1: false,
    md2: true,
    md3: false,
    noGuidelines: false,
  },
];

export default function MaterialInputComponents() {
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
