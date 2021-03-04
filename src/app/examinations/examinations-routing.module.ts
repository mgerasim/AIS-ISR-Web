import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExaminationComponent} from './examination/examination.component';

const routes: Routes = [
  {
    path: '',
    component: ExaminationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationsRoutingModule { }
