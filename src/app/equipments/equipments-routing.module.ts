import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EquipmentsPageComponent} from './equipments-page/equipments-page.component';
import {EquipmentsCardPageComponent} from './equipments-card-page/equipments-card-page.component';
import {EquipmentsEditComponent} from './equipments-edit/equipments-edit.component';
import {EquipmentsAddComponent} from './equipments-add/equipments-add.component';

const routes: Routes = [
  {
    path: '',
    component: EquipmentsPageComponent,
  },
  {
    path: 'add',
    component: EquipmentsAddComponent
  },
  {
    path: ':id/edit',
    component: EquipmentsEditComponent
  },
  {
    path: ':id/examination',
    loadChildren: () => import('../examinations/examinations.module').then(m => m.ExaminationsModule)
  },
  {
    path: ':id/history',
    loadChildren: () => import('./history/history.module').then(m => m.HistoryModule)
  },
  {
    path: ':id',
    component: EquipmentsCardPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }
