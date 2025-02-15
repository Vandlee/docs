import _formatUshiiErrorMessage from '@u-shii/utils/formatUshiiErrorMessage';
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? 'U-SHII: Expected valid input target.\n' + 'Did you use `inputComponent`'
    : _formatUshiiErrorMessage(1),
);
throw new Error(
  process.env.NODE_ENV !== 'production'
    ? `U-SHII: Expected valid input target.\n` + `Did you use \`inputComponent\``
    : _formatUshiiErrorMessage(1),
);
