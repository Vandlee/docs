'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import resolveProps from '@vandlee/utils/resolveProps';
import composeClasses from '@vandlee/utils/composeClasses';
import { alpha } from '@u_ui/system/colorManipulator';
import { unstable_useId as useId } from '@u_ui/u-ui/utils';
import rootShouldForwardProp from '../styles/rootShouldForwardProp';
import { styled } from '../zero-styled';
import memoTheme from '../utils/memoTheme';
import { useDefaultProps } from '../DefaultPropsProvider';
import ButtonBase from '../ButtonBase';
import CircularProgress from '../CircularProgress';
import capitalize from '../utils/capitalize';
import createSimplePaletteValueFilter from '../utils/createSimplePaletteValueFilter';
import buttonClasses, { getButtonUtilityClass } from './buttonClasses';
import ButtonGroupContext from '../ButtonGroup/ButtonGroupContext';
import ButtonGroupButtonContext from '../ButtonGroup/ButtonGroupButtonContext';
import Collapse from '../Collapse';
import Grow from '../Grow';
import Zoom from '../Zoom';

const useUtilityClasses = (ownerState) => {
  const { color, enableElevation, fullWidth, size, variant, loading, loadingPosition, classes } = 
    ownerState;

  const slots = {
    root: [
      'root',
      loading && 'loading',
      variant,
      `${variant}${capitalize(color)}`,
      `size${capitalize(size)}`,
      `${variant}Size${capitalize(size)}`,
      `color${capitalize(color)}`,
      enableElevation && 'enableElevation',
      fullWidth && 'fullWidth',
      loading && `loadingPosition${capitalize(loadingPosition)}`,
    ],
    startIcon: ['icon', 'startIcon', `iconSize${capitalize(size)}`],
    endIcon: ['icon', 'endIcon', `iconSize${capitalize(size)}`],
    loadingIndicator: ['loadingIndicator'],
    loadingWrapper: ['loadingWrapper'],
  };

  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);

  return {
    ...classes, // forward the focused, disabled, etc. classes to the ButtonBase
    ...composedClasses,
  };
};

const commonIconStyles = [
  {
    props: { size: 'small' },
    style: {
      '& > *:nth-of-type(1)': {
        fontSize: 18,
      },
    },
  },
  {
    props: { size: 'medium' },
    style: {
      '& > *:nth-of-type(1)': {
        fontSize: 20,
      },
    },
  },
  {
    props: { size: 'large' },
    style: {
      '& > *:nth-of-type(1)': {
        fontSize: 22,
      },
    },
  },
];

