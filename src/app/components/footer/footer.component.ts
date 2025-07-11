import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  styleUrls: ['./footer.component.css'],
  templateUrl: './footer.component.html',
  imports: [CommonModule, FormsModule],
})
export class FooterComponent implements OnInit {
  newsletterEmail = '';
  particles: { x: number; y: number; delay: number }[] = [];
  
  footerTags = [
    '#DRILL', '#STREET', '#URBAN', '#FIRE', '#TRAP', '#VIBES'
  ];

  ngOnInit() {
    this.generateParticles();
  }

  generateParticles() {
    for (let i = 0; i < 15; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * 100,
        delay: Math.random() * 10
      });
    }
  }

  subscribeNewsletter() {
    if (this.newsletterEmail) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      alert('Merci pour ton abonnement! Tu recevras toutes les news de TnbyDtrix.');
      this.newsletterEmail = '';
    }
  }
}