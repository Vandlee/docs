export type YushiiCancellableEvent = {
  defaultYushiiPrevented?: boolean;
};

export type YushiiCancellableEventHandler<Event> = (event: Event & YushiiCancellableEvent) => void;
