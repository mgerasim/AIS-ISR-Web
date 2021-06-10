import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Faq} from '../../api/models/faq';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {Role} from '../../api/models/role';
import {showWarning} from '../../shared/utils/message-utils';

@UntilDestroy()
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit, OnDestroy {

  faqs?: Faq[] = undefined;

  constructor(private entityDataContext: EntityDataContext,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.entityDataContext.faqs.getListLazy()
      .pipe(untilDestroyed(this))
      .subscribe(faqs => {
        this.faqs = faqs;
      }, error => {
        this.errorHandler.handle(error);
      });
  }

  add(): void {
  }

  onSelectionChanged($event: any): void {
  }

  onCellDblClick($event: any): void {

  }

  onToolbarPreparing(e: any): void {
    for (const item of e.toolbarOptions.items) {
      item.location = 'after';
      item.showText = '';
    }
    e.toolbarOptions.items.push({
      location: 'before',
      template: 'actionAddTemplate',
    });
    e.toolbarOptions.items.push({
      location: 'center',
      template: 'titleTemplate',
    });
  }

  ngOnDestroy(): void {
  }

}
