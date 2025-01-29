import type { YushiiPage } from 'docs/src/YushiiPage';
import standardNavIcons from 'docs/src/modules/components/AppNavIcons';

const pages: readonly YushiiPage[] = [
  { pathname: 'https://yushii.yugacore.com/versions/' },
  {
    pathname: 'https://yushii.yugacore.com/store/',
    title: 'Templates',
    icon: standardNavIcons.ReaderIcon,
    linkProps: {
      'data-ga-event-category': 'store',
      'data-ga-event-action': 'click',
      'data-ga-event-label': 'sidenav',
    },
  },
  { pathname: 'https://yushii.yugacore.com/blog/', title: 'Blog', icon: standardNavIcons.BookIcon },
];

export default pages;
