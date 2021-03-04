import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectiveActionFormComponent } from './corrective-action-form.component';

describe('CorrectiveActionFormComponent', () => {
  let component: CorrectiveActionFormComponent;
  let fixture: ComponentFixture<CorrectiveActionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectiveActionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectiveActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
