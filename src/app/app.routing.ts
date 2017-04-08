/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { DashboardComponent } from './containers/dashboard.component';
import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: '**', component: NotFound404Component }
];
