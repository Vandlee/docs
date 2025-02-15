import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface StackClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type StackClassKey = keyof StackClasses;

export function getStackUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiStack', slot);
}

const stackClasses: StackClasses = generateUtilityClasses('UshiiStack', ['root']);

export default stackClasses;
