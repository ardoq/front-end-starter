import {
  actionCreator,
  collectRoutines,
  dispatchAction,
  persistentReducedStream,
  reducer,
  routine,
} from 'rxbeach';
import { tap } from 'rxjs/operators';
import { extractPayload, ofType } from 'rxbeach/operators';

export type Settings = {
  value: boolean;
};

export const updateCounter = actionCreator<number>('update counter');
export const resetCounter = actionCreator('reset counter');

export type StreamState = {
  count: number;
};

export const defaultState: StreamState = {
  count: 0,
};

const handleUpdateCounter = reducer(
  updateCounter,
  (oldState: StreamState, newCount: number): StreamState => ({
    ...oldState,
    count: newCount,
  })
);

const handleResetCounter = reducer(
  resetCounter,
  (): StreamState => ({
    count: 0,
  })
);

export const state$ = persistentReducedStream('state', defaultState, [
  handleUpdateCounter,
  handleResetCounter,
]);

const handleCounterRoutine = routine(
  ofType(updateCounter),
  extractPayload(),
  tap((e) => {
    console.log('ads', e);
    dispatchAction(resetCounter());
  })
);

export const routines = collectRoutines(handleCounterRoutine);
