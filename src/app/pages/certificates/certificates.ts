import { Component, OnInit } from '@angular/core';
import { SecondaryButon } from "../../_components/secondary-button/secondary-button";
import { CertificateItem } from "../../_components/certificate-item/certificate-item";
import {  RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate.services';

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButon, CertificateItem, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates implements OnInit{
  constructor(private certificateService: CertificateService){

  }

  get certificates() {
    return this.certificateService.certificates
  }

  ngOnInit(): void {
    this.certificates
  }
}
