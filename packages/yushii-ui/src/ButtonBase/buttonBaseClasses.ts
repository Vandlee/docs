import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface ButtonBaseClasses {
  /** Styles applied to the root element. */
  root: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root element if keyboard focused. */
  focusVisible: string;
}

export type ButtonBaseClassKey = keyof ButtonBaseClasses;

export function getButtonBaseUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiButtonBase', slot);
}

const buttonBaseClasses: ButtonBaseClasses = generateUtilityClasses('YushiiButtonBase', [
  'root',
  'disabled',
  'focusVisible',
]);

export default buttonBaseClasses;
