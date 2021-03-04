import { Component, OnInit } from '@angular/core';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {Certificate} from '../../api/models/certificate';

@UntilDestroy()
@Component({
  selector: 'app-certificates-card-edit',
  templateUrl: './certificates-card-edit.component.html',
  styleUrls: ['./certificates-card-edit.component.scss']
})
export class CertificatesCardEditComponent implements OnInit {

  entityId = this.route.params.pipe(shareEntityId());

  certificate: Certificate;

  constructor(
    private route: ActivatedRoute,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.entityId
      .pipe(
        untilDestroyed(this),
        switchMap((id: number) => this.entityDataContext.certificates.getByIdLazy(id))
      )
      .subscribe(
        (certificate) => {
          this.certificate = {...certificate};
          console.log(this.certificate);
        },
        error => this.errorHandler.handle(error)
      );
  }

}
