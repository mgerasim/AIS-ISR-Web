import {Component, Input, OnInit} from '@angular/core';
import {Faq} from '../../api/models/faq';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FaqsService} from '../../api/services/faqs.service';
import {showSuccess} from '../../shared/utils/message-utils';
import {NavigatorService} from '../../core/routing/navigator.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';

@Component({
  selector: 'app-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.scss']
})
export class FaqFormComponent implements OnInit {

  @Input() faq: Faq;

  form: FormGroup;

  constructor(
    private faqsService: FaqsService,
    private navigator: NavigatorService,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      answer: new FormControl(null, Validators.required),
    });
  }

  onContentChanged(): void {

  }

  async save(): Promise<void> {
    try {
      if (this.faq.id) {
        await this.faqsService.apiFaqsIdPut({id: this.faq?.id, body: this.faq}).toPromise();
        showSuccess(`Вопрос/ответ ${this.faq.title} успешно обновлен`);
        this.navigator.toFaqs();
      } else {
        this.faq = await this.faqsService.apiFaqsPost$Json({body: this.faq}).toPromise();
        showSuccess(`Вопрос/ответ ${this.faq.title} успешно создан`);
        this.navigator.toFaqs();
      }
    }
    catch (e) {
      this.errorHandler.handle(e);
    }
  }
}
