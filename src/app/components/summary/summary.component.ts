import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';

import { AppState } from '../../store/timer.reducers';
import { selectLastTime, selectSavedDate } from '../../store/timer.selectors';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  readonly lastTime$ = this.store.select(selectLastTime);
  readonly savedDate$ = this.store.select(selectSavedDate);

  constructor(private readonly store: Store<AppState>) {}
}
