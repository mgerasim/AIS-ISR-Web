import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CorrectiveActionsPageComponent} from './corrective-actions-page/corrective-actions-page.component';

const routes: Routes = [
  {
    path: '',
    component: CorrectiveActionsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrectiveActionsRoutingModule { }
