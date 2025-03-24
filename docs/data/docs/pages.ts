import type { VandleePage } from 'docs/src/vandleePage';
import standardNavIcons from 'docs/src/modules/components/AppNavIcons';

const pages: readonly VandleePage[] = [
  { pathname: 'https://docs.vandlee.com/versions/' },
  {
    pathname: 'https://docs.vandlee.com/store/',
    title: 'Templates',
    icon: standardNavIcons.ReaderIcon,
    linkProps: {
      'data-ga-event-category': 'store',
      'data-ga-event-action': 'click',
      'data-ga-event-label': 'sidenav',
    },
  },
  { pathname: 'https://docs.vandlee.com/blog/', title: 'Blog', icon: standardNavIcons.BookIcon },
];

export default pages;
