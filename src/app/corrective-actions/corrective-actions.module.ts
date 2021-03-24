import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrectiveActionsRoutingModule } from './corrective-actions-routing.module';
import { CorrectiveActionFormComponent } from './corrective-action-form/corrective-action-form.component';
import {SharedModule} from '../shared/shared.module';
import { CorrectiveActionsPageComponent } from './corrective-actions-page/corrective-actions-page.component';
import { CorrectiveActionsTableComponent } from './corrective-actions-page/corrective-actions-table/corrective-actions-table.component';
import { CorrectiveActionsSidebarComponent } from './corrective-actions-page/corrective-actions-sidebar/corrective-actions-sidebar.component';
import {CoreModule} from '../core/core.module';

@NgModule({
    declarations: [CorrectiveActionFormComponent, CorrectiveActionsPageComponent, CorrectiveActionsTableComponent, CorrectiveActionsSidebarComponent],
    exports: [
        CorrectiveActionFormComponent
    ],
    imports: [
        CommonModule,
        CorrectiveActionsRoutingModule,
        SharedModule,
        CoreModule
    ]
})
export class CorrectiveActionsModule { }
