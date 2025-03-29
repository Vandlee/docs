import { pathnameToLanguage } from 'docs/src/modules/utils/helpers';

export type VandleeProductId = 
  | 'null' 
  | 'u-ui'
  | 'html'

// TODO: Añadir estas cosas

/* export type VandleeProductId = 
  | 'null' 
  | 'base-ui'
  | 'u-ui'
  | 'html'
  | 'javascript'
  | 'php'
  | 'python'; */

type VandleeProductCategoryId = 'null' | 'u_ui' | 'u-docs' |'core';

interface VandleeProductInfo {
  productId: VandleeProductId;
  productCategoryId: VandleeProductCategoryId;
}

const PRODUCT_CATEGORIES: Record<string, { productCategoryId: VandleeProductCategoryId; productId?: VandleeProductId }> = {
  'u-ui': { productCategoryId: 'u_ui', productId: 'u-ui' },
  'u_ui': { productCategoryId: 'u_ui' },
  'u-docs': { productCategoryId: 'u-docs' },
}

export default function getProductInfoFromUrl(asPath: string): VandleeProductInfo {
  const asPathWithoutLang = pathnameToLanguage(asPath).canonicalAsServer;
  const firstFolder = asPathWithoutLang.replace(/^\/+([^/]+)\/.*/, '$1');
  const secondFolder = asPathWithoutLang.replace(/^\/+[^/]+\/([^/]+).*/, '$1');

  const categoryInfo = PRODUCT_CATEGORIES[firstFolder] || { productCategoryId: 'null', productId: 'null' };

  return {
    productCategoryId: categoryInfo.productCategoryId,
    productId: categoryInfo.productId || (categoryInfo.productCategoryId !== 'null' ? secondFolder as VandleeProductId : 'null')
  }
}
