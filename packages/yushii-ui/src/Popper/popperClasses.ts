import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface PopperClasses {
  /** Class name applied to the root element. */
  root: string;
}

export type PopperClassKey = keyof PopperClasses;

export function getPopperUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiPopper', slot);
}

const popperClasses: PopperClasses = generateUtilityClasses('YushiiPopper', ['root']);

export default popperClasses;
