import * as React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { styled } from '@u_ui/u-ui/styles';
import { exactProp } from '@vandlee/utils';
import GlobalStyles from '@u_ui/u-ui/GlobalStyles';
import {
  AdManager,
  AD_MARGIN_TOP,
  AD_HEIGHT,
  AD_HEIGHT_MOBILE,
  AD_MARGIN_BOTTOM,
} from '@vandlee/docs/Ad';
import Head from 'docs/src/modules/components/Head';
import AppFrame from 'docs/src/modules/components/AppFrame';
import AppTableOfContents from 'docs/src/modules/components/AppTableOfContents';
import AppLayoutDocsFooter from 'docs/src/modules/components/AppLayoutDocsFooter';
import getProductInfoFromUrl from 'docs/src/modules/utils/getProductInfoFromUrl';
import { convertProductIdToName } from 'docs/src/modules/components/AppSearch';
import AppContainer from 'docs/src/modules/components/AppContainer';
import { alpha, Box } from '@u_ui/u-ui';

const TOC_WIDTH = 242;

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'disableToc',
})(({ theme }) => ({
  minHeight: '100vh',
  display: 'grid',
  width: '100%',
  '& .markdown-body .comment-link': {
    display: 'flex',
  },
  variants: [
    {
      props: ({ disableToc }) => disableToc,
      style: {
        [theme.breakpoints.up('md')]: {
          marginRight: TOC_WIDTH / 2,
        },
      },
    },
    {
      props: ({ disableToc }) => !disableToc,
      style: {
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: `1fr ${TOC_WIDTH}px`,
        },
      },
    },
  ],
}));

const SnackTitleBorder = styled(Box)(({ theme }) => ({
  overflowX: 'hidden',
  top: -11,
  borderBottomStyle: 'solid',
  borderBottomColor: theme.palette.divider,
  height: 12,
  borderBottomWidth: 0.5,
  width: '100%',
  overflowY: 'hidden',
  left: 0,
  position: 'absolute',
  zIndex: 1,
  '& .uiBox-root': {
      width: '100%',
      top: '100%',
      height: '100%',
      position: 'relative',
      boxShadow: `0 0 12px 0 ${alpha(theme.palette.divider, .1)}`
  }
}))

const SnackTitleBorderRadius = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'direction'
})(({ theme, direction = 'rtl' }) => ({
  height: 36,
  overflowX: 'hidden',
  top: -13,
  width: 36,
  overflowY: 'hidden',
  zIndex: 1,
  left: direction === 'rtl' ?  -12 :'unset',
  right: direction === 'ltr' ? -12 : 'unset',
  position: 'absolute',
  zIndex: 3,
  '& .uiBox-root': {
      borderTopWidth: .5,
      height: 48,
      width: 48,
      top: 12,
      borderBottomStyle: 'solid',
      borderBottomColor: theme.palette.divider,
      borderBottomWidth: .5,
      borderTopColor: theme.palette.divider,
      borderTopStyle: 'solid',
      borderRightStyle: 'solid',
      left: direction === 'rtl' ? 12 : 'unset',
      borderTopRightRadius: theme.shape.borderRadius * 2,
      borderRightWidth: direction === 'ltr' ? .5 : 'unset',
      borderBottomLeftRadius: theme.shape.borderRadius * 2,
      borderRightColor: theme.palette.divider,
      borderLeftWidth: .5,
      borderLeftStyle: 'solid',
      borderTopLeftRadius: theme.shape.borderRadius * 2,
      boxShadow: `0 0 12px 0 ${alpha(theme.palette.divider, .05)}, 0 0 0 8px ${theme.palette.background.default}`,
      borderBottomRightRadius: theme.shape.borderRadius * 2,
      borderLeftColor: theme.palette.divider,
      position: 'absolute',
      right: direction === 'ltr' ? 12 : 'unset',
  }
}))

const DefaultSnackTitleBorder = () => {
  return (
      <Box sx={{ position: 'sticky', top: 'var(--uidocs-header-height)', zIndex: 1 }}>
          <SnackTitleBorderRadius><Box/></SnackTitleBorderRadius>
          <SnackTitleBorder><Box /></SnackTitleBorder>
          <SnackTitleBorderRadius direction='ltr'><Box/></SnackTitleBorderRadius>
      </Box>
  )
}

