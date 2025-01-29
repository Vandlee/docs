import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface PopoverClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the Paper component. */
  paper: string;
}

export type PopoverClassKey = keyof PopoverClasses;

export function getPopoverUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiPopover', slot);
}

const popoverClasses: PopoverClasses = generateUtilityClasses('YushiiPopover', ['root', 'paper']);

export default popoverClasses;