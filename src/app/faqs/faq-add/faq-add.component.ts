import { Component, OnInit } from '@angular/core';
import {Faq} from '../../api/models/faq';

@Component({
  selector: 'app-faq-add',
  templateUrl: './faq-add.component.html',
  styleUrls: ['./faq-add.component.css']
})
export class FaqAddComponent implements OnInit {

  faq = {} as Faq;

  constructor() { }

  ngOnInit(): void {
  }

}
