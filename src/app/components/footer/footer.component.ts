import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <footer class="footer">
      <div class="footer-bg">
        <div class="graffiti-overlay"></div>
      </div>
      
      <div class="container mx-auto px-4">
        <div class="footer-content">
          <div class="footer-logo">
            <h3 class="logo-text">
              <span class="text-red-600">Tn</span>by<span class="text-yellow-400">Dtrix</span>
            </h3>
            <p class="logo-subtitle">DRILL ARTIST</p>
          </div>
          
          <div class="footer-links">
            <div class="link-column">
              <h4 class="column-title">NAVIGATION</h4>
              <a href="#home" class="footer-link">Home</a>
              <a href="#about" class="footer-link">About</a>
              <a href="#music" class="footer-link">Music</a>
              <a href="#events" class="footer-link">Events</a>
              <a href="#gallery" class="footer-link">Gallery</a>
              <a href="#contact" class="footer-link">Contact</a>
            </div>
            
            <div class="link-column">
              <h4 class="column-title">STREAMING</h4>
              <a href="#" class="footer-link">Spotify</a>
              <a href="#" class="footer-link">Apple Music</a>
              <a href="#" class="footer-link">Deezer</a>
              <a href="#" class="footer-link">YouTube Music</a>
              <a href="#" class="footer-link">SoundCloud</a>
            </div>
            
            <div class="link-column">
              <h4 class="column-title">SOCIAL</h4>
              <a href="#" class="footer-link">Instagram</a>
              <a href="#" class="footer-link">TikTok</a>
              <a href="#" class="footer-link">YouTube</a>
              <a href="#" class="footer-link">Twitter</a>
              <a href="#" class="footer-link">Facebook</a>
            </div>
          </div>
          
          <div class="footer-newsletter">
            <h4 class="newsletter-title">NEWSLETTER</h4>
            <p class="newsletter-text">
              Reçois toutes les news, les sorties et les dates de concerts en avant-première.
            </p>
            <form class="newsletter-form" (ngSubmit)="subscribeNewsletter()">
              <input 
                type="email" 
                placeholder="Ton email..."
                class="newsletter-input"
                [(ngModel)]="newsletterEmail"
                name="email"
                required
              >
              <button type="submit" class="newsletter-btn">
                <span class="btn-text">S'ABONNER</span>
                <div class="btn-explosion"></div>
              </button>
            </form>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-tags">
            <span class="footer-tag" *ngFor="let tag of footerTags">{{ tag }}</span>
          </div>
          
          <div class="footer-copyright">
            <p>&copy; 2024 TnbyDtrix. Tous droits réservés.</p>
            <p>Developed with 🔥 by <strong>Street Code</strong></p>
          </div>
          
          <div class="footer-legal">
            <a href="#" class="legal-link">Mentions légales</a>
            <a href="#" class="legal-link">Politique de confidentialité</a>
            <a href="#" class="legal-link">CGU</a>
          </div>
        </div>
      </div>
      
      <div class="footer-particles">
        <div class="particle" *ngFor="let particle of particles" 
             [style.left.px]="particle.x" 
             [style.top.px]="particle.y"
             [style.animation-delay]="particle.delay + 's'"></div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #000 0%, #1C1C1C 100%);
      border-top: 3px solid #C90000;
      padding: 3rem 0 1rem;
      position: relative;
      overflow: hidden;
    }
    
    .footer-bg {
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
        radial-gradient(circle at 20% 20%, rgba(201, 0, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(247, 231, 51, 0.05) 0%, transparent 50%),
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 20px,
          rgba(245, 245, 245, 0.02) 20px,
          rgba(245, 245, 245, 0.02) 22px
        );
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
      position: relative;
      z-index: 2;
    }
    
    .footer-logo {
      text-align: center;
    }
    
    .logo-text {
      font-size: 2rem;
      font-weight: 900;
      color: #F5F5F5;
      font-family: 'Black Ops One', cursive;
      text-shadow: 2px 2px 4px rgba(201, 0, 0, 0.8);
      margin-bottom: 0.5rem;
    }
    
    .logo-subtitle {
      color: #F7E733;
      font-weight: bold;
      letter-spacing: 0.2rem;
      font-size: 0.9rem;
    }
    
    .footer-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    
    .link-column {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .column-title {
      color: #F7E733;
      font-weight: bold;
      margin-bottom: 1rem;
      font-size: 1.1rem;
      text-shadow: 1px 1px 2px #000;
    }
    
    .footer-link {
      color: #F5F5F5;
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 0.2rem 0;
      border-left: 3px solid transparent;
      padding-left: 0.5rem;
    }
    
    .footer-link:hover {
      color: #C90000;
      border-left-color: #C90000;
      transform: translateX(5px);
    }
    
    .footer-newsletter {
      background: linear-gradient(135deg, #1C1C1C 0%, #000 100%);
      border: 2px solid #C90000;
      padding: 1.5rem;
      transform: rotate(-1deg);
      transition: all 0.3s ease;
    }
    
    .footer-newsletter:hover {
      transform: rotate(0deg);
      border-color: #F7E733;
    }
    
    .newsletter-title {
      color: #F7E733;
      font-weight: bold;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    
    .newsletter-text {
      color: #F5F5F5;
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
    
    .newsletter-form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .newsletter-input {
      padding: 0.75rem;
      background: #000;
      border: 1px solid #C90000;
      color: #F5F5F5;
      outline: none;
      transition: all 0.3s ease;
    }
    
    .newsletter-input:focus {
      border-color: #F7E733;
      box-shadow: 0 0 5px rgba(247, 231, 51, 0.3);
    }
    
    .newsletter-btn {
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      color: #F5F5F5;
      border: none;
      padding: 0.75rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .newsletter-btn:hover {
      background: linear-gradient(135deg, #F7E733 0%, #E6D000 100%);
      color: #000;
    }
    
    .btn-explosion {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .newsletter-btn:active .btn-explosion {
      animation: btnExplosion 0.6s ease-out;
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(201, 0, 0, 0.3);
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      position: relative;
      z-index: 2;
    }
    
    .footer-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    
    .footer-tag {
      background: rgba(201, 0, 0, 0.2);
      color: #C90000;
      padding: 0.2rem 0.5rem;
      font-size: 0.8rem;
      border: 1px solid #C90000;
      font-weight: bold;
    }
    
    .footer-copyright {
      text-align: center;
      color: #F5F5F5;
      font-size: 0.9rem;
      line-height: 1.4;
    }
    
    .footer-legal {
      display: flex;
      gap: 1rem;
    }
    
    .legal-link {
      color: #F5F5F5;
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    .legal-link:hover {
      color: #F7E733;
    }
    
    .footer-particles {
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
      width: 2px;
      height: 2px;
      background: #F7E733;
      border-radius: 50%;
      animation: particleFloat 15s linear infinite;
    }
    
    @keyframes btnExplosion {
      0% { width: 0; height: 0; background: rgba(247, 231, 51, 0.8); }
      100% { width: 100px; height: 100px; background: rgba(247, 231, 51, 0); }
    }
    
    @keyframes particleFloat {
      0% { transform: translateY(100px) rotate(0deg); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
      
      .footer-links {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      
      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }
      
      .footer-tags {
        justify-content: center;
      }
      
      .footer-legal {
        justify-content: center;
      }
    }
  `]
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