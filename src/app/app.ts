import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { CertificateItem } from "./_components/certificate-item/certificate-item";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CertificateItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate_generator');
}
