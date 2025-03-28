import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export interface BackdropClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `invisible={true}`. */
  invisible: string;
}

export type BackdropClassKey = keyof BackdropClasses;

export function getBackdropUtilityClass(slot: string): string {
  return generateUtilityClass('uiBackdrop', slot);
}

const backdropClasses: BackdropClasses = generateUtilityClasses('uiBackdrop', [
  'root',
  'invisible',
]);

export default backdropClasses;