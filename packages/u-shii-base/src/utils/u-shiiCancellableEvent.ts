export type UshiiCancellableEvent = {
  defaultUshiiPrevented?: boolean;
};

export type UshiiCancellableEventHandler<Event> = (event: Event & UshiiCancellableEvent) => void;
