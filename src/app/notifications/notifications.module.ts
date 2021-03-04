import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import {NotificationsComponent} from './notifications-page/notifications/notifications.component';
import {SharedModule} from '../shared/shared.module';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { NotificationsSidebarComponent } from './notifications-page/notifications-sidebar/notifications-sidebar.component';
import { NotificationsCardComponent } from './notifications-card/notifications-card.component';


@NgModule({
  declarations: [NotificationsComponent, NotificationsPageComponent, NotificationsSidebarComponent, NotificationsCardComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    SharedModule
  ]
})
export class NotificationsModule { }
