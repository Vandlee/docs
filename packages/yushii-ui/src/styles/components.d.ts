import { ComponentsProps } from './props';
import { ComponentsOverrides } from './overrides';
import { ComponentsVariants } from './variants';

export interface Components<Theme = unknown> {
  YushiiAlert?: {
    defaultProps?: ComponentsProps['YushiiAlert'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiAlert'];
    variants?: ComponentsVariants<Theme>['YushiiAlert'];
  };
  /*
  YushiiAlertTitle?: {
    defaultProps?: ComponentsProps['YushiiAlertTitle'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiAlertTitle'];
    variants?: ComponentsVariants<Theme>['YushiiAlertTitle'];
  };
  */
  YushiiAppBar?: {
    defaultProps?: ComponentsProps['YushiiAppBar'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiAppBar'];
    variants?: ComponentsVariants<Theme>['YushiiAppBar'];
  };
  /*
  YushiiAutocomplete?: {
    defaultProps?: ComponentsProps['YushiiAutocomplete'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiAutocomplete'];
    variants?: ComponentsVariants<Theme>['YushiiAutocomplete'];
  };
  YushiiAvatar?: {
    defaultProps?: ComponentsProps['YushiiAvatar'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiAvatar'];
    variants?: ComponentsVariants<Theme>['YushiiAvatar'];
  };
  YushiiAvatarGroup?: {
    defaultProps?: ComponentsProps['YushiiAvatarGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiAvatarGroup'];
    variants?: ComponentsVariants<Theme>['YushiiAvatarGroup'];
  };
  */
  YushiiBackdrop?: {
    defaultProps?: ComponentsProps['YushiiBackdrop'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiBackdrop'];
    variants?: ComponentsVariants<Theme>['YushiiBackdrop'];
  };
  YushiiBadge?: {
    defaultProps?: ComponentsProps['YushiiBadge'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiBadge'];
    variants?: ComponentsVariants<Theme>['YushiiBadge'];
  };
  /*
  YushiiBottomNavigation?: {
    defaultProps?: ComponentsProps['YushiiBottomNavigation'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiBottomNavigation'];
    variants?: ComponentsVariants<Theme>['YushiiBottomNavigation'];
  };
  YushiiBottomNavigationAction?: {
    defaultProps?: ComponentsProps['YushiiBottomNavigationAction'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiBottomNavigationAction'];
    variants?: ComponentsVariants<Theme>['YushiiBottomNavigationAction'];
  };
  YushiiBreadcrumbs?: {
    defaultProps?: ComponentsProps['YushiiBreadcrumbs'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiBreadcrumbs'];
    variants?: ComponentsVariants<Theme>['YushiiBreadcrumbs'];
  };
  */
  YushiiButton?: {
    defaultProps?: ComponentsProps['YushiiButton'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiButton'];
    variants?: ComponentsVariants<Theme>['YushiiButton'];
  };
  YushiiButtonBase?: {
    defaultProps?: ComponentsProps['YushiiButtonBase'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiButtonBase'];
    variants?: ComponentsVariants<Theme>['YushiiButtonBase'];
  };
  YushiiButtonGroup?: {
    defaultProps?: ComponentsProps['YushiiButtonGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiButtonGroup'];
    variants?: ComponentsVariants<Theme>['YushiiButtonGroup'];
  };
  YushiiCard?: {
    defaultProps?: ComponentsProps['YushiiCard'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiCard'];
    variants?: ComponentsVariants<Theme>['YushiiCard'];
  };
  /*
  YushiiCardActionArea?: {
    defaultProps?: ComponentsProps['YushiiCardActionArea'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiCardActionArea'];
    variants?: ComponentsVariants<Theme>['YushiiCardActionArea'];
  };
  YushiiCardActions?: {
    defaultProps?: ComponentsProps['YushiiCardActions'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiCardActions'];
    variants?: ComponentsVariants<Theme>['YushiiCardActions'];
  };
  YushiiCardContent?: {
    defaultProps?: ComponentsProps['YushiiCardContent'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiCardContent'];
    variants?: ComponentsVariants<Theme>['YushiiCardContent'];
  };
  YushiiCardHeader?: {
    defaultProps?: ComponentsProps['YushiiCardHeader'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiCardHeader'];
    variants?: ComponentsVariants<Theme>['YushiiCardHeader'];
  };
  */
  YushiiCardMedia?: {
    defaultProps?: ComponentsProps['YushiiCardMedia'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiCardMedia'];
    variants?: ComponentsVariants<Theme>['YushiiCardMedia'];
  };
  /*
  YushiiCheckbox?: {
    defaultProps?: ComponentsProps['YushiiCheckbox'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiCheckbox'];
    variants?: ComponentsVariants<Theme>['YushiiCheckbox'];
  };
  */
  YushiiChip?: {
    defaultProps?: ComponentsProps['YushiiChip'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiChip'];
    variants?: ComponentsVariants<Theme>['YushiiChip'];
  };
  
  YushiiCircularProgress?: {
    defaultProps?: ComponentsProps['YushiiCircularProgress'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiCircularProgress'];
    variants?: ComponentsVariants<Theme>['YushiiCircularProgress'];
  };
 
  YushiiCollapse?: {
    defaultProps?: ComponentsProps['YushiiCollapse'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiCollapse'];
    variants?: ComponentsVariants<Theme>['YushiiCollapse'];
  };
  YushiiContainer?: {
    defaultProps?: ComponentsProps['YushiiContainer'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiContainer'];
    variants?: ComponentsVariants<Theme>['YushiiContainer'];
  };
  YushiiCssBaseline?: {
    defaultProps?: ComponentsProps['YushiiCssBaseline'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiCssBaseline'];
    variants?: ComponentsVariants<Theme>['YushiiCssBaseline'];
  };
  /*
  YushiiDialog?: {
    defaultProps?: ComponentsProps['YushiiDialog'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiDialog'];
    variants?: ComponentsVariants<Theme>['YushiiDialog'];
  };
  YushiiDialogActions?: {
    defaultProps?: ComponentsProps['YushiiDialogActions'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiDialogActions'];
    variants?: ComponentsVariants<Theme>['YushiiDialogActions'];
  };
  YushiiDialogContent?: {
    defaultProps?: ComponentsProps['YushiiDialogContent'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiDialogContent'];
    variants?: ComponentsVariants<Theme>['YushiiDialogContent'];
  };
  YushiiDialogContentText?: {
    defaultProps?: ComponentsProps['YushiiDialogContentText'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiDialogContentText'];
    variants?: ComponentsVariants<Theme>['YushiiDialogContentText'];
  };
  YushiiDialogTitle?: {
    defaultProps?: ComponentsProps['YushiiDialogTitle'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiDialogTitle'];
    variants?: ComponentsVariants<Theme>['YushiiDialogTitle'];
  };
  */
  YushiiDivider?: {
    defaultProps?: ComponentsProps['YushiiDivider'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiDivider'];
    variants?: ComponentsVariants<Theme>['YushiiDivider'];
  };
  YushiiDrawer?: {
    defaultProps?: ComponentsProps['YushiiDrawer'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiDrawer'];
    variants?: ComponentsVariants<Theme>['YushiiDrawer'];
  };
  /*
  YushiiAccordion?: {
    defaultProps?: ComponentsProps['YushiiAccordion'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiAccordion'];
    variants?: ComponentsVariants<Theme>['YushiiAccordion'];
  };
  YushiiAccordionActions?: {
    defaultProps?: ComponentsProps['YushiiAccordionActions'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiAccordionActions'];
    variants?: ComponentsVariants<Theme>['YushiiAccordionActions'];
  };
  YushiiAccordionDetails?: {
    defaultProps?: ComponentsProps['YushiiAccordionDetails'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiAccordionDetails'];
    variants?: ComponentsVariants<Theme>['YushiiAccordionDetails'];
  };
  YushiiAccordionSummary?: {
    defaultProps?: ComponentsProps['YushiiAccordionSummary'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiAccordionSummary'];
    variants?: ComponentsVariants<Theme>['YushiiAccordionSummary'];
  };
  YushiiFab?: {
    defaultProps?: ComponentsProps['YushiiFab'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiFab'];
    variants?: ComponentsVariants<Theme>['YushiiFab'];
  };
  YushiiFilledInput?: {
    defaultProps?: ComponentsProps['YushiiFilledInput'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiFilledInput'];
    variants?: ComponentsVariants<Theme>['YushiiFilledInput'];
  };
  YushiiFormControl?: {
    defaultProps?: ComponentsProps['YushiiFormControl'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiFormControl'];
    variants?: ComponentsVariants<Theme>['YushiiFormControl'];
  };
  YushiiFormControlLabel?: {
    defaultProps?: ComponentsProps['YushiiFormControlLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiFormControlLabel'];
    variants?: ComponentsVariants<Theme>['YushiiFormControlLabel'];
  };
  YushiiFormGroup?: {
    defaultProps?: ComponentsProps['YushiiFormGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiFormGroup'];
    variants?: ComponentsVariants<Theme>['YushiiFormGroup'];
  };
  YushiiFormHelperText?: {
    defaultProps?: ComponentsProps['YushiiFormHelperText'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiFormHelperText'];
    variants?: ComponentsVariants<Theme>['YushiiFormHelperText'];
  };
  YushiiFormLabel?: {
    defaultProps?: ComponentsProps['YushiiFormLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiFormLabel'];
    variants?: ComponentsVariants<Theme>['YushiiFormLabel'];
  };
  */
  YushiiGrid?: {
    defaultProps?: ComponentsProps['YushiiGrid'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiGrid'];
    variants?: ComponentsVariants<Theme>['YushiiGrid'];
  };
  YushiiGrid2?: {
    defaultProps?: ComponentsProps['YushiiGrid2'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiGrid2'];
    variants?: ComponentsVariants<Theme>['YushiiGrid2'];
  };
  /*
  YushiiImageList?: {
    defaultProps?: ComponentsProps['YushiiImageList'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiImageList'];
    variants?: ComponentsVariants<Theme>['YushiiImageList'];
  };
  YushiiImageListItem?: {
    defaultProps?: ComponentsProps['YushiiImageListItem'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiImageListItem'];
    variants?: ComponentsVariants<Theme>['YushiiImageListItem'];
  };
  YushiiImageListItemBar?: {
    defaultProps?: ComponentsProps['YushiiImageListItemBar'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiImageListItemBar'];
    variants?: ComponentsVariants<Theme>['YushiiImageListItemBar'];
  };
  YushiiIcon?: {
    defaultProps?: ComponentsProps['YushiiIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiIcon'];
    variants?: ComponentsVariants<Theme>['YushiiIcon'];
  };
  */
  YushiiIconButton?: {
    defaultProps?: ComponentsProps['YushiiIconButton'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiIconButton'];
    variants?: ComponentsVariants<Theme>['YushiiIconButton'];
  };
  /*
  YushiiInput?: {
    defaultProps?: ComponentsProps['YushiiInput'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiInput'];
    variants?: ComponentsVariants<Theme>['YushiiInput'];
  };
  YushiiInputAdornment?: {
    defaultProps?: ComponentsProps['YushiiInputAdornment'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiInputAdornment'];
    variants?: ComponentsVariants<Theme>['YushiiInputAdornment'];
  };
  YushiiInputBase?: {
    defaultProps?: ComponentsProps['YushiiInputBase'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiInputBase'];
    variants?: ComponentsVariants<Theme>['YushiiInputBase'];
  };
  YushiiInputLabel?: {
    defaultProps?: ComponentsProps['YushiiInputLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiInputLabel'];
    variants?: ComponentsVariants<Theme>['YushiiInputLabel'];
  };
  YushiiLinearProgress?: {
    defaultProps?: ComponentsProps['YushiiLinearProgress'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiLinearProgress'];
    variants?: ComponentsVariants<Theme>['YushiiLinearProgress'];
  };
  */
  YushiiLink?: {
    defaultProps?: ComponentsProps['YushiiLink'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiLink'];
    variants?: ComponentsVariants<Theme>['YushiiLink'];
  };
  YushiiList?: {
    defaultProps?: ComponentsProps['YushiiList'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiList'];
    variants?: ComponentsVariants<Theme>['YushiiList'];
  };
  /*
  YushiiListItem?: {
    defaultProps?: ComponentsProps['YushiiListItem'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiListItem'];
    variants?: ComponentsVariants<Theme>['YushiiListItem'];
  };
  YushiiListItemButton?: {
    defaultProps?: ComponentsProps['YushiiListItemButton'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiListItemButton'];
    variants?: ComponentsVariants<Theme>['YushiiListItemButton'];
  };
  YushiiListItemAvatar?: {
    defaultProps?: ComponentsProps['YushiiListItemAvatar'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiListItemAvatar'];
    variants?: ComponentsVariants<Theme>['YushiiListItemAvatar'];
  };
  YushiiListItemIcon?: {
    defaultProps?: ComponentsProps['YushiiListItemIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiListItemIcon'];
    variants?: ComponentsVariants<Theme>['YushiiListItemIcon'];
  };
  YushiiListItemSecondaryAction?: {
    defaultProps?: ComponentsProps['YushiiListItemSecondaryAction'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiListItemSecondaryAction'];
    variants?: ComponentsVariants<Theme>['YushiiListItemSecondaryAction'];
  };
  YushiiListItemText?: {
    defaultProps?: ComponentsProps['YushiiListItemText'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiListItemText'];
    variants?: ComponentsVariants<Theme>['YushiiListItemText'];
  };
  YushiiListSubheader?: {
    defaultProps?: ComponentsProps['YushiiListSubheader'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiListSubheader'];
    variants?: ComponentsVariants<Theme>['YushiiListSubheader'];
  };
  */
  YushiiMenu?: {
    defaultProps?: ComponentsProps['YushiiMenu'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiMenu'];
    variants?: ComponentsVariants<Theme>['YushiiMenu'];
  };
  YushiiMenuItem?: {
    defaultProps?: ComponentsProps['YushiiMenuItem'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiMenuItem'];
    variants?: ComponentsVariants<Theme>['YushiiMenuItem'];
  };
  YushiiMenuList?: {
    defaultProps?: ComponentsProps['YushiiMenuList'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiMenuList'];
    variants?: ComponentsVariants<Theme>['YushiiMenuList'];
  };
  /*
  YushiiMobileStepper?: {
    defaultProps?: ComponentsProps['YushiiMobileStepper'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiMobileStepper'];
    variants?: ComponentsVariants<Theme>['YushiiMobileStepper'];
  };
  */
  YushiiModal?: {
    defaultProps?: ComponentsProps['YushiiModal'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiModal'];
    variants?: ComponentsVariants<Theme>['YushiiModal'];
  };
  /*
  YushiiNativeSelect?: {
    defaultProps?: ComponentsProps['YushiiNativeSelect'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiNativeSelect'];
    variants?: ComponentsVariants<Theme>['YushiiNativeSelect'];
  };
  YushiiOutlinedInput?: {
    defaultProps?: ComponentsProps['YushiiOutlinedInput'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiOutlinedInput'];
    variants?: ComponentsVariants<Theme>['YushiiOutlinedInput'];
  };
  YushiiPagination?: {
    defaultProps?: ComponentsProps['YushiiPagination'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiPagination'];
    variants?: ComponentsVariants<Theme>['YushiiPagination'];
  };
  YushiiPaginationItem?: {
    defaultProps?: ComponentsProps['YushiiPaginationItem'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiPaginationItem'];
    variants?: ComponentsVariants<Theme>['YushiiPaginationItem'];
  };
  */
  YushiiPaper?: {
    defaultProps?: ComponentsProps['YushiiPaper'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiPaper'];
    variants?: ComponentsVariants<Theme>['YushiiPaper'];
  };
  YushiiPopper?: {
    defaultProps?: ComponentsProps['YushiiPopper'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiPopper'];
  };
  YushiiPopover?: {
    defaultProps?: ComponentsProps['YushiiPopover'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiPopover'];
    variants?: ComponentsVariants<Theme>['YushiiPopover'];
  };
  /*
  YushiiRadio?: {
    defaultProps?: ComponentsProps['YushiiRadio'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiRadio'];
    variants?: ComponentsVariants<Theme>['YushiiRadio'];
  };
  YushiiRadioGroup?: {
    defaultProps?: ComponentsProps['YushiiRadioGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiRadioGroup'];
    variants?: ComponentsVariants<Theme>['YushiiRadioGroup'];
  };
  */
  YushiiRating?: {
    defaultProps?: ComponentsProps['YushiiRating'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiRating'];
    variants?: ComponentsVariants<Theme>['YushiiRating'];
  };
  /*
  YushiiScopedCssBaseline?: {
    defaultProps?: ComponentsProps['YushiiScopedCssBaseline'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiScopedCssBaseline'];
    variants?: ComponentsVariants<Theme>['YushiiScopedCssBaseline'];
  };
  YushiiSelect?: {
    defaultProps?: ComponentsProps['YushiiSelect'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiSelect'];
    variants?: ComponentsVariants<Theme>['YushiiSelect'];
  };
  YushiiSkeleton?: {
    defaultProps?: ComponentsProps['YushiiSkeleton'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiSkeleton'];
    variants?: ComponentsVariants<Theme>['YushiiSkeleton'];
  };
  YushiiSlider?: {
    defaultProps?: ComponentsProps['YushiiSlider'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiSlider'];
    variants?: ComponentsVariants<Theme>['YushiiSlider'];
  };
  */
  YushiiSnackbar?: {
    defaultProps?: ComponentsProps['YushiiSnackbar'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiSnackbar'];
    variants?: ComponentsVariants<Theme>['YushiiSnackbar'];
  };
  YushiiSnackbarContent?: {
    defaultProps?: ComponentsProps['YushiiSnackbarContent'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiSnackbarContent'];
    variants?: ComponentsVariants<Theme>['YushiiSnackbarContent'];
  };
  /*
  YushiiSpeedDial?: {
    defaultProps?: ComponentsProps['YushiiSpeedDial'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiSpeedDial'];
    variants?: ComponentsVariants<Theme>['YushiiSpeedDial'];
  };
  YushiiSpeedDialAction?: {
    defaultProps?: ComponentsProps['YushiiSpeedDialAction'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiSpeedDialAction'];
    variants?: ComponentsVariants<Theme>['YushiiSpeedDialAction'];
  };
  YushiiSpeedDialIcon?: {
    defaultProps?: ComponentsProps['YushiiSpeedDialIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiSpeedDialIcon'];
    variants?: ComponentsVariants<Theme>['YushiiSpeedDialIcon'];
  };
  */
  YushiiStack?: {
    defaultProps?: ComponentsProps['YushiiStack'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiStack'];
    variants?: ComponentsVariants<Theme>['YushiiStack'];
  };
  /*
  YushiiStep?: {
    defaultProps?: ComponentsProps['YushiiStep'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiStep'];
    variants?: ComponentsVariants<Theme>['YushiiStep'];
  };
  YushiiStepButton?: {
    defaultProps?: ComponentsProps['YushiiStepButton'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiStepButton'];
    variants?: ComponentsVariants<Theme>['YushiiStepButton'];
  };
  YushiiStepConnector?: {
    defaultProps?: ComponentsProps['YushiiStepConnector'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiStepConnector'];
    variants?: ComponentsVariants<Theme>['YushiiStepConnector'];
  };
  YushiiStepContent?: {
    defaultProps?: ComponentsProps['YushiiStepContent'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiStepContent'];
    variants?: ComponentsVariants<Theme>['YushiiStepContent'];
  };
  YushiiStepIcon?: {
    defaultProps?: ComponentsProps['YushiiStepIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiStepIcon'];
    variants?: ComponentsVariants<Theme>['YushiiStepIcon'];
  };
  YushiiStepLabel?: {
    defaultProps?: ComponentsProps['YushiiStepLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiStepLabel'];
    variants?: ComponentsVariants<Theme>['YushiiStepLabel'];
  };
  YushiiStepper?: {
    defaultProps?: ComponentsProps['YushiiStepper'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiStepper'];
    variants?: ComponentsVariants<Theme>['YushiiStepper'];
  };
  */
  YushiiSvgIcon?: {
    defaultProps?: ComponentsProps['YushiiSvgIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiSvgIcon'];
    variants?: ComponentsVariants<Theme>['YushiiSvgIcon'];
  };
  YushiiSwipeableDrawer?: {
    defaultProps?: ComponentsProps['YushiiSwipeableDrawer'];
  };
  /*
  YushiiSwitch?: {
    defaultProps?: ComponentsProps['YushiiSwitch'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiSwitch'];
    variants?: ComponentsVariants<Theme>['YushiiSwitch'];
  };
  YushiiTab?: {
    defaultProps?: ComponentsProps['YushiiTab'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTab'];
    variants?: ComponentsVariants<Theme>['YushiiTab'];
  };
  YushiiTable?: {
    defaultProps?: ComponentsProps['YushiiTable'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTable'];
    variants?: ComponentsVariants<Theme>['YushiiTable'];
  };
  YushiiTableBody?: {
    defaultProps?: ComponentsProps['YushiiTableBody'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTableBody'];
    variants?: ComponentsVariants<Theme>['YushiiTableBody'];
  };
  YushiiTableCell?: {
    defaultProps?: ComponentsProps['YushiiTableCell'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTableCell'];
    variants?: ComponentsVariants<Theme>['YushiiTableCell'];
  };
  YushiiTableContainer?: {
    defaultProps?: ComponentsProps['YushiiTableContainer'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTableContainer'];
    variants?: ComponentsVariants<Theme>['YushiiTableContainer'];
  };
  YushiiTableFooter?: {
    defaultProps?: ComponentsProps['YushiiTableFooter'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTableFooter'];
    variants?: ComponentsVariants<Theme>['YushiiTableFooter'];
  };
  YushiiTableHead?: {
    defaultProps?: ComponentsProps['YushiiTableHead'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTableHead'];
    variants?: ComponentsVariants<Theme>['YushiiTableHead'];
  };
  YushiiTablePagination?: {
    defaultProps?: ComponentsProps['YushiiTablePagination'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTablePagination'];
    variants?: ComponentsVariants<Theme>['YushiiTablePagination'];
  };
  YushiiTableRow?: {
    defaultProps?: ComponentsProps['YushiiTableRow'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTableRow'];
    variants?: ComponentsVariants<Theme>['YushiiTableRow'];
  };
  YushiiTableSortLabel?: {
    defaultProps?: ComponentsProps['YushiiTableSortLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTableSortLabel'];
    variants?: ComponentsVariants<Theme>['YushiiTableSortLabel'];
  };
  YushiiTabs?: {
    defaultProps?: ComponentsProps['YushiiTabs'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTabs'];
    variants?: ComponentsVariants<Theme>['YushiiTabs'];
  };
  YushiiTextField?: {
    defaultProps?: ComponentsProps['YushiiTextField'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTextField'];
    variants?: ComponentsVariants<Theme>['YushiiTextField'];
  };
  */
  YushiiToggleButton?: {
    defaultProps?: ComponentsProps['YushiiToggleButton'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiToggleButton'];
    variants?: ComponentsVariants<Theme>['YushiiToggleButton'];
  };
  YushiiToggleButtonGroup?: {
    defaultProps?: ComponentsProps['YushiiToggleButtonGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiToggleButtonGroup'];
    variants?: ComponentsVariants<Theme>['YushiiToggleButtonGroup'];
  };
  YushiiToolbar?: {
    defaultProps?: ComponentsProps['YushiiToolbar'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiToolbar'];
    variants?: ComponentsVariants<Theme>['YushiiToolbar'];
  };
  YushiiTooltip?: {
    defaultProps?: ComponentsProps['YushiiTooltip'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTooltip'];
    variants?: ComponentsVariants<Theme>['YushiiTooltip'];
  };
  YushiiTouchRipple?: {
    defaultProps?: ComponentsProps['YushiiTouchRipple'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTouchRipple'];
    variants?: ComponentsVariants<Theme>['YushiiTouchRipple'];
  };
  YushiiTypography?: {
    defaultProps?: ComponentsProps['YushiiTypography'];
    styleOverrides?: ComponentsOverrides<Theme>['YushiiTypography'];
    variants?: ComponentsVariants<Theme>['YushiiTypography'];
  };
  YushiiUseMediaQuery?: {
    defaultProps?: ComponentsProps['YushiiUseMediaQuery'];
  };
}
