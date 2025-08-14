import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [CommonModule],
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.css'
})
export class SecondaryButon {
  @Input() iconClass?: string
  @Input() buttonText: string = ''
  @Input() disable: boolean = false
}
