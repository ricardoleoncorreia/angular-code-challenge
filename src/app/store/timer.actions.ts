import { createAction, props } from '@ngrx/store';

export const saveTime = createAction('[Timer Component] Save Time', props<{ lastTime: number }>());
