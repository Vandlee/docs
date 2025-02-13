import { YushiiPage } from 'docs/src/YushiiPage';

const pages: YushiiPage[] = [
  {
    pathname: '/php/tutorial-group',
    title: 'Tutorial Group',
    children: [
      { pathname: '/php/tutorial', title: 'Tutorial' },
      { pathname: '/php/tutorial/ola', title: 'ola' },
    ],
  },
];

export default pages;
