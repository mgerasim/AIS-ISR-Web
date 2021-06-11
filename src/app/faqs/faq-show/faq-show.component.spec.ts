import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqShowComponent } from './faq-show.component';

describe('FaqShowComponent', () => {
  let component: FaqShowComponent;
  let fixture: ComponentFixture<FaqShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
