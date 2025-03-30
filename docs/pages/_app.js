import * as React from 'react';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import NextHead from 'next/head';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import uiPkgJson from 'packages/u_ui-u-ui/package.json';
import systemPkgJson from 'packages/u_ui-system/package.json';
import basePkgJson from 'packages/u_ui-base/package.json';
import generalDocsPages from 'docs/data/docs/pages';

import uUiPages from 'docs/data/u_ui/u-ui/pages';
import htmlPages from 'docs/data/u-docs/html/pages';
import javascriptPages from 'docs/data/u-docs/javascript/pages';
import phpPages from 'docs/data/u-docs/php/pages';
import pythonPages from 'docs/data/u-docs/python/pages';

import PageContext from 'docs/src/modules/components/PageContext';

import { CodeCopyProvider } from '@vandlee/docs/CodeCopy';
import { ThemeProvider } from 'docs/src/modules/components/ThemeContext';
import { CodeVariantProvider } from 'docs/src/modules/utils/codeVariant';
import { CodeStylingProvider } from 'docs/src/modules/utils/codeStylingSolution';
import DocsStyledEngineProvider from 'docs/src/modules/utils/StyledEngineProvider';
import createEmotionCache from 'docs/src/createEmotionCache';
import findActivePage from 'docs/src/modules/utils/findActivePage';
import { pathnameToLanguage } from 'docs/src/modules/utils/helpers';
import getProductInfoFromUrl from 'docs/src/modules/utils/getProductInfoFromUrl';
import { DocsProvider } from '@vandlee/docs/DocsProvider';
import { mapTranslations } from '@vandlee/docs/i18n';
import SvgVandleeLogomark, { vandleeSvgWordmarkString } from 'docs/src/icons/SvgVandlee';
import './global.css';
import '../public/static/components-gallery/base-theme.css';
import * as config from '../config';
import SvgU_UiLogomark, { U_UiSvgLogoString, U_UiSvgWordmarkString } from 'docs/src/icons/SvgU-Ui';
import SvgJavaScriptLogomark from 'docs/src/icons/SvgJavascript';
import SvgPHPLogomark from 'docs/src/icons/SvgPHP';
import SvgPythonLogomark from 'docs/src/icons/SvgPython';
import SvgHTMLLogomark from 'docs/src/icons/SvgHTML';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const PRODUCTS_METADATA = {
  'u-ui': {
    name: 'U-Ui',
    id: 'u-ui',
    url: '/u_ui/u-ui/',
    logo: SvgU_UiLogomark,
    logoSvg: U_UiSvgLogoString,
    wordmarkSvg: U_UiSvgWordmarkString,
    versions: [{ text: `v${uiPkgJson.version}`, current: true }],
  },
  html: {
    id: 'html',
    name: 'HTML',
    url: '/u-docs/html/',
    logo: SvgHTMLLogomark,
    versions: [{ text: 'v1', current: true }]
  },
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    url: '/u-docs/javascript/',
    logo: SvgJavaScriptLogomark,
    versions: [{ text: `v1`, current: true }],
  },
  php: {
    id: 'php',
    name: 'PHP',
    url: '/u-docs/php/',
    logo: SvgPHPLogomark,
    versions: [{ text: `v1`, current: true }],
  },
  python: {
    id: 'python',
    name: 'Python',
    url: '/u-docs/python/',
    logo: SvgPythonLogomark,
    versions: [{ text: `v1`, current: true }],
  },
}

const PRODUCT_PAGES = {
  'u-ui': uUiPages,
  html: htmlPages,
  javascript: javascriptPages,
  php: phpPages,
  python: pythonPages,
};

let reloadInterval;

function lazyReload() {
  clearInterval(reloadInterval);
  reloadInterval = setInterval(() => {
    if (document.hasFocus()) {
      window.location.reload();
    }
  }, 100);
}

// Inspired by
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
function forcePageReload(registration) {
  // console.log('already controlled?', Boolean(navigator.serviceWorker.controller));

  if (!navigator.serviceWorker.controller) {
    // The window client isn't currently controlled so it's a new service
    // worker that will activate immediately.
    return;
  }

  // console.log('registration waiting?', Boolean(registration.waiting));
  if (registration.waiting) {
    // SW is waiting to activate. Can occur if multiple clients open and
    // one of the clients is refreshed.
    registration.waiting.postMessage('skipWaiting');
    return;
  }

  function listenInstalledStateChange() {
    registration.installing.addEventListener('statechange', (event) => {
      // console.log('statechange', event.target.state);
      if (event.target.state === 'installed' && registration.waiting) {
        // A new service worker is available, inform the user
        registration.waiting.postMessage('skipWaiting');
      } else if (event.target.state === 'activated') {
        // Force the control of the page by the activated service worker.
        lazyReload();
      }
    });
  }

  if (registration.installing) {
    listenInstalledStateChange();
    return;
  }

  // We are currently controlled so a new SW may be found...
  // Add a listener in case a new SW is found,
  registration.addEventListener('updatefound', listenInstalledStateChange);
}

