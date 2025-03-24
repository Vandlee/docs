import deepmerge from '@vandlee/utils/deepmerge';
import styleFunctionSx, {
  unstable_defaultSxConfig as defaultSxConfig,
} from '@u_ui/system/styleFunctionSx';
import systemCreateTheme from '@u_ui/system/createTheme';
import generateUtilityClass from '@vandlee/utils/generateUtilityClass';
import createMixins from './createMixins';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shadows from './shadows';
import createTransitions from './createTransitions';
import zIndex from './zIndex';
import { stringifyTheme } from './stringifyTheme';

function createThemeNoVars(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput,
    mixins: mixinsInput = {},
    spacing: spacingInput,
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {},
    shape: shapeInput,
    ...other
  } = options;

  if (options.vars) {
    throw /* minify-error */ new Error(
      'VANDLEE: `vars` is a private field used for CSS variables support.\n' +
        'Please use another name.',
    );
  }

  const palette = createPalette(paletteInput);
  const systemTheme = systemCreateTheme(options);

  let vandleeTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: { ...zIndex },
  });

  vandleeTheme = deepmerge(vandleeTheme, other);
  vandleeTheme = args.reduce((acc, argument) => deepmerge(acc, argument), vandleeTheme);

  if (process.env.NODE_ENV !== 'production') {
    // TODO v6: Refactor to use globalStateClassesMapping from @vandlee/utils once `readOnly` state class is used in Rating component.
    const stateClasses = [
      'active',
      'checked',
      'completed',
      'disabled',
      'error',
      'expanded',
      'focused',
      'focusVisible',
      'required',
      'selected',
    ];

    const traverse = (node, component) => {
      let key;

      // eslint-disable-next-line guard-for-in
      for (key in node) {
        const child = node[key];
        if (stateClasses.includes(key) && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== 'production') {
            const stateClass = generateUtilityClass('', key);
            console.error(
              [
                `VANDLEE: The \`${component}\` component increases ` +
                  `the CSS specificity of the \`${key}\` internal state.`,
                'You can not override it like this: ',
                JSON.stringify(node, null, 2),
                '',
                `Instead, you need to use the '&.${stateClass}' syntax:`,
                JSON.stringify(
                  {
                    root: {
                      [`&.${stateClass}`]: child,
                    },
                  },
                  null,
                  2,
                ),
                '',
                'https://yui.com/r/state-classes-guide',
              ].join('\n'),
            );
          }
          // Remove the style to prevent global conflicts.
          node[key] = {};
        }
      }
    };

    Object.keys(vandleeTheme.components).forEach((component) => {
      const styleOverrides = vandleeTheme.components[component].styleOverrides;

      if (styleOverrides && component.startsWith('ui')) {
        traverse(styleOverrides, component);
      }
    });
  }

  vandleeTheme.unstable_sxConfig = {
    ...defaultSxConfig,
    ...other?.unstable_sxConfig,
  };
  vandleeTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this,
    });
  };
  vandleeTheme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration

  return vandleeTheme;
}

let warnedOnce = false;

export function createVandleeTheme(...args) {
  if (process.env.NODE_ENV !== 'production') {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(
        [
          'VANDLEE: the createVandleeTheme function was renamed to createTheme.',
          '',
          "You should use `import { createTheme } from '@u_ui/u-ui/styles'`",
        ].join('\n'),
      );
    }
  }

  return createThemeNoVars(...args);
}

export default createThemeNoVars;
