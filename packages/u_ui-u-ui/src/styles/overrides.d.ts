import { CSSObject, CSSInterpolation, Interpolation } from '@u-shii/system';
import { PopperClassKey } from '../Popper';
import { ComponentsPropsList } from './props';
/* import { AccordionActionsClassKey } from '../AccordionActions';
import { AccordionClassKey } from '../Accordion';
import { AccordionDetailsClassKey } from '../AccordionDetails';
import { AccordionSummaryClassKey } from '../AccordionSummary';
*/
import { AlertClassKey } from '../Alert';
/*
import { AlertTitleClassKey } from '../AlertTitle';
*/
import { AppBarClassKey } from '../AppBar';
/*
import { AutocompleteClassKey } from '../Autocomplete';
*/
import { AvatarClassKey } from '../Avatar';
import { AvatarGroupClassKey } from '../AvatarGroup';
import { BackdropClassKey } from '../Backdrop';
import { BadgeClassKey } from '../Badge';
/*
import { BottomNavigationActionClassKey } from '../BottomNavigationAction';
import { BottomNavigationClassKey } from '../BottomNavigation';
import { BreadcrumbsClassKey } from '../Breadcrumbs';
*/
import { ButtonBaseClassKey } from '../ButtonBase';
import { ButtonClassKey } from '../Button';
import { ButtonGroupClassKey } from '../ButtonGroup';
/*
import { CardActionAreaClassKey } from '../CardActionArea';
import { CardActionsClassKey } from '../CardActions';
*/
import { CardClassKey } from '../Card';
/*
import { CardContentClassKey } from '../CardContent';
import { CardHeaderClassKey } from '../CardHeader';
*/
import { CardMediaClassKey } from '../CardMedia';
/*
import { CheckboxClassKey } from '../Checkbox';
*/
import { ChipClassKey } from '../Chip';
import { CircularProgressClassKey } from '../CircularProgress';
import { CollapseClassKey } from '../Collapse';
import { ContainerClassKey } from '../Container';
/*
import { DialogActionsClassKey } from '../DialogActions';
import { DialogClassKey } from '../Dialog';
import { DialogContentClassKey } from '../DialogContent';
import { DialogContentTextClassKey } from '../DialogContentText';
import { DialogTitleClassKey } from '../DialogTitle';
*/
import { DividerClassKey } from '../Divider';
import { DrawerClassKey } from '../Drawer';
/*
import { FabClassKey } from '../Fab';
import { FilledInputClassKey } from '../FilledInput';
import { FormControlClassKey } from '../FormControl';
import { FormControlLabelClassKey } from '../FormControlLabel';
import { FormGroupClassKey } from '../FormGroup';
import { FormHelperTextClassKey } from '../FormHelperText';
import { FormLabelClassKey } from '../FormLabel';
*/
import { GridClassKey } from '../Grid';
import { IconButtonClassKey } from '../IconButton';
/*
import { IconClassKey } from '../Icon';
import { ImageListClassKey } from '../ImageList';
import { ImageListItemBarClassKey } from '../ImageListItemBar';
import { ImageListItemClassKey } from '../ImageListItem';
import { InputAdornmentClassKey } from '../InputAdornment';
import { InputBaseClassKey } from '../InputBase';
import { InputClassKey } from '../Input';
import { InputLabelClassKey } from '../InputLabel';
import { LinearProgressClassKey } from '../LinearProgress';
*/
import { LinkClassKey } from '../Link';
import { ListClassKey } from '../List';
import { ListItemAvatarClassKey } from '../ListItemAvatar';
import { ListItemClassKey } from '../ListItem';
import { ListItemButtonClassKey } from '../ListItemButton';
/*
import { ListItemIconClassKey } from '../ListItemIcon';
*/
import { ListItemSecondaryActionClassKey } from '../ListItemSecondaryAction';

