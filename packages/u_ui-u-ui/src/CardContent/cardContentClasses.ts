import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface CardContentClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type CardContentClassKey = keyof CardContentClasses;

export function getCardContentUtilityClass(slot: string): string {
  return generateUtilityClass('uiCardContent', slot);
}

const cardContentClasses: CardContentClasses = generateUtilityClasses('uiCardContent', ['root']);

export default cardContentClasses;
