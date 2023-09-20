import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map, tap } from 'rxjs';

import { selectLastTime, selectSavedDate } from '../store/timer.selectors';

export const summaryGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  const hasValidTime$ = store.select(selectLastTime).pipe(map(time => time !== 0));
  const hasValidSavedDate$ = store.select(selectSavedDate).pipe(map(date => !!date));

  return combineLatest([hasValidTime$, hasValidSavedDate$]).pipe(
    map(([hasValidTime, hasValidSavedDate]) => hasValidTime && hasValidSavedDate),
    tap(activateView => !activateView && router.navigate(['/timer']))
  );
}
