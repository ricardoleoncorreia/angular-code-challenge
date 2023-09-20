import { createSelector } from '@ngrx/store';

import { AppState } from './timer.reducers';

export const selectTimer = (state: AppState) => state.timer;
export const selectLastTime = createSelector(selectTimer, state => state.lastTime);
export const selectSavedDate = createSelector(selectTimer, state => state.savedAt);
