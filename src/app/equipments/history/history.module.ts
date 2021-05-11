import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history/history.component';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';


@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class HistoryModule { }
