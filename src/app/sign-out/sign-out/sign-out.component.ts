import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {NavigatorService} from "../../core/routing/navigator.service";
import {showSuccess} from "../../shared/utils/message-utils";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private navigatorService: NavigatorService,
  ) { }

  ngOnInit(): void {
    this.authService.signOut();
    this.navigatorService.toRoot();
    showSuccess('Вы вышли из приложения!');
  }

}
