import { Component } from '@angular/core';
import { SecondaryButon } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButon, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {
  activity: string = ''

  certificate: Certificate = {
    name: '',
    activities: []
  }

  validInput(control: NgModel) {
    return control.invalid && control.touched
  }

  validForm(){
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0
  }

  addActvity(){
    this.certificate.activities.push(this.activity.trim())
    this.activity = ''
  }

  removeActivity(index: number){
    this.certificate.activities.splice(index, 1)
  }

  submit(){
    if(!this.validForm()){
      return
    }
  }
}
