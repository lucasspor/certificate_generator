import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUI } from "./_components/base-ui/base-ui";
import { Certificates } from "./pages/certificates/certificates";
// import { CertificateItem } from "./_components/certificate-item/certificate-item";
import { CertificateForm } from "./pages/certificate-form/certificate-form";
import { Certificate } from "./pages/certificate/certificate";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUI, /* Certificates, CertificateItem, CertificateForm,*/ Certificate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate_generator');
}
