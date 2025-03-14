import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface ModalClasses {
  /** Class name applied to the root element. */
  root: string;
  /** Class name applied to the root element if the `Modal` has exited. */
  hidden: string;
  /** Class name applied to the backdrop element. */
  backdrop: string;
}

export type ModalClassKey = keyof ModalClasses;

export function getModalUtilityClass(slot: string): string {
  return generateUtilityClass('uiModal', slot);
}

const modalClasses: ModalClasses = generateUtilityClasses('uiModal', [
  'root',
  'hidden',
  'backdrop',
]);

export default modalClasses;