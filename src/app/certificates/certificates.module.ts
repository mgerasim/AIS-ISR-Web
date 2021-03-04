import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificatesTablePageComponent } from './certificates-table-page/certificates-table-page.component';
import { CertificatesCardPageComponent } from './certificates-card-page/certificates-card-page.component';
import {SharedModule} from '../shared/shared.module';
import { CertificatesCardEditComponent } from './certificates-card-edit/certificates-card-edit.component';
import { CertificatesCardAddComponent } from './certificates-card-add/certificates-card-add.component';
import { CertificatesCardFormComponent } from './certificates-card-form/certificates-card-form.component';


@NgModule({
  declarations: [CertificatesTablePageComponent, CertificatesCardPageComponent, CertificatesCardEditComponent, CertificatesCardAddComponent, CertificatesCardFormComponent],
  imports: [
    CommonModule,
    CertificatesRoutingModule,
    SharedModule
  ]
})
export class CertificatesModule { }
