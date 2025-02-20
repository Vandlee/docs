import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

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
  return generateUtilityClass('UshiiListSubheader', slot);
}

const listSubheaderClasses: ListSubheaderClasses = generateUtilityClasses('UshiiListSubheader', [
  'root',
  'colorPrimary',
  'colorInherit',
  'gutters',
  'inset',
  'sticky',
]);

export default listSubheaderClasses;
