import {Component, Input, OnInit} from '@angular/core';
import {Faq} from '../../api/models/faq';

@Component({
  selector: 'app-faq-show',
  templateUrl: './faq-show.component.html',
  styleUrls: ['./faq-show.component.scss']
})
export class FaqShowComponent implements OnInit {

  @Input() faq?: Faq = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
