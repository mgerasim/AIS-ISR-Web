import {Component, OnDestroy, OnInit} from '@angular/core';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {CertificateAgent} from '../../api/models/certificate-agent';
import {ActivatedRoute} from '@angular/router';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {switchMap} from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-certificate-agents-show',
  templateUrl: './certificate-agents-show.component.html',
  styleUrls: ['./certificate-agents-show.component.scss']
})
export class CertificateAgentsShowComponent implements OnInit, OnDestroy {

  entityId = this.route.params.pipe(shareEntityId());

  certificateAgent: CertificateAgent;

  constructor(
    private route: ActivatedRoute,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.entityId
      .pipe(
        untilDestroyed(this),
        switchMap((id: number) => this.entityDataContext.certificateAgents.getByIdLazy(id))
      )
      .subscribe(
        (certificateAgent) => {
          this.certificateAgent = {...certificateAgent};
        },
        error => this.errorHandler.handle(error)
      );
  }

  ngOnDestroy(): void {
  }

}
