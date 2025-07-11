import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="container mx-auto px-4">
        <div class="section-header">
          <h2 class="section-title">CONTACT</h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="contact-content">
          <div class="contact-form-container">
            <form class="contact-form" (ngSubmit)="submitForm()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name" class="form-label">NOM</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  class="form-input"
                  [(ngModel)]="formData.name"
                  required
                  (focus)="onInputFocus('name')"
                  (blur)="onInputBlur('name')"
                >
                <div class="input-graffiti" [class.active]="activeInputs.name"></div>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  class="form-input"
                  [(ngModel)]="formData.email"
                  required
                  (focus)="onInputFocus('email')"
                  (blur)="onInputBlur('email')"
                >
                <div class="input-graffiti" [class.active]="activeInputs.email"></div>
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">SUJET</label>
                <select 
                  id="subject" 
                  name="subject"
                  class="form-input"
                  [(ngModel)]="formData.subject"
                  required
                  (focus)="onInputFocus('subject')"
                  (blur)="onInputBlur('subject')"
                >
                  <option value="">Choisir un sujet</option>
                  <option value="booking">💼 Booking</option>
                  <option value="collab">🎵 Collaboration</option>
                  <option value="interview">🎤 Interview</option>
                  <option value="fan">❤️ Fan Mail</option>
                  <option value="business">📈 Business</option>
                  <option value="other">🔥 Autre</option>
                </select>
                <div class="input-graffiti" [class.active]="activeInputs.subject"></div>
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">MESSAGE</label>
                <textarea 
                  id="message" 
                  name="message"
                  class="form-input form-textarea"
                  rows="5"
                  [(ngModel)]="formData.message"
                  required
                  (focus)="onInputFocus('message')"
                  (blur)="onInputBlur('message')"
                  placeholder="Ecris ton message ici..."
                ></textarea>
                <div class="input-graffiti" [class.active]="activeInputs.message"></div>
              </div>
              
              <button type="submit" class="submit-btn" [disabled]="!contactForm.valid">
                <span class="btn-text">ENVOYER</span>
                <div class="btn-spray" [class.active]="isSubmitting"></div>
              </button>
            </form>
          </div>
          
          <div class="contact-info">
            <div class="info-card">
              <h3 class="info-title">RÉSEAUX SOCIAUX</h3>
              <div class="social-links">
                <a href="#" class="social-link instagram">
                  <span class="social-icon">📷</span>
                  <span class="social-text">Instagram</span>
                  <div class="social-splash"></div>
                </a>
                <a href="#" class="social-link tiktok">
                  <span class="social-icon">🎵</span>
                  <span class="social-text">TikTok</span>
                  <div class="social-splash"></div>
                </a>
                <a href="#" class="social-link youtube">
                  <span class="social-icon">📺</span>
                  <span class="social-text">YouTube</span>
                  <div class="social-splash"></div>
                </a>
                <a href="#" class="social-link spotify">
                  <span class="social-icon">🎧</span>
                  <span class="social-text">Spotify</span>
                  <div class="social-splash"></div>
                </a>
              </div>
            </div>
            
            <div class="info-card">
              <h3 class="info-title">MANAGEMENT</h3>
              <div class="management-info">
                <p class="management-text">
                  <strong>Booking:</strong><br>
                  booking&#64;tnbydtrix.com<br>
                  +33 1 23 45 67 89
                </p>
                <p class="management-text">
                  <strong>Presse:</strong><br>
                  presse&#64;tnbydtrix.com<br>
                  +33 1 98 76 54 32
                </p>
              </div>
            </div>
            
            <div class="info-card">
              <h3 class="info-title">LABEL</h3>
              <div class="label-info">
                <div class="label-logo">
                  <div class="logo-placeholder"></div>
                </div>
                <p class="label-text">
                  <strong>Street Records</strong><br>
                  Le label indépendant<br>
                  de la nouvelle génération
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="graffiti-wall">
          <div class="wall-tag" *ngFor="let tag of wallTags" 
               [style.left.px]="tag.x" 
               [style.top.px]="tag.y"
               [style.transform]="'rotate(' + tag.rotation + 'deg)'"
               [style.color]="tag.color">
            {{ tag.text }}
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      min-height: 100vh;
      background: linear-gradient(135deg, #1C1C1C 0%, #000 50%, #1C1C1C 100%);
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }
    
    .contact-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 30% 20%, rgba(201, 0, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(247, 231, 51, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    .section-title {
      font-size: 3rem;
      font-weight: 900;
      color: #F5F5F5;
      font-family: 'Black Ops One', cursive;
      text-shadow: 3px 3px 0 #C90000, 6px 6px 0 #000;
      margin-bottom: 1rem;
    }
    
    .title-underline {
      width: 200px;
      height: 4px;
      background: linear-gradient(90deg, #C90000 0%, #F7E733 100%);
      margin: 0 auto;
      position: relative;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }
    
    .contact-form-container {
      background: linear-gradient(135deg, #000 0%, #1C1C1C 100%);
      border: 3px solid #C90000;
      padding: 2rem;
      transform: rotate(-1deg);
      transition: all 0.3s ease;
    }
    
    .contact-form-container:hover {
      transform: rotate(0deg);
      border-color: #F7E733;
    }
    
    .form-group {
      position: relative;
      margin-bottom: 2rem;
    }
    
    .form-label {
      display: block;
      color: #F7E733;
      font-weight: bold;
      margin-bottom: 0.5rem;
      text-shadow: 1px 1px 2px #000;
    }
    
    .form-input {
      width: 100%;
      padding: 1rem;
      background: #1C1C1C;
      border: 2px solid #C90000;
      color: #F5F5F5;
      font-size: 1rem;
      transition: all 0.3s ease;
      outline: none;
    }
    
    .form-input:focus {
      border-color: #F7E733;
      box-shadow: 0 0 10px rgba(247, 231, 51, 0.3);
      transform: scale(1.02);
    }
    
    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .input-graffiti {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: linear-gradient(45deg, transparent 30%, rgba(201, 0, 0, 0.1) 50%, transparent 70%);
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    .input-graffiti.active {
      opacity: 1;
      animation: graffitiEffect 0.5s ease;
    }
    
    .submit-btn {
      width: 100%;
      padding: 1.5rem;
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      color: #F5F5F5;
      border: none;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    
    .submit-btn:hover {
      background: linear-gradient(135deg, #F7E733 0%, #E6D000 100%);
      color: #000;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(201, 0, 0, 0.3);
    }
    
    .submit-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .btn-spray {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .btn-spray.active {
      animation: sprayEffect 0.8s ease-out;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .info-card {
      background: linear-gradient(135deg, #1C1C1C 0%, #000 100%);
      border: 2px solid #F7E733;
      padding: 2rem;
      transform: rotate(1deg);
      transition: all 0.3s ease;
    }
    
    .info-card:hover {
      transform: rotate(0deg) scale(1.02);
      border-color: #C90000;
      box-shadow: 0 5px 20px rgba(247, 231, 51, 0.2);
    }
    
    .info-title {
      color: #F7E733;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px #000;
    }
    
    .social-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: #F5F5F5;
      text-decoration: none;
      padding: 0.5rem;
      border: 2px solid transparent;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .social-link:hover {
      color: #C90000;
      border-color: #C90000;
      transform: translateX(5px);
    }
    
    .social-icon {
      font-size: 1.5rem;
    }
    
    .social-text {
      font-weight: bold;
    }
    
    .social-splash {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .social-link:active .social-splash {
      animation: socialSplash 0.5s ease-out;
    }
    
    .management-info, .label-info {
      color: #F5F5F5;
      line-height: 1.6;
    }
    
    .management-text {
      margin-bottom: 1.5rem;
    }
    
    .label-info {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    
    .label-logo {
      width: 60px;
      height: 60px;
      background: #C90000;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .logo-placeholder {
      width: 30px;
      height: 30px;
      background: #F7E733;
      border-radius: 50%;
    }
    
    .graffiti-wall {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .wall-tag {
      position: absolute;
      font-weight: bold;
      font-size: 1.2rem;
      opacity: 0.1;
      animation: tagFloat 10s ease-in-out infinite;
    }
    
    @keyframes graffitiEffect {
      0% { transform: scale(1) rotate(0deg); opacity: 0; }
      50% { transform: scale(1.1) rotate(2deg); opacity: 1; }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    
    @keyframes sprayEffect {
      0% { width: 0; height: 0; background: rgba(247, 231, 51, 0.8); }
      100% { width: 300px; height: 300px; background: rgba(247, 231, 51, 0); }
    }
    
    @keyframes socialSplash {
      0% { width: 0; height: 0; background: rgba(201, 0, 0, 0.6); }
      100% { width: 100px; height: 100px; background: rgba(201, 0, 0, 0); }
    }
    
    @keyframes tagFloat {
      0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
      50% { transform: translateY(-10px) rotate(5deg); opacity: 0.3; }
    }
    
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .social-links {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .label-info {
        flex-direction: column;
        text-align: center;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  activeInputs = {
    name: false,
    email: false,
    subject: false,
    message: false
  };

  isSubmitting = false;

  wallTags = [
    { text: 'DRILL', x: 100, y: 150, rotation: -15, color: '#C90000' },
    { text: 'STREET', x: 300, y: 200, rotation: 20, color: '#F7E733' },
    { text: 'VIBES', x: 500, y: 100, rotation: -10, color: '#F5F5F5' },
    { text: 'URBAN', x: 700, y: 300, rotation: 25, color: '#C90000' },
    { text: 'FIRE', x: 200, y: 400, rotation: -20, color: '#F7E733' },
    { text: 'TRAP', x: 600, y: 450, rotation: 15, color: '#F5F5F5' }
  ];

  ngOnInit() {
    this.generateWallTags();
  }

  generateWallTags() {
    // Génération dynamique des tags sur le mur
    setInterval(() => {
      this.wallTags.forEach(tag => {
        tag.x = Math.random() * window.innerWidth;
        tag.y = Math.random() * window.innerHeight;
        tag.rotation = Math.random() * 40 - 20;
      });
    }, 8000);
  }

  onInputFocus(field: string) {
    this.activeInputs[field as keyof typeof this.activeInputs] = true;
  }

  onInputBlur(field: string) {
    this.activeInputs[field as keyof typeof this.activeInputs] = false;
  }

  submitForm() {
    this.isSubmitting = true;
    
    // Simulation d'envoi
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      alert('Message envoyé avec succès! TnbyDtrix vous répondra bientôt.');
    }, 2000);
  }
}