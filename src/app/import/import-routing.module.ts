import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EquipmentsComponent} from './equipments/equipments.component';

const routes: Routes = [
  {
    path: '',
    component: EquipmentsComponent
  },
  {
    path: 'equipments',
    component: EquipmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
