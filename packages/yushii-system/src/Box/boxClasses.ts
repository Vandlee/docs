import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';

export interface BoxClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type BoxClassKey = keyof BoxClasses;

const boxClasses: BoxClasses = generateUtilityClasses('YushiiBox', ['root']);

export default boxClasses;
