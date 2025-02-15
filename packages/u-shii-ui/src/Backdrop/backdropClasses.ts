import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface BackdropClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `invisible={true}`. */
  invisible: string;
}

export type BackdropClassKey = keyof BackdropClasses;

export function getBackdropUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiBackdrop', slot);
}

const backdropClasses: BackdropClasses = generateUtilityClasses('UshiiBackdrop', [
  'root',
  'invisible',
]);

export default backdropClasses;