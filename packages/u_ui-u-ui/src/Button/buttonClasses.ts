import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export interface ButtonClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `variant="text"`. */
  text: string;
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: string;
  /** Styles applied to the root element if `variant="contained"`. */
  contained: string;
  /** Styles applied to the root element if `disableIconAnimation={true}.` */
  disableIconAnimation: string;
  /** Styles applied to the root element if `enableElevation={true}`. */
  enableElevation: string;
  /** State class applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** Styles applied to the root element if `color="inherit"`. */
  colorInherit: string;
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: string;
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: string;
  /** Styles applied to the root element if `size="large"`. */
  sizeLarge: string;
  /** Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: string;
  /** Styles applied to the icon element if supplied */
  icon: string;
  /** Styles applied to the startIcon element if supplied. */
  startIcon: string;
  /** Styles applied to the endIcon element if supplied. */
  endIcon: string;
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** Styles applied to the root element if `color="success"`. */
  colorSuccess: string;
  /** Styles applied to the root element if `color="error"`. */
  colorError: string;
  /** Styles applied to the root element if `color="info"`. */
  colorInfo: string;
  /** Styles applied to the root element if `color="warning"`. */
  colorWarning: string;
  /** Styles applied to the root element if `loading={true}`. */
  loading: string;
  /** Styles applied to the loadingWrapper element. */
  loadingWrapper: string;
  /** Styles applied to the loadingIconPlaceholder element. */
  loadingIconPlaceholder: string;
  /** Styles applied to the loadingIndicator element. */
  loadingIndicator: string;
  /** Styles applied to the root element if `loadingPosition="center"`. */
  loadingPositionCenter: string;
  /** Styles applied to the root element if `loadingPosition="start"`. */
  loadingPositionStart: string;
  /** Styles applied to the root element if `loadingPosition="end"`. */
  loadingPositionEnd: string;
  /** Styles applied to the root element if `isRadius={true}`. */
  isRadius: string;
}

export type ButtonClassKey = keyof ButtonClasses;

export function getButtonUtilityClass(slot: string): string {
  return generateUtilityClass('uiButton', slot);
}

const buttonClasses: ButtonClasses = generateUtilityClasses('uiButton', [
  'root',
  'text',
  'outlined',
  'contained',
  'disableIconAnimation',
  'enableElevation',
  'focusVisible',
  'disabled',
  'colorInherit',
  'colorPrimary',
  'colorSecondary',
  'colorSuccess',
  'colorError',
  'colorInfo',
  'colorWarning',
  'sizeSmall',
  'sizeMedium',
  'sizeLarge',
  'fullWidth',
  'startIcon',
  'endIcon',
  'icon',
  'loading',
  'loadingWrapper',
  'loadingIconPlaceholder',
  'loadingIndicator',
  'loadingPositionCenter',
  'loadingPositionStart',
  'loadingPositionEnd',
  'isRadius',
]);

export default buttonClasses;