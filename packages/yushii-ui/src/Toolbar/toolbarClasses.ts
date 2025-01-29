import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface ToolbarClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element unless `disableGutters={true}` */
  gutters: string;
  /** Styles applied to the root element if `variant="regular"` */
  regular: string;
  /** Styles applied to the root element if `variant="dense"` */
  dense: string;
}

export type ToolbarClassKey = keyof ToolbarClasses;

export function getToolbarUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiToolbar', slot);
}

const toolbarClasses: ToolbarClasses = generateUtilityClasses('YushiiToolbar', [
  'root',
  'gutters',
  'regular',
  'dense',
]);

export default toolbarClasses;
