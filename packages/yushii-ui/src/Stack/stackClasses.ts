import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import { StackClasses } from '@yushii/system';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export type { StackClassKey } from '@yushii/system';
export type { StackClasses };

export function getStackUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiStack', slot);
}

const stackClasses: StackClasses = generateUtilityClasses('YushiiStack', ['root']);

export default stackClasses;