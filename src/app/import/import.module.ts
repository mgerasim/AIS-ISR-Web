import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportRoutingModule } from './import-routing.module';
import { EquipmentsComponent } from './equipments/equipments.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import { ImportResponseComponent } from './import-response/import-response.component';
import {CoreModule} from '../core/core.module';


@NgModule({
  declarations: [EquipmentsComponent, ImportResponseComponent],
    imports: [
        CommonModule,
        ImportRoutingModule,
        SharedModule,
        FormsModule,
        CoreModule
    ]
})
export class ImportModule { }
