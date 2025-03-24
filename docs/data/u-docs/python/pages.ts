import { VandleePage } from 'docs/src/vandleePage';

const pages: VandleePage[] = [
  {
    pathname: '/u-docs/python/grupo-ejemplo',
    title: 'Grupo de ejemplo',
    children: [
      { pathname: '/u-docs/python/ejemplo', title: 'Ruta de ejemplo' },
    ],
  },
];

export default pages;
