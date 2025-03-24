import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import { StackClasses } from '@u_ui/system';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export type { StackClassKey } from '@u_ui/system';
export type { StackClasses };

export function getStackUtilityClass(slot: string): string {
  return generateUtilityClass('uiStack', slot);
}

const stackClasses: StackClasses = generateUtilityClasses('uiStack', ['root']);

export default stackClasses;