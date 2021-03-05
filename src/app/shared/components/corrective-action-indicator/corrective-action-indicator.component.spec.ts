import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectiveActionIndicatorComponent } from './corrective-action-indicator.component';

describe('CorrectiveActionIndicatorComponent', () => {
  let component: CorrectiveActionIndicatorComponent;
  let fixture: ComponentFixture<CorrectiveActionIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectiveActionIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectiveActionIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
