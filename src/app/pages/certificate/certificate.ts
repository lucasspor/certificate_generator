import { Component } from '@angular/core';
import { SecondaryButon } from "../../_components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButon,RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css'
})
export class Certificate {
}
