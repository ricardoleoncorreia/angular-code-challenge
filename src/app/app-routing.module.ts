import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SummaryComponent } from './components/summary/summary.component';
import { ChronometerComponent } from './components/chronometer/chronometer.component';

const routes: Routes = [
  { path: '',   redirectTo: '/counter', pathMatch: 'full' },
  { path: 'counter', component: ChronometerComponent },
  { path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
