import _formatYushiiErrorMessage from '@yushii/utils/formatYushiiErrorMessage';
const foo = 'foo';
const bar = 'bar';
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? `YUSHII: ${foo}, ${bar}`
    : _formatYushiiErrorMessage(1, foo, bar),
);
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? `YUSHII: ${foo}` + `, ${bar}`
    : _formatYushiiErrorMessage(1, foo, bar),
);
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? 'YUSHII: ' + `${foo}, ${bar}`
    : _formatYushiiErrorMessage(1, foo, bar),
);
