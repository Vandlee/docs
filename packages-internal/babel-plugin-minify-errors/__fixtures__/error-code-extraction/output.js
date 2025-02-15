import _formatUshiiErrorMessage from '@u-shii/utils/formatUshiiErrorMessage';
throw new Error(process.env.NODE_ENV !== 'production' ? 'exists' : _formatUshiiErrorMessage(1));
throw new Error(
  process.env.NODE_ENV !== 'production' ? 'will be created' : _formatUshiiErrorMessage(2),
);
