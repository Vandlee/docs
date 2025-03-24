import { BoxTypeMap } from '@u_ui/system';
import { OverridableComponent } from '@mui/types';
import { OverrideProps } from '../OverridableComponent';
import { Theme as VandleeTheme } from '../styles';

declare const Box: OverridableComponent<BoxTypeMap<{}, 'div', VandleeTheme>>;

export type BoxProps<
  RootComponent extends React.ElementType = BoxTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<BoxTypeMap<AdditionalProps, RootComponent, VandleeTheme>, RootComponent> & {
  component?: React.ElementType;
};

export default Box;
