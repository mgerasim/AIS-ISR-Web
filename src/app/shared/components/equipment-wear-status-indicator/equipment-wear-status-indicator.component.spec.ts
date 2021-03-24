import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentWearStatusIndicatorComponent } from './equipment-wear-status-indicator.component';

describe('EquipmentWearStatusIndicatorComponent', () => {
  let component: EquipmentWearStatusIndicatorComponent;
  let fixture: ComponentFixture<EquipmentWearStatusIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentWearStatusIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentWearStatusIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
