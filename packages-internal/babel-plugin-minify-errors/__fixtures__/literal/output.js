import _formatYushiiErrorMessage from '@yushii/utils/formatYushiiErrorMessage';
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? 'Yushii: Expected valid input target.\n' + 'Did you use `inputComponent`'
    : _formatYushiiErrorMessage(1),
);
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? `Yushii: Expected valid input target.\n` + `Did you use \`inputComponent\``
    : _formatYushiiErrorMessage(1),
);
