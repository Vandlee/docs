import generateUtilityClasses from '@vandlee/utils/generateUtilityClasses';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';

export interface DrawerClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `variant="permanent or persistent"`. */
  docked: string;
  /** Styles applied to the Paper component. */
  paper: string;
  /** Styles applied to the root element if `anchor="left"`. */
  anchorLeft: string;
  /** Styles applied to the root element if `anchor="right"`. */
  anchorRight: string;
  /** Styles applied to the root element if `anchor="top"`. */
  anchorTop: string;
  /** Styles applied to the root element if `anchor="bottom"`. */
  anchorBottom: string;
  /** Styles applied to the Paper component if `anchor="left"`.
   *  @deprecated Combine the [.uiDrawer-anchorLeft](/material-ui/api/drawer/#drawer-classes-uiDrawer-anchorLeft) and [.uiDrawer-paper](/material-ui/api/drawer/#drawer-classes-uiDrawer-paper) classes instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  paperAnchorLeft: string;
  /** Styles applied to the Paper component if `anchor="right"`.
   *  @deprecated Combine the [.uiDrawer-anchorRight](/material-ui/api/drawer/#drawer-classes-uiDrawer-anchorRight) and [.uiDrawer-paper](/material-ui/api/drawer/#drawer-classes-uiDrawer-paper) classes instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  paperAnchorRight: string;
  /** Styles applied to the Paper component if `anchor="top"`.
   *  @deprecated Combine the [.uiDrawer-anchorTop](/material-ui/api/drawer/#drawer-classes-uiDrawer-anchorTop) and [.uiDrawer-paper](/material-ui/api/drawer/#drawer-classes-uiDrawer-paper) classes instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  paperAnchorTop: string;
  /** Styles applied to the Paper component if `anchor="bottom"`.
   *  @deprecated Combine the [.uiDrawer-anchorBottom](/material-ui/api/drawer/#drawer-classes-uiDrawer-anchorBottom) and [.uiDrawer-paper](/material-ui/api/drawer/#drawer-classes-uiDrawer-paper) classes instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  paperAnchorBottom: string;
  /** Styles applied to the Paper component if `anchor="left"` and `variant` is not "temporary".
   * @deprecated Combine the [.uiDrawer-anchorLeft](/material-ui/api/drawer/#drawer-classes-uiDrawer-anchorLeft), [.uiDrawer-docked](/material-ui/api/drawer/#drawer-classes-uiDrawer-docked) and [.uiDrawer-paper](/material-ui/api/drawer/#drawer-classes-uiDrawer-paper) classes instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  paperAnchorDockedLeft: string;
  /** Styles applied to the Paper component if `anchor="top"` and `variant` is not "temporary".
   * @deprecated Combine the [.uiDrawer-anchorTop](/material-ui/api/drawer/#drawer-classes-uiDrawer-anchorTop), [.uiDrawer-docked](/material-ui/api/drawer/#drawer-classes-uiDrawer-docked) and [.uiDrawer-paper](/material-ui/api/drawer/#drawer-classes-uiDrawer-paper) classes instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  paperAnchorDockedTop: string;
  /** Styles applied to the Paper component if `anchor="right"` and `variant` is not "temporary".
   * @deprecated Combine the [.uiDrawer-anchorRight](/material-ui/api/drawer/#drawer-classes-uiDrawer-anchorRight), [.uiDrawer-docked](/material-ui/api/drawer/#drawer-classes-uiDrawer-docked) and [.uiDrawer-paper](/material-ui/api/drawer/#drawer-classes-uiDrawer-paper) classes instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  paperAnchorDockedRight: string;
  /** Styles applied to the Paper component if `anchor="bottom"` and `variant` is not "temporary".
   * @deprecated Combine the [.uiDrawer-anchorBottom](/material-ui/api/drawer/#drawer-classes-uiDrawer-anchorBottom), [.uiDrawer-docked](/material-ui/api/drawer/#drawer-classes-uiDrawer-docked) and [.uiDrawer-paper](/material-ui/api/drawer/#drawer-classes-uiDrawer-paper) classes instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  paperAnchorDockedBottom: string;
  /** Styles applied to the Modal component. */
  modal: string;
}

export type DrawerClassKey = keyof DrawerClasses;

export function getDrawerUtilityClass(slot: string): string {
  return generateUtilityClass('uiDrawer', slot);
}

const drawerClasses: DrawerClasses = generateUtilityClasses('uiDrawer', [
  'root',
  'docked',
  'paper',
  'anchorLeft',
  'anchorRight',
  'anchorTop',
  'anchorBottom',
  'paperAnchorLeft',
  'paperAnchorRight',
  'paperAnchorTop',
  'paperAnchorBottom',
  'paperAnchorDockedLeft',
  'paperAnchorDockedRight',
  'paperAnchorDockedTop',
  'paperAnchorDockedBottom',
  'modal',
]);

export default drawerClasses;