import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionsSidebarComponent } from './divisions-sidebar.component';

describe('DivisionsSidebarComponent', () => {
  let component: DivisionsSidebarComponent;
  let fixture: ComponentFixture<DivisionsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
