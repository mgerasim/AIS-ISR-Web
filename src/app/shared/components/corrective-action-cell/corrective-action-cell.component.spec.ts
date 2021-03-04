import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectiveActionCellComponent } from './corrective-action-cell.component';

describe('CorrectiveActionCellComponent', () => {
  let component: CorrectiveActionCellComponent;
  let fixture: ComponentFixture<CorrectiveActionCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectiveActionCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectiveActionCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
