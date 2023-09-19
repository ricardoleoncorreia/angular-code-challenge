import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimePipe } from './pipes/time.pipe';
import { ChronometerComponent } from './components/chronometer/chronometer.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ChronometerComponent,
    SummaryComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
