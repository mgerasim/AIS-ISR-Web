import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectiveActionsSidebarComponent } from './corrective-actions-sidebar.component';

describe('CorrectiveActionsSidebarComponent', () => {
  let component: CorrectiveActionsSidebarComponent;
  let fixture: ComponentFixture<CorrectiveActionsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectiveActionsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectiveActionsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
