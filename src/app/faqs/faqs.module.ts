import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs/faqs.component';
import {SharedModule} from '../shared/shared.module';
import { FaqAddComponent } from './faq-add/faq-add.component';
import { FaqEditComponent } from './faq-edit/faq-edit.component';
import { FaqFormComponent } from './faq-form/faq-form.component';
import { FaqShowComponent } from './faq-show/faq-show.component';
import {QuillModule} from 'ngx-quill';
import {DxTextBoxModule} from 'devextreme-angular';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [FaqsComponent, FaqAddComponent, FaqEditComponent, FaqFormComponent, FaqShowComponent],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    SharedModule,
    QuillModule.forRoot(),
    FormsModule,

  ]
})
export class FaqsModule { }
