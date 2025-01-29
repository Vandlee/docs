import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import globalSelector from 'docs/src/modules/utils/globalSelector';

export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true, stylisPlugins: [prefixer, globalSelector] });
}
