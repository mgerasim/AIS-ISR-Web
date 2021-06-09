import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsRoutingModule } from './equipments-routing.module';
import { SidebarComponent } from './equipments-page/sidebar/sidebar.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import { EquipmentsPageComponent } from './equipments-page/equipments-page.component';
import { EquipmentsTableComponent } from './equipments-page/equipments-table/equipments-table.component';
import { EquipmentsCardSidebarComponent } from './equipments-card-page/equipments-card-sidebar/equipments-card-sidebar.component';
import { EquipmentsCardPageComponent } from './equipments-card-page/equipments-card-page.component';
import { EquipmentsEditComponent } from './equipments-edit/equipments-edit.component';
import {CoreModule} from '../core/core.module';
import { EquipmentsAddComponent } from './equipments-add/equipments-add.component';
import { EquipmentsFormComponent } from './equipments-form/equipments-form.component';
import {CorrectiveActionsModule} from '../corrective-actions/corrective-actions.module';
import {AngularSplitModule} from 'angular-split';
import {BatchEquipmentOperationModule} from '../batch-equipment-operation/batch-equipment-operation.module';

@NgModule({
    declarations: [SidebarComponent, EquipmentsPageComponent, EquipmentsTableComponent, EquipmentsCardSidebarComponent, EquipmentsCardPageComponent, EquipmentsEditComponent, EquipmentsAddComponent, EquipmentsFormComponent],
    exports: [
    ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    SharedModule,
    FormsModule,
    CoreModule,
    CorrectiveActionsModule,
    AngularSplitModule,
    BatchEquipmentOperationModule
  ]
})
export class EquipmentsModule { }
