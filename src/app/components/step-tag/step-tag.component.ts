import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-tag.component.html',
  styleUrls: ['./step-tag.component.css']
})
export class StepTagComponent {
  @Input() stepNumber = '0';
  @Input() title = "";
}
