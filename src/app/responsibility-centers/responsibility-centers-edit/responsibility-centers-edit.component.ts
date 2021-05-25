import {Component, OnDestroy, OnInit} from '@angular/core';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {CertificateAgent} from '../../api/models/certificate-agent';
import {ActivatedRoute} from '@angular/router';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {switchMap} from 'rxjs/operators';
import {ResponsibilityCenter} from '../../api/models/responsibility-center';

@UntilDestroy()
@Component({
  selector: 'app-responsibility-centers-edit',
  templateUrl: './responsibility-centers-edit.component.html',
  styleUrls: ['./responsibility-centers-edit.component.scss']
})
export class ResponsibilityCentersEditComponent implements OnInit, OnDestroy {

  entityId = this.route.params.pipe(shareEntityId());

  responsibilityCenter: ResponsibilityCenter;

  constructor(
    private route: ActivatedRoute,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.entityId
      .pipe(
        untilDestroyed(this),
        switchMap((id: number) => this.entityDataContext.responsibilityCenters.getByIdLazy(id))
      )
      .subscribe(
        (responsibilityCenter) => {
          this.responsibilityCenter = {...responsibilityCenter};
        },
        error => this.errorHandler.handle(error)
      );
  }

  ngOnDestroy(): void {
  }
}
