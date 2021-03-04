import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationsRoutingModule } from './examinations-routing.module';
import { ExaminationComponent } from './examination/examination.component';
import { ExaminationFormComponent } from './examination-form/examination-form.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ExaminationComponent, ExaminationFormComponent],
    imports: [
        CommonModule,
        ExaminationsRoutingModule,
        SharedModule
    ]
})
export class ExaminationsModule { }
