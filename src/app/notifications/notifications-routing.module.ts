import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotificationsPageComponent} from './notifications-page/notifications-page.component';
import {NotificationsCardComponent} from './notifications-card/notifications-card.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPageComponent
  },
  {
    path: ':id',
    component: NotificationsCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
