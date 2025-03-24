import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export interface CardClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type CardClassKey = keyof CardClasses;

export function getCardUtilityClass(slot: string): string {
  return generateUtilityClass('uiCard', slot);
}

const cardClasses: CardClasses = generateUtilityClasses('uiCard', ['root']);

export default cardClasses;
