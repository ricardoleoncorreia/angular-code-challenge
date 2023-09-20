import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimePipe } from './pipes/time.pipe';
import { TimerComponent } from './components/timer/timer.component';
import { SummaryComponent } from './components/summary/summary.component';
import { timerReducer } from './store/timer.reducers';
import { TimerEffects } from './store/timer.effects';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    SummaryComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot({ timer: timerReducer }),
    EffectsModule.forRoot([TimerEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
