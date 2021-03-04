import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DivisionsPageComponent} from './divisions-page/divisions-page.component';

const routes: Routes = [
  {
    path: '',
    component: DivisionsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionsRoutingModule { }
