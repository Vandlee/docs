import type { UshiiPage } from 'docs/src/u-shiiPage';
import standardNavIcons from 'docs/src/modules/components/AppNavIcons';

const pages: readonly UshiiPage[] = [
  { pathname: 'https://u-shii.yugacore.com/versions/' },
  {
    pathname: 'https://u-shii.yugacore.com/store/',
    title: 'Templates',
    icon: standardNavIcons.ReaderIcon,
    linkProps: {
      'data-ga-event-category': 'store',
      'data-ga-event-action': 'click',
      'data-ga-event-label': 'sidenav',
    },
  },
  { pathname: 'https://u-shii.yugacore.com/blog/', title: 'Blog', icon: standardNavIcons.BookIcon },
];

export default pages;
