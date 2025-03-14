import { ContainerClasses } from '@u-shii/system';
import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export type { ContainerClassKey } from '@u-shii/system';
export type { ContainerClasses };

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
