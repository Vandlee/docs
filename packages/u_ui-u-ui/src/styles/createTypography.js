import deepmerge from '@vandlee/utils/deepmerge';

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase',
};
const defaultFontFamily = '"Quicksand", "Helvetica", "Arial", sans-serif';
const robotoFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

/**
 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
 */
export default function createTypography(palette, typography) {
  const {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2,
    ...other
  } = typeof typography === 'function' ? typography(palette) : typography;

  if (process.env.NODE_ENV !== 'production') {
    if (typeof fontSize !== 'number') {
      console.error('VANDLEE: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('VANDLEE: `htmlFontSize` is required to be a number.');
    }
  }

  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || ((size) => `${(size / htmlFontSize) * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing, fontFamily) => ({
    fontFamily: fontFamily || defaultFontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...(fontFamily === defaultFontFamily
      ? { letterSpacing: `${round(letterSpacing / size)}em` }
      : {}),
    ...casing,
    ...allVariants,
  });

  const variants = {
    h1: buildVariant(fontWeightLight, 98, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 61, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 49, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 35, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.5, undefined, robotoFontFamily),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.25, undefined, robotoFontFamily),
    button: buildVariant(fontWeightMedium, 14, 1.75, 1.25, caseAllCaps, robotoFontFamily),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4, undefined, robotoFontFamily),
    overline: buildVariant(fontWeightRegular, 10, 2.66, 1.5, caseAllCaps, robotoFontFamily),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in U-Ui's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit',
    },
  };

  return deepmerge(
    {
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
      ...variants,
    },
    other,
    {
      clone: false, // No need to clone deep
    },
  );
}
