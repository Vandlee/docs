import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface ListItemIconClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
  alignItemsFlexStart: string;
}

export type ListItemIconClassKey = keyof ListItemIconClasses;

export function getListItemIconUtilityClass(slot: string): string {
  return generateUtilityClass('uiistItemIcon', slot);
}

const listItemIconClasses: ListItemIconClasses = generateUtilityClasses('uiListItemIcon', [
  'root',
  'alignItemsFlexStart',
]);

export default listItemIconClasses;