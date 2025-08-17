import { Component, Input } from '@angular/core';
import { SecondaryButon } from "../secondary-button/secondary-button";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificate-item',
  imports: [SecondaryButon],
  templateUrl: './certificate-item.html',
  styleUrl: './certificate-item.css'
})
export class CertificateItem {
  @Input() studentName: string = ''
  @Input() issueDate: string = ''
  @Input() id: number = 0
  

  constructor(private router: Router) {
  }

  certificateRedirect() {
    this.router.navigate(["/certificate", this.id])
  }
}
