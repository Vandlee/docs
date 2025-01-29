import * as React from 'react';
import type { YushiiPage } from 'docs/src/YushiiPage';
import type { YushiiProductId } from 'docs/src/modules/utils/getProductInfoFromUrl';

const PageContext = React.createContext<{
  activePage: YushiiPage | null;
  pages: YushiiPage[];
  productId: YushiiProductId;
}>(undefined!);

if (process.env.NODE_ENV !== 'production') {
  PageContext.displayName = 'PageContext';
}

export default PageContext;
