import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';

export interface BoxClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type BoxClassKey = keyof BoxClasses;

const boxClasses: BoxClasses = generateUtilityClasses('uiBox', ['root']);

export default boxClasses;
