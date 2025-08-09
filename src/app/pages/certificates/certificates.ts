import { Component } from '@angular/core';
import { SecondaryButon } from "../../_components/secondary-button/secondary-button";
import { CertificateItem } from "../../_components/certificate-item/certificate-item";

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButon, CertificateItem],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {

}
