import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface ListItemSecondaryActionClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element when the parent `ListItem` has `disableGutters={true}`. */
  disableGutters: string;
}

export type ListItemSecondaryActionClassKey = keyof ListItemSecondaryActionClasses;

export function getListItemSecondaryActionClassesUtilityClass(slot: string): string {
  return generateUtilityClass('uiListItemSecondaryAction', slot);
}

const listItemSecondaryActionClasses: ListItemSecondaryActionClasses = generateUtilityClasses(
  'uiListItemSecondaryAction',
  ['root', 'disableGutters'],
);

export default listItemSecondaryActionClasses;
