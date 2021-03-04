import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserNotification} from '../../api/models';

@Injectable({
  providedIn: 'root'
})
export class NotificationsPageSidebarService {

  public userNotification$ = new BehaviorSubject<UserNotification>(undefined);

  constructor() { }
}
