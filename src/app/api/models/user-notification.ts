/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { Notification } from './notification';
import { User } from './user';
export interface UserNotification {
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  id?: number;
  isRead?: boolean;
  notification?: Notification;
  notificationId?: number;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
  user?: User;
  userId?: number;
}
