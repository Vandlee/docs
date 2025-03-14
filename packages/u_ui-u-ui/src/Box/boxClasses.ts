import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';

export interface BoxClasses {
  root: string;
}

export type BoxClassKey = keyof BoxClasses;

const boxClasses: BoxClasses = generateUtilityClasses('uiBox', ['root']);

export default boxClasses;
