import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
  imports: [CommonModule],
  
})
export class HeaderComponent implements OnInit {
  mobileMenuOpen = false;
  headerParticles: { x: number; delay: number }[] = [];

  ngOnInit() {
    this.generateHeaderParticles();
    
    // Smooth scrolling for navigation links
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  generateHeaderParticles() {
    for (let i = 0; i < 8; i++) {
      this.headerParticles.push({
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 8
      });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : 'auto';
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}