import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {AuthSuperAdminGuard} from './auth-super-admin.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'signIn',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule)
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
    path: 'responsibilityCenters',
    canActivate: [AuthGuard],
    loadChildren: () => import('./responsibility-centers/responsibility-centers.module').then(m => m.ResponsibilityCentersModule)
  },
  {
    path: 'certificateAgents',
    canActivate: [AuthGuard],
    loadChildren: () => import('./certificate-agents/certificate-agents.module').then(m => m.CertificateAgentsModule)
  },
  {
    path: 'equipments',
    canActivate: [AuthGuard],
    loadChildren: () => import('./equipments/equipments.module').then(m => m.EquipmentsModule)
  },
  {
    path: 'faqs',
    canActivate: [AuthSuperAdminGuard],
    loadChildren: () => import('./faqs/faqs.module').then(m => m.FaqsModule)
  },
  {
    path: 'help',
    canActivate: [AuthGuard],
    loadChildren: () => import('./help/help.module').then(m => m.HelpModule)
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
    path: 'correctiveActions',
    loadChildren: () => import('./corrective-actions/corrective-actions.module').then(m => m.CorrectiveActionsModule)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./equipments/equipments.module').then(m => m.EquipmentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
