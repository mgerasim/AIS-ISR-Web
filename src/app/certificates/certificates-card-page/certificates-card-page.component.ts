import { Component, OnInit } from '@angular/core';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {switchMap} from 'rxjs/operators';
import {Certificate} from '../../api/models/certificate';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';

@UntilDestroy()
@Component({
  selector: 'app-certificates-card-page',
  templateUrl: './certificates-card-page.component.html',
  styleUrls: ['./certificates-card-page.component.scss']
})
export class CertificatesCardPageComponent implements OnInit {

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
          this.certificate = certificate;
        },
        error => this.errorHandler.handle(error)
      );
  }

}
