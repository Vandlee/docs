import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface SnackbarContentClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message wrapper element. */
  message: string;
  /** Styles applied to the action wrapper element if `action` is provided. */
  action: string;
}

export type SnackbarContentClassKey = keyof SnackbarContentClasses;

export function getSnackbarContentUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiSnackbarContent', slot);
}

const snackbarContentClasses: SnackbarContentClasses = generateUtilityClasses(
  'UshiiSnackbarContent',
  ['root', 'message', 'action'],
);

export default snackbarContentClasses;
