import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectiveActionsPageComponent } from './corrective-actions-page.component';

describe('CorrectiveActionsPageComponent', () => {
  let component: CorrectiveActionsPageComponent;
  let fixture: ComponentFixture<CorrectiveActionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectiveActionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectiveActionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
