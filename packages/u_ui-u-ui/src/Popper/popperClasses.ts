import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export interface PopperClasses {
  /** Class name applied to the root element. */
  root: string;
}

export type PopperClassKey = keyof PopperClasses;

export function getPopperUtilityClass(slot: string): string {
  return generateUtilityClass('uiPopper', slot);
}

const popperClasses: PopperClasses = generateUtilityClasses('uiPopper', ['root']);

export default popperClasses;
