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

  toEquipmentHistory(equipmentId: number): void {
    this.route.navigate(['equipments', equipmentId, 'history']).then();
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

  toRoot(): void {
    this.route.navigate(['/']).then();
  }

  toSignIn(): void {
    this.route.navigate(['signIn']).then();
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

  toCertificateAgents(): void {
    this.route.navigate(['certificateAgents']).then();
  }

  toCertificateAgentAdd(): void {
    this.route.navigate(['certificateAgents', 'add']).then();
  }

  toCertificateAgentEdit(certificateAgentId: number): void {
    this.route.navigate(['certificateAgents', certificateAgentId, 'edit']).then();
  }

  toCertificateAgentShow(certificateAgentId: number): void {
    this.route.navigate(['certificateAgents', certificateAgentId]).then();
  }

  toResponsibilityCenters(): void {
    this.route.navigate(['responsibilityCenters']).then();
  }

  toResponsibilityCenterAdd(): void {
    this.route.navigate(['responsibilityCenters', 'add']).then();
  }

  toResponsibilityCenterEdit(responsibilityCenterId: number): void {
    this.route.navigate(['responsibilityCenters', responsibilityCenterId, 'edit']).then();
  }

  toResponsibilityCenterShow(responsibilityCenterId: number): void {
    this.route.navigate(['responsibilityCenters', responsibilityCenterId]).then();
  }

  toFaqs(): void {
    this.route.navigate(['faqs']).then();
  }

  toFaqAdd(): void {
    this.route.navigate(['faqs', 'add']).then();
  }

  toFaqEdit(faqId: number): void {
    this.route.navigate(['faqs', faqId, 'edit']).then();
  }

  toFaqShow(faqId: number): void {
    this.route.navigate(['faqs', faqId]).then();
  }
}
