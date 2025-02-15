import { UshiiPage } from 'docs/src/u-shiiPage';

const pages: UshiiPage[] = [
  {
    pathname: '/u-docs/python/grupo-ejemplo',
    title: 'Grupo de ejemplo',
    children: [
      { pathname: '/u-docs/python/ejemplo', title: 'Ruta de ejemplo' },
    ],
  },
];

export default pages;
