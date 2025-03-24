import * as React from 'react';
import type { VandleePage } from 'docs/src/vandleePage';
import type { VandleeProductId } from 'docs/src/modules/utils/getProductInfoFromUrl';

const PageContext = React.createContext<{
  activePage: VandleePage | null;
  pages: VandleePage[];
  productId: VandleeProductId;
}>(undefined!);

if (process.env.NODE_ENV !== 'production') {
  PageContext.displayName = 'PageContext';
}

export default PageContext;
