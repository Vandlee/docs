import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export interface CardActionsClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element unless `disableSpacing={true}`. */
  spacing: string;
}

export type CardActionsClassKey = keyof CardActionsClasses;

export function getCardActionsUtilityClass(slot: string): string {
  return generateUtilityClass('uiCardActions', slot);
}

const cardActionsClasses: CardActionsClasses = generateUtilityClasses('uiCardActions', [
  'root',
  'spacing',
]);

export default cardActionsClasses;
