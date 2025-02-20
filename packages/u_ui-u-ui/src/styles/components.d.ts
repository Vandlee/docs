import { ComponentsProps } from './props';
import { ComponentsOverrides } from './overrides';
import { ComponentsVariants } from './variants';

export interface Components<Theme = unknown> {
  UshiiAlert?: {
    defaultProps?: ComponentsProps['UshiiAlert'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiAlert'];
    variants?: ComponentsVariants<Theme>['UshiiAlert'];
  };
  /*
  UshiiAlertTitle?: {
    defaultProps?: ComponentsProps['UshiiAlertTitle'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiAlertTitle'];
    variants?: ComponentsVariants<Theme>['UshiiAlertTitle'];
  };
  */
  UshiiAppBar?: {
    defaultProps?: ComponentsProps['UshiiAppBar'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiAppBar'];
    variants?: ComponentsVariants<Theme>['UshiiAppBar'];
  };
  /*
  UshiiAutocomplete?: {
    defaultProps?: ComponentsProps['UshiiAutocomplete'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiAutocomplete'];
    variants?: ComponentsVariants<Theme>['UshiiAutocomplete'];
  };
  */
  UshiiAvatar?: {
    defaultProps?: ComponentsProps['UshiiAvatar'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiAvatar'];
    variants?: ComponentsVariants<Theme>['UshiiAvatar'];
  };
  UshiiAvatarGroup?: {
    defaultProps?: ComponentsProps['UshiiAvatarGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiAvatarGroup'];
    variants?: ComponentsVariants<Theme>['UshiiAvatarGroup'];
  };
  UshiiBackdrop?: {
    defaultProps?: ComponentsProps['UshiiBackdrop'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiBackdrop'];
    variants?: ComponentsVariants<Theme>['UshiiBackdrop'];
  };
  UshiiBadge?: {
    defaultProps?: ComponentsProps['UshiiBadge'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiBadge'];
    variants?: ComponentsVariants<Theme>['UshiiBadge'];
  };
  /*
  UshiiBottomNavigation?: {
    defaultProps?: ComponentsProps['UshiiBottomNavigation'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiBottomNavigation'];
    variants?: ComponentsVariants<Theme>['UshiiBottomNavigation'];
  };
  UshiiBottomNavigationAction?: {
    defaultProps?: ComponentsProps['UshiiBottomNavigationAction'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiBottomNavigationAction'];
    variants?: ComponentsVariants<Theme>['UshiiBottomNavigationAction'];
  };
  UshiiBreadcrumbs?: {
    defaultProps?: ComponentsProps['UshiiBreadcrumbs'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiBreadcrumbs'];
    variants?: ComponentsVariants<Theme>['UshiiBreadcrumbs'];
  };
  */
  UshiiButton?: {
    defaultProps?: ComponentsProps['UshiiButton'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiButton'];
    variants?: ComponentsVariants<Theme>['UshiiButton'];
  };
  UshiiButtonBase?: {
    defaultProps?: ComponentsProps['UshiiButtonBase'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiButtonBase'];
    variants?: ComponentsVariants<Theme>['UshiiButtonBase'];
  };
  UshiiButtonGroup?: {
    defaultProps?: ComponentsProps['UshiiButtonGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiButtonGroup'];
    variants?: ComponentsVariants<Theme>['UshiiButtonGroup'];
  };
  UshiiCard?: {
    defaultProps?: ComponentsProps['UshiiCard'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiCard'];
    variants?: ComponentsVariants<Theme>['UshiiCard'];
  };
  /*
  UshiiCardActionArea?: {
    defaultProps?: ComponentsProps['UshiiCardActionArea'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiCardActionArea'];
    variants?: ComponentsVariants<Theme>['UshiiCardActionArea'];
  };
  UshiiCardActions?: {
    defaultProps?: ComponentsProps['UshiiCardActions'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiCardActions'];
    variants?: ComponentsVariants<Theme>['UshiiCardActions'];
  };
  UshiiCardContent?: {
    defaultProps?: ComponentsProps['UshiiCardContent'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiCardContent'];
    variants?: ComponentsVariants<Theme>['UshiiCardContent'];
  };
  UshiiCardHeader?: {
    defaultProps?: ComponentsProps['UshiiCardHeader'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiCardHeader'];
    variants?: ComponentsVariants<Theme>['UshiiCardHeader'];
  };
  */
  UshiiCardMedia?: {
    defaultProps?: ComponentsProps['UshiiCardMedia'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiCardMedia'];
    variants?: ComponentsVariants<Theme>['UshiiCardMedia'];
  };
  /*
  UshiiCheckbox?: {
    defaultProps?: ComponentsProps['UshiiCheckbox'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiCheckbox'];
    variants?: ComponentsVariants<Theme>['UshiiCheckbox'];
  };
  */
  UshiiChip?: {
    defaultProps?: ComponentsProps['UshiiChip'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiChip'];
    variants?: ComponentsVariants<Theme>['UshiiChip'];
  };
  
  UshiiCircularProgress?: {
    defaultProps?: ComponentsProps['UshiiCircularProgress'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiCircularProgress'];
    variants?: ComponentsVariants<Theme>['UshiiCircularProgress'];
  };
 
  UshiiCollapse?: {
    defaultProps?: ComponentsProps['UshiiCollapse'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiCollapse'];
    variants?: ComponentsVariants<Theme>['UshiiCollapse'];
  };
  UshiiContainer?: {
    defaultProps?: ComponentsProps['UshiiContainer'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiContainer'];
    variants?: ComponentsVariants<Theme>['UshiiContainer'];
  };
  UshiiCssBaseline?: {
    defaultProps?: ComponentsProps['UshiiCssBaseline'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiCssBaseline'];
    variants?: ComponentsVariants<Theme>['UshiiCssBaseline'];
  };
  /*
  UshiiDialog?: {
    defaultProps?: ComponentsProps['UshiiDialog'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiDialog'];
    variants?: ComponentsVariants<Theme>['UshiiDialog'];
  };
  UshiiDialogActions?: {
    defaultProps?: ComponentsProps['UshiiDialogActions'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiDialogActions'];
    variants?: ComponentsVariants<Theme>['UshiiDialogActions'];
  };
  UshiiDialogContent?: {
    defaultProps?: ComponentsProps['UshiiDialogContent'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiDialogContent'];
    variants?: ComponentsVariants<Theme>['UshiiDialogContent'];
  };
  UshiiDialogContentText?: {
    defaultProps?: ComponentsProps['UshiiDialogContentText'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiDialogContentText'];
    variants?: ComponentsVariants<Theme>['UshiiDialogContentText'];
  };
  UshiiDialogTitle?: {
    defaultProps?: ComponentsProps['UshiiDialogTitle'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiDialogTitle'];
    variants?: ComponentsVariants<Theme>['UshiiDialogTitle'];
  };
  */
  UshiiDivider?: {
    defaultProps?: ComponentsProps['UshiiDivider'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiDivider'];
    variants?: ComponentsVariants<Theme>['UshiiDivider'];
  };
  UshiiDrawer?: {
    defaultProps?: ComponentsProps['UshiiDrawer'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiDrawer'];
    variants?: ComponentsVariants<Theme>['UshiiDrawer'];
  };
  /*
  UshiiAccordion?: {
    defaultProps?: ComponentsProps['UshiiAccordion'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiAccordion'];
    variants?: ComponentsVariants<Theme>['UshiiAccordion'];
  };
  UshiiAccordionActions?: {
    defaultProps?: ComponentsProps['UshiiAccordionActions'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiAccordionActions'];
    variants?: ComponentsVariants<Theme>['UshiiAccordionActions'];
  };
  UshiiAccordionDetails?: {
    defaultProps?: ComponentsProps['UshiiAccordionDetails'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiAccordionDetails'];
    variants?: ComponentsVariants<Theme>['UshiiAccordionDetails'];
  };
  UshiiAccordionSummary?: {
    defaultProps?: ComponentsProps['UshiiAccordionSummary'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiAccordionSummary'];
    variants?: ComponentsVariants<Theme>['UshiiAccordionSummary'];
  };
  UshiiFab?: {
    defaultProps?: ComponentsProps['UshiiFab'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiFab'];
    variants?: ComponentsVariants<Theme>['UshiiFab'];
  };
  UshiiFilledInput?: {
    defaultProps?: ComponentsProps['UshiiFilledInput'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiFilledInput'];
    variants?: ComponentsVariants<Theme>['UshiiFilledInput'];
  };
  UshiiFormControl?: {
    defaultProps?: ComponentsProps['UshiiFormControl'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiFormControl'];
    variants?: ComponentsVariants<Theme>['UshiiFormControl'];
  };
  UshiiFormControlLabel?: {
    defaultProps?: ComponentsProps['UshiiFormControlLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiFormControlLabel'];
    variants?: ComponentsVariants<Theme>['UshiiFormControlLabel'];
  };
  UshiiFormGroup?: {
    defaultProps?: ComponentsProps['UshiiFormGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiFormGroup'];
    variants?: ComponentsVariants<Theme>['UshiiFormGroup'];
  };
  UshiiFormHelperText?: {
    defaultProps?: ComponentsProps['UshiiFormHelperText'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiFormHelperText'];
    variants?: ComponentsVariants<Theme>['UshiiFormHelperText'];
  };
  UshiiFormLabel?: {
    defaultProps?: ComponentsProps['UshiiFormLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiFormLabel'];
    variants?: ComponentsVariants<Theme>['UshiiFormLabel'];
  };
  */
  UshiiGrid?: {
    defaultProps?: ComponentsProps['UshiiGrid'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiGrid'];
    variants?: ComponentsVariants<Theme>['UshiiGrid'];
  };
  UshiiGrid2?: {
    defaultProps?: ComponentsProps['UshiiGrid2'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiGrid2'];
    variants?: ComponentsVariants<Theme>['UshiiGrid2'];
  };
  /*
  UshiiImageList?: {
    defaultProps?: ComponentsProps['UshiiImageList'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiImageList'];
    variants?: ComponentsVariants<Theme>['UshiiImageList'];
  };
  UshiiImageListItem?: {
    defaultProps?: ComponentsProps['UshiiImageListItem'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiImageListItem'];
    variants?: ComponentsVariants<Theme>['UshiiImageListItem'];
  };
  UshiiImageListItemBar?: {
    defaultProps?: ComponentsProps['UshiiImageListItemBar'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiImageListItemBar'];
    variants?: ComponentsVariants<Theme>['UshiiImageListItemBar'];
  };
  UshiiIcon?: {
    defaultProps?: ComponentsProps['UshiiIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiIcon'];
    variants?: ComponentsVariants<Theme>['UshiiIcon'];
  };
  */
  UshiiIconButton?: {
    defaultProps?: ComponentsProps['UshiiIconButton'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiIconButton'];
    variants?: ComponentsVariants<Theme>['UshiiIconButton'];
  };
  /*
  UshiiInput?: {
    defaultProps?: ComponentsProps['UshiiInput'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiInput'];
    variants?: ComponentsVariants<Theme>['UshiiInput'];
  };
  UshiiInputAdornment?: {
    defaultProps?: ComponentsProps['UshiiInputAdornment'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiInputAdornment'];
    variants?: ComponentsVariants<Theme>['UshiiInputAdornment'];
  };
  UshiiInputBase?: {
    defaultProps?: ComponentsProps['UshiiInputBase'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiInputBase'];
    variants?: ComponentsVariants<Theme>['UshiiInputBase'];
  };
  UshiiInputLabel?: {
    defaultProps?: ComponentsProps['UshiiInputLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiInputLabel'];
    variants?: ComponentsVariants<Theme>['UshiiInputLabel'];
  };
  UshiiLinearProgress?: {
    defaultProps?: ComponentsProps['UshiiLinearProgress'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiLinearProgress'];
    variants?: ComponentsVariants<Theme>['UshiiLinearProgress'];
  };
  */
  UshiiLink?: {
    defaultProps?: ComponentsProps['UshiiLink'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiLink'];
    variants?: ComponentsVariants<Theme>['UshiiLink'];
  };
  UshiiList?: {
    defaultProps?: ComponentsProps['UshiiList'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiList'];
    variants?: ComponentsVariants<Theme>['UshiiList'];
  };
  UshiiListItem?: {
    defaultProps?: ComponentsProps['UshiiListItem'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiListItem'];
    variants?: ComponentsVariants<Theme>['UshiiListItem'];
  };
  UshiiListItemButton?: {
    defaultProps?: ComponentsProps['UshiiListItemButton'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiListItemButton'];
    variants?: ComponentsVariants<Theme>['UshiiListItemButton'];
  };
  UshiiListItemAvatar?: {
    defaultProps?: ComponentsProps['UshiiListItemAvatar'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiListItemAvatar'];
    variants?: ComponentsVariants<Theme>['UshiiListItemAvatar'];
  };
  /*
  UshiiListItemIcon?: {
    defaultProps?: ComponentsProps['UshiiListItemIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiListItemIcon'];
    variants?: ComponentsVariants<Theme>['UshiiListItemIcon'];
  };
  UshiiListItemSecondaryAction?: {
    defaultProps?: ComponentsProps['UshiiListItemSecondaryAction'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiListItemSecondaryAction'];
    variants?: ComponentsVariants<Theme>['UshiiListItemSecondaryAction'];
  };
  */
  UshiiListItemText?: {
    defaultProps?: ComponentsProps['UshiiListItemText'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiListItemText'];
    variants?: ComponentsVariants<Theme>['UshiiListItemText'];
  };
  UshiiListSubheader?: {
    defaultProps?: ComponentsProps['UshiiListSubheader'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiListSubheader'];
    variants?: ComponentsVariants<Theme>['UshiiListSubheader'];
  };
  UshiiMenu?: {
    defaultProps?: ComponentsProps['UshiiMenu'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiMenu'];
    variants?: ComponentsVariants<Theme>['UshiiMenu'];
  };
  UshiiMenuItem?: {
    defaultProps?: ComponentsProps['UshiiMenuItem'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiMenuItem'];
    variants?: ComponentsVariants<Theme>['UshiiMenuItem'];
  };
  UshiiMenuList?: {
    defaultProps?: ComponentsProps['UshiiMenuList'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiMenuList'];
    variants?: ComponentsVariants<Theme>['UshiiMenuList'];
  };
  /*
  UshiiMobileStepper?: {
    defaultProps?: ComponentsProps['UshiiMobileStepper'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiMobileStepper'];
    variants?: ComponentsVariants<Theme>['UshiiMobileStepper'];
  };
  */
  UshiiModal?: {
    defaultProps?: ComponentsProps['UshiiModal'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiModal'];
    variants?: ComponentsVariants<Theme>['UshiiModal'];
  };
  /*
  UshiiNativeSelect?: {
    defaultProps?: ComponentsProps['UshiiNativeSelect'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiNativeSelect'];
    variants?: ComponentsVariants<Theme>['UshiiNativeSelect'];
  };
  UshiiOutlinedInput?: {
    defaultProps?: ComponentsProps['UshiiOutlinedInput'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiOutlinedInput'];
    variants?: ComponentsVariants<Theme>['UshiiOutlinedInput'];
  };
  UshiiPagination?: {
    defaultProps?: ComponentsProps['UshiiPagination'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiPagination'];
    variants?: ComponentsVariants<Theme>['UshiiPagination'];
  };
  UshiiPaginationItem?: {
    defaultProps?: ComponentsProps['UshiiPaginationItem'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiPaginationItem'];
    variants?: ComponentsVariants<Theme>['UshiiPaginationItem'];
  };
  */
  UshiiPaper?: {
    defaultProps?: ComponentsProps['UshiiPaper'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiPaper'];
    variants?: ComponentsVariants<Theme>['UshiiPaper'];
  };
  UshiiPopper?: {
    defaultProps?: ComponentsProps['UshiiPopper'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiPopper'];
  };
  UshiiPopover?: {
    defaultProps?: ComponentsProps['UshiiPopover'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiPopover'];
    variants?: ComponentsVariants<Theme>['UshiiPopover'];
  };
  /*
  UshiiRadio?: {
    defaultProps?: ComponentsProps['UshiiRadio'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiRadio'];
    variants?: ComponentsVariants<Theme>['UshiiRadio'];
  };
  UshiiRadioGroup?: {
    defaultProps?: ComponentsProps['UshiiRadioGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiRadioGroup'];
    variants?: ComponentsVariants<Theme>['UshiiRadioGroup'];
  };
  */
  UshiiRating?: {
    defaultProps?: ComponentsProps['UshiiRating'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiRating'];
    variants?: ComponentsVariants<Theme>['UshiiRating'];
  };
  /*
  UshiiScopedCssBaseline?: {
    defaultProps?: ComponentsProps['UshiiScopedCssBaseline'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiScopedCssBaseline'];
    variants?: ComponentsVariants<Theme>['UshiiScopedCssBaseline'];
  };
  UshiiSelect?: {
    defaultProps?: ComponentsProps['UshiiSelect'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiSelect'];
    variants?: ComponentsVariants<Theme>['UshiiSelect'];
  };
  UshiiSkeleton?: {
    defaultProps?: ComponentsProps['UshiiSkeleton'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiSkeleton'];
    variants?: ComponentsVariants<Theme>['UshiiSkeleton'];
  };
  UshiiSlider?: {
    defaultProps?: ComponentsProps['UshiiSlider'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiSlider'];
    variants?: ComponentsVariants<Theme>['UshiiSlider'];
  };
  */
  UshiiSnackbar?: {
    defaultProps?: ComponentsProps['UshiiSnackbar'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiSnackbar'];
    variants?: ComponentsVariants<Theme>['UshiiSnackbar'];
  };
  UshiiSnackbarContent?: {
    defaultProps?: ComponentsProps['UshiiSnackbarContent'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiSnackbarContent'];
    variants?: ComponentsVariants<Theme>['UshiiSnackbarContent'];
  };
  /*
  UshiiSpeedDial?: {
    defaultProps?: ComponentsProps['UshiiSpeedDial'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiSpeedDial'];
    variants?: ComponentsVariants<Theme>['UshiiSpeedDial'];
  };
  UshiiSpeedDialAction?: {
    defaultProps?: ComponentsProps['UshiiSpeedDialAction'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiSpeedDialAction'];
    variants?: ComponentsVariants<Theme>['UshiiSpeedDialAction'];
  };
  UshiiSpeedDialIcon?: {
    defaultProps?: ComponentsProps['UshiiSpeedDialIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiSpeedDialIcon'];
    variants?: ComponentsVariants<Theme>['UshiiSpeedDialIcon'];
  };
  */
  UshiiStack?: {
    defaultProps?: ComponentsProps['UshiiStack'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiStack'];
    variants?: ComponentsVariants<Theme>['UshiiStack'];
  };
  /*
  UshiiStep?: {
    defaultProps?: ComponentsProps['UshiiStep'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiStep'];
    variants?: ComponentsVariants<Theme>['UshiiStep'];
  };
  UshiiStepButton?: {
    defaultProps?: ComponentsProps['UshiiStepButton'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiStepButton'];
    variants?: ComponentsVariants<Theme>['UshiiStepButton'];
  };
  UshiiStepConnector?: {
    defaultProps?: ComponentsProps['UshiiStepConnector'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiStepConnector'];
    variants?: ComponentsVariants<Theme>['UshiiStepConnector'];
  };
  UshiiStepContent?: {
    defaultProps?: ComponentsProps['UshiiStepContent'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiStepContent'];
    variants?: ComponentsVariants<Theme>['UshiiStepContent'];
  };
  UshiiStepIcon?: {
    defaultProps?: ComponentsProps['UshiiStepIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiStepIcon'];
    variants?: ComponentsVariants<Theme>['UshiiStepIcon'];
  };
  UshiiStepLabel?: {
    defaultProps?: ComponentsProps['UshiiStepLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiStepLabel'];
    variants?: ComponentsVariants<Theme>['UshiiStepLabel'];
  };
  UshiiStepper?: {
    defaultProps?: ComponentsProps['UshiiStepper'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiStepper'];
    variants?: ComponentsVariants<Theme>['UshiiStepper'];
  };
  */
  UshiiSvgIcon?: {
    defaultProps?: ComponentsProps['UshiiSvgIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiSvgIcon'];
    variants?: ComponentsVariants<Theme>['UshiiSvgIcon'];
  };
  UshiiSwipeableDrawer?: {
    defaultProps?: ComponentsProps['UshiiSwipeableDrawer'];
  };
  /*
  UshiiSwitch?: {
    defaultProps?: ComponentsProps['UshiiSwitch'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiSwitch'];
    variants?: ComponentsVariants<Theme>['UshiiSwitch'];
  };
  UshiiTab?: {
    defaultProps?: ComponentsProps['UshiiTab'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTab'];
    variants?: ComponentsVariants<Theme>['UshiiTab'];
  };
  UshiiTable?: {
    defaultProps?: ComponentsProps['UshiiTable'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTable'];
    variants?: ComponentsVariants<Theme>['UshiiTable'];
  };
  UshiiTableBody?: {
    defaultProps?: ComponentsProps['UshiiTableBody'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTableBody'];
    variants?: ComponentsVariants<Theme>['UshiiTableBody'];
  };
  UshiiTableCell?: {
    defaultProps?: ComponentsProps['UshiiTableCell'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTableCell'];
    variants?: ComponentsVariants<Theme>['UshiiTableCell'];
  };
  UshiiTableContainer?: {
    defaultProps?: ComponentsProps['UshiiTableContainer'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTableContainer'];
    variants?: ComponentsVariants<Theme>['UshiiTableContainer'];
  };
  UshiiTableFooter?: {
    defaultProps?: ComponentsProps['UshiiTableFooter'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTableFooter'];
    variants?: ComponentsVariants<Theme>['UshiiTableFooter'];
  };
  UshiiTableHead?: {
    defaultProps?: ComponentsProps['UshiiTableHead'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTableHead'];
    variants?: ComponentsVariants<Theme>['UshiiTableHead'];
  };
  UshiiTablePagination?: {
    defaultProps?: ComponentsProps['UshiiTablePagination'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTablePagination'];
    variants?: ComponentsVariants<Theme>['UshiiTablePagination'];
  };
  UshiiTableRow?: {
    defaultProps?: ComponentsProps['UshiiTableRow'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTableRow'];
    variants?: ComponentsVariants<Theme>['UshiiTableRow'];
  };
  UshiiTableSortLabel?: {
    defaultProps?: ComponentsProps['UshiiTableSortLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTableSortLabel'];
    variants?: ComponentsVariants<Theme>['UshiiTableSortLabel'];
  };
  UshiiTabs?: {
    defaultProps?: ComponentsProps['UshiiTabs'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTabs'];
    variants?: ComponentsVariants<Theme>['UshiiTabs'];
  };
  UshiiTextField?: {
    defaultProps?: ComponentsProps['UshiiTextField'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTextField'];
    variants?: ComponentsVariants<Theme>['UshiiTextField'];
  };
  */
  UshiiToggleButton?: {
    defaultProps?: ComponentsProps['UshiiToggleButton'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiToggleButton'];
    variants?: ComponentsVariants<Theme>['UshiiToggleButton'];
  };
  UshiiToggleButtonGroup?: {
    defaultProps?: ComponentsProps['UshiiToggleButtonGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiToggleButtonGroup'];
    variants?: ComponentsVariants<Theme>['UshiiToggleButtonGroup'];
  };
  UshiiToolbar?: {
    defaultProps?: ComponentsProps['UshiiToolbar'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiToolbar'];
    variants?: ComponentsVariants<Theme>['UshiiToolbar'];
  };
  UshiiTooltip?: {
    defaultProps?: ComponentsProps['UshiiTooltip'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTooltip'];
    variants?: ComponentsVariants<Theme>['UshiiTooltip'];
  };
  UshiiTouchRipple?: {
    defaultProps?: ComponentsProps['UshiiTouchRipple'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTouchRipple'];
    variants?: ComponentsVariants<Theme>['UshiiTouchRipple'];
  };
  UshiiTypography?: {
    defaultProps?: ComponentsProps['UshiiTypography'];
    styleOverrides?: ComponentsOverrides<Theme>['UshiiTypography'];
    variants?: ComponentsVariants<Theme>['UshiiTypography'];
  };
  UshiiUseMediaQuery?: {
    defaultProps?: ComponentsProps['UshiiUseMediaQuery'];
  };
}
