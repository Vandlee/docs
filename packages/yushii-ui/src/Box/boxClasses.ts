import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';

export interface BoxClasses {
  root: string;
}

export type BoxClassKey = keyof BoxClasses;

const boxClasses: BoxClasses = generateUtilityClasses('YushiiBox', ['root']);

export default boxClasses;
