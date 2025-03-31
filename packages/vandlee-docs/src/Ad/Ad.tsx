import * as React from 'react';
import Typography from '@u_ui/u-ui/Typography';
import Box from '@u_ui/u-ui/Box';
import Paper from '@u_ui/u-ui/Paper';
import { useTranslate } from '../i18n';
import AdCarbon from './AdCarbon';
import AdInHouse from './AdInHouse';
import AdSense from './AdSense';
import { AdContext, adShape } from './AdManager';
import { useAdConfig } from './AdProvider';
import AdsTerra from './AdsTerra';

function PleaseDisableAdblock() {
  const t = useTranslate();

  return (
    <Paper
      component="span"
      elevation={0}
      sx={{ display: 'block', p: 1.5, border: '2px solid', borderColor: 'primary.main' }}
    >
      <Typography variant="body2" component="span" gutterBottom sx={{ display: 'block' }}>
        {t('likeVandlee')}
      </Typography>
      <Typography variant="body2" component="span" gutterBottom sx={{ display: 'block' }}>
        {t('adblock')}
      </Typography>
      <Typography variant="body2" component="span" sx={{ display: 'block' }}>
        {t('thanks')}{' '}
        <span role="img" aria-label={t('emojiLove')}>
          ❤️
        </span>
      </Typography>
    </Paper>
  );
}

const disableAd =
  process.env.NODE_ENV !== 'production' && process.env.ENABLE_AD_IN_DEV_MODE !== 'true';
const inHouseAds = [
  {
    name: 'scaffoldhub',
    link: 'https://v2.scaffoldhub.io/scaffolds/react-material-ui?partner=1',
    img: '/static/ads-in-house/scaffoldhub.png',
    description: '<b>ScaffoldHub</b>. Automate building your full-stack Material UI web-app.',
  },
];

class AdErrorBoundary extends React.Component<{
  eventLabel: string | null;
  children?: React.ReactNode | undefined;
}> {
  state = { didError: false };

  static getDerivedStateFromError() {
    return { didError: true };
  }

  componentDidCatch() {
    // send explicit `'null'`
    const eventLabel = String(this.props.eventLabel);
    // TODO: Use proper error monitoring service (for example Sentry) instead

    window.gtag('event', 'ad', {
      eventAction: 'crash',
      eventLabel,
    });
  }

  render() {
    const { didError } = this.state;
    const { children } = this.props;

    if (didError) {
      return null;
    }
    return children;
  }
}

export const AD_MARGIN_TOP = 3;
export const AD_MARGIN_BOTTOM = 3;
export const AD_HEIGHT = 126;
// Add more height on mobile as the text tends to wrap beyond the image height.
export const AD_HEIGHT_MOBILE = 126 + 16;

// https://stackoverflow.com/a/20084661
function isBot() {
  return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
}

export function Ad() {
  const [adblock, setAdblock] = React.useState<null | boolean>(null);
  const [carbonOut, setCarbonOut] = React.useState<null | boolean>(null);

  const { current: randomAdblock } = React.useRef(Math.random());
  const { current: randomInHouse } = React.useRef(Math.random());

  let children;
  let label;
  // Hide the content to google bot to avoid its indexation.
  if ((typeof window !== 'undefined' && isBot()) || disableAd) {
    children = <span />;
  } else if (adblock) {
    if (randomAdblock < 0.2) {
      children = <PleaseDisableAdblock />;
      label = 'in-house-adblock';
    } else {
      children = <AdInHouse ad={inHouseAds[Math.floor(inHouseAds.length * randomInHouse)]} />;
      label = 'in-house';
    }
  } else if (carbonOut) {
    children = <AdInHouse ad={inHouseAds[Math.floor(inHouseAds.length * randomInHouse)]} />;
    label = 'in-house-carbon';
  } else {
    children = <AdSense />;
    label = 'adsense';
  }

  const ad = React.useContext(AdContext);
  const eventLabel = label ? `${label}-${ad.placement}-${adShape}` : null;

  const timerAdblock = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  const checkAdblock = React.useCallback(
    (attempt = 1) => {
      if (
        document.querySelector('.ea-placement') ||
        document.querySelector('#carbonads') ||
        document.querySelector('.carbonads') ||
        document.querySelector('.adsbygoogle') ||
        carbonOut
      ) {
        if (
          document.querySelector('#carbonads a') &&
          document.querySelector('#carbonads a')?.getAttribute('href') ===
            'https://material-ui-next.com/discover-more/backers'
        ) {
          setCarbonOut(true);
        }

        setAdblock(false);
        return;
      }

      if (attempt < 30) {
        timerAdblock.current = setTimeout(() => {
          checkAdblock(attempt + 1);
        }, 500);
      }

      if (attempt > 6) {
        setAdblock(true);
      }
    },
    [carbonOut],
  );

  React.useEffect(() => {
    if (disableAd) {
      return undefined;
    }
    checkAdblock();

    return () => {
      clearTimeout(timerAdblock.current);
    };
  }, [checkAdblock]);

  const { GADisplayRatio } = useAdConfig();
  React.useEffect(() => {
    // Avoid an exceed on the Google Analytics quotas.
    if (Math.random() > (GADisplayRatio ?? 0.1) || !eventLabel) {
      return undefined;
    }

    const delay = setTimeout(() => {
      window.gtag('event', 'ad', {
        eventAction: 'display',
        eventLabel,
      });
    }, 2500);

    return () => {
      clearTimeout(delay);
    };
  }, [GADisplayRatio, eventLabel]);

  return (
    <Box
      component="span"
      sx={(theme) => ({
        position: 'relative',
        display: 'block',
        mt: AD_MARGIN_TOP,
        mb: AD_MARGIN_BOTTOM,
        minHeight: AD_HEIGHT_MOBILE,
        [theme.breakpoints.up('sm')]: {
          minHeight: AD_HEIGHT,
        },
        ...(adShape === 'image' && {}),
        ...(adShape === 'inline' && {
          display: 'flex',
          alignItems: 'flex-end',
        }),
      })}
      data-ga-event-category="ad"
      data-ga-event-action="click"
      data-ga-event-label={eventLabel}
    >
      <AdErrorBoundary eventLabel={eventLabel}>{children}</AdErrorBoundary>
    </Box>
  );
}
