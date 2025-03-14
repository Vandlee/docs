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
  uiAlert: AlertProps;
  /* 
  uiAlertTitle: AlertTitleProps;
  */
  uiAppBar: AppBarProps;
  /*
  uiAutocomplete: AutocompleteProps<any, any, any, any>;
  */
  uiAvatar: AvatarProps;
  uiAvatarGroup: AvatarGroupProps;
  uiBackdrop: BackdropProps;
  uiBadge: BadgeProps;
  /*
  uiBottomNavigation: BottomNavigationProps;
  uiBottomNavigationAction: BottomNavigationActionProps;
  uiBreadcrumbs: BreadcrumbsProps;
  */
  uiButton: ButtonProps;
  uiButtonBase: ButtonBaseProps;
  uiButtonGroup: ButtonGroupProps;
  uiCard: CardProps;
  /* 
  uiCardActionArea: CardActionAreaProps;
  uiCardActions: CardActionsProps;
  uiCardContent: CardContentProps;
  uiCardHeader: CardHeaderProps;
  */ 
  uiCardMedia: CardMediaProps;
  /*
  uiCheckbox: CheckboxProps;
  */
  uiChip: ChipProps;
  uiCircularProgress: CircularProgressProps;
  uiCollapse: CollapseProps;
  uiContainer: ContainerProps;
  uiCssBaseline: CssBaselineProps;
  /*
  uiDialog: DialogProps;
  uiDialogActions: DialogActionsProps;
  uiDialogContent: DialogContentProps;
  uiDialogContentText: DialogContentTextProps;
  uiDialogTitle: DialogTitleProps;
  */
  uiDivider: DividerProps;
  uiDrawer: DrawerProps;
  /*
  uiAccordion: AccordionProps;
  uiAccordionActions: AccordionActionsProps;
  uiAccordionDetails: AccordionDetailsProps;
  uiAccordionSummary: AccordionSummaryProps;
  uiFab: FabProps;
  uiFilledInput: FilledInputProps;
  uiFormControl: FormControlProps;
  uiFormControlLabel: FormControlLabelProps;
  uiFormGroup: FormGroupProps;
  uiFormHelperText: FormHelperTextProps;
  uiFormLabel: FormLabelProps;
  */
  uiGrid: GridProps;
  /*
  uiImageList: ImageListProps;
  uiImageListItem: ImageListItemProps;
  /*
  uiImageListItemBar: ImageListItemBarProps;
  uiIcon: IconProps;
  */
  uiIconButton: IconButtonProps;
  /*
  uiInput: InputProps;
  uiInputAdornment: InputAdornmentProps;
  uiInputBase: InputBaseProps;
  uiInputLabel: InputLabelProps;
  uiLinearProgress: LinearProgressProps;
  */
  uiLink: LinkProps;
  uiList: ListProps;
  uiListItem: ListItemProps;
  uiListItemButton: ListItemButtonProps;
  uiListItemAvatar: ListItemAvatarProps;
  /*
  uiListItemIcon: ListItemIconProps;
  */
  uiListItemSecondaryAction: ListItemSecondaryActionProps;
  uiListItemText: ListItemTextProps;
  uiListSubheader: ListSubheaderProps;
  uiMenu: MenuProps;
  uiMenuItem: MenuItemProps;
  uiMenuList: MenuListProps;
  /*
  uiMobileStepper: MobileStepperProps;
  */
  uiModal: ModalProps;
  /*
  uiNativeSelect: NativeSelectProps;
  uiOutlinedInput: OutlinedInputProps;
  uiPagination: PaginationProps;
  uiPaginationItem: PaginationItemProps;
  */
  uiPaper: PaperProps;
  uiPopper: PopperProps;
  uiPopover: PopoverProps;
  /*
  uiRadio: RadioProps;
  uiRadioGroup: RadioGroupProps;
  */
  uiRating: RatingProps;
  /*
  uiScopedCssBaseline: ScopedCssBaselineProps;
  uiSelect: SelectProps;
  uiSkeleton: SkeletonProps;
  uiSlider: SliderProps;
  */
  uiSnackbar: SnackbarProps;
  uiSnackbarContent: SnackbarContentProps;
  /*
  uiSpeedDial: SpeedDialProps;
  uiSpeedDialAction: SpeedDialActionProps;
  uiSpeedDialIcon: SpeedDialIconProps;
  */
  uiStack: StackProps;
  /*
  uiStep: StepProps;
  uiStepButton: StepButtonProps;
  uiStepConnector: StepConnectorProps;
  uiStepContent: StepContentProps;
  uiStepIcon: StepIconProps;
  uiStepLabel: StepLabelProps;
  uiStepper: StepperProps;
  */
  uiSvgIcon: SvgIconProps;
  uiSwipeableDrawer: SwipeableDrawerProps;
  /*
  uiSwitch: SwitchProps;
  uiTab: TabProps;
  uiTable: TableProps;
  uiTableBody: TableBodyProps;
  uiTableCell: TableCellProps;
  uiTableContainer: TableContainerProps;
  uiTableFooter: TableFooterProps;
  uiTableHead: TableHeadProps;
  uiTablePagination: TablePaginationProps;
  uiTableRow: TableRowProps;
  uiTableSortLabel: TableSortLabelProps;
  uiTabs: TabsProps;
  uiTextField: TextFieldProps;
  */
  uiToggleButton: ToggleButtonProps;
  uiToggleButtonGroup: ToggleButtonGroupProps;
  uiToolbar: ToolbarProps;
  uiTooltip: TooltipProps;
  uiTouchRipple: TouchRippleProps;
  uiTypography: TypographyProps;
  uiUseMediaQuery: UseMediaQueryOptions;
}
