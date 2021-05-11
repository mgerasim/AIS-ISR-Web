import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CertificateAgentsComponent} from './certificate-agents/certificate-agents.component';
import {CertificateAgentsAddComponent} from './certificate-agents-add/certificate-agents-add.component';
import {CertificateAgentsShowComponent} from './certificate-agents-show/certificate-agents-show.component';
import {CertificateAgentsEditComponent} from './certificate-agents-edit/certificate-agents-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CertificateAgentsComponent,
    children: [
      {
        path: 'add',
        component: CertificateAgentsAddComponent
      },
      {
        path: ':id/edit',
        component: CertificateAgentsEditComponent
      },
      {
        path: ':id',
        component: CertificateAgentsShowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateAgentsRoutingModule { }
