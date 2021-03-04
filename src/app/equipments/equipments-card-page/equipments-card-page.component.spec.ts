import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsCardPageComponent } from './equipments-card-page.component';

describe('EquipmentsCardPageComponent', () => {
  let component: EquipmentsCardPageComponent;
  let fixture: ComponentFixture<EquipmentsCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentsCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
