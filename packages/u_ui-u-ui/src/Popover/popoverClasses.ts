import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface PopoverClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the Paper component. */
  paper: string;
}

export type PopoverClassKey = keyof PopoverClasses;

export function getPopoverUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiPopover', slot);
}

const popoverClasses: PopoverClasses = generateUtilityClasses('UshiiPopover', ['root', 'paper']);

export default popoverClasses;