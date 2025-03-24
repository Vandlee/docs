import { ContainerClasses } from '@u_ui/system';
import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export type { ContainerClassKey } from '@u_ui/system';
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
