import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'notifications',
    canActivate: [AuthGuard],
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
  },
  {
    path: 'incidents',
    canActivate: [AuthGuard],
    loadChildren: () => import('./incidents/incidents.module').then(m => m.IncidentsModule)
  },
  {
    path: 'certificates',
    canActivate: [AuthGuard],
    loadChildren: () => import('./certificates/certificates.module').then(m => m.CertificatesModule)
  },
  {
    path: 'equipments',
    canActivate: [AuthGuard],
    loadChildren: () => import('./equipments/equipments.module').then(m => m.EquipmentsModule)
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'import',
    canActivate: [AuthGuard],
    loadChildren: () => import('./import/import.module').then(m => m.ImportModule)
  },
  {
    path: 'divisions',
    canActivate: [AuthGuard],
    loadChildren: () => import('./divisions/divisions.module').then(m => m.DivisionsModule)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: '',
    loadChildren: () => import('./equipments/equipments.module').then(m => m.EquipmentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
