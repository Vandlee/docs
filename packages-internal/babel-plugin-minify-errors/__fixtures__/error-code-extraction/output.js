import _formatYushiiErrorMessage from '@yushii/utils/formatYushiiErrorMessage';
throw new Error(process.env.NODE_ENV !== 'production' ? 'exists' : _formatYushiiErrorMessage(1));
throw new Error(
  process.env.NODE_ENV !== 'production' ? 'will be created' : _formatYushiiErrorMessage(2),
);
