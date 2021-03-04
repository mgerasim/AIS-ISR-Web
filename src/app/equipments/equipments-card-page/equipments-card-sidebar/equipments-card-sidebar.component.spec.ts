import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsCardSidebarComponent } from './equipments-card-sidebar.component';

describe('EquipmentsCardSidebarComponent', () => {
  let component: EquipmentsCardSidebarComponent;
  let fixture: ComponentFixture<EquipmentsCardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentsCardSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsCardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
