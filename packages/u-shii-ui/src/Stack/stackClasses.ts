import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import { StackClasses } from '@u-shii/system';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export type { StackClassKey } from '@u-shii/system';
export type { StackClasses };

export function getStackUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiStack', slot);
}

const stackClasses: StackClasses = generateUtilityClasses('UshiiStack', ['root']);

export default stackClasses;