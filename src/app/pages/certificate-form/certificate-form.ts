import { Component, ViewChild } from '@angular/core';
import { SecondaryButon } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';
import { CertificateService } from '../../_services/certificate.services';
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButon, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {

  constructor(private certificateService: CertificateService) {

  }

  @ViewChild('form') form!:NgForm


  activity: string = ''

  certificate: Certificate = {
    id: '',
    name: '',
    activities: [],
    issueDate: ''
  }

  validInput(control: NgModel) {
    return control.invalid && control.touched
  }

  validForm() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0
  }

  addActvity() {
    if (this.activity.length === 0) {
      return
    }

    this.certificate.activities.push(this.activity.trim())
    this.activity = ''
  }

  removeActivity(index: number) {
    this.certificate.activities.splice(index, 1)
  }

  submit() {
    if (!this.validForm()) {
      return
    }
    this.certificate.issueDate = this.currentDate()
    this.certificate.id = uuidv4()
    this.certificateService.addCertificate(this.certificate)

    this.certificate = this.initialStateCertificate()
    this.form.resetForm()
  }

  currentDate() {
    const curretDate = new Date()
    const day = String(curretDate.getDate()).padStart(2, '0')
    const month = String(curretDate.getMonth() + 1).padStart(2, '0')
    const year = curretDate.getFullYear()

    const formatDate = `${day}/${month}/${year}`
    return formatDate
  }

  initialStateCertificate() {
    return {
      id: '',
      name: '',
      activities: [],
      issueDate: ''
    }
  }
}
