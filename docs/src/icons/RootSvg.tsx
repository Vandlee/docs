import { styled, Theme } from '@u_ui/u-ui/styles';
import { SxProps } from '@u_ui/system';

export type RootSvgProps<P = unknown> = Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
  sx?: SxProps<Theme>;
  ref?: React.Ref<SVGSVGElement>;
} & P;

const Svg = styled('svg')({
  verticalAlign: 'bottom',
});

export default Svg;
