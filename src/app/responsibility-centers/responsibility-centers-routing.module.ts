import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResponsibilityCentersAddComponent} from './responsibility-centers-add/responsibility-centers-add.component';
import {ResponsibilityCentersEditComponent} from './responsibility-centers-edit/responsibility-centers-edit.component';
import {ResponsibilityCentersShowComponent} from './responsibility-centers-show/responsibility-centers-show.component';
import {ResponsibilityCentersComponent} from './responsibility-centers/responsibility-centers.component';

const routes: Routes = [
  {
    path: '',
    component: ResponsibilityCentersComponent,
    children: [
      {
        path: 'add',
        component: ResponsibilityCentersAddComponent
      },
      {
        path: ':id/edit',
        component: ResponsibilityCentersEditComponent
      },
      {
        path: ':id',
        component: ResponsibilityCentersShowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsibilityCentersRoutingModule { }
