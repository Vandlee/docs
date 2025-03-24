import _formatUiErrorMessage from '@vandlee/utils/formatUiErrorMessage';
throw new Error(process.env.NODE_ENV !== 'production' ? 'exists' : _formatUiErrorMessage(1));
throw new Error(
  process.env.NODE_ENV !== 'production' ? 'will be created' : _formatUiErrorMessage(2),
);
