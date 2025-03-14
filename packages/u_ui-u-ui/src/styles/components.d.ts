import { ComponentsProps } from './props';
import { ComponentsOverrides } from './overrides';
import { ComponentsVariants } from './variants';

export interface Components<Theme = unknown> {
  uiAlert?: {
    defaultProps?: ComponentsProps['uiAlert'];
    styleOverrides?: ComponentsOverrides<Theme>['uiAlert'];
    variants?: ComponentsVariants<Theme>['uiAlert'];
  };
  /*
  uiAlertTitle?: {
    defaultProps?: ComponentsProps['uiAlertTitle'];
    styleOverrides?: ComponentsOverrides<Theme>['uiAlertTitle'];
    variants?: ComponentsVariants<Theme>['uiAlertTitle'];
  };
  */
  uiAppBar?: {
    defaultProps?: ComponentsProps['uiAppBar'];
    styleOverrides?: ComponentsOverrides<Theme>['uiAppBar'];
    variants?: ComponentsVariants<Theme>['uiAppBar'];
  };
  /*
  uiAutocomplete?: {
    defaultProps?: ComponentsProps['uiAutocomplete'];
    styleOverrides?: ComponentsOverrides<Theme>['uiAutocomplete'];
    variants?: ComponentsVariants<Theme>['uiAutocomplete'];
  };
  */
  uiAvatar?: {
    defaultProps?: ComponentsProps['uiAvatar'];
    styleOverrides?: ComponentsOverrides<Theme>['uiAvatar'];
    variants?: ComponentsVariants<Theme>['uiAvatar'];
  };
  uiAvatarGroup?: {
    defaultProps?: ComponentsProps['uiAvatarGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['uiAvatarGroup'];
    variants?: ComponentsVariants<Theme>['uiAvatarGroup'];
  };
  uiBackdrop?: {
    defaultProps?: ComponentsProps['uiBackdrop'];
    styleOverrides?: ComponentsOverrides<Theme>['uiBackdrop'];
    variants?: ComponentsVariants<Theme>['uiBackdrop'];
  };
  uiBadge?: {
    defaultProps?: ComponentsProps['uiBadge'];
    styleOverrides?: ComponentsOverrides<Theme>['uiBadge'];
    variants?: ComponentsVariants<Theme>['uiBadge'];
  };
  /*
  uiBottomNavigation?: {
    defaultProps?: ComponentsProps['uiBottomNavigation'];
    styleOverrides?: ComponentsOverrides<Theme>['uiBottomNavigation'];
    variants?: ComponentsVariants<Theme>['uiBottomNavigation'];
  };
  uiBottomNavigationAction?: {
    defaultProps?: ComponentsProps['uiBottomNavigationAction'];
    styleOverrides?: ComponentsOverrides<Theme>['uiBottomNavigationAction'];
    variants?: ComponentsVariants<Theme>['uiBottomNavigationAction'];
  };
  uiBreadcrumbs?: {
    defaultProps?: ComponentsProps['uiBreadcrumbs'];
    styleOverrides?: ComponentsOverrides<Theme>['uiBreadcrumbs'];
    variants?: ComponentsVariants<Theme>['uiBreadcrumbs'];
  };
  */
  uiButton?: {
    defaultProps?: ComponentsProps['uiButton'];
    styleOverrides?: ComponentsOverrides<Theme>['uiButton'];
    variants?: ComponentsVariants<Theme>['uiButton'];
  };
  uiButtonBase?: {
    defaultProps?: ComponentsProps['uiButtonBase'];
    styleOverrides?: ComponentsOverrides<Theme>['uiButtonBase'];
    variants?: ComponentsVariants<Theme>['uiButtonBase'];
  };
  uiButtonGroup?: {
    defaultProps?: ComponentsProps['uiButtonGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['uiButtonGroup'];
    variants?: ComponentsVariants<Theme>['uiButtonGroup'];
  };
  uiCard?: {
    defaultProps?: ComponentsProps['uiCard'];
    styleOverrides?: ComponentsOverrides<Theme>['uiCard'];
    variants?: ComponentsVariants<Theme>['uiCard'];
  };
  /*
  uiCardActionArea?: {
    defaultProps?: ComponentsProps['uiCardActionArea'];
    styleOverrides?: ComponentsOverrides<Theme>['uiCardActionArea'];
    variants?: ComponentsVariants<Theme>['uiCardActionArea'];
  };
  uiCardActions?: {
    defaultProps?: ComponentsProps['uiCardActions'];
    styleOverrides?: ComponentsOverrides<Theme>['uiCardActions'];
    variants?: ComponentsVariants<Theme>['uiCardActions'];
  };
  uiCardContent?: {
    defaultProps?: ComponentsProps['uiCardContent'];
    styleOverrides?: ComponentsOverrides<Theme>['uiCardContent'];
    variants?: ComponentsVariants<Theme>['uiCardContent'];
  };
  uiCardHeader?: {
    defaultProps?: ComponentsProps['uiCardHeader'];
    styleOverrides?: ComponentsOverrides<Theme>['uiCardHeader'];
    variants?: ComponentsVariants<Theme>['uiCardHeader'];
  };
  */
  uiCardMedia?: {
    defaultProps?: ComponentsProps['uiCardMedia'];
    styleOverrides?: ComponentsOverrides<Theme>['uiCardMedia'];
    variants?: ComponentsVariants<Theme>['uiCardMedia'];
  };
  /*
  uiCheckbox?: {
    defaultProps?: ComponentsProps['uiCheckbox'];
    styleOverrides?: ComponentsOverrides<Theme>['uiCheckbox'];
    variants?: ComponentsVariants<Theme>['uiCheckbox'];
  };
  */
  uiChip?: {
    defaultProps?: ComponentsProps['uiChip'];
    styleOverrides?: ComponentsOverrides<Theme>['uiChip'];
    variants?: ComponentsVariants<Theme>['uiChip'];
  };
  
  uiCircularProgress?: {
    defaultProps?: ComponentsProps['uiCircularProgress'];
    styleOverrides?: ComponentsOverrides<Theme>['uiCircularProgress'];
    variants?: ComponentsVariants<Theme>['uiCircularProgress'];
  };
 
  uiCollapse?: {
    defaultProps?: ComponentsProps['uiCollapse'];
    styleOverrides?: ComponentsOverrides<Theme>['uiCollapse'];
    variants?: ComponentsVariants<Theme>['uiCollapse'];
  };
  uiContainer?: {
    defaultProps?: ComponentsProps['uiContainer'];
    styleOverrides?: ComponentsOverrides<Theme>['uiContainer'];
    variants?: ComponentsVariants<Theme>['uiContainer'];
  };
  uiCssBaseline?: {
    defaultProps?: ComponentsProps['uiCssBaseline'];
    styleOverrides?: ComponentsOverrides<Theme>['uiCssBaseline'];
    variants?: ComponentsVariants<Theme>['uiCssBaseline'];
  };
  /*
  uiDialog?: {
    defaultProps?: ComponentsProps['uiDialog'];
    styleOverrides?: ComponentsOverrides<Theme>['uiDialog'];
    variants?: ComponentsVariants<Theme>['uiDialog'];
  };
  uiDialogActions?: {
    defaultProps?: ComponentsProps['uiDialogActions'];
    styleOverrides?: ComponentsOverrides<Theme>['uiDialogActions'];
    variants?: ComponentsVariants<Theme>['uiDialogActions'];
  };
  uiDialogContent?: {
    defaultProps?: ComponentsProps['uiDialogContent'];
    styleOverrides?: ComponentsOverrides<Theme>['uiDialogContent'];
    variants?: ComponentsVariants<Theme>['uiDialogContent'];
  };
  uiDialogContentText?: {
    defaultProps?: ComponentsProps['uiDialogContentText'];
    styleOverrides?: ComponentsOverrides<Theme>['uiDialogContentText'];
    variants?: ComponentsVariants<Theme>['uiDialogContentText'];
  };
  uiDialogTitle?: {
    defaultProps?: ComponentsProps['uiDialogTitle'];
    styleOverrides?: ComponentsOverrides<Theme>['uiDialogTitle'];
    variants?: ComponentsVariants<Theme>['uiDialogTitle'];
  };
  */
  uiDivider?: {
    defaultProps?: ComponentsProps['uiDivider'];
    styleOverrides?: ComponentsOverrides<Theme>['uiDivider'];
    variants?: ComponentsVariants<Theme>['uiDivider'];
  };
  uiDrawer?: {
    defaultProps?: ComponentsProps['uiDrawer'];
    styleOverrides?: ComponentsOverrides<Theme>['uiDrawer'];
    variants?: ComponentsVariants<Theme>['uiDrawer'];
  };
  /*
  uiAccordion?: {
    defaultProps?: ComponentsProps['uiAccordion'];
    styleOverrides?: ComponentsOverrides<Theme>['uiAccordion'];
    variants?: ComponentsVariants<Theme>['uiAccordion'];
  };
  uiAccordionActions?: {
    defaultProps?: ComponentsProps['uiAccordionActions'];
    styleOverrides?: ComponentsOverrides<Theme>['uiAccordionActions'];
    variants?: ComponentsVariants<Theme>['uiAccordionActions'];
  };
  uiAccordionDetails?: {
    defaultProps?: ComponentsProps['uiAccordionDetails'];
    styleOverrides?: ComponentsOverrides<Theme>['uiAccordionDetails'];
    variants?: ComponentsVariants<Theme>['uiAccordionDetails'];
  };
  uiAccordionSummary?: {
    defaultProps?: ComponentsProps['uiAccordionSummary'];
    styleOverrides?: ComponentsOverrides<Theme>['uiAccordionSummary'];
    variants?: ComponentsVariants<Theme>['uiAccordionSummary'];
  };
  uiFab?: {
    defaultProps?: ComponentsProps['uiFab'];
    styleOverrides?: ComponentsOverrides<Theme>['uiFab'];
    variants?: ComponentsVariants<Theme>['uiFab'];
  };
  uiFilledInput?: {
    defaultProps?: ComponentsProps['uiFilledInput'];
    styleOverrides?: ComponentsOverrides<Theme>['uiFilledInput'];
    variants?: ComponentsVariants<Theme>['uiFilledInput'];
  };
  uiFormControl?: {
    defaultProps?: ComponentsProps['uiFormControl'];
    styleOverrides?: ComponentsOverrides<Theme>['uiFormControl'];
    variants?: ComponentsVariants<Theme>['uiFormControl'];
  };
  uiFormControlLabel?: {
    defaultProps?: ComponentsProps['uiFormControlLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['uiFormControlLabel'];
    variants?: ComponentsVariants<Theme>['uiFormControlLabel'];
  };
  uiFormGroup?: {
    defaultProps?: ComponentsProps['uiFormGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['uiFormGroup'];
    variants?: ComponentsVariants<Theme>['uiFormGroup'];
  };
  uiFormHelperText?: {
    defaultProps?: ComponentsProps['uiFormHelperText'];
    styleOverrides?: ComponentsOverrides<Theme>['uiFormHelperText'];
    variants?: ComponentsVariants<Theme>['uiFormHelperText'];
  };
  uiFormLabel?: {
    defaultProps?: ComponentsProps['uiFormLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['uiFormLabel'];
    variants?: ComponentsVariants<Theme>['uiFormLabel'];
  };
  */
  uiGrid?: {
    defaultProps?: ComponentsProps['uiGrid'];
    styleOverrides?: ComponentsOverrides<Theme>['uiGrid'];
    variants?: ComponentsVariants<Theme>['uiGrid'];
  };
  /*
  uiImageList?: {
    defaultProps?: ComponentsProps['uiImageList'];
    styleOverrides?: ComponentsOverrides<Theme>['uiImageList'];
    variants?: ComponentsVariants<Theme>['uiImageList'];
  };
  uiImageListItem?: {
    defaultProps?: ComponentsProps['uiImageListItem'];
    styleOverrides?: ComponentsOverrides<Theme>['uiImageListItem'];
    variants?: ComponentsVariants<Theme>['uiImageListItem'];
  };
  uiImageListItemBar?: {
    defaultProps?: ComponentsProps['uiImageListItemBar'];
    styleOverrides?: ComponentsOverrides<Theme>['uiImageListItemBar'];
    variants?: ComponentsVariants<Theme>['uiImageListItemBar'];
  };
  uiIcon?: {
    defaultProps?: ComponentsProps['uiIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['uiIcon'];
    variants?: ComponentsVariants<Theme>['uiIcon'];
  };
  */
  uiIconButton?: {
    defaultProps?: ComponentsProps['uiIconButton'];
    styleOverrides?: ComponentsOverrides<Theme>['uiIconButton'];
    variants?: ComponentsVariants<Theme>['uiIconButton'];
  };
  /*
  uiInput?: {
    defaultProps?: ComponentsProps['uiInput'];
    styleOverrides?: ComponentsOverrides<Theme>['uiInput'];
    variants?: ComponentsVariants<Theme>['uiInput'];
  };
  uiInputAdornment?: {
    defaultProps?: ComponentsProps['uiInputAdornment'];
    styleOverrides?: ComponentsOverrides<Theme>['uiInputAdornment'];
    variants?: ComponentsVariants<Theme>['uiInputAdornment'];
  };
  uiInputBase?: {
    defaultProps?: ComponentsProps['uiInputBase'];
    styleOverrides?: ComponentsOverrides<Theme>['uiInputBase'];
    variants?: ComponentsVariants<Theme>['uiputBase'];
  };
  uiInputLabel?: {
    defaultProps?: ComponentsProps['uiputLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['uiInputLabel'];
    variants?: ComponentsVariants<Theme>['uiInputLabel'];
  };
  uiLinearProgress?: {
    defaultProps?: ComponentsProps['uiLinearProgress'];
    styleOverrides?: ComponentsOverrides<Theme>['uiLinearProgress'];
    variants?: ComponentsVariants<Theme>['uiLinearProgress'];
  };
  */
  uiLink?: {
    defaultProps?: ComponentsProps['uiLink'];
    styleOverrides?: ComponentsOverrides<Theme>['uiLink'];
    variants?: ComponentsVariants<Theme>['uiLink'];
  };
  uiList?: {
    defaultProps?: ComponentsProps['uiList'];
    styleOverrides?: ComponentsOverrides<Theme>['uiList'];
    variants?: ComponentsVariants<Theme>['uiList'];
  };
  uiListItem?: {
    defaultProps?: ComponentsProps['uiListItem'];
    styleOverrides?: ComponentsOverrides<Theme>['uiListItem'];
    variants?: ComponentsVariants<Theme>['uiListItem'];
  };
  uiListItemButton?: {
    defaultProps?: ComponentsProps['uiListItemButton'];
    styleOverrides?: ComponentsOverrides<Theme>['uiListItemButton'];
    variants?: ComponentsVariants<Theme>['uiListItemButton'];
  };
  uiListItemAvatar?: {
    defaultProps?: ComponentsProps['uiListItemAvatar'];
    styleOverrides?: ComponentsOverrides<Theme>['uiListItemAvatar'];
    variants?: ComponentsVariants<Theme>['uiListItemAvatar'];
  };
  /*
  uiListItemIcon?: {
    defaultProps?: ComponentsProps['uiListItemIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['uiListItemIcon'];
    variants?: ComponentsVariants<Theme>['uiListItemIcon'];
  };
  uiListItemSecondaryAction?: {
    defaultProps?: ComponentsProps['uiListItemSecondaryAction'];
    styleOverrides?: ComponentsOverrides<Theme>['uiListItemSecondaryAction'];
    variants?: ComponentsVariants<Theme>['uiListItemSecondaryAction'];
  };
  */
  uiListItemText?: {
    defaultProps?: ComponentsProps['uiListItemText'];
    styleOverrides?: ComponentsOverrides<Theme>['uiListItemText'];
    variants?: ComponentsVariants<Theme>['uiListItemText'];
  };
  uiListSubheader?: {
    defaultProps?: ComponentsProps['uiListSubheader'];
    styleOverrides?: ComponentsOverrides<Theme>['uiListSubheader'];
    variants?: ComponentsVariants<Theme>['uiListSubheader'];
  };
  uiMenu?: {
    defaultProps?: ComponentsProps['uiMenu'];
    styleOverrides?: ComponentsOverrides<Theme>['uiMenu'];
    variants?: ComponentsVariants<Theme>['uiMenu'];
  };
  uiMenuItem?: {
    defaultProps?: ComponentsProps['uiMenuItem'];
    styleOverrides?: ComponentsOverrides<Theme>['uiMenuItem'];
    variants?: ComponentsVariants<Theme>['uiMenuItem'];
  };
  uiMenuList?: {
    defaultProps?: ComponentsProps['uiMenuList'];
    styleOverrides?: ComponentsOverrides<Theme>['uiMenuList'];
    variants?: ComponentsVariants<Theme>['uiMenuList'];
  };
  /*
  uiMobileStepper?: {
    defaultProps?: ComponentsProps['uiMobileStepper'];
    styleOverrides?: ComponentsOverrides<Theme>['uiMobileStepper'];
    variants?: ComponentsVariants<Theme>['uiMobileStepper'];
  };
  */
  uiModal?: {
    defaultProps?: ComponentsProps['uiModal'];
    styleOverrides?: ComponentsOverrides<Theme>['uiModal'];
    variants?: ComponentsVariants<Theme>['uiModal'];
  };
  /*
  uiNativeSelect?: {
    defaultProps?: ComponentsProps['uiNativeSelect'];
    styleOverrides?: ComponentsOverrides<Theme>['uiNativeSelect'];
    variants?: ComponentsVariants<Theme>['uiNativeSelect'];
  };
  uiOutlinedInput?: {
    defaultProps?: ComponentsProps['uiOutlinedInput'];
    styleOverrides?: ComponentsOverrides<Theme>['uiOutlinedInput'];
    variants?: ComponentsVariants<Theme>['uiOutlinedInput'];
  };
  uiPagination?: {
    defaultProps?: ComponentsProps['uiPagination'];
    styleOverrides?: ComponentsOverrides<Theme>['uiPagination'];
    variants?: ComponentsVariants<Theme>['uiPagination'];
  };
  uiPaginationItem?: {
    defaultProps?: ComponentsProps['uiPaginationItem'];
    styleOverrides?: ComponentsOverrides<Theme>['uiPaginationItem'];
    variants?: ComponentsVariants<Theme>['uiPaginationItem'];
  };
  */
  uiPaper?: {
    defaultProps?: ComponentsProps['uiPaper'];
    styleOverrides?: ComponentsOverrides<Theme>['uiPaper'];
    variants?: ComponentsVariants<Theme>['uiPaper'];
  };
  uiPopper?: {
    defaultProps?: ComponentsProps['uiPopper'];
    styleOverrides?: ComponentsOverrides<Theme>['uiPopper'];
  };
  uiPopover?: {
    defaultProps?: ComponentsProps['uiPopover'];
    styleOverrides?: ComponentsOverrides<Theme>['uiPopover'];
    variants?: ComponentsVariants<Theme>['uiPopover'];
  };
  /*
  uiRadio?: {
    defaultProps?: ComponentsProps['uiRadio'];
    styleOverrides?: ComponentsOverrides<Theme>['uiRadio'];
    variants?: ComponentsVariants<Theme>['uiRadio'];
  };
  uiRadioGroup?: {
    defaultProps?: ComponentsProps['uiRadioGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['uiRadioGroup'];
    variants?: ComponentsVariants<Theme>['uiRadioGroup'];
  };
  */
  uiRating?: {
    defaultProps?: ComponentsProps['uiRating'];
    styleOverrides?: ComponentsOverrides<Theme>['uiRating'];
    variants?: ComponentsVariants<Theme>['uiRating'];
  };
  /*
  uiScopedCssBaseline?: {
    defaultProps?: ComponentsProps['uiScopedCssBaseline'];
    styleOverrides?: ComponentsOverrides<Theme>['uiScopedCssBaseline'];
    variants?: ComponentsVariants<Theme>['uiScopedCssBaseline'];
  };
  uiSelect?: {
    defaultProps?: ComponentsProps['uiSelect'];
    styleOverrides?: ComponentsOverrides<Theme>['uiSelect'];
    variants?: ComponentsVariants<Theme>['uiSelect'];
  };
  uiSkeleton?: {
    defaultProps?: ComponentsProps['uiSkeleton'];
    styleOverrides?: ComponentsOverrides<Theme>['uiSkeleton'];
    variants?: ComponentsVariants<Theme>['uiSkeleton'];
  };
  uiSlider?: {
    defaultProps?: ComponentsProps['uiSlider'];
    styleOverrides?: ComponentsOverrides<Theme>['uiSlider'];
    variants?: ComponentsVariants<Theme>['uiSlider'];
  };
  */
  uiSnackbar?: {
    defaultProps?: ComponentsProps['uiSnackbar'];
    styleOverrides?: ComponentsOverrides<Theme>['uiSnackbar'];
    variants?: ComponentsVariants<Theme>['uiSnackbar'];
  };
  uiSnackbarContent?: {
    defaultProps?: ComponentsProps['uiSnackbarContent'];
    styleOverrides?: ComponentsOverrides<Theme>['uiSnackbarContent'];
    variants?: ComponentsVariants<Theme>['uiSnackbarContent'];
  };
  /*
  uiSpeedDial?: {
    defaultProps?: ComponentsProps['uiSpeedDial'];
    styleOverrides?: ComponentsOverrides<Theme>['uiSpeedDial'];
    variants?: ComponentsVariants<Theme>['uiSpeedDial'];
  };
  uiSpeedDialAction?: {
    defaultProps?: ComponentsProps['uiSpeedDialAction'];
    styleOverrides?: ComponentsOverrides<Theme>['uiSpeedDialAction'];
    variants?: ComponentsVariants<Theme>['uiSpeedDialAction'];
  };
  uiSpeedDialIcon?: {
    defaultProps?: ComponentsProps['uiSpeedDialIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['uiSpeedDialIcon'];
    variants?: ComponentsVariants<Theme>['uiSpeedDialIcon'];
  };
  */
  uiStack?: {
    defaultProps?: ComponentsProps['uiStack'];
    styleOverrides?: ComponentsOverrides<Theme>['uiStack'];
    variants?: ComponentsVariants<Theme>['uiStack'];
  };
  /*
  uiStep?: {
    defaultProps?: ComponentsProps['uiStep'];
    styleOverrides?: ComponentsOverrides<Theme>['uiStep'];
    variants?: ComponentsVariants<Theme>['uiStep'];
  };
  uiStepButton?: {
    defaultProps?: ComponentsProps['uiStepButton'];
    styleOverrides?: ComponentsOverrides<Theme>['uiStepButton'];
    variants?: ComponentsVariants<Theme>['uiStepButton'];
  };
  uiStepConnector?: {
    defaultProps?: ComponentsProps['uiStepConnector'];
    styleOverrides?: ComponentsOverrides<Theme>['uiStepConnector'];
    variants?: ComponentsVariants<Theme>['uiStepConnector'];
  };
  uiStepContent?: {
    defaultProps?: ComponentsProps['uiStepContent'];
    styleOverrides?: ComponentsOverrides<Theme>['uiStepContent'];
    variants?: ComponentsVariants<Theme>['uiStepContent'];
  };
  uiStepIcon?: {
    defaultProps?: ComponentsProps['uiStepIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['uiepIcon'];
    variants?: ComponentsVariants<Theme>['uiStepIcon'];
  };
  uiStepLabel?: {
    defaultProps?: ComponentsProps['uiStepLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['uiStepLabel'];
    variants?: ComponentsVariants<Theme>['uiStepLabel'];
  };
  uiStepper?: {
    defaultProps?: ComponentsProps['uiStepper'];
    styleOverrides?: ComponentsOverrides<Theme>['uiStepper'];
    variants?: ComponentsVariants<Theme>['uiStepper'];
  };
  */
  uiSvgIcon?: {
    defaultProps?: ComponentsProps['uiSvgIcon'];
    styleOverrides?: ComponentsOverrides<Theme>['uiSvgIcon'];
    variants?: ComponentsVariants<Theme>['uiSvgIcon'];
  };
  uiSwipeableDrawer?: {
    defaultProps?: ComponentsProps['uiSwipeableDrawer'];
  };
  /*
  uiSwitch?: {
    defaultProps?: ComponentsProps['uiSwitch'];
    styleOverrides?: ComponentsOverrides<Theme>['uiSwitch'];
    variants?: ComponentsVariants<Theme>['uiSwitch'];
  };
  uiTab?: {
    defaultProps?: ComponentsProps['uiTab'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTab'];
    variants?: ComponentsVariants<Theme>['uiTab'];
  };
  uiTable?: {
    defaultProps?: ComponentsProps['uiTable'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTable'];
    variants?: ComponentsVariants<Theme>['uiTable'];
  };
  uiTableBody?: {
    defaultProps?: ComponentsProps['uiTableBody'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTableBody'];
    variants?: ComponentsVariants<Theme>['uiTableBody'];
  };
  uiTableCell?: {
    defaultProps?: ComponentsProps['uiTableCell'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTableCell'];
    variants?: ComponentsVariants<Theme>['uiTableCell'];
  };
  uiTableContainer?: {
    defaultProps?: ComponentsProps['uiTableContainer'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTableContainer'];
    variants?: ComponentsVariants<Theme>['uiTableContainer'];
  };
  uiTableFooter?: {
    defaultProps?: ComponentsProps['uiTableFooter'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTableFooter'];
    variants?: ComponentsVariants<Theme>['uiTableFooter'];
  };
  uiTableHead?: {
    defaultProps?: ComponentsProps['uiTableHead'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTableHead'];
    variants?: ComponentsVariants<Theme>['uiTableHead'];
  };
  uiTablePagination?: {
    defaultProps?: ComponentsProps['uiTablePagination'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTablePagination'];
    variants?: ComponentsVariants<Theme>['uiTablePagination'];
  };
  uiTableRow?: {
    defaultProps?: ComponentsProps['uiTableRow'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTableRow'];
    variants?: ComponentsVariants<Theme>['uiTableRow'];
  };
  uiTableSortLabel?: {
    defaultProps?: ComponentsProps['uiTableSortLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTableSortLabel'];
    variants?: ComponentsVariants<Theme>['uiTableSortLabel'];
  };
  uiTabs?: {
    defaultProps?: ComponentsProps['uiTabs'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTabs'];
    variants?: ComponentsVariants<Theme>['uibs'];
  };
  uiTextField?: {
    defaultProps?: ComponentsProps['uixtField'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTextField'];
    variants?: ComponentsVariants<Theme>['uiTextField'];
  };
  */
  uiToggleButton?: {
    defaultProps?: ComponentsProps['uiToggleButton'];
    styleOverrides?: ComponentsOverrides<Theme>['uiToggleButton'];
    variants?: ComponentsVariants<Theme>['uiToggleButton'];
  };
  uiToggleButtonGroup?: {
    defaultProps?: ComponentsProps['uiToggleButtonGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['uiToggleButtonGroup'];
    variants?: ComponentsVariants<Theme>['uiToggleButtonGroup'];
  };
  uiToolbar?: {
    defaultProps?: ComponentsProps['uiToolbar'];
    styleOverrides?: ComponentsOverrides<Theme>['uiToolbar'];
    variants?: ComponentsVariants<Theme>['uiToolbar'];
  };
  uiTooltip?: {
    defaultProps?: ComponentsProps['uiTooltip'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTooltip'];
    variants?: ComponentsVariants<Theme>['uiTooltip'];
  };
  uiTouchRipple?: {
    defaultProps?: ComponentsProps['uiTouchRipple'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTouchRipple'];
    variants?: ComponentsVariants<Theme>['uiTouchRipple'];
  };
  uiTypography?: {
    defaultProps?: ComponentsProps['uiTypography'];
    styleOverrides?: ComponentsOverrides<Theme>['uiTypography'];
    variants?: ComponentsVariants<Theme>['uiTypography'];
  };
  uiUseMediaQuery?: {
    defaultProps?: ComponentsProps['uiUseMediaQuery'];
  };
}
