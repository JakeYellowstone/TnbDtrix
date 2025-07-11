import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <div class="hero-bg">
        <div class="graffiti-overlay"></div>
        <div class="concrete-texture"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-line">TnbyDtrix</span>
            <span class="title-subtitle">DRILL ARTIST</span>
          </h1>
          
          <p class="hero-slogan">
            <span class="slogan-word">STREET</span>
            <span class="slogan-word">VIBES</span>
            <span class="slogan-word">ETERNAL</span>
          </p>
          
          <div class="hero-buttons">
            <button class="btn-primary splash-btn" (click)="playMusic()">
              <span class="btn-text">🎵 LISTEN NOW</span>
              <div class="btn-splash"></div>
            </button>
            
            <button class="btn-secondary explode-btn" (click)="scrollToAbout()">
              <span class="btn-text">💥 DISCOVER</span>
              <div class="btn-explosion"></div>
            </button>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="artist-frame">
            <div class="comic-border"></div>
            <div class="artist-silhouette"></div>
          </div>
        </div>
      </div>
      
      <div class="hero-particles">
        <div class="particle" *ngFor="let particle of particles" [style.left.px]="particle.x" [style.top.px]="particle.y"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: linear-gradient(135deg, #000 0%, #1C1C1C 50%, #000 100%);
    }
    
    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    
    .graffiti-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 30%, rgba(201, 0, 0, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(247, 231, 51, 0.2) 0%, transparent 50%),
        linear-gradient(45deg, transparent 30%, rgba(201, 0, 0, 0.1) 50%, transparent 70%);
      animation: graffitiPulse 4s ease-in-out infinite;
    }
    
    .concrete-texture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(245, 245, 245, 0.03) 2px,
          rgba(245, 245, 245, 0.03) 4px
        );
      opacity: 0.5;
    }
    
    .hero-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      width: 100%;
      padding: 0 2rem;
      z-index: 2;
      position: relative;
    }
    
    .hero-text {
      flex: 1;
      max-width: 600px;
    }
    
    .hero-title {
      margin-bottom: 2rem;
    }
    
    .title-line {
      display: block;
      font-size: 4rem;
      font-weight: 900;
      color: #F5F5F5;
      font-family: 'Black Ops One', cursive;
      text-shadow: 
        3px 3px 0 #C90000,
        6px 6px 0 #000,
        9px 9px 20px rgba(201, 0, 0, 0.8);
      transform: rotate(-2deg);
      animation: titleGlow 2s ease-in-out infinite alternate;
    }
    
    .title-subtitle {
      display: block;
      font-size: 1.5rem;
      color: #F7E733;
      margin-top: 0.5rem;
      font-weight: bold;
      letter-spacing: 0.3rem;
      text-shadow: 2px 2px 4px #000;
    }
    
    .hero-slogan {
      margin-bottom: 3rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .slogan-word {
      font-size: 1.8rem;
      font-weight: bold;
      color: #C90000;
      padding: 0.5rem 1rem;
      border: 2px solid #C90000;
      transform: rotate(-1deg);
      animation: wordPulse 3s ease-in-out infinite;
      background: linear-gradient(135deg, transparent 0%, rgba(201, 0, 0, 0.1) 100%);
    }
    
    .slogan-word:nth-child(2) {
      animation-delay: 0.5s;
      transform: rotate(1deg);
      color: #F7E733;
      border-color: #F7E733;
    }
    
    .slogan-word:nth-child(3) {
      animation-delay: 1s;
      transform: rotate(-0.5deg);
    }
    
    .hero-buttons {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    
    .btn-primary, .btn-secondary {
      position: relative;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      overflow: hidden;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      color: #F5F5F5;
      border: 2px solid #C90000;
    }
    
    .btn-secondary {
      background: linear-gradient(135deg, #F7E733 0%, #E6D000 100%);
      color: #000;
      border: 2px solid #F7E733;
    }
    
    .btn-primary:hover, .btn-secondary:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(201, 0, 0, 0.4);
    }
    
    .btn-splash, .btn-explosion {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .splash-btn:active .btn-splash {
      animation: splash 0.6s ease-out;
    }
    
    .explode-btn:active .btn-explosion {
      animation: explode 0.6s ease-out;
    }
    
    .hero-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .artist-frame {
      position: relative;
      width: 400px;
      height: 500px;
      background: linear-gradient(135deg, #1C1C1C 0%, #000 100%);
      border: 5px solid #C90000;
      transform: rotate(-2deg);
      overflow: hidden;
    }
    
    .comic-border {
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border: 3px solid #F7E733;
      pointer-events: none;
    }
    
    .artist-silhouette {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, #C90000 0%, #A00000 100%);
      border-radius: 50%;
      opacity: 0.8;
      animation: silhouettePulse 3s ease-in-out infinite;
    }
    
    .hero-particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #F7E733;
      border-radius: 50%;
      animation: particleFloat 8s linear infinite;
    }
    
    @keyframes graffitiPulse {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
    
    @keyframes titleGlow {
      0% { text-shadow: 3px 3px 0 #C90000, 6px 6px 0 #000, 9px 9px 20px rgba(201, 0, 0, 0.8); }
      100% { text-shadow: 3px 3px 0 #C90000, 6px 6px 0 #000, 9px 9px 30px rgba(201, 0, 0, 1); }
    }
    
    @keyframes wordPulse {
      0%, 100% { transform: rotate(-1deg) scale(1); }
      50% { transform: rotate(-1deg) scale(1.05); }
    }
    
    @keyframes splash {
      0% { width: 0; height: 0; background: rgba(201, 0, 0, 0.8); }
      100% { width: 200px; height: 200px; background: rgba(201, 0, 0, 0); }
    }
    
    @keyframes explode {
      0% { width: 0; height: 0; background: rgba(247, 231, 51, 0.8); }
      100% { width: 300px; height: 300px; background: rgba(247, 231, 51, 0); }
    }
    
    @keyframes silhouettePulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.1); }
    }
    
    @keyframes particleFloat {
      0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    
    @media (max-width: 768px) {
      .hero-content {
        flex-direction: column;
        text-align: center;
      }
      
      .title-line {
        font-size: 2.5rem;
      }
      
      .hero-buttons {
        justify-content: center;
      }
      
      .artist-frame {
        width: 250px;
        height: 300px;
        margin-top: 2rem;
      }
    }
  `]
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