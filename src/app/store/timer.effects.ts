import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, tap } from 'rxjs';

import { saveTime } from './timer.actions';

@Injectable()
export class TimerEffects {
  readonly saveTime$ = createEffect(() => this.actions$.pipe(
    ofType(saveTime),
    delay(3000),
    tap(() => this.router.navigate(['summary']))
  ), { dispatch: false });

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router
  ) { }
}
