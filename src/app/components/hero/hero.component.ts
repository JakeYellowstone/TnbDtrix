import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  styleUrls: ['./hero.component.css'],
  templateUrl: './hero.component.html',
  imports: [CommonModule],
})
export class HeroComponent implements OnInit {
  particles: { x: number; y: number }[] = [];

  ngOnInit() {
    this.generateParticles();
  }

  generateParticles() {
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      });
    }
  }

  playMusic() {
    console.log('Playing music...');
    // Integration Spotify/Deezer ici
  }

  scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}