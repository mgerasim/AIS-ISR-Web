import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {Equipment} from '../../api/models/equipment';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {TitleService} from '../../core/services/title.service';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {showError, showInfo, showWarning} from '../../shared/utils/message-utils';
import {AuthService} from '../../auth/auth.service';

@UntilDestroy()
@Component({
  selector: 'app-equipments-card-page',
  templateUrl: './equipments-card-page.component.html',
  styleUrls: ['./equipments-card-page.component.scss']
})
export class EquipmentsCardPageComponent implements OnInit, OnDestroy{

  equipment: Equipment | undefined | null = null;

  entityId = this.route.params.pipe(shareEntityId());

  isLoaded = false;

  titleAccessDenied = 'Оборудование не найдено или пользователь не имеет доступ к оборудованию';

  constructor(
    private route: ActivatedRoute,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
    private titleService: TitleService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Карточка оборудования');

    this.entityId
      .pipe(
        untilDestroyed(this),
        switchMap((id: number) => this.entityDataContext.equipments.getListLazy().pipe(
          untilDestroyed(this),
          map(equipments => equipments.find(x => x.id === id)),
        ))
      ).subscribe((equipment) => {
        this.isLoaded = true;
        this.equipment = equipment;
        if (equipment === undefined) {
          showWarning('Оборудование не найдено или пользователь не имеет доступ к оборудованию');
        }
      },
      error => this.errorHandler.handle(error)
    );
  }

  ngOnDestroy(): void {
  }

}
