import * as React from 'react';
import { SxProps } from '@u_ui/system';
import { OverridableStringUnion } from '@mui/types';
import { OverridableComponent, OverrideProps } from '@u_ui/u-ui/OverridableComponent';
import { PropTypes, Theme } from '..';
import { AppBarClasses } from './appBarClasses';
import { ExtendPaperTypeMap } from '../Paper/Paper';

export interface AppBarPropsColorOverrides {}

export interface AppBarOwnProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AppBarClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    PropTypes.Color | 'transparent' | 'error' | 'info' | 'success' | 'warning',
    AppBarPropsColorOverrides
  >;
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark?: boolean;
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export type AppBarTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'header',
> = ExtendPaperTypeMap<
  {
    props: AdditionalProps & AppBarOwnProps;
    defaultComponent: RootComponent;
  },
  'position' | 'color' | 'classes'
>;

declare const AppBar: OverridableComponent<AppBarTypeMap>;

export type AppBarProps<
  RootComponent extends React.ElementType = AppBarTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<AppBarTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};

export default AppBar;
