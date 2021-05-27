import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';
import { ResponsibilityCentersComponent } from './users/responsibility-centers/responsibility-centers.component';
import { RolesComponent } from './users/roles/roles.component';


@NgModule({
  declarations: [UsersComponent, ResponsibilityCentersComponent, RolesComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        CoreModule,
        FormsModule
    ]
})
export class UsersModule { }
