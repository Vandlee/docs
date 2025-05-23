import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export interface ContainerClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `disableGutters={true}`. */
  disableGutters: string;
  /** Styles applied to the root element if `fixed={true}`. */
  fixed: string;
  /** Styles applied to the root element if `maxWidth="xs"`. */
  maxWidthXs: string;
  /** Styles applied to the root element if `maxWidth="sm"`. */
  maxWidthSm: string;
  /** Styles applied to the root element if `maxWidth="md"`. */
  maxWidthMd: string;
  /** Styles applied to the root element if `maxWidth="lg"`. */
  maxWidthLg: string;
  /** Styles applied to the root element if `maxWidth="xl"`. */
  maxWidthXl: string;
}

export type ContainerClassKey = keyof ContainerClasses;

export function getContainerUtilityClass(slot: string): string {
  return generateUtilityClass('uiContainer', slot);
}

const containerClasses: ContainerClasses = generateUtilityClasses('uiContainer', [
  'root',
  'disableGutters',
  'fixed',
  'maxWidthXs',
  'maxWidthSm',
  'maxWidthMd',
  'maxWidthLg',
  'maxWidthXl',
]);

export default containerClasses;