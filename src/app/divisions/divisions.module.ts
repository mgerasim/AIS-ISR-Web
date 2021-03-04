import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionsRoutingModule } from './divisions-routing.module';
import { DivisionsTableComponent } from './divisions-page/divisions-table/divisions-table.component';
import {DivisionsPageComponent} from './divisions-page/divisions-page.component';
import {SharedModule} from '../shared/shared.module';
import { DivisionsSidebarComponent } from './divisions-page/divisions-sidebar/divisions-sidebar.component';


@NgModule({
  declarations: [DivisionsPageComponent, DivisionsTableComponent, DivisionsSidebarComponent],
  imports: [
    CommonModule,
    DivisionsRoutingModule,
    SharedModule
  ]
})
export class DivisionsModule { }
