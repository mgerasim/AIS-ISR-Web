import { NgModule } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import {RouterModule} from '@angular/router';
import {IconModule, IconsModule} from '@progress/kendo-angular-icons';
import {InputsModule, NumericTextBoxModule} from '@progress/kendo-angular-inputs';
import {LabelModule} from '@progress/kendo-angular-label';
import {ListViewModule} from '@progress/kendo-angular-listview';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {UploadsModule} from '@progress/kendo-angular-upload';
import {GridModule} from '@progress/kendo-angular-grid';
import {
  DxButtonModule, DxCheckBoxModule,
  DxDataGridModule,
  DxDropDownBoxModule,
  DxFormModule, DxLoadPanelModule, DxPopupModule,
  DxScrollViewModule, DxSelectBoxModule, DxTextAreaModule, DxTreeListModule,
  DxTreeViewModule
} from 'devextreme-angular';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {FormsModule} from '@angular/forms';
import { CertificateInfoComponent } from './components/certificate-info/certificate-info.component';
import {CommonModule} from '@angular/common';
import {BadgeModule} from '@progress/kendo-angular-indicators';
import {AttachmentsComponent} from './components/attachments/attachments.component';
import {AttachmentsTableComponent} from './components/attachments/attachments-table/attachments-table.component';
import {HeaderComponent} from './components/header/header.component';
import {CoreModule} from '../core/core.module';
import { AttachmentsListComponent } from './components/attachments/attachments-list/attachments-list.component';
import {EquipmentCardComponent} from './components/equipment-card/equipment-card.component';
import {CorrectiveActionCellComponent} from './components/corrective-action-cell/corrective-action-cell.component';
import { CorrectiveActionIndicatorComponent } from './components/corrective-action-indicator/corrective-action-indicator.component';
import { EquipmentWearStatusIndicatorComponent } from './components/equipment-wear-status-indicator/equipment-wear-status-indicator.component';
import { MenusModule } from '@progress/kendo-angular-menu';

@NgModule({
  declarations: [HeaderComponent, CertificateInfoComponent, AttachmentsComponent, AttachmentsTableComponent, AttachmentsListComponent, EquipmentCardComponent, CorrectiveActionCellComponent, CorrectiveActionIndicatorComponent, EquipmentWearStatusIndicatorComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LayoutModule,
    IconModule,
    IconsModule,
    NumericTextBoxModule,
    InputsModule,
    LabelModule,
    ListViewModule,
    ButtonsModule,
    UploadsModule,
    GridModule,
    BadgeModule,
    DxDataGridModule,
    DxDropDownBoxModule,
    DxScrollViewModule,
    DropDownsModule,
    DxFormModule,
    DxButtonModule,
    DxTreeListModule,
    DxTreeViewModule,
    DxTextAreaModule,
    DxPopupModule,
    CoreModule,
    MenusModule,
  ],
  exports: [
    LayoutModule,
    IconModule,
    IconsModule,
    NumericTextBoxModule,
    InputsModule,
    LabelModule,
    ListViewModule,
    ButtonsModule,
    UploadsModule,
    GridModule,
    BadgeModule,
    DxDataGridModule,
    DxDropDownBoxModule,
    DxScrollViewModule,
    DropDownsModule,
    DxFormModule,
    DxButtonModule,
    DxTreeListModule,
    DxTreeViewModule,
    DxPopupModule,
    DxSelectBoxModule,
    DxLoadPanelModule,
    DxCheckBoxModule,
    CertificateInfoComponent,
    AttachmentsComponent,
    HeaderComponent,
    EquipmentCardComponent,
    CorrectiveActionCellComponent,
    CorrectiveActionIndicatorComponent,
    EquipmentWearStatusIndicatorComponent,
    MenusModule,
  ]
})
export class SharedModule { }
