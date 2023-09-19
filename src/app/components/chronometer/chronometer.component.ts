import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, filter, interval, takeUntil, tap } from 'rxjs';
import { Actions as TimerActions } from 'src/app/enums/actions.enum';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent implements OnInit, OnDestroy {
  private readonly destroy = new Subject<void>();
  private readonly buttonLabels: Record<TimerActions, string> = {
    [TimerActions.START]: 'Start',
    [TimerActions.STOP]: 'Stop',
    [TimerActions.RESUME]: 'Resume'
  };

  readonly timer = interval(1000).pipe(
    filter(() => this.continueTimer),
    tap(() => this.elapsedTime += 1)
  );

  currentAction = TimerActions.START;
  currentPrimaryButtonLabel = this.buttonLabels[TimerActions.START];
  elapsedTime = 0;
  continueTimer = false;

  ngOnInit(): void {
    this.timer
      .pipe(takeUntil(this.destroy))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  onTimerInteraction(): void {
    switch (this.currentAction) {
      case TimerActions.START:
        this.continueTimer = true;
        this.currentAction = TimerActions.STOP;
        this.currentPrimaryButtonLabel = this.buttonLabels[TimerActions.STOP];
        break;
      case TimerActions.STOP:
        this.continueTimer = false;
        this.currentAction = TimerActions.RESUME;
        this.currentPrimaryButtonLabel = this.buttonLabels[TimerActions.RESUME];
        break;
      case TimerActions.RESUME:
        this.continueTimer = true;
        this.currentAction = TimerActions.STOP;
        this.currentPrimaryButtonLabel = this.buttonLabels[TimerActions.STOP];
        break;
    }
  }

  onReset(): void {
    this.currentAction = TimerActions.START;
    this.currentPrimaryButtonLabel = this.buttonLabels[TimerActions.START];
    this.continueTimer = false;
    this.elapsedTime = 0;
  }
}
