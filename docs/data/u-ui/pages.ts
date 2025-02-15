import { UshiiPage } from 'docs/src/u-shiiPage';

const pages: UshiiPage[] = [
  {
    pathname: '/u-ui/getting-started-group',
    title: 'Getting started',
    children: [
      { pathname: '/u-ui/getting-started', title: 'Overview' },
      { pathname: '/u-ui/getting-started/installation' },
      { pathname: '/u-ui/getting-started/usage' },
      { pathname: '/u-ui/getting-started/learn' },
      { pathname: '/u-ui/getting-started/faq', title: 'FAQs' },
      { pathname: '/u-ui/getting-started/supported-platforms' },
    ],
  },
  {
    pathname: '/u-ui/react-',
    title: 'Components',
    children: [
      { pathname: '/u-ui/all-components', title: 'All components' },
      {
        pathname: '/u-ui/components/inputs',
        subheader: 'inputs',
        children: [
          { pathname: '/u-ui/react-button' },
          { pathname: '/u-ui/react-button-group', title: 'Button Group' },
          { pathname: '/u-ui/react-rating' },
          { pathname: '/u-ui/react-toggle-button', title: 'Toggle Button' },
        ],
      },
      {
        pathname: "/u-ui/components/data-display",
        subheader: 'data-display',
        children: [
          { pathname: '/u-ui/react-badge' },
          { pathname: '/u-ui/react-chip' },
        ]
      }
    ]
  }
];

export default pages;
