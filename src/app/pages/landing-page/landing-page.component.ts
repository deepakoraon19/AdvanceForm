import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepTagComponent } from 'src/app/components/step-tag/step-tag.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

}
