import { UshiiPage } from 'docs/src/u-shiiPage';

const pages: UshiiPage[] = [
  {
    pathname: '/u_ui/u-ui/getting-started-group',
    title: 'Getting started',
    children: [
      { pathname: '/u_ui/u-ui/getting-started', title: 'Overview' },
      { pathname: '/u_ui/u-ui/getting-started/installation' },
      { pathname: '/u_ui/u-ui/getting-started/usage' },
      { pathname: '/u_ui/u-ui/getting-started/learn' },
      { pathname: '/u_ui/u-ui/getting-started/faq', title: 'FAQs' },
      { pathname: '/u_ui/u-ui/getting-started/supported-platforms' },
    ],
  },
  {
    pathname: '/u_ui/u-ui/react-',
    title: 'Components',
    children: [
      { pathname: '/u_ui/u-ui/all-components', title: 'All components' },
      {
        pathname: '/u_ui/u-ui/components/inputs',
        subheader: 'inputs',
        children: [
          { pathname: '/u_ui/u-ui/react-button' },
          { pathname: '/u_ui/u-ui/react-button-group', title: 'Button Group' },
          { pathname: '/u_ui/u-ui/react-rating' },
          { pathname: '/u_ui/u-ui/react-toggle-button', title: 'Toggle Button' },
        ],
      },
      {
        pathname: "/u-ui/components/data-display",
        subheader: 'data-display',
        children: [
          { pathname: '/u_ui/u-ui/react-badge' },
          { pathname: '/u_ui/u-ui/react-chip' },
        ]
      }
    ]
  }
];

export default pages;
