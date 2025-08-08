import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { CertificateItem } from "./_components/certificate-item/certificate-item";
import { BaseUI } from "./_components/base-ui/base-ui";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CertificateItem, BaseUI],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate_generator');
}
