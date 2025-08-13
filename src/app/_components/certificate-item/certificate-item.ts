import { Component } from '@angular/core';
import { SecondaryButon } from "../secondary-button/secondary-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificate-item',
  imports: [SecondaryButon,RouterLink],
  templateUrl: './certificate-item.html',
  styleUrl: './certificate-item.css'
})
export class CertificateItem {
 id: string = '5'
}
