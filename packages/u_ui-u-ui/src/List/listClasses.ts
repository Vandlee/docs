import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface ListClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element unless `disablePadding={true}`. */
  padding: string;
  /** Styles applied to the root element if dense. */
  dense: string;
  /** Styles applied to the root element if a `subheader` is provided. */
  subheader: string;
}

export type ListClassKey = keyof ListClasses;

export function getListUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiList', slot);
}

const listClasses: ListClasses = generateUtilityClasses('UshiiList', [
  'root',
  'padding',
  'dense',
  'subheader',
]);

export default listClasses;