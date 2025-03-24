import _formatUiErrorMessage from '@vandlee/utils/formatUiErrorMessage';
const foo = 'foo';
const bar = 'bar';
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? `VANDLEE: ${foo}, ${bar}`
    : _formatUiErrorMessage(1, foo, bar),
);
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? `VANDLEE: ${foo}` + `, ${bar}`
    : _formatUiErrorMessage(1, foo, bar),
);
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? 'VANDLEE: ' + `${foo}, ${bar}`
    : _formatUiErrorMessage(1, foo, bar),
);
