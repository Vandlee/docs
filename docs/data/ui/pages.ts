import { YushiiPage } from 'docs/src/YushiiPage';

const pages: YushiiPage[] = [
  {
    pathname: '/ui/getting-started-group/',
    title: 'Getting started',
    children: [
      { pathname: '/ui/getting-started', title: 'Overview' },
      { pathname: '/ui/getting-started/installation' },
      { pathname: '/ui/getting-started/usage' },
      { pathname: '/ui/getting-started/example-projects' },
      { pathname: '/ui/getting-started/templates' },
      { pathname: '/ui/getting-started/learn' },
      { pathname: '/ui/getting-started/design-resources' },
      { pathname: '/ui/getting-started/faq', title: 'FAQs' },
      { pathname: '/ui/getting-started/supported-components' },
      { pathname: '/ui/getting-started/supported-platforms' },
      { pathname: '/ui/getting-started/support' },
    ],
  },
];

export default pages;
