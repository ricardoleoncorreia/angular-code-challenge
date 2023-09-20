import { createReducer, on } from '@ngrx/store';

import { saveTime } from './timer.actions';

export interface AppState {
  timer: TimerState;
}

interface TimerState {
  lastTime: number;
  savedAt: string | null;
}

export const initialTimerState: TimerState = {
  lastTime: 10,
  savedAt: new Date().toISOString()
};

export const timerReducer = createReducer(
  initialTimerState,
  on(saveTime, (state, { lastTime }) => ({ ...state, lastTime, savedAt: new Date().toISOString() })),
);
