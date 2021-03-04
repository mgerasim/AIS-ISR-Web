import { Component, OnInit } from '@angular/core';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {AuthService} from '../auth.service';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../api/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private errorHandlerService: ErrorHandlerService
  ) { }


  ngOnInit(): void {
    this.authService.auth().subscribe(data => {
      console.log(data);
    }, err => this.errorHandlerService.handle(err));
  }

}
