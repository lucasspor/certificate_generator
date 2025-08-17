import { Injectable } from '@angular/core';
import { Certificate } from "../interfaces/certificate";

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  certificates: Certificate[] = []
  addCertificate(certificate: Certificate) {
    this.certificates.unshift({...certificate})
    localStorage.setItem("certificates",JSON.stringify(this.certificates))
  }
}