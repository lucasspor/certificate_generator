import { Component } from '@angular/core';
import { SecondaryButon } from "../secondary-button/secondary-button";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificate-item',
  imports: [SecondaryButon],
  templateUrl: './certificate-item.html',
  styleUrl: './certificate-item.css'
})
export class CertificateItem {
  id: string = '5'
  
  constructor(private router: Router){
  }
  
  certificateRedirect(){
    this.router.navigate(["/certificate", 2])
  }
}
