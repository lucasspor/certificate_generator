import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButon } from "../../_components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate.services';
import { Certificate } from '../../interfaces/certificate';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButon, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css'
})
export class CertificateComponent implements OnInit {
  id: string | null = null 
  certificate: Certificate | undefined

  @ViewChild('certificateContainer') certificateElement!: ElementRef

  constructor(private certificateService: CertificateService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.certificate =  this.certificateService.certificates.find(item=> item.id == this.id)
      console.log(this.certificate)
    })

  }

  downloadCertificate(){
    if(this.certificate === undefined){
      return
    }

    html2canvas(this.certificateElement.nativeElement, {scale: 2}).then(
      canvas =>{
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = `certificate_${this.certificate?.name.replaceAll(' ', '_')}.png`
        link.click()
      }
    )
  }
}
