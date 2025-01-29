/* import { AlertProps } from '../Alert';
import { AlertTitleProps } from '../AlertTitle';
*/
import { AppBarProps } from '../AppBar';
/*
import { AutocompleteProps } from '../Autocomplete';
import { AvatarProps } from '../Avatar';
import { AvatarGroupProps } from '../AvatarGroup';
*/
import { BackdropProps } from '../Backdrop';
/*
import { BadgeProps } from '../Badge';
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
import { CardMediaProps } from '../CardMedia';
import { CardProps } from '../Card';
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
/*
import { ListItemAvatarProps } from '../ListItemAvatar';
import { ListItemIconProps } from '../ListItemIcon';
import { ListItemProps } from '../ListItem';
import { ListItemButtonProps } from '../ListItemButton';
import { ListItemSecondaryActionProps } from '../ListItemSecondaryAction';
import { ListItemTextProps } from '../ListItemText';
import { ListProps } from '../List';
import { ListSubheaderProps } from '../ListSubheader';
*/
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
import { SnackbarContentProps } from '../SnackbarContent';
import { SnackbarProps } from '../Snackbar';
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
  /* YushiiAlert: AlertProps;
  YushiiAlertTitle: AlertTitleProps;
  */
  YushiiAppBar: AppBarProps;
  /*
  YushiiAutocomplete: AutocompleteProps<any, any, any, any>;
  YushiiAvatar: AvatarProps;
  YushiiAvatarGroup: AvatarGroupProps;
  */
  YushiiBackdrop: BackdropProps;
  /*
  YushiiBadge: BadgeProps;
  YushiiBottomNavigation: BottomNavigationProps;
  YushiiBottomNavigationAction: BottomNavigationActionProps;
  YushiiBreadcrumbs: BreadcrumbsProps;
  */
  YushiiButton: ButtonProps;
  YushiiButtonBase: ButtonBaseProps;
  YushiiButtonGroup: ButtonGroupProps;
  /* 
  YushiiCard: CardProps;
  YushiiCardActionArea: CardActionAreaProps;
  YushiiCardActions: CardActionsProps;
  YushiiCardContent: CardContentProps;
  YushiiCardHeader: CardHeaderProps;
  YushiiCardMedia: CardMediaProps;
  YushiiCheckbox: CheckboxProps;
  */
  YushiiChip: ChipProps;
  YushiiCircularProgress: CircularProgressProps;
  YushiiCollapse: CollapseProps;
  YushiiContainer: ContainerProps;
  YushiiCssBaseline: CssBaselineProps;
  /*
  YushiiDialog: DialogProps;
  YushiiDialogActions: DialogActionsProps;
  YushiiDialogContent: DialogContentProps;
  YushiiDialogContentText: DialogContentTextProps;
  YushiiDialogTitle: DialogTitleProps;
  */
  YushiiDivider: DividerProps;
  YushiiDrawer: DrawerProps;
  /*
  YushiiAccordion: AccordionProps;
  YushiiAccordionActions: AccordionActionsProps;
  YushiiAccordionDetails: AccordionDetailsProps;
  YushiiAccordionSummary: AccordionSummaryProps;
  YushiiFab: FabProps;
  YushiiFilledInput: FilledInputProps;
  YushiiFormControl: FormControlProps;
  YushiiFormControlLabel: FormControlLabelProps;
  YushiiFormGroup: FormGroupProps;
  YushiiFormHelperText: FormHelperTextProps;
  YushiiFormLabel: FormLabelProps;
  */
  YushiiGrid: GridProps;
  YushiiGrid2: Grid2Props;
  /*
  YushiiImageList: ImageListProps;
  YushiiImageListItem: ImageListItemProps;
  YushiiImageListItemBar: ImageListItemBarProps;
  YushiiIcon: IconProps;
  */
  YushiiIconButton: IconButtonProps;
  /*
  YushiiInput: InputProps;
  YushiiInputAdornment: InputAdornmentProps;
  YushiiInputBase: InputBaseProps;
  YushiiInputLabel: InputLabelProps;
  YushiiLinearProgress: LinearProgressProps;
  */
  YushiiLink: LinkProps;
  /*
  YushiiList: ListProps;
  YushiiListItem: ListItemProps;
  YushiiListItemButton: ListItemButtonProps;
  YushiiListItemAvatar: ListItemAvatarProps;
  YushiiListItemIcon: ListItemIconProps;
  YushiiListItemSecondaryAction: ListItemSecondaryActionProps;
  YushiiListItemText: ListItemTextProps;
  YushiiListSubheader: ListSubheaderProps;
  */
  YushiiMenu: MenuProps;
  YushiiMenuItem: MenuItemProps;
  YushiiMenuList: MenuListProps;
  /*
  YushiiMobileStepper: MobileStepperProps;
  */
  YushiiModal: ModalProps;
  /*
  YushiiNativeSelect: NativeSelectProps;
  YushiiOutlinedInput: OutlinedInputProps;
  YushiiPagination: PaginationProps;
  YushiiPaginationItem: PaginationItemProps;
  */
  YushiiPaper: PaperProps;
  YushiiPopper: PopperProps;
  YushiiPopover: PopoverProps;
  /*
  YushiiRadio: RadioProps;
  YushiiRadioGroup: RadioGroupProps;
  */
  YushiiRating: RatingProps;
  /*
  YushiiScopedCssBaseline: ScopedCssBaselineProps;
  YushiiSelect: SelectProps;
  YushiiSkeleton: SkeletonProps;
  YushiiSlider: SliderProps;
  YushiiSnackbar: SnackbarProps;
  YushiiSnackbarContent: SnackbarContentProps;
  YushiiSpeedDial: SpeedDialProps;
  YushiiSpeedDialAction: SpeedDialActionProps;
  YushiiSpeedDialIcon: SpeedDialIconProps;
  */
  YushiiStack: StackProps;
  /*
  YushiiStep: StepProps;
  YushiiStepButton: StepButtonProps;
  YushiiStepConnector: StepConnectorProps;
  YushiiStepContent: StepContentProps;
  YushiiStepIcon: StepIconProps;
  YushiiStepLabel: StepLabelProps;
  YushiiStepper: StepperProps;
  */
  YushiiSvgIcon: SvgIconProps;
  YushiiSwipeableDrawer: SwipeableDrawerProps;
  /*
  YushiiSwitch: SwitchProps;
  YushiiTab: TabProps;
  YushiiTable: TableProps;
  YushiiTableBody: TableBodyProps;
  YushiiTableCell: TableCellProps;
  YushiiTableContainer: TableContainerProps;
  YushiiTableFooter: TableFooterProps;
  YushiiTableHead: TableHeadProps;
  YushiiTablePagination: TablePaginationProps;
  YushiiTableRow: TableRowProps;
  YushiiTableSortLabel: TableSortLabelProps;
  YushiiTabs: TabsProps;
  YushiiTextField: TextFieldProps;
  */
  YushiiToggleButton: ToggleButtonProps;
  YushiiToggleButtonGroup: ToggleButtonGroupProps;
  YushiiToolbar: ToolbarProps;
  YushiiTooltip: TooltipProps;
  YushiiTouchRipple: TouchRippleProps;
  YushiiTypography: TypographyProps;
  YushiiUseMediaQuery: UseMediaQueryOptions;
}
