import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrectiveActionsRoutingModule } from './corrective-actions-routing.module';
import { CorrectiveActionFormComponent } from './corrective-action-form/corrective-action-form.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [CorrectiveActionFormComponent],
    exports: [
        CorrectiveActionFormComponent
    ],
  imports: [
    CommonModule,
    CorrectiveActionsRoutingModule,
    SharedModule
  ]
})
export class CorrectiveActionsModule { }
