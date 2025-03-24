import * as CSS from 'csstype';
import { Breakpoints } from '@u_ui/system';

export type NormalCssProperties = CSS.Properties<number | string>;
export type Fontface = CSS.AtRule.FontFace & { fallbacks?: CSS.AtRule.FontFace[] };

export interface BaseCSSProperties extends NormalCssProperties {
  '@font-face'?: FontFace | Fontface[];
}

export interface CSSProperties extends BaseCSSProperties {
  [k: string]: unknown | CSSProperties;
}

export interface Mixins {
  toolbar: CSSProperties;
}

export interface MixinsOptions extends Partial<Mixins> {}

export default function createMixins(breakpoints: Breakpoints, mixins: MixinsOptions): Mixins;
