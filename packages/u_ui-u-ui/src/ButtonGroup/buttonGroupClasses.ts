import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface ButtonGroupClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `variant="contained"`. */
  contained: string;
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: string;
  /** Styles applied to the root element if `variant="text"`. */
  text: string;
  /** Styles applied to the root element if `disableElevation={true}`. */
  disableElevation: string;
  /** State class applied to the child elements if `disabled={true}`. */
  disabled: string;
  /** Styles applied to the first button in the button group. */
  firstButton: string;
  /** Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: string;
  /** Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: string;
  /** Styles applied to the root element if `orientation="vertical"`. */
  vertical: string;
  /** Styles applied to the children. */
  grouped: string;
  /** Styles applied to the root element if `color="primary"` */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"` */
  colorSecondary: string;
  /** Styles applied to the children if `orientation="horizontal"`.
   * @deprecated Combine the [.ui-ButtonGroup-horizontal](/material-ui/api/button-group/#button-group-classes-horizontal) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedHorizontal: string;
  /** Styles applied to the children if `orientation="vertical"`.
   * @deprecated Combine the [.ui-ButtonGroup-vertical](/material-ui/api/button-group/#button-group-classes-vertical) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedVertical: string;
  /** Styles applied to the children if `variant="text"`.
   * @deprecated Combine the [.ui-ButtonGroup-text](/material-ui/api/button-group/#button-group-classes-text) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedText: string;
  /** Styles applied to the children if `variant="text"` and `orientation="horizontal"`.
   * @deprecated Combine the [.ui-ButtonGroup-text](/material-ui/api/button-group/#button-group-classes-text) , [.ui-ButtonGroup-horizontal](/material-ui/api/button-group/#button-group-classes-horizontal) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedTextHorizontal: string;
  /** Styles applied to the children if `variant="text"` and `orientation="vertical"`.
   * @deprecated Combine the [.ui-ButtonGroup-text](/material-ui/api/button-group/#button-group-classes-text) , [.ui-ButtonGroup-vertical](/material-ui/api/button-group/#button-group-classes-vertical) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedTextVertical: string;
  /** Styles applied to the children if `variant="text"` and `color="primary"`.
   * @deprecated Combine the [.ui-ButtonGroup-text](/material-ui/api/button-group/#button-group-classes-text) , [.ui-ButtonGroup-colorPrimary](/material-ui/api/button-group/#button-group-classes-colorPrimary) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedTextPrimary: string;
  /** Styles applied to the children if `variant="text"` and `color="secondary"`.
   * @deprecated Combine the [.ui-ButtonGroup-text](/material-ui/api/button-group/#button-group-classes-text) , [.ui-ButtonGroup-colorSecondary](/material-ui/api/button-group/#button-group-classes-colorSecondary) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedTextSecondary: string;
  /** Styles applied to the children if `variant="outlined"`.
   * @deprecated Combine the [.ui-ButtonGroup-outlined](/material-ui/api/button-group/#button-group-classes-outlined) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedOutlined: string;
  /** Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`.
   * @deprecated Combine the [.ui-ButtonGroup-outlined](/material-ui/api/button-group/#button-group-classes-outlined) , [.ui-ButtonGroup-horizontal](/material-ui/api/button-group/#button-group-classes-horizontal) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedOutlinedHorizontal: string;
  /** Styles applied to the children if `variant="outlined"` and `orientation="vertical"`.
   * @deprecated Combine the [.ui-ButtonGroup-outlined](/material-ui/api/button-group/#button-group-classes-outlined) , [.ui-ButtonGroup-vertical](/material-ui/api/button-group/#button-group-classes-vertical) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedOutlinedVertical: string;
  /** Styles applied to the children if `variant="outlined"` and `color="primary"`.
   * @deprecated Combine the [.ui-ButtonGroup-outlined](/material-ui/api/button-group/#button-group-classes-outlined) , [.ui-ButtonGroup-colorPrimary](/material-ui/api/button-group/#button-group-classes-colorPrimary) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedOutlinedPrimary: string;
  /** Styles applied to the children if `variant="outlined"` and `color="secondary"`.
   * @deprecated Combine the [.ui-ButtonGroup-outlined](/material-ui/api/button-group/#button-group-classes-outlined) , [.ui-ButtonGroup-colorSecondary](/material-ui/api/button-group/#button-group-classes-colorSecondary) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedOutlinedSecondary: string;
  /** Styles applied to the children if `variant="contained"`.
   * @deprecated Combine the [.ui-ButtonGroup-contained](/material-ui/api/button-group/#button-group-classes-contained) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedContained: string;
  /** Styles applied to the children if `variant="contained"` and `orientation="horizontal"`.
   * @deprecated Combine the [.ui-ButtonGroup-contained](/material-ui/api/button-group/#button-group-classes-contained) , [.ui-ButtonGroup-horizontal](/material-ui/api/button-group/#button-group-classes-horizontal) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedContainedHorizontal: string;
  /** Styles applied to the children if `variant="contained"` and `orientation="vertical"`.
   * @deprecated Combine the [.ui-ButtonGroup-contained](/material-ui/api/button-group/#button-group-classes-contained) , [.ui-ButtonGroup-vertical](/material-ui/api/button-group/#button-group-classes-vertical) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedContainedVertical: string;
  /** Styles applied to the children if `variant="contained"` and `color="primary"`.
   * @deprecated Combine the [.ui-ButtonGroup-contained](/material-ui/api/button-group/#button-group-classes-contained) , [.ui-ButtonGroup-colorPrimary](/material-ui/api/button-group/#button-group-classes-colorPrimary) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedContainedPrimary: string;
  /** Styles applied to the children if `variant="contained"` and `color="secondary"`.
   * @deprecated Combine the [.ui-ButtonGroup-contained](/material-ui/api/button-group/#button-group-classes-contained) , [.ui-ButtonGroup-colorSecondary](/material-ui/api/button-group/#button-group-classes-colorSecondary) and [.ui-ButtonGroup-grouped](/material-ui/api/button-group/#button-group-classes-grouped) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  groupedContainedSecondary: string;
  /** Styles applied to the last button in the button group. */
  lastButton: string;
  /** Styles applied to buttons in the middle of the button group. */
  middleButton: string;
}

export type ButtonGroupClassKey = keyof ButtonGroupClasses;

export function getButtonGroupUtilityClass(slot: string): string {
  return generateUtilityClass('uiButtonGroup', slot);
}

const buttonGroupClasses: ButtonGroupClasses = generateUtilityClasses('uiButtonGroup', [
  'root',
  'contained',
  'outlined',
  'text',
  'disableElevation',
  'disabled',
  'firstButton',
  'fullWidth',
  'horizontal',
  'vertical',
  'colorPrimary',
  'colorSecondary',
  'grouped',
  'groupedHorizontal',
  'groupedVertical',
  'groupedText',
  'groupedTextHorizontal',
  'groupedTextVertical',
  'groupedTextPrimary',
  'groupedTextSecondary',
  'groupedOutlined',
  'groupedOutlinedHorizontal',
  'groupedOutlinedVertical',
  'groupedOutlinedPrimary',
  'groupedOutlinedSecondary',
  'groupedContained',
  'groupedContainedHorizontal',
  'groupedContainedVertical',
  'groupedContainedPrimary',
  'groupedContainedSecondary',
  'lastButton',
  'middleButton',
]);

export default buttonGroupClasses;
