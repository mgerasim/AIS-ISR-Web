import {Component, OnDestroy, OnInit} from '@angular/core';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {Certificate} from '../../api/models/certificate';
import {CertificateAgent} from '../../api/models/certificate-agent';
import {ActivatedRoute} from '@angular/router';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {switchMap} from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-certificate-agents-edit',
  templateUrl: './certificate-agents-edit.component.html',
  styleUrls: ['./certificate-agents-edit.component.scss']
})
export class CertificateAgentsEditComponent implements OnInit, OnDestroy {

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
