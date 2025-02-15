import { UshiiPage } from 'docs/src/u-shiiPage';

const pages: UshiiPage[] = [
  {
    pathname: '/u-docs/javascript/grupo-ejemplo',
    title: 'Grupo de ejemplo',
    children: [
      { pathname: '/u-docs/javascript/ejemplo', title: 'Ruta de ejemplo' },
    ],
  },
];

export default pages;
