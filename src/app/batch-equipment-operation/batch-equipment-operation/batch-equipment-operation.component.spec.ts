import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchEquipmentOperationComponent } from './batch-equipment-operation.component';

describe('BatchEquipmentOperationComponent', () => {
  let component: BatchEquipmentOperationComponent;
  let fixture: ComponentFixture<BatchEquipmentOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchEquipmentOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchEquipmentOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
