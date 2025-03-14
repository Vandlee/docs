import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import { StackClasses } from '@u-shii/system';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export type { StackClassKey } from '@u-shii/system';
export type { StackClasses };

export function getStackUtilityClass(slot: string): string {
  return generateUtilityClass('uiStack', slot);
}

const stackClasses: StackClasses = generateUtilityClasses('uiStack', ['root']);

export default stackClasses;