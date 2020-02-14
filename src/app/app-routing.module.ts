import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: 'companies',
    loadChildren: './pages/companies/companies.module#CompaniesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }