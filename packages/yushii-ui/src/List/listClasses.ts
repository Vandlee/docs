import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

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
  return generateUtilityClass('YushiiList', slot);
}

const listClasses: ListClasses = generateUtilityClasses('YushiiList', [
  'root',
  'padding',
  'dense',
  'subheader',
]);

export default listClasses;