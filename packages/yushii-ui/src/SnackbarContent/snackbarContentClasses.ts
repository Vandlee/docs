import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

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
  return generateUtilityClass('YushiiSnackbarContent', slot);
}

const snackbarContentClasses: SnackbarContentClasses = generateUtilityClasses(
  'YushiiSnackbarContent',
  ['root', 'message', 'action'],
);

export default snackbarContentClasses;
