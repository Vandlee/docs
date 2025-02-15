import { UshiiPage } from 'docs/src/u-shiiPage';

const pages: UshiiPage[] = [
  {
    pathname: '/u-docs/php/grupo-ejemplo',
    title: 'Grupo de ejemplo',
    children: [
      { pathname: '/u-docs/php/ejemplo', title: 'Ruta de ejemplo' },
    ],
  },
];

export default pages;
