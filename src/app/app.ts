import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { PrimaryButton } from "./_components/primary-button/primary-button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, PrimaryButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate_generator');
}
