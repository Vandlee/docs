import resolveProps from '@u-shii/utils/resolveProps';

export default function getThemeProps(params) {
  const { theme, name, props } = params;

  if (
    !theme ||
    !theme.components ||
    !theme.components[name] ||
    !theme.components[name].defaultProps
  ) {
    return props;
  }

  return resolveProps(theme.components[name].defaultProps, props);
}
