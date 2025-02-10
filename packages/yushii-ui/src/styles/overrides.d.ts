import { CSSObject, CSSInterpolation, Interpolation } from '@yushii/system';
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
import { AvatarClassKey } from '../Avatar';
import { AvatarGroupClassKey } from '../AvatarGroup';
*/
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
import { Grid2ClassKey } from '../Grid2';
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
/*
import { ListItemAvatarClassKey } from '../ListItemAvatar';
import { ListItemClassKey } from '../ListItem';
import { ListItemButtonClassKey } from '../ListItemButton';
import { ListItemIconClassKey } from '../ListItemIcon';
import { ListItemSecondaryActionClassKey } from '../ListItemSecondaryAction';
import { ListItemTextClassKey } from '../ListItemText';
import { ListSubheaderClassKey } from '../ListSubheader';
*/
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
  YushiiCssBaseline?: CSSObject | string | ((theme: Theme) => CSSInterpolation);
};

export interface ComponentNameToClassKey {
  YushiiAlert: AlertClassKey;
  /*
  YushiiAlertTitle: AlertTitleClassKey;
  */
  YushiiAppBar: AppBarClassKey;
  /*
  YushiiAutocomplete: AutocompleteClassKey;
  YushiiAvatar: AvatarClassKey;
  YushiiAvatarGroup: AvatarGroupClassKey;
  */
  YushiiBackdrop: BackdropClassKey;
  YushiiBadge: BadgeClassKey;
  /*
  YushiiBottomNavigation: BottomNavigationClassKey;
  YushiiBottomNavigationAction: BottomNavigationActionClassKey;
  YushiiBreadcrumbs: BreadcrumbsClassKey;
  */
  YushiiButton: ButtonClassKey;
  YushiiButtonBase: ButtonBaseClassKey;
  YushiiButtonGroup: ButtonGroupClassKey;
  YushiiCard: CardClassKey;
  /*
  YushiiCardActionArea: CardActionAreaClassKey;
  YushiiCardActions: CardActionsClassKey;
  YushiiCardContent: CardContentClassKey;
  YushiiCardHeader: CardHeaderClassKey;
  */
  YushiiCardMedia: CardMediaClassKey;
  /*
  YushiiCheckbox: CheckboxClassKey;
  */
  YushiiChip: ChipClassKey;
  YushiiCircularProgress: CircularProgressClassKey;
  YushiiCollapse: CollapseClassKey;
  YushiiContainer: ContainerClassKey;
  /*
  YushiiDialog: DialogClassKey;
  YushiiDialogActions: DialogActionsClassKey;
  YushiiDialogContent: DialogContentClassKey;
  YushiiDialogContentText: DialogContentTextClassKey;
  YushiiDialogTitle: DialogTitleClassKey;
  */
  YushiiDivider: DividerClassKey;
  YushiiDrawer: DrawerClassKey;
  /*
  YushiiAccordion: AccordionClassKey;
  YushiiAccordionActions: AccordionActionsClassKey;
  YushiiAccordionDetails: AccordionDetailsClassKey;
  YushiiAccordionSummary: AccordionSummaryClassKey;
  YushiiFab: FabClassKey;
  YushiiFilledInput: FilledInputClassKey;
  YushiiFormControl: FormControlClassKey;
  YushiiFormControlLabel: FormControlLabelClassKey;
  YushiiFormGroup: FormGroupClassKey;
  YushiiFormHelperText: FormHelperTextClassKey;
  YushiiFormLabel: FormLabelClassKey;
  */
  YushiiGrid: GridClassKey;
  YushiiGrid2: Grid2ClassKey;
  /*
  YushiiIcon: IconClassKey;
  */
  YushiiIconButton: IconButtonClassKey;
  /*
  YushiiImageList: ImageListClassKey;
  YushiiImageListItem: ImageListItemClassKey;
  YushiiImageListItemBar: ImageListItemBarClassKey;
  YushiiInput: InputClassKey;
  YushiiInputAdornment: InputAdornmentClassKey;
  YushiiInputBase: InputBaseClassKey;
  YushiiInputLabel: InputLabelClassKey;
  YushiiLinearProgress: LinearProgressClassKey;
  */
  YushiiLink: LinkClassKey;
  YushiiList: ListClassKey;
  /*
  YushiiListItem: ListItemClassKey;
  YushiiListItemButton: ListItemButtonClassKey;
  YushiiListItemAvatar: ListItemAvatarClassKey;
  YushiiListItemIcon: ListItemIconClassKey;
  YushiiListItemSecondaryAction: ListItemSecondaryActionClassKey;
  YushiiListItemText: ListItemTextClassKey;
  YushiiListSubheader: ListSubheaderClassKey;
  */
  YushiiMenu: MenuClassKey;
  YushiiMenuItem: MenuItemClassKey;
  YushiiMenuList: MenuListClassKey;
  /*
  YushiiMobileStepper: MobileStepperClassKey;
  */
  YushiiModal: ModalClassKey;
  /*
  YushiiNativeSelect: NativeSelectClassKey;
  YushiiOutlinedInput: OutlinedInputClassKey;
  YushiiPagination: PaginationClassKey;
  YushiiPaginationItem: PaginationItemClassKey;
  */
  YushiiPaper: PaperClassKey;
  YushiiPopover: PopoverClassKey;
  YushiiPopper: PopperClassKey;
  /*
  YushiiRadio: RadioClassKey;
  YushiiRadioGroup: RadioGroupClassKey;
  */
  YushiiRating: RatingClassKey;
  /*
  YushiiScopedCssBaseline: ScopedCssBaselineClassKey;
  YushiiSelect: SelectClassKey;
  YushiiSkeleton: SkeletonClassKey;
  YushiiSlider: SliderClassKey;
  */
  YushiiSnackbar: SnackbarClassKey;
  YushiiSnackbarContent: SnackbarContentClassKey;
  /*
  YushiiSpeedDial: SpeedDialClassKey;
  YushiiSpeedDialAction: SpeedDialActionClassKey;
  YushiiSpeedDialIcon: SpeedDialIconClassKey;
  */
  YushiiStack: StackClassKey;
  /*
  YushiiStep: StepClasskey;
  YushiiStepButton: StepButtonClasskey;
  YushiiStepConnector: StepConnectorClasskey;
  YushiiStepContent: StepContentClasskey;
  YushiiStepIcon: StepIconClasskey;
  YushiiStepLabel: StepLabelClasskey;
  YushiiStepper: StepperClasskey;
  */
  YushiiSvgIcon: SvgIconClassKey;
  /*
  YushiiSwitch: SwitchClassKey;
  YushiiTab: TabClassKey;
  YushiiTable: TableClassKey;
  YushiiTableBody: TableBodyClassKey;
  YushiiTableCell: TableCellClassKey;
  YushiiTableContainer: TableContainerClassKey;
  YushiiTableFooter: TableFooterClassKey;
  YushiiTableHead: TableHeadClassKey;
  YushiiTablePagination: TablePaginationClassKey;
  YushiiTableRow: TableRowClassKey;
  YushiiTableSortLabel: TableSortLabelClassKey;
  YushiiTabs: TabsClassKey;
  YushiiTextField: TextFieldClassKey;
  */
  YushiiToggleButton: ToggleButtonClassKey;
  YushiiToggleButtonGroup: ToggleButtonGroupClassKey;
  YushiiToolbar: ToolbarClassKey;
  YushiiTooltip: TooltipClassKey;
  YushiiTouchRipple: TouchRippleClassKey;
  YushiiTypography: TypographyClassKey;
}