import { ListItemTextClassKey } from '../ListItemText';
import { ListSubheaderClassKey } from '../ListSubheader';
import { MenuClassKey } from '../Menu';
import { MenuItemClassKey } from '../MenuItem';
import { MenuListClassKey } from '../MenuList';
/*
import { MobileStepperClassKey } from '../MobileStepper';
*/
import { ModalClassKey } from '../Modal';
/*
import { NativeSelectClassKey } from '../NativeSelect';
import { OutlinedInputClassKey } from '../OutlinedInput';
import { PaginationClassKey } from '../Pagination';
import { PaginationItemClassKey } from '../PaginationItem';
*/
import { PaperClassKey } from '../Paper';
import { PopoverClassKey } from '../Popover';
/*
import { RadioClassKey } from '../Radio';
import { RadioGroupClassKey } from '../RadioGroup';
*/
import { RatingClassKey } from '../Rating';
/*
import { ScopedCssBaselineClassKey } from '../ScopedCssBaseline';
import { SelectClassKey } from '../Select';
import { SkeletonClassKey } from '../Skeleton';
import { SliderClassKey } from '../Slider';
*/
import { SnackbarClassKey } from '../Snackbar';
import { SnackbarContentClassKey } from '../SnackbarContent';
/*
import { SpeedDialClassKey } from '../SpeedDial';
import { SpeedDialActionClassKey } from '../SpeedDialAction';
import { SpeedDialIconClassKey } from '../SpeedDialIcon';
*/
import { StackClassKey } from '../Stack';
/*
import { StepButtonClasskey } from '../StepButton';
import { StepClasskey } from '../Step';
import { StepConnectorClasskey } from '../StepConnector';
import { StepContentClasskey } from '../StepContent';
import { StepIconClasskey } from '../StepIcon';
import { StepLabelClasskey } from '../StepLabel';
import { StepperClasskey } from '../Stepper';
*/
import { SvgIconClassKey } from '../SvgIcon';
/*
import { SwitchClassKey } from '../Switch';
import { TabClassKey } from '../Tab';
import { TableBodyClassKey } from '../TableBody';
import { TableCellClassKey } from '../TableCell';
import { TableClassKey } from '../Table';
import { TableContainerClassKey } from '../TableContainer';
import { TableFooterClassKey } from '../TableFooter';
import { TableHeadClassKey } from '../TableHead';
import { TablePaginationClassKey } from '../TablePagination';
import { TableRowClassKey } from '../TableRow';
import { TableSortLabelClassKey } from '../TableSortLabel';
import { TabsClassKey } from '../Tabs';
import { TextFieldClassKey } from '../TextField';
  */
import { ToggleButtonClassKey } from '../ToggleButton';
import { ToggleButtonGroupClassKey } from '../ToggleButtonGroup';
import { ToolbarClassKey } from '../Toolbar';
import { TooltipClassKey } from '../Tooltip';
import { TouchRippleClassKey } from '../ButtonBase/TouchRipple';
import { TypographyClassKey } from '../Typography';

export type OverridesStyleRules<
  ClassKey extends string = string,
  ComponentName = keyof ComponentsPropsList,
  Theme = unknown,
> = Record<
  ClassKey,
  Interpolation<
    // Record<string, unknown> is for other props that the slot receive internally
    // Documenting all ownerStates could be a huge work, let's wait until we have a real needs from developers.
    (ComponentName extends keyof ComponentsPropsList
      ? ComponentsPropsList[ComponentName] &
          Record<string, unknown> & {
            ownerState: ComponentsPropsList[ComponentName] & Record<string, unknown>;
          }
      : {}) & {
      theme: Theme;
    } & Record<string, unknown>
  >
>;

export type ComponentsOverrides<Theme = unknown> = {
  [Name in keyof ComponentNameToClassKey]?: Partial<
    OverridesStyleRules<ComponentNameToClassKey[Name], Name, Theme>
  >;
} & {
  uiCssBaseline?: CSSObject | string | ((theme: Theme) => CSSInterpolation);
};

