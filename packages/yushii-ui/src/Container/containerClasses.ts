import { ContainerClasses } from '@yushii/system';
import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export type { ContainerClassKey } from '@yushii/system';
export type { ContainerClasses };

export function getContainerUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiContainer', slot);
}

const containerClasses: ContainerClasses = generateUtilityClasses('YushiiContainer', [
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
