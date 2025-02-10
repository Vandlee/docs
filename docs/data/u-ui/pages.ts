import { YushiiPage } from 'docs/src/YushiiPage';

const pages: YushiiPage[] = [
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
          { pathname: '/u-ui/react-autocomplete' },
          { pathname: '/u-ui/react-button' },
          { pathname: '/u-ui/react-button-group', title: 'Button Group' },
          { pathname: '/u-ui/react-checkbox' },
          {
            pathname: '/u-ui/react-floating-action-button',
            title: 'Floating Action Button',
          },
          { pathname: '/u-ui/react-radio-button', title: 'Radio Group' },
          { pathname: '/u-ui/react-rating' },
          { pathname: '/u-ui/react-select' },
          { pathname: '/u-ui/react-slider' },
          { pathname: '/u-ui/react-switch' },
          { pathname: '/u-ui/react-text-field', title: 'Text Field' },
          { pathname: '/u-ui/react-transfer-list', title: 'Transfer List' },
          { pathname: '/u-ui/react-toggle-button', title: 'Toggle Button' },
        ],
      },
    ]
  }
];

export default pages;
