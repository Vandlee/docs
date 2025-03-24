import { SxProps } from '@u_ui/system';
import { SlotComponentProps } from '@vandlee/utils';
import { Theme } from '../styles';

export type {
  EventHandlers,
  WithOptionalOwnerState,
  SlotComponentProps,
  SlotComponentPropsWithSlotState,
} from '@vandlee/utils';

export type SlotCommonProps = {
  component?: React.ElementType;
  sx?: SxProps<Theme>;
};

export type SlotProps<
  TSlotComponent extends React.ElementType,
  TOverrides,
  TOwnerState,
> = SlotComponentProps<TSlotComponent, SlotCommonProps & TOverrides, TOwnerState>;

/**
 * Use the keys of `slot` to make sure that K contains all of the keys
 *
 */

export type CreateSlotsAndSlotProps<Slots, K extends Record<keyof Slots, any>> = {
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: Partial<Slots>;
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps?: {
    [P in keyof K]?: K[P];
  };
};
