import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface SnackbarClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
  anchorOriginTopCenter: string;
  /** Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
  anchorOriginBottomCenter: string;
  /** Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
  anchorOriginTopRight: string;
  /** Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
  anchorOriginBottomRight: string;
  /** Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
  anchorOriginTopLeft: string;
  /** Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
  anchorOriginBottomLeft: string;
}

export type SnackbarClassKey = keyof SnackbarClasses;

export function getSnackbarUtilityClass(slot: string): string {
  return generateUtilityClass('uiSnackbar', slot);
}

const snackbarClasses: SnackbarClasses = generateUtilityClasses('uiSnackbar', [
  'root',
  'anchorOriginTopCenter',
  'anchorOriginBottomCenter',
  'anchorOriginTopRight',
  'anchorOriginBottomRight',
  'anchorOriginTopLeft',
  'anchorOriginBottomLeft',
]);

export default snackbarClasses;