export interface ComponentNameToClassKey {
  uiAlert: AlertClassKey;
  /*
  uiAlertTitle: AlertTitleClassKey;
  */
  uiAppBar: AppBarClassKey;
  /*
  uiAutocomplete: AutocompleteClassKey;
  */
  uiAvatar: AvatarClassKey;
  uiAvatarGroup: AvatarGroupClassKey;
  uiBackdrop: BackdropClassKey;
  uiBadge: BadgeClassKey;
  /*
  uiBottomNavigation: BottomNavigationClassKey;
  uiBottomNavigationAction: BottomNavigationActionClassKey;
  uiBreadcrumbs: BreadcrumbsClassKey;
  */
  uiButton: ButtonClassKey;
  uiButtonBase: ButtonBaseClassKey;
  uiButtonGroup: ButtonGroupClassKey;
  uiCard: CardClassKey;
  /*
  uiCardActionArea: CardActionAreaClassKey;
  uiCardActions: CardActionsClassKey;
  uiCardContent: CardContentClassKey;
  uiCardHeader: CardHeaderClassKey;
  */
  uiCardMedia: CardMediaClassKey;
  /*
  uiCheckbox: CheckboxClassKey;
  */
  uiChip: ChipClassKey;
  uiCircularProgress: CircularProgressClassKey;
  uiCollapse: CollapseClassKey;
  uiContainer: ContainerClassKey;
  /*
  uiDialog: DialogClassKey;
  uiDialogActions: DialogActionsClassKey;
  uiDialogContent: DialogContentClassKey;
  uiDialogContentText: DialogContentTextClassKey;
  uiDialogTitle: DialogTitleClassKey;
  */
  uiDivider: DividerClassKey;
  uiDrawer: DrawerClassKey;
  /*
  uiAccordion: AccordionClassKey;
  uiAccordionActions: AccordionActionsClassKey;
  uiAccordionDetails: AccordionDetailsClassKey;
  uiAccordionSummary: AccordionSummaryClassKey;
  uiFab: FabClassKey;
  uiFilledInput: FilledInputClassKey;
  uiFormControl: FormControlClassKey;
  uiFormControlLabel: FormControlLabelClassKey;
  uiFormGroup: FormGroupClassKey;
  uiFormHelperText: FormHelperTextClassKey;
  uiFormLabel: FormLabelClassKey;
  */
  uiGrid: GridClassKey;
  /*
  uiIcon: IconClassKey;
  */
  uiIconButton: IconButtonClassKey;
  /*
  uiImageList: ImageListClassKey;
  uiImageListItem: ImageListItemClassKey;
  uiImageListItemBar: ImageListItemBarClassKey;
  uiInput: InputClassKey;
  uiInputAdornment: InputAdornmentClassKey;
  uiInputBase: InputBaseClassKey;
  uiInputLabel: InputLabelClassKey;
  uiLinearProgress: LinearProgressClassKey;
  */
  uiLink: LinkClassKey;
  uiList: ListClassKey;
  uiListItem: ListItemClassKey;
  uiListItemButton: ListItemButtonClassKey;
  uiListItemAvatar: ListItemAvatarClassKey;
  uiListItemSecondaryAction: ListItemSecondaryActionClassKey;
  uiListItemText: ListItemTextClassKey;
  uiListSubheader: ListSubheaderClassKey;
  uiMenu: MenuClassKey;
  uiMenuItem: MenuItemClassKey;
  uiMenuList: MenuListClassKey;
  /*
  uiMobileStepper: MobileStepperClassKey;
  */
  uiModal: ModalClassKey;
  /*
  uiNativeSelect: NativeSelectClassKey;
  uiOutlinedInput: OutlinedInputClassKey;
  uiPagination: PaginationClassKey;
  uiPaginationItem: PaginationItemClassKey;
  */
  uiPaper: PaperClassKey;
  uiPopover: PopoverClassKey;
  uiPopper: PopperClassKey;
  /*
  uiRadio: RadioClassKey;
  uiRadioGroup: RadioGroupClassKey;
  */
  uiRating: RatingClassKey;
  /*
  uiScopedCssBaseline: ScopedCssBaselineClassKey;
  uiSelect: SelectClassKey;
  uiSkeleton: SkeletonClassKey;
  uiSlider: SliderClassKey;
  */
  uiSnackbar: SnackbarClassKey;
  uiSnackbarContent: SnackbarContentClassKey;
  /*
  uiSpeedDial: SpeedDialClassKey;
  uiSpeedDialAction: SpeedDialActionClassKey;
  uiSpeedDialIcon: SpeedDialIconClassKey;
  */
  uiStack: StackClassKey;
  /*
  uiStep: StepClasskey;
  uiStepButton: StepButtonClasskey;
  uiStepConnector: StepConnectorClasskey;
  uiStepContent: StepContentClasskey;
  uiStepIcon: StepIconClasskey;
  uiStepLabel: StepLabelClasskey;
  uiStepper: StepperClasskey;
  */
  uiSvgIcon: SvgIconClassKey;
  /*
  uiSwitch: SwitchClassKey;
  uiTab: TabClassKey;
  uiTable: TableClassKey;
  uiTableBody: TableBodyClassKey;
  uiTableCell: TableCellClassKey;
  uiTableContainer: TableContainerClassKey;
  uiTableFooter: TableFooterClassKey;
  uiTableHead: TableHeadClassKey;
  uiTablePagination: TablePaginationClassKey;
  uiTableRow: TableRowClassKey;
  uiTableSortLabel: TableSortLabelClassKey;
  uiTabs: TabsClassKey;
  uiTextField: TextFieldClassKey;
  */
  uiToggleButton: ToggleButtonClassKey;
  uiToggleButtonGroup: ToggleButtonGroupClassKey;
  uiToolbar: ToolbarClassKey;
  uiTooltip: TooltipClassKey;
  uiTouchRipple: TouchRippleClassKey;
  uiTypography: TypographyClassKey;
}
