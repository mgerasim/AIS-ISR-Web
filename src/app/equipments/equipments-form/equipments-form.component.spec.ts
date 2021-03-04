import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsFormComponent } from './equipments-form.component';

describe('EquipmentsFormComponent', () => {
  let component: EquipmentsFormComponent;
  let fixture: ComponentFixture<EquipmentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
