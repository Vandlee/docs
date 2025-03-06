import * as React from 'react';
import { DistributiveOmit } from '@mui/types';
import { StyledComponentProps } from './styles';

export { StyledComponentProps };

/**
 * All standard components exposed by `material-ui` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 * @deprecated will be removed in v5 for internal usage only
 */
export type StandardProps<
  ComponentProps,
  ClassKey extends string,
  Removals extends keyof ComponentProps = never,
> = DistributiveOmit<ComponentProps, 'classes' | Removals> &
  StyledComponentProps<ClassKey> & {
    className?: string;
    ref?: ComponentProps extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
    style?: React.CSSProperties;
  };
  
/**
 * @internal
 * ONLY USE FROM WITHIN u-shii/u-ui
 *
 * Internal helper type for conform (describeConformance) components
 * However, we don't declare classes on this type.
 * It is recommended to declare them manually with an interface so that each class can have a separate JSDoc.
 */
export type InternalStandardProps<
  ComponentProps,
  Removals extends keyof ComponentProps = never,
> = DistributiveOmit<ComponentProps, 'classes' | Removals> &
  StyledComponentProps<never> & {
    ref?: ComponentProps extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
    className?: string;
    style?: React.CSSProperties;
  };

export namespace PropTypes {
  type Color = 'inherit' | 'primary' | 'secondary' | 'contrast' | 'neutral' | 'default';
}

import * as colors from './colors';

export { colors };
export * from './styles';

export * from './utils';

export { default as Alert } from './Alert';
export * from './Alert';

export { default as AppBar } from './AppBar';
export * from './AppBar';

export { default as Avatar } from './Avatar';
export * from './Avatar';

export { default as AvatarGroup } from './AvatarGroup';
export * from './AvatarGroup';

export { default as Backdrop } from './Backdrop';
export * from './Backdrop';

export { default as Badge } from './Badge';
export * from './Badge';

export { default as Box } from './Box';
export * from './Box';

export { default as Button } from './Button';
export * from './Button';

export { default as ButtonBase } from './ButtonBase';
export * from './ButtonBase';

export { default as ButtonGroup } from './ButtonGroup';
export * from './ButtonGroup';

export { default as Card } from './Card';
export * from './Card';

export { default as CardMedia } from './CardMedia';
export * from './CardMedia';

export { default as Chip } from './Chip';
export * from './Chip';

export { default as ClickAwayListener } from './ClickAwayListener';
export * from './ClickAwayListener';

export { default as Collapse } from './Collapse';
export * from './Collapse';

export { default as Container } from './Container';
export * from './Container';

export { default as CssBaseline } from './CssBaseline';
export * from './CssBaseline';

/**
 * @deprecated use color-scheme in CssBaseline or ScopedCssBaseline to modify scrollbar color
 */

export { default as Divider } from './Divider';
export * from './Divider';

export { default as Drawer } from './Drawer';
export * from './Drawer';

export { default as Fade } from './Fade';
export * from './Fade';

export { default as Grid } from './Grid';
export * from './Grid';

export { default as Grow } from './Grow';
export * from './Grow';

export { default as IconButton } from './IconButton';
export * from './IconButton';

export { default as Link } from './Link';
export * from './Link';

export { default as List } from './List';
export * from './List';

export { default as ListItem } from './ListItem';
export * from './ListItem';

export { default as ListItemAvatar } from './ListItemAvatar';
export * from './ListItemAvatar';

export { default as ListItemButton } from './ListItemButton';
export * from './ListItemButton';

export { default as ListItemIcon } from './ListItemIcon';
export * from './ListItemIcon';

export { default as ListItemSecondaryAction } from './ListItemSecondaryAction';
export * from './ListItemSecondaryAction';

export { default as ListItemText } from './ListItemText';
export * from './ListItemText';

export { default as ListSubheader } from './ListSubheader';
export * from './ListSubheader';

export { default as Menu } from './Menu';
export * from './Menu';

export { default as MenuItem } from './MenuItem';
export * from './MenuItem';

export { default as MenuList } from './MenuList';
export * from './MenuList';

export { default as Modal } from './Modal';
export * from './Modal';

export { default as NoSsr } from './NoSsr';
export * from './NoSsr';

export { default as Paper } from './Paper';
export * from './Paper';

export { default as Popover } from './Popover';
export * from './Popover';

export { default as Popper } from './Popper';
export * from './Popper';

export { default as Portal } from './Portal';
export * from './Portal';

export { default as Slide } from './Slide';
export * from './Slide';

export { default as Snackbar } from './Snackbar';
export * from './Snackbar';

export { default as SnackbarContent } from './SnackbarContent';
export * from './SnackbarContent';

export { default as Stack } from './Stack';
export * from './Stack';

export { default as Toolbar } from './Toolbar';
export * from './Toolbar';

export { default as Tooltip } from './Tooltip';
export * from './Tooltip';

export { default as SvgIcon } from './SvgIcon';
export * from './SvgIcon';

export { default as Typography } from './Typography';
export * from './Typography';

export { default as useMediaQuery } from './useMediaQuery';
export * from './useMediaQuery';

export { default as useScrollTrigger } from './useScrollTrigger';
export * from './useScrollTrigger';

export { default as Zoom } from './Zoom';
export * from './Zoom';

export { default as GlobalStyles } from './GlobalStyles';
export * from './GlobalStyles';

/**
 * @deprecated will be removed in v5.beta, please use StyledEngineProvider from @mui/material/styles instead
 */
export { StyledEngineProvider } from './styles';

export { unstable_composeClasses } from '@u-shii/utils';

export { default as generateUtilityClass } from './generateUtilityClass';
export * from './generateUtilityClass';

export { default as generateUtilityClasses } from './generateUtilityClasses';

export { default as Unstable_TrapFocus } from './Unstable_TrapFocus';
export * from './Unstable_TrapFocus';