import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CertificatesTablePageComponent} from './certificates-table-page/certificates-table-page.component';
import {CertificatesCardPageComponent} from './certificates-card-page/certificates-card-page.component';
import {CertificatesCardAddComponent} from './certificates-card-add/certificates-card-add.component';
import {CertificatesCardEditComponent} from './certificates-card-edit/certificates-card-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CertificatesTablePageComponent,
    children: [
      {
        path: 'add',
        component: CertificatesCardAddComponent
      },
      {
        path: ':id/edit',
        component: CertificatesCardEditComponent
      },
      {
        path: ':id',
        component: CertificatesCardPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificatesRoutingModule { }
