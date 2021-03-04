import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsEditComponent } from './equipments-edit.component';

describe('EquipmentsEditComponent', () => {
  let component: EquipmentsEditComponent;
  let fixture: ComponentFixture<EquipmentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
