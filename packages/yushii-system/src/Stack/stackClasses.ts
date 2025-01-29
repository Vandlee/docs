import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface StackClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type StackClassKey = keyof StackClasses;

export function getStackUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiStack', slot);
}

const stackClasses: StackClasses = generateUtilityClasses('YushiiStack', ['root']);

export default stackClasses;
