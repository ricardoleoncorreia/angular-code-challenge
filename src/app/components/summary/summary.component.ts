import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/timer.reducers';
import { selectLastTime, selectSavedDate } from '../../store/timer.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  readonly lastTime$ = this.store.select(selectLastTime);
  readonly savedDate$ = this.store.select(selectSavedDate);

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
  ) {}

  goBackToTimerPage(): void {
    this.router.navigate(['/timer']);
  }
}
