import { YushiiPage } from 'docs/src/YushiiPage';

const pages: YushiiPage[] = [
  {
    pathname: '/ui/getting-started-group',
    title: 'Getting started',
    children: [
      { pathname: '/ui/getting-started', title: 'Overview' },
      { pathname: '/ui/getting-started/installation' },
      { pathname: '/ui/getting-started/usage' },
      { pathname: '/ui/getting-started/learn' },
      { pathname: '/ui/getting-started/faq', title: 'FAQs' },
      { pathname: '/ui/getting-started/supported-platforms' },
    ],
  },
  {
    pathname: '/ui/react-',
    title: 'Components',
    children: [
      { pathname: '/ui/all-components', title: 'All components' },
      {
        pathname: '/ui/components/inputs',
        subheader: 'inputs',
        children: [
          { pathname: '/ui/react-autocomplete' },
          { pathname: '/ui/react-button' },
          { pathname: '/ui/react-button-group', title: 'Button Group' },
          { pathname: '/ui/react-checkbox' },
          {
            pathname: '/ui/react-floating-action-button',
            title: 'Floating Action Button',
          },
          { pathname: '/ui/react-radio-button', title: 'Radio Group' },
          { pathname: '/ui/react-rating' },
          { pathname: '/ui/react-select' },
          { pathname: '/ui/react-slider' },
          { pathname: '/ui/react-switch' },
          { pathname: '/ui/react-text-field', title: 'Text Field' },
          { pathname: '/ui/react-transfer-list', title: 'Transfer List' },
          { pathname: '/ui/react-toggle-button', title: 'Toggle Button' },
        ],
      },
    ]
  }
];

export default pages;
