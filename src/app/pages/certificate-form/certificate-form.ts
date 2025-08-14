import { Component } from '@angular/core';
import { SecondaryButon } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButon, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {
  name: string = ''
  activity: string = ''
  activities: string[] = ['angular', 'react']

  validInput(control: NgModel) {
    return control.invalid && control.touched
  }

  validForm(){
    return this.activities.length > 0 && this.name.length > 0
  }
}
