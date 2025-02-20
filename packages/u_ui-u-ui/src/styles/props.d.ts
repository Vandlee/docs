import { AlertProps } from '../Alert';
/*
import { AlertTitleProps } from '../AlertTitle';
*/
import { AppBarProps } from '../AppBar';
/*
import { AutocompleteProps } from '../Autocomplete';
*/
import { AvatarProps } from '../Avatar';
import { AvatarGroupProps } from '../AvatarGroup';
import { BackdropProps } from '../Backdrop';
import { BadgeProps } from '../Badge';
/*
import { BottomNavigationActionProps } from '../BottomNavigationAction';
import { BottomNavigationProps } from '../BottomNavigation';
import { BreadcrumbsProps } from '../Breadcrumbs';
*/
import { ButtonBaseProps } from '../ButtonBase';
import { ButtonGroupProps } from '../ButtonGroup';
import { ButtonProps } from '../Button';
/* import { CardActionAreaProps } from '../CardActionArea';
import { CardActionsProps } from '../CardActions';
import { CardContentProps } from '../CardContent';
import { CardHeaderProps } from '../CardHeader';
*/
import { CardMediaProps } from '../CardMedia';
import { CardProps } from '../Card';
/*
import { CheckboxProps } from '../Checkbox';
*/
import { ChipProps } from '../Chip';
import { CircularProgressProps } from '../CircularProgress';
import { CollapseProps } from '../Collapse';
import { ContainerProps } from '../Container';
import { CssBaselineProps } from '../CssBaseline';
/*
import { DialogActionsProps } from '../DialogActions';
import { DialogContentProps } from '../DialogContent';
import { DialogContentTextProps } from '../DialogContentText';
import { DialogProps } from '../Dialog';
import { DialogTitleProps } from '../DialogTitle';
  */
import { DividerProps } from '../Divider';
import { DrawerProps } from '../Drawer';
/*
import { AccordionActionsProps } from '../AccordionActions';
import { AccordionDetailsProps } from '../AccordionDetails';
import { AccordionProps } from '../Accordion';
import { AccordionSummaryProps } from '../AccordionSummary';
import { FabProps } from '../Fab';
import { FilledInputProps } from '../FilledInput';
import { FormControlLabelProps } from '../FormControlLabel';
import { FormControlProps } from '../FormControl';
import { FormGroupProps } from '../FormGroup';
import { FormHelperTextProps } from '../FormHelperText';
import { FormLabelProps } from '../FormLabel';
*/
import { GridProps } from '../Grid';
import { Grid2Props } from '../Grid2';
import { IconButtonProps } from '../IconButton';
/*
import { IconProps } from '../Icon';
import { ImageListProps } from '../ImageList';
import { ImageListItemBarProps } from '../ImageListItemBar';
import { ImageListItemProps } from '../ImageListItem';
import { InputAdornmentProps } from '../InputAdornment';
import { InputBaseProps } from '../InputBase';
import { InputLabelProps } from '../InputLabel';
import { InputProps } from '../Input';
import { LinearProgressProps } from '../LinearProgress';
*/
import { LinkProps } from '../Link';
import { ListItemAvatarProps } from '../ListItemAvatar';
/*
import { ListItemIconProps } from '../ListItemIcon';
*/
import { ListItemProps } from '../ListItem';
import { ListItemButtonProps } from '../ListItemButton';
import { ListItemSecondaryActionProps } from '../ListItemSecondaryAction';
import { ListItemTextProps } from '../ListItemText';
import { ListProps } from '../List';
import { ListSubheaderProps } from '../ListSubheader';
import { MenuItemProps } from '../MenuItem';
import { MenuListProps } from '../MenuList';
import { MenuProps } from '../Menu';
/*
import { MobileStepperProps } from '../MobileStepper';
*/
import { ModalProps } from '../Modal';
/*
import { NativeSelectProps } from '../NativeSelect';
*/
import { UseMediaQueryOptions } from '../useMediaQuery';
/*
import { OutlinedInputProps } from '../OutlinedInput';
import { PaginationProps } from '../Pagination';
import { PaginationItemProps } from '../PaginationItem';
*/
import { PaperProps } from '../Paper';
import { PopoverProps } from '../Popover';
/*
import { RadioGroupProps } from '../RadioGroup';
import { RadioProps } from '../Radio';
*/
import { RatingProps } from '../Rating';
/*
import { ScopedCssBaselineProps } from '../ScopedCssBaseline';
import { SelectProps } from '../Select';
import { SkeletonProps } from '../Skeleton';
import { SliderProps } from '../Slider';
*/
import { SnackbarContentProps } from '../SnackbarContent';
import { SnackbarProps } from '../Snackbar';
/*
import { SpeedDialProps } from '../SpeedDial';
import { SpeedDialActionProps } from '../SpeedDialAction';
import { SpeedDialIconProps } from '../SpeedDialIcon';
*/
import { StackProps } from '../Stack';
/*
import { StepButtonProps } from '../StepButton';
import { StepConnectorProps } from '../StepConnector';
import { StepContentProps } from '../StepContent';
import { StepIconProps } from '../StepIcon';
import { StepLabelProps } from '../StepLabel';
import { StepperProps } from '../Stepper';
import { StepProps } from '../Step';
*/
import { SvgIconProps } from '../SvgIcon';
import { SwipeableDrawerProps } from '../SwipeableDrawer';
/*
import { SwitchProps } from '../Switch';
import { TableBodyProps } from '../TableBody';
import { TableCellProps } from '../TableCell';
import { TableContainerProps } from '../TableContainer';
import { TableHeadProps } from '../TableHead';
import { TablePaginationProps } from '../TablePagination';
import { TableProps } from '../Table';
import { TableRowProps } from '../TableRow';
import { TableSortLabelProps } from '../TableSortLabel';
import { TableFooterProps } from '../TableFooter';
import { TabProps } from '../Tab';
import { TabsProps } from '../Tabs';
import { TextFieldProps } from '../TextField';
  */
