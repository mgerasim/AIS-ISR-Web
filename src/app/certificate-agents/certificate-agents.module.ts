import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateAgentsRoutingModule } from './certificate-agents-routing.module';
import { CertificateAgentsComponent } from './certificate-agents/certificate-agents.component';
import {SharedModule} from '../shared/shared.module';
import { CertificateAgentsAddComponent } from './certificate-agents-add/certificate-agents-add.component';
import { CertificateAgentsEditComponent } from './certificate-agents-edit/certificate-agents-edit.component';
import { CertificateAgentsShowComponent } from './certificate-agents-show/certificate-agents-show.component';
import { CertificateAgentsFormComponent } from './certificate-agents-form/certificate-agents-form.component';


@NgModule({
  declarations: [CertificateAgentsComponent, CertificateAgentsAddComponent, CertificateAgentsEditComponent, CertificateAgentsShowComponent, CertificateAgentsFormComponent],
  imports: [
    CommonModule,
    CertificateAgentsRoutingModule,
    SharedModule
  ]
})
export class CertificateAgentsModule { }
