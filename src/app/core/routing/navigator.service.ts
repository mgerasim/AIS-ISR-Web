import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(
    private route: Router
  ) { }

  toImport(): void {
    this.route.navigate(['import']).then();
  }

  toEquipments(): void {
    this.route.navigate(['equipments']).then();
  }

  toEquipment(equipmentId: number): void {
    this.route.navigate(['equipments', equipmentId]).then();
  }

  toEquipmentEdit(equipmentId: number): void {
    this.route.navigate(['equipments', equipmentId, 'edit']).then();
  }

  toEquipmentAdd(): void {
    this.route.navigate(['equipments', 'add']).then();
  }

  toEquipmentExamination(equipmentId: number): void {
    this.route.navigate(['equipments', equipmentId, 'examination']).then();
  }

  toAuth(): void {
    this.route.navigate(['auth']).then();
  }

  toCertificateCard(certificateId: number): void {
    this.route.navigate(['certificates', certificateId]).then();
  }

  toCertificateAdd(): void {
    this.route.navigate(['certificates', 'add']).then();
  }

  toCertificateEdit(certificateId: number): void {
    this.route.navigate(['certificates', certificateId, 'edit']).then();
  }

  toNotification(notificationId: number): void {
    this.route.navigate(['notifications', notificationId]).then();
  }

  toDivision(divisionId: number): void {
    this.route.navigate(['divisions', divisionId]).then();
  }
}
