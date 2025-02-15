import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface CircularProgressClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `variant="determinate"`. */
  determinate: string;
  /** Styles applied to the root element if `variant="indeterminate"`. */
  indeterminate: string;
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** Styles applied to the svg element. */
  svg: string;
  /** Styles applied to the `circle` svg path. */
  circle: string;
  /** Styles applied to the `circle` svg path if `variant="determinate"`.
   * @deprecated Combine the [.UshiiCircularProgress-circle](/material-ui/api/circular-progress/#circular-progress-classes-circle) and [.UshiiCircularProgress-determinate](/material-ui/api/circular-progress/#circular-progress-classes-determinate) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  circleDeterminate: string;
  /** Styles applied to the `circle` svg path if `variant="indeterminate"`.
   * @deprecated Combine the [.UshiiCircularProgress-circle](/material-ui/api/circular-progress/#circular-progress-classes-circle) and [.UshiiCircularProgress-indeterminate](/material-ui/api/circular-progress/#circular-progress-classes-indeterminate) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  circleIndeterminate: string;
  /** Styles applied to the `circle` svg path if `disableShrink={true}`. */
  circleDisableShrink: string;
}

export type CircularProgressClassKey = keyof CircularProgressClasses;

export function getCircularProgressUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiCircularProgress', slot);
}

const circularProgressClasses: CircularProgressClasses = generateUtilityClasses(
  'UshiiCircularProgress',
  [
    'root',
    'determinate',
    'indeterminate',
    'colorPrimary',
    'colorSecondary',
    'svg',
    'circle',
    'circleDeterminate',
    'circleIndeterminate',
    'circleDisableShrink',
  ],
);

export default circularProgressClasses;