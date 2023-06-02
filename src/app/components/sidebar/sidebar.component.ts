import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepTagComponent } from '../step-tag/step-tag.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, StepTagComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  steps = [
    { stepNumber: '1', title: 'YOUR INFO' },
    { stepNumber: '2', title: 'SELECT PLAN' },
    { stepNumber: '3', title: 'ADD ON' },
    { stepNumber: '4', title: 'SUMMARY' },
  ];
}