const ButtonRoot = styled(ButtonBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'uiButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      styles[`${ownerState.variant}${capitalize(ownerState.color)}`],
      styles[`size${capitalize(ownerState.size)}`],
      styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`],
      ownerState.color === 'inherit' && styles.colorInherit,
      ownerState.enableElevation && styles.enableElevation,
      ownerState.fullWidth && styles.fullWidth,
      ownerState.loading && styles.loading,
    ];
  },
})(
  memoTheme(({ theme }) => {
    const inheritContainedBackgroundColor =
      theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];

    const inheritContainedHoverBackgroundColor =
      theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
    return {
      ...theme.typography.button,
      minWidth: 64,
      padding: '10px 12px',
      border: 0,
      borderRadius: (theme.vars || theme).shape.borderRadius,
      transition: theme.transitions.create(
        ['background-color', 'box-shadow', 'border-color', 'color'],
        {
          duration: theme.transitions.duration.short,
        },
      ),
      '&:hover': {
        textDecoration: 'none',
      },
      '.uiButton-icon': {
        marginTop: -2
      },
      '.uiButton-endIcon, .uiButton-startIcon': {
        transition: theme.transitions.create(
          ['transform'],
          {
            duration: theme.transitions.duration.short
          }
        )
      },
      '&:hover .uiButton-startIcon': {
        transform: 'translateX(-2px)',
      },
      '&:hover .uiButton-endIcon': {
        transform: 'translateX(2px)',
      },
      [`&.${buttonClasses.disabled}`]: {
        color: (theme.vars || theme).palette.action.disabled,
      },
      variants: [
        {
          props: { isRadius: true },
          style: {
            borderRadius: '500px',
          },
        },
        {
          props: { disableIconAnimation: true },
          style: {
            '&:hover .uiButton-startIcon': {
              transform: 'unset',
            },
            '&:hover .uiButton-endIcon': {
              transform: 'unset',
            },
          }
        },
        {
          props: { variant: 'contained' },
          style: {
            color: `var(--variant-containedColor)`,
            backgroundColor: `var(--variant-containedBg)`,
            boxShadow: (theme.vars || theme).shadows[2],
            '&:hover': {
              boxShadow: (theme.vars || theme).shadows[4],
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                boxShadow: (theme.vars || theme).shadows[2],
              },
            },
            '&:active': {
              boxShadow: (theme.vars || theme).shadows[8],
            },
            [`&.${buttonClasses.focusVisible}`]: {
              boxShadow: (theme.vars || theme).shadows[6],
            },
            [`&.${buttonClasses.disabled}`]: {
              color: (theme.vars || theme).palette.action.disabled,
              boxShadow: (theme.vars || theme).shadows[0],
              backgroundColor: (theme.vars || theme).palette.action.disabledBackground,
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            padding: '10px 12px',
            border: '1px solid currentColor',
            borderColor: `var(--variant-outlinedBorder, currentColor)`,
            backgroundColor: `var(--variant-outlinedBg)`,
            color: `var(--variant-outlinedColor)`,
            [`&.${buttonClasses.disabled}`]: {
              border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            padding: '10px 12px',
            color: `var(--variant-textColor)`,
            backgroundColor: `var(--variant-textBg)`,
          },
        },
        ...Object.entries(theme.palette)
          .filter(createSimplePaletteValueFilter())
          .map(([color]) => ({
            props: { color },
            style: {
              '--variant-textColor': (theme.vars || theme).palette[color].main,
              '--variant-textNeutralColor': 'currentColor',
              '--variant-outlinedColor': (theme.vars || theme).palette[color].main,
              '--variant-outlinedBorder': theme.vars
                ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)`
                : alpha(theme.palette[color].main, 0.5),
              '--variant-outlinedBorderNeutral': theme.vars
                ? `rgba(${theme.vars.palette[color].mainChannel} / 0.2)`
                : alpha(theme.palette[color].main, 0.2),
              '--variant-containedColor': (theme.vars || theme).palette[color].contrastText,
              '--variant-containedBg': (theme.vars || theme).palette[color].main,
              '@media (hover: hover)': {
                '&:hover': {
                  '--variant-containedBg': (theme.vars || theme).palette[color].dark,
                  '--variant-textBg': theme.vars
                    ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`
                    : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
                  '--variant-outlinedBorder': (theme.vars || theme).palette[color].main,
                  '--variant-outlinedBorderNeutral': theme.vars
                    ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)`
                    : alpha(theme.palette[color].main, 0.5),
                  '--variant-outlinedBg': theme.vars
                    ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`
                    : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
                },
              },
            },
          })),
        {
          props: {
            color: 'inherit',
          },
          style: {
            color: 'inherit',
            borderColor: 'currentColor',
            '--variant-containedBg': theme.vars
              ? theme.vars.palette.Button.inheritContainedBg
              : inheritContainedBackgroundColor,
            '@media (hover: hover)': {
              '&:hover': {
                '--variant-containedBg': theme.vars
                  ? theme.vars.palette.Button.inheritContainedHoverBg
                  : inheritContainedHoverBackgroundColor,
                '--variant-textBg': theme.vars
                  ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})`
                  : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
                '--variant-outlinedBg': theme.vars
                  ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})`
                  : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
              },
            },
          },
        },
        {
          props: { color: 'neutral' },
          style: {
            color: `var(--textNeutralColor)`,
            borderColor: `var(--variant-outlinedBorderNeutral)`
          }
        },
        {
          props: {
            size: 'small',
            variant: 'text',
          },
          style: {
            padding: '4px 5px',
            fontSize: theme.typography.pxToRem(13),
          },
        },
        {
          props: {
            size: 'large',
            variant: 'text',
          },
          style: {
            padding: '12px 22px',
            fontSize: theme.typography.pxToRem(15),
          },
        },
        {
          props: {
            size: 'small',
            variant: 'outlined',
          },
          style: {
            padding: '3px 9px',
            fontSize: theme.typography.pxToRem(13),
          },
        },
        {
          props: {
            size: 'large',
            variant: 'outlined',
          },
          style: {
            padding: '11px 22px',
            fontSize: theme.typography.pxToRem(15),
          },
        },
        {
          props: {
            size: 'small',
            variant: 'contained',
          },
          style: {
            padding: '4px 10px',
            fontSize: theme.typography.pxToRem(13),
          },
        },
        {
          props: {
            size: 'large',
            variant: 'contained',
          },
          style: {
            padding: '12px 22px',
            fontSize: theme.typography.pxToRem(15),
          },
        },
        {
          props: {
            enableElevation: false,
          },
          style: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
            [`&.${buttonClasses.focusVisible}`]: {
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
            },
            [`&.${buttonClasses.disabled}`]: {
              boxShadow: 'none',
            },
          },
        },
        {
          props: { fullWidth: true },
          style: { width: '100%' },
        },
        {
          props: {
            justify: 'center',
          },
          style: {
            justifyContent: 'center',
          },
        },
        {
          props: {
            justify: 'start',
          },
          style: {
            justifyContent: 'flex-start',
            textAlign: 'start',
          },
        },
        {
          props: {
            justify: 'end',
          },
          style: {
            justifyContent: 'flex-end',
          },
        },
        {
          props: {
            loadingPosition: 'center',
          },
          style: {
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color'],
              {
                duration: theme.transitions.duration.short,
              },
            ),
            [`&.${buttonClasses.loading}`]: {
              color: 'transparent !important',
            },
          },
        },
      ],
    };
  }),
);

const ButtonStartIcon = styled('span', {
  name: 'uiButton',
  slot: 'StartIcon',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.startIcon,
      ownerState.loading && styles.startIconLoadingStart,
      styles[`iconSize${capitalize(ownerState.size)}`],
    ];
  },
})(({ theme }) => ({
  display: 'inherit',
  marginRight: 8,
  marginLeft: -4,
  lineHeight: 1,
  height: 'inherit',
  variants: [
    {
      props: { size: 'small' },
      style: {
        marginLeft: 0,
        marginRight: 2
      },
    },
    {
      props: { loadingPosition: 'start', loading: true },
      style: {
        transition: theme.transitions.create(['opacity'], {
          duration: theme.transitions.duration.short,
        }),
        opacity: 0,
      },
    },
    ...commonIconStyles,
  ],
}));

const ButtonEndIcon = styled('span', {
  name: 'uiButton',
  slot: 'EndIcon',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.endIcon,
      ownerState.loading && styles.endIconLoadingEnd,
      styles[`iconSize${capitalize(ownerState.size)}`],
    ];
  },
})(({ theme }) => ({
  display: 'inherit',
  marginRight: -4,
  marginLeft: 8,
  lineHeight: 1,
  height: 'inherit',
  variants: [
    {
      props: { size: 'small' },
      style: {
        marginLeft: 2,
        marginRight: 0,
      },
    },
    {
      props: { loadingPosition: 'end', loading: true },
      style: {
        transition: theme.transitions.create(['opacity'], {
          duration: theme.transitions.duration.short,
        }),
        opacity: 0,
      },
    },
    ...commonIconStyles,
  ],
}));

const ButtonLoadingIndicator = styled('span', {
  name: 'uiButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => styles.loadingIndicator,
})(({ theme }) => ({
  position: 'absolute',
  visibility: 'visible',
  variants: [
    { props: { loading: true }, style: { display: 'flex' } },
    {
      props: { loadingPosition: 'start' },
      style: {
        left: 14,
      },
    },
    {
      props: {
        loadingPosition: 'start',
        size: 'small',
      },
      style: {
        left: 10,
      },
    },
    {
      props: {
        variant: 'text',
        loadingPosition: 'start',
      },
      style: {
        left: 6,
      },
    },
    {
      props: {
        loadingPosition: 'center',
      },
      style: {
        left: '50%',
        transform: 'translate(-50%)',
        color: (theme.vars || theme).palette.action.disabled,
      },
    },
    {
      props: { loadingPosition: 'end' },
      style: {
        right: 14,
      },
    },
    {
      props: {
        loadingPosition: 'end',
        size: 'small',
      },
      style: {
        right: 10,
      },
    },
    {
      props: {
        variant: 'text',
        loadingPosition: 'end',
      },
      style: {
        right: 6,
      },
    },
  ],
}));

const ButtonLoadingIconPlaceholder = styled('span', {
  name: 'uiButton',
  slot: 'LoadingIconPlaceholder',
  overridesResolver: (props, styles) => styles.loadingIconPlaceholder,
})({
  display: 'inline-block',
  width: '1em',
  height: '1em',
});

const Button = React.forwardRef(function Button(inProps, ref) {
  // props priority: `inProps` > `contextProps` > `themeDefaultProps`
  const contextProps = React.useContext(ButtonGroupContext);
  const buttonGroupButtonContextPositionClassName = React.useContext(ButtonGroupButtonContext);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useDefaultProps({ props: resolvedProps, name: 'uiButton' });
  const {
    children,
    color = 'contrast',
    component = 'button',
    className,
    justify = 'center',
    disabled = false,
    enableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = 'center',
    size = 'medium',
    startIcon: startIconProp,
    type,
    variant = 'text',
    disableIconAnimation = false,
    ...other
  } = props;

  const id = useId(idProp);
  const loadingIndicator = loadingIndicatorProp ?? (
    <CircularProgress aria-labelledby={id} color="inherit" size={16} />
  );

  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    enableElevation,
    disableFocusRipple,
    fullWidth,
    loading,
    loadingIndicator,
    loadingPosition,
    size,
    type,
    variant,
    disableIconAnimation
  };

  const classes = useUtilityClasses(ownerState);

  const startIcon = (
    <Collapse timeout='auto' sx={{ height: '1.25em', '& .uiCollapse-wrapper, & .uiCollapse-wrapperInner': { display: 'flex', alignItems: 'center'}}} orientation='horizontal' in={startIconProp || (loading && loadingPosition === 'start')} unmountOnExit>
      <ButtonStartIcon className={classes.startIcon} ownerState={ownerState}>
        {startIconProp || (
          <ButtonLoadingIconPlaceholder
            className={classes.loadingIconPlaceholder}
            ownerState={ownerState}
          />
        )}
      </ButtonStartIcon>
    </Collapse>
  );

  const endIcon = (
    <Collapse timeout='auto' sx={{ height: '1.25em', display: 'flex', alignItems: 'center', '& .uiCollapse-wrapper, & .uiCollapse-wrapperInner': { display: 'flex', alignItems: 'center'} }} orientation='horizontal' in={endIconProp || (loading && loadingPosition === 'end')} unmountOnExit>
      <ButtonEndIcon className={classes.endIcon} ownerState={ownerState}>
        {endIconProp || (
          <ButtonLoadingIconPlaceholder
            className={classes.loadingIconPlaceholder}
            ownerState={ownerState}
          />
        )}
      </ButtonEndIcon>
    </Collapse>
  );

  const positionClassName = buttonGroupButtonContextPositionClassName || '';

  const loader =
    typeof loading === 'boolean' ? (
      // use plain HTML span to minimize the runtime overhead
      <span className={classes.loadingWrapper} style={{ display: 'contents' }}>
        <ButtonLoadingIndicator className={classes.loadingIndicator} ownerState={ownerState}>
          <Zoom in={loading} unmountOnExit>
            <div style={{ display: 'flex', alignItems: 'center'}}>{loadingIndicator}</div>
          </Zoom>
        </ButtonLoadingIndicator>
      </span>
    ) : null;
  
  return (
    <ButtonRoot
      ownerState={ownerState}
      className={clsx(contextProps.className, classes.root, className, positionClassName)}
      component={component}
      disabled={disabled || loading}
      focusRipple={!disableFocusRipple}
      focusVisibleClassName={clsx(classes.focusVisible, focusVisibleClassName)}
      ref={ref}
      type={type}
      id={id}
      {...other}
      classes={classes}
    >
      {startIcon}
      {loadingPosition !== 'end' && loader}
      {children}
      {loadingPosition === 'end' && loader}
      {endIcon}
    </ButtonRoot>
  );
});

Button.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'contrast'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
    PropTypes.oneOf(['inherit', 'primary', 'secondary', 'contrast', 'neutral', 'success', 'error', 'info', 'warning']),
    PropTypes.string,
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, no elevation is used.
   * @default true
   */
  enableElevation: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.ui--focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * Element placed after the children.
   */
  endIcon: PropTypes.node,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * @ignore
   */
  id: PropTypes.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: PropTypes.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: PropTypes.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: PropTypes.oneOf(['center', 'end', 'start']),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  /**
   * Element placed before the children.
   */
  startIcon: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * @ignore
   */
  type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
    PropTypes.oneOf(['contained', 'outlined', 'text']),
    PropTypes.string,
  ]),
  /**
   * If `true`, the button will be rounded.
   * @default false
   */
  isRounded: PropTypes.bool,
  /**
   *  If `true`, the button will not animate the icon.
   * @default false
   */
  disableIconAnimation: PropTypes.bool,
  /**
   * Defines the `justify-content` style property.
   * @default 'center'
   */
  justify: PropTypes.oneOf(['start', 'center', 'end']),
};

export default Button;
