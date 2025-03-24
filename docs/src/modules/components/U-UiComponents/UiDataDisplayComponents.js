import * as React from 'react';
import Grid from '@u_ui/u-ui/Grid';
import ComponentShowcaseCard from 'docs/src/components/action/ComponentShowcaseCard';
import { pageToTitleI18n } from '../../utils/helpers';
import { useTranslate } from '@vandlee/docs/i18n';

const dataDisplayComponents = [
    {
        name: 'Avatar',
        srcLight: '/static/u-ui/react-components/avatar-light.png',
        srcDark: '/static/u-ui/react-components/avatar-dark.png',
        link: '/u_ui/u-ui/react-avatar/',
        md1: false,
        md2: false,
        md3: false,
        noGuidelines: true,
    },
    {
        name: 'Badge',
        srcLight: '/static/u-ui/react-components/badge-light.png',
        srcDark: '/static/u-ui/react-components/badge-dark.png',
        link: '/u_ui/u-ui/react-badge/',
        md1: false,
        md2: false,
        md3: false,
        noGuidelines: false,
    },
    {
        name: 'Chip',
        srcLight: '/static/u-ui/react-components/chip-light.png',
        srcDark: '/static/u-ui/react-components/chip-dark.png',
        link: '/u_ui/u-ui/react-chip/',
        md1: false,
        md2: true,
        md3: false,
        noGuidelines: false,
    },
    {
        name: 'Divider',
        srcLight: '/static/u-ui/react-components/divider-light.png',
        srcDark: '/static/u-ui/react-components/divider-dark.png',
        link: '/u_ui/u-ui/react-divider/',
        md1: false,
        md2: true,
        md3: false,
        noGuidelines: false,
    },
    {
        name: 'List',
        srcLight: '/static/u-ui/react-components/list-light.png',
        srcDark: '/static/u-ui/react-components/list-dark.png',
        link: '/u_ui/u-ui/react-list/',
        md1: false,
        md2: true,
        md3: false,
        noGuidelines: false,
    },
    {
        name: 'Tooltip',
        srcLight: '/static/u-ui/react-components/tooltip-light.png',
        srcDark: '/static/u-ui/react-components/tooltip-dark.png',
        link: '/u_ui/u-ui/react-tooltip/',
        md1: false,
        md2: true,
        md3: false,
        noGuidelines: false,
    },
    {
        name: 'Typography',
        srcLight: '/static/u-ui/react-components/typography-light.png',
        srcDark: '/static/u-ui/react-components/typography-dark.png',
        link: '/u_ui/u-ui/react-typography/',
        md1: false,
        md2: true,
        md3: false,
        noGuidelines: false,
    },
]

export default function UiDataDisplayComponents() {
    const t = useTranslate();

    return (
      <Grid container size={{ pt: 1 }} spacing={2}>
        {dataDisplayComponents.map(({ name, link, srcLight, srcDark, md1, md2, md3, noGuidelines }) => {
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
  