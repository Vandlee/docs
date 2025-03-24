import * as React from 'react';
import Grid from '@u_ui/u-ui/Grid';
import ComponentShowcaseCard from 'docs/src/components/action/ComponentShowcaseCard';
import { pageToTitleI18n } from '../../utils/helpers';
import { useTranslate } from '@vandlee/docs/i18n';

const navigationComponents = [
    {
      name: 'Drawer',
      srcLight: '/static/u-ui/react-components/drawer-light.png',
      srcDark: '/static/u-ui/react-components/drawer-dark.png',
      link: '/u_ui/u-ui/react-drawer/',
      md1: false,
      md2: true,
      md3: false,
      noGuidelines: false,
    },
    {
      name: 'Link',
      srcLight: '/static/u-ui/react-components/link-light.png',
      srcDark: '/static/u-ui/react-components/link-dark.png',
      link: '/u_ui/u-ui/react-link/',
      md1: false,
      md2: false,
      md3: false,
      noGuidelines: true,
    },
    {
      name: 'Menu',
      srcLight: '/static/u-ui/react-components/menu-light.png',
      srcDark: '/static/u-ui/react-components/menu-dark.png',
      link: '/u_ui/u-ui/react-menu/',
      md1: false,
      md2: true,
      md3: false,
      noGuidelines: false,
    },
  ];

export default function UiInputComponents() {
  const t = useTranslate();
  
  return (
    <Grid container spacing={2} sx={{ pt: 1 }}>
      {navigationComponents.map(({ name, link, srcLight, srcDark, md1, md2, md3, noGuidelines }) => {
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
