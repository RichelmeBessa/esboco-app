import { Routes, RouterModule } from "@angular/router";
import { DashboardPage } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class DashboardModules {
  
}