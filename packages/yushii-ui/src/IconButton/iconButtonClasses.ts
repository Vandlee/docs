import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface IconButtonClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `edge="start"`. */
  edgeStart: string;
  /** Styles applied to the root element if `edge="end"`. */
  edgeEnd: string;
  /** Styles applied to the root element if `color="inherit"`. */
  colorInherit: string;
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** Styles applied to the root element if `color="error"`. */
  colorError: string;
  /** Styles applied to the root element if `color="info"`. */
  colorInfo: string;
  /** Styles applied to the root element if `color="success"`. */
  colorSuccess: string;
  /** Styles applied to the root element if `color="warning"`. */
  colorWarning: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: string;
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: string;
  /** Styles applied to the root element if `size="large"`. */
  sizeLarge: string;
  /** Styles applied to the root element if `loading={true}`. */
  loading: string;
  /** Styles applied to the loadingIndicator element. */
  loadingIndicator: string;
}

export type IconButtonClassKey = keyof IconButtonClasses;

export function getIconButtonUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiIconButton', slot);
}

const iconButtonClasses: IconButtonClasses = generateUtilityClasses('YushiiIconButton', [
  'root',
  'disabled',
  'colorInherit',
  'colorPrimary',
  'colorSecondary',
  'colorError',
  'colorInfo',
  'colorSuccess',
  'colorWarning',
  'edgeStart',
  'edgeEnd',
  'sizeSmall',
  'sizeMedium',
  'sizeLarge',
  'loading',
  'loadingIndicator',
]);

export default iconButtonClasses;