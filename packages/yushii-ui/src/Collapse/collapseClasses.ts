import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface CollapseClasses {
  /** Styles applied to the root element. */
  root: string;
  /** State class applied to the root element if `orientation="horizontal"`. */
  horizontal: string;
  /** Styles applied to the root element when the transition has entered. */
  entered: string;
  /** Styles applied to the root element when the transition has exited and `collapsedSize` = 0px. */
  hidden: string;
  /** Styles applied to the outer wrapper element. */
  wrapper: string;
  /** Styles applied to the inner wrapper element. */
  wrapperInner: string;
}

export type CollapseClassKey = keyof CollapseClasses;

export function getCollapseUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiCollapse', slot);
}

const collapseClasses: CollapseClasses = generateUtilityClasses('YushiiCollapse', [
  'root',
  'horizontal',
  'vertical',
  'entered',
  'hidden',
  'wrapper',
  'wrapperInner',
]);

export default collapseClasses;