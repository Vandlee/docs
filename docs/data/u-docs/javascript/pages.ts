import { VandleePage } from 'docs/src/vandleePage';

const pages: VandleePage[] = [
  {
    pathname: '/u-docs/javascript/grupo-ejemplo',
    title: 'Grupo de ejemplo',
    children: [
      { pathname: '/u-docs/javascript/ejemplo', title: 'Ruta de ejemplo' },
    ],
  },
];

export default pages;