async function registerServiceWorker() {
  if (
    'serviceWorker' in navigator &&
    process.env.NODE_ENV === 'production' &&
    window.location.host.includes('docs.vandlee.com')
  ) {
    const registration = await navigator.serviceWorker.register('/sw.js');

    forcePageReload(registration);
  }
}

let dependenciesLoaded = false;

function loadDependencies() {
  if (dependenciesLoaded) {
    return;
  }

  dependenciesLoaded = true;

  loadCSS(
    'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Two+Tone',
    document.querySelector('#material-icon-font'),
  );
}

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log(
    `%c
Tip: you can access the documentation \`theme\` object directly in the console.
`,
    'font-family:monospace;color:#1976d2;font-size:12px;',
  );
}

function AppWrapper(props) {
  const { children, emotionCache, pageProps } = props;

  const router = useRouter();
  // TODO move productId & productCategoryId resolution to page layout.
  // We should use the productId field from the markdown and fallback to getProductInfoFromUrl()
  // if not present
  const { productId, productCategoryId } = getProductInfoFromUrl(router.asPath);

  React.useEffect(() => {
    loadDependencies();
    registerServiceWorker();

    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const productIdentifier = React.useMemo(() => {
    const languagePrefix = pageProps.userLanguage === 'es' ? '' : `/${pageProps.userLanguage}`;

    if (!productId || !PRODUCTS_METADATA[productId]) return null;

    return {
      ...PRODUCTS_METADATA[productId],
      productCategoryId: productCategoryId,
    }
    
  }, [pageProps.userLanguage, productId]);

  const pageContextValue = React.useMemo(() => {
    let pages = PRODUCT_PAGES[productId] || generalDocsPages;
    
    const { activePage, activePageParents } = findActivePage(pages, router.pathname);

    return { 
      activePage, 
      activePageParents, 
      pages, 
      productIdentifier, 
      productId, 
      productCategoryId
    };
  }, [productId, productCategoryId, productIdentifier, router.pathname]);

  let fonts = [];
  if (pathnameToLanguage(router.asPath).canonicalAs.match(/onepirate/)) {
    fonts = [
      'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Work+Sans:wght@300;400&display=swap',
    ];
  }

  return (
    <React.Fragment>
      <NextHead>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {fonts.map((font) => (
          <link rel="stylesheet" href={font} key={font} />
        ))}
        <meta name="vandlee:productId" content={productId} />
        <meta name="vandlee:productCategoryId" content={productCategoryId} />
        <meta name="google-adsense-account" content="ca-pub-8301556662915539"></meta>
      </NextHead>
      <DocsProvider
        config={config}
        adConfig={{ GADisplayRatio: 0.1 }}
        defaultUserLanguage={pageProps.userLanguage}
        translations={pageProps.translations}
        LANGUAGES={config.LANGUAGES}
      >
          <CodeCopyProvider>
            <CodeStylingProvider>
              <CodeVariantProvider>
                <PageContext.Provider value={pageContextValue}>
                  <ThemeProvider>
                      <DocsStyledEngineProvider cacheLtr={emotionCache}>
                        {children}
                        {/* <GoogleAnalytics /> */}
                      </DocsStyledEngineProvider>
                  </ThemeProvider>
                </PageContext.Provider>
              </CodeVariantProvider>
            </CodeStylingProvider>
          </CodeCopyProvider>
      </DocsProvider>
    </React.Fragment>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  emotionCache: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  console.log(pageProps)

  return (
    <AppWrapper emotionCache={emotionCache} pageProps={pageProps}>
      {getLayout(<Component {...pageProps} />)}
    </AppWrapper>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async ({ ctx, Component }) => {
  let pageProps = {};

  const req = require.context('docs/translations', false, /\.\/translations.*\.json$/);
  const translations = mapTranslations(req);

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps: {
      userLanguage: ctx.query.userLanguage || 'es',
      translations,
      ...pageProps,
    },
  };
};

// Track fraction of actual events to prevent exceeding event quota.
// Filter sessions instead of individual events so that we can track multiple metrics per device.
// See https://github.com/GoogleChromeLabs/web-vitals-report to use this data
const disableWebVitalsReporting = Math.random() > 0.0001;
export function reportWebVitals({ id, name, label, delta, value }) {
  if (disableWebVitalsReporting) {
    return;
  }

  window.gtag('event', name, {
    value: delta,
    metric_label: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    metric_value: value,
    metric_delta: delta,
    metric_id: id, // id unique to current page load
  });
}
