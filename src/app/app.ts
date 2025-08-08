import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUI } from "./_components/base-ui/base-ui";
import { Certificates } from "./pages/certificates/certificates";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUI, Certificates],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate_generator');
}
