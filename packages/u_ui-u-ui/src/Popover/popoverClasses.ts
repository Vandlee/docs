import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export interface PopoverClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the Paper component. */
  paper: string;
}

export type PopoverClassKey = keyof PopoverClasses;

export function getPopoverUtilityClass(slot: string): string {
  return generateUtilityClass('uiPopover', slot);
}

const popoverClasses: PopoverClasses = generateUtilityClasses('uiPopover', ['root', 'paper']);

export default popoverClasses;