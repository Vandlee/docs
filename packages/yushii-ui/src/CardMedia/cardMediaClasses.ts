import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface CardMediaClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: string;
  /** Styles applied to the root element if `component="picture or img"`. */
  img: string;
}

export type CardMediaClassKey = keyof CardMediaClasses;

export function getCardMediaUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiCardMedia', slot);
}

const cardMediaClasses: CardMediaClasses = generateUtilityClasses('MuiCardMedia', [
  'root',
  'media',
  'img',
]);

export default cardMediaClasses;
