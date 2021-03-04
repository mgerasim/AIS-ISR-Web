import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ImportStatePipe } from './pipes/import-state.pipe';
import { FileExtensionIconPipe } from './pipes/file-extension-icon.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { ExaminationStatusPipe } from './pipes/examination-status.pipe';
import { RoleTitlePipe } from './pipes/role-title.pipe';
import { ExploitationPeriodUnitPipe } from './pipes/exploitation-period-unit.pipe';

@NgModule({
  declarations: [ImportStatePipe, FileExtensionIconPipe, FileSizePipe, ExaminationStatusPipe, RoleTitlePipe, ExploitationPeriodUnitPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ImportStatePipe,
    FileExtensionIconPipe,
    FileSizePipe,
    ExaminationStatusPipe,
    RoleTitlePipe,
    ExploitationPeriodUnitPipe
  ]
})
export class CoreModule { }
