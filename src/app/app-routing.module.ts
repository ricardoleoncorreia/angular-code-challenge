import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SummaryComponent } from './components/summary/summary.component';
import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  { path: 'timer', component: TimerComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '**',   redirectTo: '/timer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
