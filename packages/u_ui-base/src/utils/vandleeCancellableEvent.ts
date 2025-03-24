export type VandleeCancellableEvent = {
  defaultVandleePrevented?: boolean;
};

export type VandleeCancellableEventHandler<Event> = (event: Event & VandleeCancellableEvent) => void;
