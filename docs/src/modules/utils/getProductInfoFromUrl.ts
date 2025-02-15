import { pathnameToLanguage } from 'docs/src/modules/utils/helpers';

export type UshiiProductId = 
  | 'null' 
  | 'base-ui'
  | 'u-ui'
  | 'javascript'
  | 'php'
  | 'python';

type UshiiProductCategoryId = 'null' | 'u-docs' |'core';

interface UshiiProductInfo {
  productId: UshiiProductId;
  productCategoryId: UshiiProductCategoryId;
}

export default function getProductInfoFromUrl(asPath: string): UshiiProductInfo {
  const asPathWithoutLang = pathnameToLanguage(asPath).canonicalAsServer;
  const firstFolder = asPathWithoutLang.replace(/^\/+([^/]+)\/.*/, '$1');
  const secondFolder = asPathWithoutLang.replace(/^\/+[^/]+\/([^/]+).*/, '$1');


  let productCategoryId = 'null';
  let productId = 'null';

  if (
    firstFolder === 'u-ui' ||
    firstFolder === 'base-ui'
  ) {
    productCategoryId = 'u-core';
    productId = firstFolder;
  }

  if (firstFolder === 'u-docs') {
    if (secondFolder) {
      productCategoryId = 'u-docs';
      productId = secondFolder;
    }
  }

  if (firstFolder === 'docs') {
    productId = firstFolder;
  }

  if (firstFolder === 'versions' || firstFolder === 'production-error') {
    productId = 'docs';
  }

  if (asPathWithoutLang.startsWith('/emperiments/docs/')) {
    productId = 'docs-infra';
  }

  return {
    productCategoryId,
    productId,
  } as UshiiProductInfo;
}
