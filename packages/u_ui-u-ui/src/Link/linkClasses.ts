import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export interface LinkClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `underline="none"`. */
  underlineNone: string;
  /** Styles applied to the root element if `underline="hover"`. */
  underlineHover: string;
  /** Styles applied to the root element if `underline="always"`. */
  underlineAlways: string;
  /** Styles applied to the root element if `component="button"`. */
  button: string;
  /** State class applied to the root element if the link is keyboard focused. */
  focusVisible: string;
}

export type LinkClassKey = keyof LinkClasses;

export function getLinkUtilityClass(slot: string): string {
  return generateUtilityClass('uiLink', slot);
}

const linkClasses: LinkClasses = generateUtilityClasses('uiLink', [
  'root',
  'underlineNone',
  'underlineHover',
  'underlineAlways',
  'button',
  'focusVisible',
]);

export default linkClasses;
