import {Component, OnDestroy, OnInit} from '@angular/core';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Faq} from '../../api/models/faq';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';

@UntilDestroy()
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit, OnDestroy {

  faqs?: Faq[] = undefined;

  constructor(private entityDataContext: EntityDataContext,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.entityDataContext.faqs.getListLazy().pipe(untilDestroyed(this))
      .subscribe(faqs => {
        this.faqs = faqs;
      }, error => {
        this.errorHandler.handle(error);
      });
  }

  ngOnDestroy(): void {
  }

}
