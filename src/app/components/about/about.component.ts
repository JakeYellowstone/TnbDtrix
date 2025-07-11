import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html',
  imports: [CommonModule],
  
})
export class AboutComponent {
  activePanel = 0;

  ngOnInit() {
    // Animation séquentielle des panels
    setTimeout(() => { this.activePanel = 1; }, 500);
    setTimeout(() => { this.activePanel = 2; }, 1000);
    setTimeout(() => { this.activePanel = 3; }, 1500);
  }
}