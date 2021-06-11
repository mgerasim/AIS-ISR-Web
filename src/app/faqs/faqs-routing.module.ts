import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaqsComponent} from './faqs/faqs.component';
import {FaqAddComponent} from './faq-add/faq-add.component';
import {FaqEditComponent} from './faq-edit/faq-edit.component';
import {FaqShowComponent} from './faq-show/faq-show.component';

const routes: Routes = [
  {
    path: '',
    component: FaqsComponent,
    children: [
      {
        path: 'add',
        component: FaqAddComponent,
      },
      {
        path: ':id/edit',
        component: FaqEditComponent,
      },
      {
        path: ':id',
        component: FaqShowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqsRoutingModule { }
