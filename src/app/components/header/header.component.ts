import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 header-container">
      <div class="header-bg"></div>
      <div class="header-graffiti"></div>
      <div class="container mx-auto px-4 py-4">
        <nav class="flex items-center justify-between">
          <div class="logo-container">
            <h1 class="logo-text">
              <span class="logo-tn">Tn</span><span class="logo-by">by</span><span class="logo-dtrix">Dtrix</span>
              <div class="logo-underline"></div>
            </h1>
          </div>
          
          <ul class="hidden md:flex space-x-8">
            <li><a href="#home" class="nav-link" data-text="HOME">HOME</a></li>
            <li><a href="#about" class="nav-link" data-text="ABOUT">ABOUT</a></li>
            <li><a href="#music" class="nav-link" data-text="MUSIC">MUSIC</a></li>
            <li><a href="#events" class="nav-link" data-text="EVENTS">EVENTS</a></li>
            <li><a href="#gallery" class="nav-link" data-text="GALLERY">GALLERY</a></li>
            <li><a href="#contact" class="nav-link" data-text="CONTACT">CONTACT</a></li>
          </ul>
          
          <div class="mobile-menu-btn md:hidden">
            <button class="hamburger" (click)="toggleMobileMenu()" [class.active]="mobileMenuOpen">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <div class="hamburger-explosion"></div>
            </button>
          </div>
        </nav>
        
        <div class="mobile-nav-overlay" [class.show]="mobileMenuOpen" (click)="closeMobileMenu()">
          <div class="mobile-nav" (click)="$event.stopPropagation()">
            <div class="mobile-nav-header">
              <h2 class="mobile-nav-title">MENU</h2>
              <div class="mobile-nav-decoration"></div>
            </div>
            <div class="mobile-nav-links">
              <a href="#home" class="mobile-nav-link" (click)="closeMobileMenu()">
                <span class="mobile-link-icon">🏠</span>
                <span class="mobile-link-text">HOME</span>
                <div class="mobile-link-splash"></div>
              </a>
              <a href="#about" class="mobile-nav-link" (click)="closeMobileMenu()">
                <span class="mobile-link-icon">👤</span>
                <span class="mobile-link-text">ABOUT</span>
                <div class="mobile-link-splash"></div>
              </a>
              <a href="#music" class="mobile-nav-link" (click)="closeMobileMenu()">
                <span class="mobile-link-icon">🎵</span>
                <span class="mobile-link-text">MUSIC</span>
                <div class="mobile-link-splash"></div>
              </a>
              <a href="#events" class="mobile-nav-link" (click)="closeMobileMenu()">
                <span class="mobile-link-icon">🎤</span>
                <span class="mobile-link-text">EVENTS</span>
                <div class="mobile-link-splash"></div>
              </a>
              <a href="#gallery" class="mobile-nav-link" (click)="closeMobileMenu()">
                <span class="mobile-link-icon">📸</span>
                <span class="mobile-link-text">GALLERY</span>
                <div class="mobile-link-splash"></div>
              </a>
              <a href="#contact" class="mobile-nav-link" (click)="closeMobileMenu()">
                <span class="mobile-link-icon">📩</span>
                <span class="mobile-link-text">CONTACT</span>
                <div class="mobile-link-splash"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="header-particles">
        <div class="particle" *ngFor="let particle of headerParticles" 
             [style.left.px]="particle.x" 
             [style.animation-delay]="particle.delay + 's'"></div>
      </div>
    </header>
  `,
  styles: [`
    .header-container {
      background: transparent;
      backdrop-filter: blur(10px);
      border-bottom: 3px solid transparent;
      border-image: linear-gradient(90deg, #C90000, #F7E733, #C90000) 1;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .header-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(28, 28, 28, 0.9) 100%);
      z-index: -2;
    }
    
    .header-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 50%, rgba(201, 0, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(247, 231, 51, 0.05) 0%, transparent 50%);
      z-index: -1;
      animation: headerPulse 4s ease-in-out infinite;
    }
    
    .header-graffiti {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 100px,
          rgba(201, 0, 0, 0.03) 100px,
          rgba(201, 0, 0, 0.03) 102px
        );
      z-index: -1;
    }
    
    .logo-container {
      position: relative;
    }
    
    .logo-text {
      font-size: 2.5rem;
      font-weight: 900;
      font-family: 'Black Ops One', cursive;
      position: relative;
      display: inline-block;
      transform: rotate(-2deg);
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .logo-text:hover {
      transform: rotate(0deg) scale(1.05);
      animation: logoGlow 0.5s ease;
    }
    
    .logo-tn {
      color: #C90000;
      text-shadow: 
        2px 2px 0 #000,
        4px 4px 0 #A00000,
        6px 6px 10px rgba(201, 0, 0, 0.8);
      animation: letterPulse 2s ease-in-out infinite;
    }
    
    .logo-by {
      color: #F5F5F5;
      text-shadow: 
        2px 2px 0 #000,
        4px 4px 0 #1C1C1C,
        6px 6px 10px rgba(0, 0, 0, 0.8);
      animation: letterPulse 2s ease-in-out infinite 0.3s;
    }
    
    .logo-dtrix {
      color: #F7E733;
      text-shadow: 
        2px 2px 0 #000,
        4px 4px 0 #E6D000,
        6px 6px 10px rgba(247, 231, 51, 0.8);
      animation: letterPulse 2s ease-in-out infinite 0.6s;
    }
    
    .logo-underline {
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #C90000, #F7E733);
      transition: width 0.3s ease;
    }
    
    .logo-text:hover .logo-underline {
      width: 100%;
    }
    
    .nav-link {
      position: relative;
      color: #F5F5F5;
      font-weight: bold;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border: 2px solid transparent;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      overflow: hidden;
      background: linear-gradient(135deg, transparent 0%, rgba(28, 28, 28, 0.3) 100%);
    }
    
    .nav-link::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #C90000 0%, #F7E733 100%);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      transform: translateY(100%);
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    
    .nav-link:hover::before {
      transform: translateY(0);
    }
    
    .nav-link:hover {
      border-color: #C90000;
      transform: translateY(-3px);
      box-shadow: 
        0 5px 15px rgba(201, 0, 0, 0.3),
        inset 0 0 20px rgba(247, 231, 51, 0.1);
      background: linear-gradient(135deg, rgba(201, 0, 0, 0.1) 0%, rgba(247, 231, 51, 0.05) 100%);
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      background: radial-gradient(circle, rgba(247, 231, 51, 0.6) 0%, transparent 70%);
      border-radius: 50%;
      transition: all 0.3s ease;
      z-index: -1;
    }
    
    .nav-link:active::after {
      width: 100px;
      height: 100px;
      animation: navSplash 0.6s ease-out;
    }
    
    .mobile-menu-btn {
      position: relative;
    }
    
    .hamburger {
      position: relative;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      border: 2px solid #F7E733;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      overflow: hidden;
    }
    
    .hamburger:hover {
      background: linear-gradient(135deg, #F7E733 0%, #E6D000 100%);
      border-color: #C90000;
      transform: scale(1.1);
    }
    
    .hamburger-line {
      width: 20px;
      height: 2px;
      background: #F5F5F5;
      transition: all 0.3s ease;
      transform-origin: center;
    }
    
    .hamburger:hover .hamburger-line {
      background: #000;
    }
    
    .hamburger.active .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }
    
    .hamburger.active .hamburger-line:nth-child(2) {
      opacity: 0;
      transform: scale(0);
    }
    
    .hamburger.active .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
    
    .hamburger-explosion {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .hamburger:active .hamburger-explosion {
      animation: hamburgerBoom 0.5s ease-out;
    }
    
    .mobile-nav-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(10px);
      z-index: 40;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    
    .mobile-nav-overlay.show {
      opacity: 1;
      visibility: visible;
    }
    
    .nav-link {
      color: #F5F5F5;
      font-weight: bold;
      position: relative;
      transition: all 0.3s ease;
      padding: 8px 16px;
      border: 2px solid transparent;
      text-decoration: none;
    }
    
    .nav-link:hover {
      color: #C90000;
      border-color: #C90000;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(201, 0, 0, 0.3);
      animation: splash 0.5s ease;
    }
    
    .mobile-nav {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8);
      background: linear-gradient(135deg, #1C1C1C 0%, #000 100%);
      border: 3px solid #C90000;
      border-radius: 10px;
      padding: 2rem;
      min-width: 300px;
      transition: all 0.3s ease;
    }
    
    .mobile-nav-overlay.show .mobile-nav {
      transform: translate(-50%, -50%) scale(1);
    }
    
    .mobile-nav-header {
      text-align: center;
      margin-bottom: 2rem;
      position: relative;
    }
    
    .mobile-nav-title {
      color: #F7E733;
      font-size: 2rem;
      font-weight: bold;
      font-family: 'Black Ops One', cursive;
      text-shadow: 2px 2px 4px #000;
      margin-bottom: 1rem;
    }
    
    .mobile-nav-decoration {
      width: 100px;
      height: 3px;
      background: linear-gradient(90deg, #C90000, #F7E733, #C90000);
      margin: 0 auto;
    }
    
    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .mobile-nav-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: #F5F5F5;
      text-decoration: none;
      padding: 1rem;
      border: 2px solid transparent;
      border-radius: 5px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, transparent 0%, rgba(28, 28, 28, 0.3) 100%);
    }
    
    .mobile-nav-link:hover {
      border-color: #C90000;
      background: linear-gradient(135deg, rgba(201, 0, 0, 0.1) 0%, rgba(247, 231, 51, 0.05) 100%);
      transform: translateX(10px);
    }
    
    .mobile-link-icon {
      font-size: 1.5rem;
      width: 30px;
      text-align: center;
    }
    
    .mobile-link-text {
      font-weight: bold;
      font-size: 1.1rem;
      letter-spacing: 0.1rem;
    }
    
    .mobile-link-splash {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .mobile-nav-link:active .mobile-link-splash {
      animation: mobileSplash 0.5s ease-out;
    }
    
    .header-particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }
    
    .particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: #F7E733;
      border-radius: 50%;
      animation: particleDrift 8s linear infinite;
      top: 50%;
    }
    
    @keyframes headerPulse {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }
    
    @keyframes logoGlow {
      0%, 100% { filter: drop-shadow(0 0 5px #C90000); }
      50% { filter: drop-shadow(0 0 20px #C90000) drop-shadow(0 0 30px #F7E733); }
    }
    
    @keyframes letterPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes navSplash {
      0% { width: 0; height: 0; opacity: 0.8; }
      100% { width: 100px; height: 100px; opacity: 0; }
    }
    
    @keyframes hamburgerBoom {
      0% { width: 0; height: 0; background: rgba(247, 231, 51, 0.8); }
      100% { width: 80px; height: 80px; background: rgba(247, 231, 51, 0); }
    }
    
    @keyframes mobileSplash {
      0% { width: 0; height: 0; background: rgba(201, 0, 0, 0.6); }
      100% { width: 150px; height: 150px; background: rgba(201, 0, 0, 0); }
    }
    
    @keyframes particleDrift {
      0% { transform: translateX(-10px) rotate(0deg); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateX(calc(100vw + 10px)) rotate(360deg); opacity: 0; }
    }
    
    @media (max-width: 768px) {
      .logo-text {
        font-size: 2rem;
      }
      
      .mobile-nav {
        min-width: 280px;
        padding: 1.5rem;
      }
      
      .mobile-nav-title {
        font-size: 1.5rem;
      }
    }
    
    @media (max-width: 480px) {
      .header-container {
        padding: 0.5rem 0;
      }
      
      .logo-text {
        font-size: 1.5rem;
      }
      
      .mobile-nav {
        min-width: 250px;
        padding: 1rem;
      }
    }
  `]
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