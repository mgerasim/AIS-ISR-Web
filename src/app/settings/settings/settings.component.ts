import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Settings} from '../../api/models/settings';
import {SettingsService} from '../../api/services/settings.service';
import {showSuccess} from '../../shared/utils/message-utils';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {NavigatorService} from '../../core/routing/navigator.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  public settings: Settings;

  constructor(
    private settingsService: SettingsService,
    private errorHandlerService: ErrorHandlerService,
    private navigatorService: NavigatorService
  ) { }

  ngOnInit(): void {
    this.settingsService.apiSettingsGet$Json().subscribe(settings => {
      this.settings = settings;
    });
  }

  public submitForm(): void {
    this.settingsService.apiSettingsPut({body: this.settings}).subscribe(
      () => {
        showSuccess('Настройки успешно обновлены');
        this.navigatorService.toEquipments();
      }, error => this.errorHandlerService.handle(error)
    );
  }
}
