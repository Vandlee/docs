import * as React from 'react';
import {
  CreateUshiiStyled as CreateUshiiStyledStyledEngine,
  CSSInterpolation,
} from '@u-shii/styled-engine';
import styleFunctionSx, { SxProps } from '../styleFunctionSx';
import { Theme as DefaultTheme } from '../createTheme';

export function shouldForwardProp(propName: PropertyKey): boolean;

export interface UshiiStyledCommonProps<Theme extends object = DefaultTheme> {
  theme?: Theme;
  as?: React.ElementType;
  sx?: SxProps<Theme>;
}

export interface UshiiStyledOptions {
  name?: string;
  slot?: string;
  // The difference between Interpolation and CSSInterpolation is that the former supports functions based on props
  // If we want to support props in the overrides, we will need to change the CSSInterpolation to Interpolation<Props>
  overridesResolver?: (props: any, styles: Record<string, CSSInterpolation>) => CSSInterpolation;
  skipVariantsResolver?: boolean;
  skipSx?: boolean;
}

export type CreateUshiiStyled<Theme extends object = DefaultTheme> =
  CreateUshiiStyledStyledEngine<UshiiStyledCommonProps<Theme>, UshiiStyledOptions, Theme>;

export default function createStyled<Theme extends object = DefaultTheme>(options?: {
  themeId?: string;
  defaultTheme?: Theme;
  rootShouldForwardProp?: (prop: PropertyKey) => boolean;
  slotShouldForwardProp?: (prop: PropertyKey) => boolean;
  styleFunctionSx?: typeof styleFunctionSx;
}): CreateUshiiStyled<Theme>;
