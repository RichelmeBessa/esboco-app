import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesPage } from './companies.components';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPage
  },
  {
    path: 'new',
    loadChildren: './company-form/company-form.module#CompanyFormModule'
  },
  {
    path: ':id',
    loadChildren: './company-form/company-form.module#CompanyFormModule'
  }
];

@NgModule({
  declarations: [CompaniesPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
 
})

export class CompaniesModule {

}

