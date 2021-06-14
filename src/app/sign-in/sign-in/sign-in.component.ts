import { Component, OnInit } from '@angular/core';
import {AuthRequest} from "../../api/models/auth-request";
import {AuthService} from "../../auth/auth.service";
import {showSuccess} from "../../shared/utils/message-utils";
import {ErrorHandlerService} from "../../core/errors/error-handler.service";
import {NavigatorService} from "../../core/routing/navigator.service";
import {switchMap, tap} from "rxjs/operators";
import {from, of} from "rxjs";
import {EntityChangedSubscriberService} from "../../core/entity/entity-changed-subscriber.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  authRequest: AuthRequest = {};

  constructor(
    private authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private navigatorService: NavigatorService,
    private entityChangedSubscriber: EntityChangedSubscriberService,
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.authRequest);
    this.authService.signIn(this.authRequest)
      .pipe(
      )
      .subscribe((data) => {

        this.entityChangedSubscriber.subscribeInitializeAndSetEmptySubs().then(
          () => {
            this.entityChangedSubscriber.subscribeEntityChanged();
            this.navigatorService.toEquipments();
            showSuccess('Авторизация успешно пройдена!');
            this.authService.signInCompleted(data);
          }
        );

    }, error => {
      this.errorHandlerService.handle(error);
    });
  }
}
