import _formatUiErrorMessage from '@vandlee/utils/formatUiErrorMessage';
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? 'VANDLEE: Expected valid input target.\n' + 'Did you use `inputComponent`'
    : _formatUiErrorMessage(1),
);
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? `VANDLEE: Expected valid input target.\n` + `Did you use \`inputComponent\``
    : _formatUiErrorMessage(1),
);
