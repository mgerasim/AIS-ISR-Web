import {Component, OnDestroy, OnInit} from '@angular/core';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {Certificate} from '../../api/models/certificate';
import {ActivatedRoute} from '@angular/router';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {switchMap} from 'rxjs/operators';
import {Faq} from '../../api/models/faq';

@UntilDestroy()
@Component({
  selector: 'app-faq-edit',
  templateUrl: './faq-edit.component.html',
  styleUrls: ['./faq-edit.component.scss']
})
export class FaqEditComponent implements OnInit, OnDestroy {

  entityId = this.route.params.pipe(shareEntityId());

  faq: Faq;

  constructor(
    private route: ActivatedRoute,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.entityId
      .pipe(
        untilDestroyed(this),
        switchMap((id: number) => this.entityDataContext.faqs.getByIdLazy(id))
      )
      .subscribe(
        (faq) => {
          this.faq = {...faq};
        },
        error => this.errorHandler.handle(error)
      );
  }

  ngOnDestroy(): void {
  }

}

