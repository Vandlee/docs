'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles as SystemGlobalStyles } from '@u_ui/system';
import defaultTheme from '../styles/defaultTheme';
import THEME_ID from '../styles/identifier';

function GlobalStyles(props) {
  return <SystemGlobalStyles {...props} defaultTheme={defaultTheme} themeId={THEME_ID} />;
}

GlobalStyles.propTypes /* remove-proptypes */ = {
  /**
   * The styles you want to apply globally
   */
  styles: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
};

export default GlobalStyles;
