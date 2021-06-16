import {Component, OnInit} from '@angular/core';

import 'devextreme/localization/globalize/number';
import 'devextreme/localization/globalize/date';
import 'devextreme/localization/globalize/currency';
import 'devextreme/localization/globalize/message';
import 'devextreme/localization/globalize/number';
import 'devextreme/localization/globalize/date';
import 'devextreme/localization/globalize/currency';
import 'devextreme/localization/globalize/message';

import ruMessages from "devextreme/localization/messages/ru.json";
import supplemental from "devextreme-cldr-data/supplemental.json";
import ruCldrData from "devextreme-cldr-data/ru.json";

import Globalize from 'globalize';
import {TitleService} from './core/services/title.service';
import {LoadingService} from './core/services/loading.service';
import {load} from '@progress/kendo-angular-intl';
import {User} from "./api/models/user";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading = false;

  public get currentUser(): User {
    return this.authService.currentUser;
  }

  constructor(
    public loadingService: LoadingService,
    private authService: AuthService,
  ) {
    Globalize.load(
      supplemental, ruCldrData
    );

    Globalize.loadMessages(ruMessages);
    Globalize.locale(navigator.language);
  }

  ngOnInit(): void {
    this.loadingService.loadingVisible$.subscribe(loading => {
      this.isLoading = loading;
    }, error => {
      console.error(error);
    });
  }
}
