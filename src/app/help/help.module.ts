import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help/help.component';
import {SharedModule} from '../shared/shared.module';
import {QuillModule} from "ngx-quill";


@NgModule({
  declarations: [HelpComponent],
    imports: [
        CommonModule,
        HelpRoutingModule,
        SharedModule,
        QuillModule
    ]
})
export class HelpModule { }
