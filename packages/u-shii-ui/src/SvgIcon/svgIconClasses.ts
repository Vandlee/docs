import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface SvgIconClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** Styles applied to the root element if `color="action"`. */
  colorAction: string;
  /** Styles applied to the root element if `color="error"`. */
  colorError: string;
  /** Styles applied to the root element if `color="disabled"`. */
  colorDisabled: string;
  /** Styles applied to the root element if `fontSize="inherit"`. */
  fontSizeInherit: string;
  /** Styles applied to the root element if `fontSize="small"`. */
  fontSizeSmall: string;
  /** Styles applied to the root element if `fontSize="medium"`. */
  fontSizeMedium: string;
  /** Styles applied to the root element if `fontSize="large"`. */
  fontSizeLarge: string;
}

export type SvgIconClassKey = keyof SvgIconClasses;

export function getSvgIconUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiSvgIcon', slot);
}

const svgIconClasses: SvgIconClasses = generateUtilityClasses('UshiiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);

export default svgIconClasses;
