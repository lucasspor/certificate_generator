import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUI } from "./_components/base-ui/base-ui";
import { CertificateService } from './_services/certificate.services';


@Component({
  selector: 'app-root',
  imports: [ Navbar, BaseUI, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('certificate_generator');

  constructor(private certificateService: CertificateService){}

  ngOnInit(): void {
      const certificates = localStorage.getItem('certificates')
      this.certificateService.certificates = certificates ? JSON.parse(certificates) : []
  }
}
