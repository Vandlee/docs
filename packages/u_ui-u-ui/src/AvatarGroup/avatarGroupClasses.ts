import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface AvatarGroupClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the avatar elements. */
  avatar: string;
}

export type AvatarGroupClassKey = keyof AvatarGroupClasses;

export function getAvatarGroupUtilityClass(slot: string): string {
  return generateUtilityClass('uiAvatarGroup', slot);
}

const avatarGroupClasses: AvatarGroupClasses = generateUtilityClasses('uiAvatarGroup', [
  'root',
  'avatar',
]);

export default avatarGroupClasses;
