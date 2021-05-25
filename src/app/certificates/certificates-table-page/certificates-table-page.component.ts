import {Component, OnDestroy, OnInit} from '@angular/core';
import {Certificate} from '../../api/models/certificate';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {toDate} from '../../shared/utils/date-utils';
import {NavigatorService} from '../../core/routing/navigator.service';
import {combineLatest} from 'rxjs';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {TitleService} from '../../core/services/title.service';
import {Role} from '../../api/models/role';
import {showWarning} from '../../shared/utils/message-utils';
import {AuthService} from '../../auth/auth.service';

@UntilDestroy()
@Component({
  selector: 'app-certificates-table-page',
  templateUrl: './certificates-table-page.component.html',
  styleUrls: ['./certificates-table-page.component.scss']
})
export class CertificatesTablePageComponent implements OnInit, OnDestroy {

  certificates: Certificate[];
  selectedRowKeys: Certificate[];

  constructor(
    private entityDataContext: EntityDataContext,
    private navigatorService: NavigatorService,
    private errorHandler: ErrorHandlerService,
    private titleService: TitleService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Карточка сертификата');
    combineLatest([
      this.entityDataContext.certificates.getListLazy(),
      this.entityDataContext.certificateAgents.getListLazy(),
      this.entityDataContext.certificateTypes.getListLazy()
    ])
      .pipe(
        untilDestroyed(this)
      ).subscribe(([certificates, certificateAgents, certificateTypes]) => {
        this.certificates = certificates.map(x => {
          const certificate = {...x};
          const certificateType = certificateTypes.find(t => t.id === x.certificateTypeId);
          if (certificateType === undefined) {
            throw new Error('certificateType is undefined');
          }
          const certificateAgent = certificateAgents.find(t => t.id === x.certificateAgentId);
          if (certificateAgent === undefined) {
            throw new Error('certificateAgent is undefined');
          }
          certificate.certificateAgent = certificateAgent;
          certificate.certificateType = certificateType;

          return certificate;
        });
      }, error => {
        this.errorHandler.handle(error);
    });
  }

  toDate(str): Date {
    return toDate(str);
  }

  ngOnDestroy(): void {
  }

  onSelectionChanged($event: any) {

    console.log(this.selectedRowKeys);
  }

  onCellDblClick($event: any) {

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
      location: 'before',
      template: 'actionEditTemplate',
    });
    e.toolbarOptions.items.push({
      location: 'before',
      template: 'actionShowTemplate',
    });
    e.toolbarOptions.items.push({
      location: 'center',
      template: 'titleTemplate',
    });
  }

  add(): void {
    if (this.authService.currentUser.account.role === Role.User) {
      showWarning('Данная операция доступна для Администратора.');
      return;
    }
    this.navigatorService.toCertificateAdd();
  }

  edit(): void {
    if (this.authService.currentUser.account.role === Role.User) {
      showWarning('Данная операция доступна для Администратора.');
      return;
    }
    if (this.selectedRowKeys === undefined || this.selectedRowKeys.length === 0) {
      throw new Error('Отсутствует выделенного сертификата');
    }
    const certificate = this.selectedRowKeys[0];

    this.navigatorService.toCertificateEdit(certificate.id);
  }

  show(): void {
    if (this.selectedRowKeys === undefined || this.selectedRowKeys.length === 0) {
      throw new Error('Отсутствует выделенного сертификата');
    }
    const certificate = this.selectedRowKeys[0];

    this.navigatorService.toCertificateCard(certificate.id);
  }
}
