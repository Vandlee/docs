import * as React from 'react';
import { useTheme, styled, Theme } from '@yushii/ui/styles';
import Box from '@yushii/ui/Box';
import { SxProps } from '@yushii/system';

export type IconImageProps = {
  name: 'product-ui' | string;
  height?: number;
  mode?: '' | 'light' | 'dark';
  sx?: SxProps<Theme>;
  width?: number;
} & Omit<React.JSX.IntrinsicElements['img'], 'ref'>;

const Img = styled('img')({ display: 'inline-block', verticalAlign: 'bottom' });

let neverHydrated = true;

export default function IconImage(props: IconImageProps) {
  const { height: heightProp, name, width: widthProp, mode: modeProp, ...other } = props;
  const theme = useTheme();
  const [firstRender, setFirstRender] = React.useState(true);
  React.useEffect(() => {
    setFirstRender(false);
    neverHydrated = false;
  }, []);
  let defaultWidth;
  let defaultHeight;
  const mode = modeProp ?? (theme.palette.mode as any);

  if (name.startsWith('product-')) {
    defaultWidth = 36;
    defaultHeight = 36;
  } else if (name.startsWith('pricing/x-plan-')) {
    defaultWidth = 13;
    defaultHeight = 15;
  } else if (['pricing/yes', 'pricing/no', 'pricing/time'].includes(name)) {
    defaultWidth = 18;
    defaultHeight = 18;
  }

  const width = widthProp ?? defaultWidth;
  const height = heightProp ?? defaultHeight;

  // First time render with a theme depend image
  if (firstRender && neverHydrated && mode !== '') {
    if (other.loading === 'eager') {
      return (
        <React.Fragment>
          <Img
            className="only-light-mode-v2"
            src={`/static/branding/${name}-light.svg`}
            alt=""
            width={width}
            height={height}
            {...other}
            loading="lazy"
          />
          <Img
            className="only-dark-mode-v2"
            src={`/static/branding/${name}-dark.svg`}
            alt=""
            width={width}
            height={height}
            {...other}
            loading="lazy"
          />
        </React.Fragment>
      );
    }

    // Prevent hydratation mismatch between the light and dark mode image source.
    return <Box component="span" sx={{ width, height, display: 'inline-block' }} />;
  }

  return (
    <Img
      src={`/static/branding/${name}${mode ? `-${mode}` : ''}.svg`}
      alt=""
      loading="lazy"
      width={width}
      height={height}
      {...other}
    />
  );
}
