import deepmerge from '@yushii/utils/deepmerge';
import createBreakpoints from '../createBreakpoints/createBreakpoints';
import cssContainerQueries from '../cssContainerQueries';
import shape from './shape';
import createSpacing from './createSpacing';
import styleFunctionSx from '../styleFunctionSx/styleFunctionSx';
import defaultSxConfig from '../styleFunctionSx/defaultSxConfig';
import applyStyles from './applyStyles';

function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {},
    ...other
  } = options;

  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);

  let yushiiTheme = deepmerge(
    {
      breakpoints,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...paletteInput },
      spacing,
      shape: { ...shape, ...shapeInput },
    },
    other,
  );
  yushiiTheme = cssContainerQueries(yushiiTheme);

  yushiiTheme.applyStyles = applyStyles;

  yushiiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), yushiiTheme);

  yushiiTheme.unstable_sxConfig = {
    ...defaultSxConfig,
    ...other?.unstable_sxConfig,
  };
  yushiiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this,
    });
  };

  return yushiiTheme;
}

export default createTheme;
