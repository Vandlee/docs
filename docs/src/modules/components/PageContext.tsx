import * as React from 'react';
import type { UshiiPage } from 'docs/src/u-shiiPage';
import type { UshiiProductId } from 'docs/src/modules/utils/getProductInfoFromUrl';

const PageContext = React.createContext<{
  activePage: UshiiPage | null;
  pages: UshiiPage[];
  productId: UshiiProductId;
}>(undefined!);

if (process.env.NODE_ENV !== 'production') {
  PageContext.displayName = 'PageContext';
}

export default PageContext;
