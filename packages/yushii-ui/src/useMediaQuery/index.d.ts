import { UseMediaQueryOptions } from '@yushii/system/useMediaQuery';
import { Theme } from '../styles/createTheme';

export * from '@yushii/system/useMediaQuery';

// TODO v7: remove the generic. It's only used to prevent a breaking change in v6 from system's useMediaQuery in https://github.com/mui/material-ui/pull/44339.
declare function useMediaQuery<T = Theme>(
  queryInput: string | ((theme: T) => string),
  options?: UseMediaQueryOptions,
): boolean;

export default useMediaQuery;