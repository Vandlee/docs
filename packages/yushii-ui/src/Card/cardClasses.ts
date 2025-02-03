import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface CardClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type CardClassKey = keyof CardClasses;

export function getCardUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiCard', slot);
}

const cardClasses: CardClasses = generateUtilityClasses('YushiiCard', ['root']);

export default cardClasses;
