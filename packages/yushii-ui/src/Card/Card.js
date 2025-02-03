'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import chainPropTypes from '@yushii/utils/chainPropTypes';
import composeClasses from '@yushii/utils/composeClasses';
import { styled } from '../zero-styled';
import { useDefaultProps } from '../DefaultPropsProvider';
import Paper from '../Paper';
import { getCardUtilityClass } from './cardClasses';

const useUtilityClasses = (ownerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getCardUtilityClass, classes);
};

const CardRoot = styled(Paper, {
  name: 'YushiiCard',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({
  overflow: 'hidden',
});

const Card = React.forwardRef(function Card(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'YushiiCard',
  });

  const { className, raised = false, ...other } = props;

  const ownerState = { ...props, raised };

  const classes = useUtilityClasses(ownerState);

  return (
    <CardRoot
      className={clsx(classes.root, className)}
      elevation={raised ? 8 : undefined}
      ref={ref}
      ownerState={ownerState}
      {...other}
    />
  );
});

Card.propTypes /* remove-proptypes */ = {
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
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: chainPropTypes(PropTypes.bool, (props) => {
    if (props.raised && props.variant === 'outlined') {
      return new Error('YUSHII: Combining `raised={true}` with `variant="outlined"` has no effect.');
    }

    return null;
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default Card;
