const productNameProductId = {
  'u-ui': 'U-Ui',
  'joy-ui': 'Joy UI',
  'base-ui': 'Base UI',
  x: 'MUI X',
  system: 'MUI System',
  toolpad: 'Toolpad',
  'toolpad-studio': 'Toolpad Studio',
  'toolpad-core': 'Toolpad Core',
  'docs-infra': 'Docs Infra',
};

export function convertProductIdToName(productInfo) {
  return (
    productNameProductId[productInfo.productId] ||
    productNameProductId[productInfo.productCategoryId]
  );
}
