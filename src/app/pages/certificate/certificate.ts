import { Component, OnInit } from '@angular/core';
import { SecondaryButon } from "../../_components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate.services';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButon, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css'
})
export class CertificateComponent implements OnInit {
  id: string | null = null 
  certificate: Certificate | undefined
  constructor(private certificateService: CertificateService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.certificate =  this.certificateService.certificates.find(item=> item.id == this.id)
      console.log(this.certificate)
    })

  }
}
