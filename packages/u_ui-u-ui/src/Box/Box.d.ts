import { BoxTypeMap } from '@u-shii/system';
import { OverridableComponent } from '@mui/types';
import { OverrideProps } from '../OverridableComponent';
import { Theme as UshiiTheme } from '../styles';

declare const Box: OverridableComponent<BoxTypeMap<{}, 'div', UshiiTheme>>;

export type BoxProps<
  RootComponent extends React.ElementType = BoxTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<BoxTypeMap<AdditionalProps, RootComponent, UshiiTheme>, RootComponent> & {
  component?: React.ElementType;
};

export default Box;
