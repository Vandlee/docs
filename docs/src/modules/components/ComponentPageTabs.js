import * as React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { styled, alpha } from '@u_ui/u-ui/styles';
import Box from '@u_ui/u-ui/Box';
import { useTranslate } from '@vandlee/docs/i18n';
import { Link } from '@vandlee/docs/Link';

export const HEIGHT = 50;

const LinkTab = styled(Link)(({ theme }) => ({
  minHeight: 30,
  minWidth: 0,
  padding: theme.spacing(0.5, 1),
  border: '1px solid',
  borderColor: 'transparent',
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.pxToRem(14),
  color: (theme.vars || theme).palette.text.secondary,
  borderRadius: '8px',
  position: 'relative',
  '&::before': {
    content: "''",
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: '100%',
    height: '2px',
  },
  '&:hover': {
    background: (theme.vars || theme).palette.grey[50],
    borderColor: (theme.vars || theme).palette.divider,
    color: (theme.vars || theme).palette.text.primary,
  },
  ...theme.applyDarkStyles({
    '&:hover': {
      borderColor: (theme.vars || theme).palette.divider,
      background: (theme.vars || theme).palette.primaryDark[700],
    },
    '&.ui-selected': {
      color: (theme.vars || theme).palette.primary[300],
    },
  }),
}));

export default function ComponentPageTabs(props) {
  const {
    activeTab,
    children,
    markdown: { headers },
  } = props;
  const router = useRouter();
  const t = useTranslate();

  const demosHref = router.pathname.endsWith('[docsTab]')
    ? router.pathname.replace('[docsTab]', '')
    : router.pathname;
  const apiPathname = `${demosHref.endsWith('/') ? demosHref : `${demosHref}/`}`;
  const componentsHref = `${apiPathname}components-api`;
  const hooksHref = `${apiPathname}hooks-api`;

  const linkTabData = [
    {
      key: '',
      label: t('api-docs.demos'),
      href: demosHref,
    },
    ...(headers.components?.length > 0
      ? [
          {
            key: 'components-api',
            label: t('api-docs.componentsApi'),
            href: componentsHref,
          },
        ]
      : []),
    ...(headers.hooks && headers.hooks.length > 0
      ? [
          {
            key: 'hooks-api',
            label: t('api-docs.hooksApi'),
            href: hooksHref,
          },
        ]
      : []),
  ];

  return (
    <Box className="component-tabs" sx={{ display: 'inline' }}>
      <Box
        component="nav"
        className="component-tabs"
        sx={(theme) => ({
          width: '100%',
          position: 'sticky',
          top: 57, // to be positioned below the app bar
          mt: 2,
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderBottom: 1,
          borderColor: 'divider',
          zIndex: 1000,
          display: 'inline-flex',
          py: 1,
          gap: 0.5,
          ...theme.applyDarkStyles({
            backgroundColor: alpha(theme.palette.primaryDark[900], 0.7),
          }),
        })}
      >
        {linkTabData.map((linkTab) => (
          <LinkTab
            key={linkTab.key}
            href={linkTab.href}
            aria-current={activeTab === linkTab.key ? 'page' : undefined}
            className={linkTab.key.includes('api') ? 'skip-algolia-crawler' : ''} // Details: https://github.com/mui/material-ui/pull/37539
            sx={{ color: activeTab === linkTab.key ? 'primary.main' : 'inherit', '&::before': { backgroundColor: activeTab === linkTab.key ? 'primary.light' : 'transparent' } }}
          >
            {linkTab.label}
          </LinkTab>
        ))}
      </Box>
      {children}
    </Box>
  );
}

ComponentPageTabs.propTypes = {
  activeTab: PropTypes.string,
  children: PropTypes.node,
  markdown: PropTypes.shape({
    headers: PropTypes.shape({
      components: PropTypes.array,
      hooks: PropTypes.array,
    }),
  }),
};
