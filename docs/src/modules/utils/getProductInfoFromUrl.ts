import { pathnameToLanguage } from 'docs/src/modules/utils/helpers';

export type YushiiProductId = 
  | 'null' 
  | 'base-ui'
  | 'u-ui';

type YushiiProductCategoryId = 'null' | 'core';

interface YushiiProductInfo {
  productId: YushiiProductId;
  productCategoryId: YushiiProductCategoryId;
}

export default function getProductInfoFromUrl(asPath: string): YushiiProductInfo {
  const asPathWithoutLang = pathnameToLanguage(asPath).canonicalAsServer;
  const firstFolder = asPathWithoutLang.replace(/^\/+([^/]+)\/.*/, '$1');

  let productCategoryId = 'null';
  let productId = 'null';

  if (
    firstFolder === 'u-ui' ||
    firstFolder === 'base-ui'
  ) {
    productCategoryId = 'u-core';
    productId = firstFolder;
  }

  if (
    firstFolder === 'php'
   ) {
    productCategoryId = 'docs';
    productId = firstFolder;
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
  } as YushiiProductInfo;
}
