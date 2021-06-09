import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchEquipmentOperationComponent } from './batch-equipment-operation/batch-equipment-operation.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [BatchEquipmentOperationComponent],
  exports: [
    BatchEquipmentOperationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BatchEquipmentOperationModule { }
