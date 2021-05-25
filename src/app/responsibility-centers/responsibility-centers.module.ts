import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsibilityCentersRoutingModule } from './responsibility-centers-routing.module';
import { ResponsibilityCentersComponent } from './responsibility-centers/responsibility-centers.component';
import { ResponsibilityCentersAddComponent } from './responsibility-centers-add/responsibility-centers-add.component';
import { ResponsibilityCentersEditComponent } from './responsibility-centers-edit/responsibility-centers-edit.component';
import { ResponsibilityCentersFormComponent } from './responsibility-centers-form/responsibility-centers-form.component';
import { ResponsibilityCentersShowComponent } from './responsibility-centers-show/responsibility-centers-show.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ResponsibilityCentersComponent, ResponsibilityCentersAddComponent, ResponsibilityCentersEditComponent, ResponsibilityCentersFormComponent, ResponsibilityCentersShowComponent],
    imports: [
        CommonModule,
        ResponsibilityCentersRoutingModule,
        SharedModule
    ]
})
export class ResponsibilityCentersModule { }
