import {Component, OnDestroy, OnInit} from '@angular/core';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Faq} from '../../api/models/faq';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {TitleService} from "../../core/services/title.service";
import {LoadingService} from '../../core/services/loading.service';

@UntilDestroy()
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit, OnDestroy {

  faqs?: Faq[] = undefined;

  constructor(private entityDataContext: EntityDataContext,
              private errorHandler: ErrorHandlerService,
              private titleService: TitleService,
              private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Помощь');
    this.loadingService.show();
    this.entityDataContext.faqs.getListLazy().pipe(untilDestroyed(this))
      .subscribe(faqs => {
        this.faqs = faqs;
        this.loadingService.hide();
      }, error => {
        this.errorHandler.handle(error);
        this.loadingService.hide();
      });
  }

  ngOnDestroy(): void {
  }

}
