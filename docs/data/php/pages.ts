import { YushiiPage } from 'docs/src/YushiiPage';

const pages: YushiiPage[] = [
  {
    pathname: '/u-docs/php/grupo-ejemplo',
    title: 'Grupo de ejemplo',
    children: [
      { pathname: '/u-docs/php/ejemplo', title: 'Ruta de ejemplo' },
    ],
  },
];

export default pages;
