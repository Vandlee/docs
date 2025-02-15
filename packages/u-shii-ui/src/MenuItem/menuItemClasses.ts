import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface MenuItemClasses {
  /** Styles applied to the root element. */
  root: string;
  /** State class applied to the root element if keyboard focused. */
  focusVisible: string;
  /** Styles applied to the root element if dense. */
  dense: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** Styles applied to the root element if `divider={true}`. */
  divider: string;
  /** Styles applied to the inner `component` element unless `disableGutters={true}`. */
  gutters: string;
  /** State class applied to the root element if `selected={true}`. */
  selected: string;
}

export type MenuItemClassKey = keyof MenuItemClasses;

export function getMenuItemUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiMenuItem', slot);
}

const menuItemClasses: MenuItemClasses = generateUtilityClasses('UshiiMenuItem', [
  'root',
  'focusVisible',
  'dense',
  'disabled',
  'divider',
  'gutters',
  'selected',
]);

export default menuItemClasses;
