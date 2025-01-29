import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface ListItemIconClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
  alignItemsFlexStart: string;
}

export type ListItemIconClassKey = keyof ListItemIconClasses;

export function getListItemIconUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiListItemIcon', slot);
}

const listItemIconClasses: ListItemIconClasses = generateUtilityClasses('YushiiListItemIcon', [
  'root',
  'alignItemsFlexStart',
]);

export default listItemIconClasses;