const StyledAppContainer = styled(AppContainer, {
  shouldForwardProp: (prop) => prop !== 'disableAd' && prop !== 'hasTabs' && prop !== 'disableToc',
})(({ theme }) => {
  return {
    position: 'relative',
    // By default, a grid item cannot be smaller than the size of its content.
    // https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items
    minWidth: 0,
    marginTop: 'var(--uidocs-header-height)',
    borderTop: 0,
    [theme.breakpoints.up('lg')]: {
      '> .content-container': {
        paddingLeft: '60px',
        paddingRight: '60px',
      },
    },
    variants: [
      {
        props: ({ disableToc }) => disableToc,
        style: {
          // 105ch ≈ 930px
          maxWidth: `calc(105ch + ${TOC_WIDTH / 2}px)`,
        },
      },
      {
        props: ({ disableToc }) => !disableToc,
        style: {
          // We're mostly hosting text content so max-width by px does not make sense considering font-size is system-adjustable.
          fontFamily: 'Arial',
          // 105ch ≈ 930px
          maxWidth: '105ch',
        },
      },
      {
        props: ({ disableAd, hasTabs }) => !disableAd && hasTabs,
        style: {
          '&& .component-tabs .uiTabs-root': {
            // 40px matches MarkdownElement h2 margin-top.
            marginBottom: `calc(${theme.spacing(AD_MARGIN_TOP)} + ${AD_HEIGHT_MOBILE}px + 40px)`,
            [theme.breakpoints.up('sm')]: {
              marginBottom: `calc(${theme.spacing(AD_MARGIN_TOP)} + ${AD_HEIGHT}px + 40px)`,
            },
          },
          '&& .component-tabs.ad .uiTabs-root': {
            marginBottom: 0,
          },
        },
      },
      {
        props: ({ disableAd, hasTabs }) => !disableAd && !hasTabs,
        style: {
          '&& .description': {
            marginBottom: theme.spacing(AD_MARGIN_BOTTOM),
            paddingBottom: `calc(${theme.spacing(AD_MARGIN_TOP)} + ${AD_HEIGHT_MOBILE}px)`,
            [theme.breakpoints.up('sm')]: {
              paddingBottom: `calc(${theme.spacing(AD_MARGIN_TOP)} + ${AD_HEIGHT}px)`,
            },
          },
          '&& .description.ad': {
            paddingBottom: 0,
            marginBottom: 0,
          },
        },
      },
    ],
  };
});

export default function AppLayoutDocs(props) {
  const router = useRouter();
  const {
    BannerComponent,
    cardOptions,
    children,
    description,
    disableAd = false,
    // TODO, disableLayout should be the default, retaining the layout between pages
    // improves the UX. It's faster to transition, and you don't lose UI states, like scroll.
    disableLayout = false,
    disableToc = false,
    hasTabs = false,
    location,
    title,
    toc,
  } = props;

  if (description === undefined) {
    throw new Error('Missing description in the page');
  }

  const productName = convertProductIdToName(getProductInfoFromUrl(router.asPath));
  if (!productName) {
    console.error('productName mapping missing for', router.asPath);
  }
  
  const Layout = disableLayout ? React.Fragment : AppFrame;
  const layoutProps = disableLayout ? {} : { BannerComponent };

  const card = `/edge-functions/og-image?product=${productName}&title=${cardOptions?.title ?? title}&description=${cardOptions?.description ?? description}`;
  return (
    <Layout {...layoutProps}>
      <GlobalStyles
        styles={{
          ':root': {
            '--uidocs-navDrawer-width': '300px',
          },
        }}
      />
      <AdManager {...(hasTabs && { classSelector: '.component-tabs' })}>
        <Head title={`${title} - ${productName}`} description={description} card={card} />
        <Main disableToc={disableToc}>
          <StyledAppContainer disableAd={disableAd} hasTabs={hasTabs} disableToc={disableToc}>
            <DefaultSnackTitleBorder />
            <Box 
              className="content-container" 
              sx={(theme) => ({
                backgroundColor: theme.palette.background.paper,
                border: '1px solid',
                borderColor: theme.palette.divider,
                borderTop: 0
              })}
            >
              {children}
            </Box>
            <AppLayoutDocsFooter tableOfContents={toc} location={location} />
          </StyledAppContainer>
          {disableToc ? null : <AppTableOfContents toc={toc} />}
        </Main>
      </AdManager>
    </Layout>
  );
}

AppLayoutDocs.propTypes = {
  BannerComponent: PropTypes.elementType,
  cardOptions: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  disableAd: PropTypes.bool.isRequired,
  disableLayout: PropTypes.bool,
  disableToc: PropTypes.bool.isRequired,
  hasTabs: PropTypes.bool,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toc: PropTypes.array.isRequired,
};

if (process.env.NODE_ENV !== 'production') {
  AppLayoutDocs.propTypes = exactProp(AppLayoutDocs.propTypes);
}
