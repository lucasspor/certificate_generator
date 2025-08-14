import { Component } from '@angular/core';
import { SecondaryButon } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButon, PrimaryButton, FormsModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {
  name: string = ''
  activity: string = ''
  activities: string[] = ['angular', 'react']
}
