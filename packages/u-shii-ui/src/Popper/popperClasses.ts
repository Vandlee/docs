import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface PopperClasses {
  /** Class name applied to the root element. */
  root: string;
}

export type PopperClassKey = keyof PopperClasses;

export function getPopperUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiPopper', slot);
}

const popperClasses: PopperClasses = generateUtilityClasses('UshiiPopper', ['root']);

export default popperClasses;
