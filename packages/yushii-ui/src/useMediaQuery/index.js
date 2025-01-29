import { unstable_createUseMediaQuery } from '@yushii/system/useMediaQuery';
import THEME_ID from '../styles/identifier';

const useMediaQuery = unstable_createUseMediaQuery({ themeId: THEME_ID });

export default useMediaQuery;