import { ToggleButtonProps } from '../ToggleButton';
import { ToggleButtonGroupProps } from '../ToggleButtonGroup';
import { ToolbarProps } from '../Toolbar';
import { TooltipProps } from '../Tooltip';
import { TouchRippleProps } from '../ButtonBase/TouchRipple';
import { TypographyProps } from '../Typography';
import { PopperProps } from '../Popper';

export type ComponentsProps = {
  [Name in keyof ComponentsPropsList]?: Partial<ComponentsPropsList[Name]>;
};

export interface ComponentsPropsList {
  UshiiAlert: AlertProps;
  /* 
  UshiiAlertTitle: AlertTitleProps;
  */
  UshiiAppBar: AppBarProps;
  /*
  UshiiAutocomplete: AutocompleteProps<any, any, any, any>;
  */
  UshiiAvatar: AvatarProps;
  UshiiAvatarGroup: AvatarGroupProps;
  UshiiBackdrop: BackdropProps;
  UshiiBadge: BadgeProps;
  /*
  UshiiBottomNavigation: BottomNavigationProps;
  UshiiBottomNavigationAction: BottomNavigationActionProps;
  UshiiBreadcrumbs: BreadcrumbsProps;
  */
  UshiiButton: ButtonProps;
  UshiiButtonBase: ButtonBaseProps;
  UshiiButtonGroup: ButtonGroupProps;
  UshiiCard: CardProps;
  /* 
  UshiiCardActionArea: CardActionAreaProps;
  UshiiCardActions: CardActionsProps;
  UshiiCardContent: CardContentProps;
  UshiiCardHeader: CardHeaderProps;
  */ 
  UshiiCardMedia: CardMediaProps;
  /*
  UshiiCheckbox: CheckboxProps;
  */
  UshiiChip: ChipProps;
  UshiiCircularProgress: CircularProgressProps;
  UshiiCollapse: CollapseProps;
  UshiiContainer: ContainerProps;
  UshiiCssBaseline: CssBaselineProps;
  /*
  UshiiDialog: DialogProps;
  UshiiDialogActions: DialogActionsProps;
  UshiiDialogContent: DialogContentProps;
  UshiiDialogContentText: DialogContentTextProps;
  UshiiDialogTitle: DialogTitleProps;
  */
  UshiiDivider: DividerProps;
  UshiiDrawer: DrawerProps;
  /*
  UshiiAccordion: AccordionProps;
  UshiiAccordionActions: AccordionActionsProps;
  UshiiAccordionDetails: AccordionDetailsProps;
  UshiiAccordionSummary: AccordionSummaryProps;
  UshiiFab: FabProps;
  UshiiFilledInput: FilledInputProps;
  UshiiFormControl: FormControlProps;
  UshiiFormControlLabel: FormControlLabelProps;
  UshiiFormGroup: FormGroupProps;
  UshiiFormHelperText: FormHelperTextProps;
  UshiiFormLabel: FormLabelProps;
  */
  UshiiGrid: GridProps;
  UshiiGrid2: Grid2Props;
  /*
  UshiiImageList: ImageListProps;
  UshiiImageListItem: ImageListItemProps;
  /*
  UshiiImageListItemBar: ImageListItemBarProps;
  UshiiIcon: IconProps;
  */
  UshiiIconButton: IconButtonProps;
  /*
  UshiiInput: InputProps;
  UshiiInputAdornment: InputAdornmentProps;
  UshiiInputBase: InputBaseProps;
  UshiiInputLabel: InputLabelProps;
  UshiiLinearProgress: LinearProgressProps;
  */
  UshiiLink: LinkProps;
  UshiiList: ListProps;
  UshiiListItem: ListItemProps;
  UshiiListItemButton: ListItemButtonProps;
  UshiiListItemAvatar: ListItemAvatarProps;
  /*
  UshiiListItemIcon: ListItemIconProps;
  */
  UshiiListItemSecondaryAction: ListItemSecondaryActionProps;
  UshiiListItemText: ListItemTextProps;
  UshiiListSubheader: ListSubheaderProps;
  UshiiMenu: MenuProps;
  UshiiMenuItem: MenuItemProps;
  UshiiMenuList: MenuListProps;
  /*
  UshiiMobileStepper: MobileStepperProps;
  */
  UshiiModal: ModalProps;
  /*
  UshiiNativeSelect: NativeSelectProps;
  UshiiOutlinedInput: OutlinedInputProps;
  UshiiPagination: PaginationProps;
  UshiiPaginationItem: PaginationItemProps;
  */
  UshiiPaper: PaperProps;
  UshiiPopper: PopperProps;
  UshiiPopover: PopoverProps;
  /*
  UshiiRadio: RadioProps;
  UshiiRadioGroup: RadioGroupProps;
  */
  UshiiRating: RatingProps;
  /*
  UshiiScopedCssBaseline: ScopedCssBaselineProps;
  UshiiSelect: SelectProps;
  UshiiSkeleton: SkeletonProps;
  UshiiSlider: SliderProps;
  */
  UshiiSnackbar: SnackbarProps;
  UshiiSnackbarContent: SnackbarContentProps;
  /*
  UshiiSpeedDial: SpeedDialProps;
  UshiiSpeedDialAction: SpeedDialActionProps;
  UshiiSpeedDialIcon: SpeedDialIconProps;
  */
  UshiiStack: StackProps;
  /*
  UshiiStep: StepProps;
  UshiiStepButton: StepButtonProps;
  UshiiStepConnector: StepConnectorProps;
  UshiiStepContent: StepContentProps;
  UshiiStepIcon: StepIconProps;
  UshiiStepLabel: StepLabelProps;
  UshiiStepper: StepperProps;
  */
  UshiiSvgIcon: SvgIconProps;
  UshiiSwipeableDrawer: SwipeableDrawerProps;
  /*
  UshiiSwitch: SwitchProps;
  UshiiTab: TabProps;
  UshiiTable: TableProps;
  UshiiTableBody: TableBodyProps;
  UshiiTableCell: TableCellProps;
  UshiiTableContainer: TableContainerProps;
  UshiiTableFooter: TableFooterProps;
  UshiiTableHead: TableHeadProps;
  UshiiTablePagination: TablePaginationProps;
  UshiiTableRow: TableRowProps;
  UshiiTableSortLabel: TableSortLabelProps;
  UshiiTabs: TabsProps;
  UshiiTextField: TextFieldProps;
  */
  UshiiToggleButton: ToggleButtonProps;
  UshiiToggleButtonGroup: ToggleButtonGroupProps;
  UshiiToolbar: ToolbarProps;
  UshiiTooltip: TooltipProps;
  UshiiTouchRipple: TouchRippleProps;
  UshiiTypography: TypographyProps;
  UshiiUseMediaQuery: UseMediaQueryOptions;
}
