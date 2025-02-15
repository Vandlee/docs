import * as React from 'react';
import Grid from '@u-shii/u-ui/Grid';
import ComponentShowcaseCard from 'docs/src/components/action/ComponentShowcaseCard';
import { pageToTitleI18n } from '../../utils/helpers';
import { useTranslate } from '@u-shii/docs/i18n';

const dataDisplayComponents = [
    {
        srcLight: '/static/u-ui/react-components/badge-light.png',
        srcDark: '/static/u-ui/react-components/badge-dark.png',
        link: '/u-ui/react-badge/',
        md1: false,
        md2: false,
        md3: false,
        noGuidelines: false,
    },
    {
        srcLight: '/static/u-ui/react-components/chip-light.png',
        srcDark: '/static/u-ui/react-components/chip-dark.png',
        link: '/u-ui/react-chip/',
        md1: false,
        md2: true,
        md3: false,
        noGuidelines: false,
    },
]

export default function MaterialDataDisplayComponents() {
    const t = useTranslate();

    return (
      <Grid container spacing={2} sx={{ pt: 1 }}>
        {dataDisplayComponents.map(({ name, link, srcLight, srcDark, md1, md2, md3, noGuidelines }) => {
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
  