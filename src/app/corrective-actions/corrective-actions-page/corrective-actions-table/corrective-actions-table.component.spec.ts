import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectiveActionsTableComponent } from './corrective-actions-table.component';

describe('CorrectiveActionsTableComponent', () => {
  let component: CorrectiveActionsTableComponent;
  let fixture: ComponentFixture<CorrectiveActionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectiveActionsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectiveActionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
