import { Component } from '@angular/core';
import { SecondaryButon } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButon, PrimaryButton],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {

}
