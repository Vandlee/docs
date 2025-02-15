import _formatUshiiErrorMessage from '@u-shii/utils/formatUshiiErrorMessage';
const foo = 'foo';
const bar = 'bar';
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? `U-SHII: ${foo}, ${bar}`
    : _formatUshiiErrorMessage(1, foo, bar),
);
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? `U-SHII: ${foo}` + `, ${bar}`
    : _formatUshiiErrorMessage(1, foo, bar),
);
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? 'U-SHII: ' + `${foo}, ${bar}`
    : _formatUshiiErrorMessage(1, foo, bar),
);
