import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentsRoutingModule } from './incidents-routing.module';
import { IncidentsComponent } from './incidents/incidents.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {EquipmentsModule} from '../equipments/equipments.module';


@NgModule({
  declarations: [IncidentsComponent],
    imports: [
        CommonModule,
        IncidentsRoutingModule,
        SharedModule,
        CoreModule,
        EquipmentsModule
    ]
})
export class IncidentsModule { }
