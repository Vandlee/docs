import { BoxTypeMap } from '@yushii/system';
import { OverridableComponent } from '@mui/types';
import { OverrideProps } from '../OverridableComponent';
import { Theme as YushiiTheme } from '../styles';

declare const Box: OverridableComponent<BoxTypeMap<{}, 'div', YushiiTheme>>;

export type BoxProps<
  RootComponent extends React.ElementType = BoxTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<BoxTypeMap<AdditionalProps, RootComponent, YushiiTheme>, RootComponent> & {
  component?: React.ElementType;
};

export default Box;
