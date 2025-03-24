import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export interface ListSubheaderClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** Styles applied to the root element if `color="inherit"`. */
  colorInherit: string;
  /** Styles applied to the inner `component` element unless `disableGutters={true}`. */
  gutters: string;
  /** Styles applied to the root element if `inset={true}`. */
  inset: string;
  /** Styles applied to the root element unless `disableSticky={true}`. */
  sticky: string;
}

export type ListSubheaderClassKey = keyof ListSubheaderClasses;

export function getListSubheaderUtilityClass(slot: string): string {
  return generateUtilityClass('uiListSubheader', slot);
}

const listSubheaderClasses: ListSubheaderClasses = generateUtilityClasses('uiListSubheader', [
  'root',
  'colorPrimary',
  'colorInherit',
  'gutters',
  'inset',
  'sticky',
]);

export default listSubheaderClasses;
