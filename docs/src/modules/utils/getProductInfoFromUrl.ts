import { pathnameToLanguage } from 'docs/src/modules/utils/helpers';

export type YushiiProductId = 
  | 'null' 
  | 'base-ui'
  | 'u-ui'
  | 'javascript'
  | 'php'
  | 'python';

type YushiiProductCategoryId = 'null' | 'u-docs' |'core';

interface YushiiProductInfo {
  productId: YushiiProductId;
  productCategoryId: YushiiProductCategoryId;
}

export default function getProductInfoFromUrl(asPath: string): YushiiProductInfo {
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
  } as YushiiProductInfo;
}
