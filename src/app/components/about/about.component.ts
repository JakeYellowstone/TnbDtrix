import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="container mx-auto px-4">
        <div class="section-header">
          <h2 class="section-title">L'HISTOIRE</h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="about-content">
          <div class="comic-panels">
            <div class="comic-panel panel-1" [class.active]="activePanel >= 1">
              <div class="panel-border"></div>
              <div class="panel-content">
                <h3 class="panel-title">ORIGINES</h3>
                <p class="panel-text">
                  Né dans les rues de béton, TnbyDtrix forge son art entre les tags 
                  et les beats. Chaque rime raconte une histoire, chaque flow 
                  porte l'âme du ghetto.
                </p>
              </div>
              <div class="panel-splash"></div>
            </div>
            
            <div class="comic-panel panel-2" [class.active]="activePanel >= 2">
              <div class="panel-border"></div>
              <div class="panel-content">
                <h3 class="panel-title">ÉVOLUTION</h3>
                <p class="panel-text">
                  De freestyle en cypher, de mixtape en album, l'artiste gravit 
                  les échelons du rap game avec la rage et la passion qui le 
                  caractérisent.
                </p>
              </div>
              <div class="panel-explosion"></div>
            </div>
            
            <div class="comic-panel panel-3" [class.active]="activePanel >= 3">
              <div class="panel-border"></div>
              <div class="panel-content">
                <h3 class="panel-title">AUJOURD'HUI</h3>
                <p class="panel-text">
                  Reconnu dans la scène drill, TnbyDtrix continue d'innover, 
                  mélange street art et musique pour créer un univers unique 
                  et authentique.
                </p>
              </div>
              <div class="panel-glow"></div>
            </div>
          </div>
          
          <div class="artist-portrait">
            <div class="portrait-frame">
              <div class="portrait-image"></div>
              <div class="portrait-overlay"></div>
              <div class="portrait-tags">
                <span class="tag tag-1">DRILL</span>
                <span class="tag tag-2">STREET</span>
                <span class="tag tag-3">ART</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-stats">
          <div class="stat-item">
            <div class="stat-number">50K+</div>
            <div class="stat-label">STREAMS</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">25+</div>
            <div class="stat-label">TRACKS</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">SHOWS</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      min-height: 100vh;
      background: linear-gradient(135deg, #1C1C1C 0%, #000 50%, #1C1C1C 100%);
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }
    
    .about-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 10% 20%, rgba(201, 0, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(247, 231, 51, 0.05) 0%, transparent 50%);
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
    
    .title-underline::after {
      content: '';
      position: absolute;
      top: -2px;
      left: -10px;
      right: -10px;
      height: 8px;
      background: linear-gradient(90deg, transparent 0%, #C90000 30%, #F7E733 70%, transparent 100%);
      filter: blur(2px);
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: center;
      margin-bottom: 4rem;
    }
    
    .comic-panels {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .comic-panel {
      position: relative;
      background: linear-gradient(135deg, #000 0%, #1C1C1C 100%);
      border: 3px solid #C90000;
      padding: 2rem;
      transform: rotate(-1deg);
      transition: all 0.6s ease;
      opacity: 0.5;
    }
    
    .comic-panel.active {
      opacity: 1;
      transform: rotate(0deg) scale(1.02);
    }
    
    .comic-panel:nth-child(2) {
      transform: rotate(1deg);
      border-color: #F7E733;
    }
    
    .comic-panel:nth-child(2).active {
      transform: rotate(0deg) scale(1.02);
    }
    
    .comic-panel:nth-child(3) {
      transform: rotate(-0.5deg);
      border-color: #F5F5F5;
    }
    
    .comic-panel:nth-child(3).active {
      transform: rotate(0deg) scale(1.02);
    }
    
    .panel-border {
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      border: 2px solid rgba(245, 245, 245, 0.3);
      pointer-events: none;
    }
    
    .panel-content {
      position: relative;
      z-index: 2;
    }
    
    .panel-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: #F7E733;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px #000;
    }
    
    .panel-text {
      color: #F5F5F5;
      line-height: 1.6;
      font-size: 1.1rem;
    }
    
    .panel-splash, .panel-explosion, .panel-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .comic-panel.active .panel-splash {
      animation: splashEffect 1s ease-out;
    }
    
    .comic-panel.active .panel-explosion {
      animation: explosionEffect 1s ease-out;
    }
    
    .comic-panel.active .panel-glow {
      animation: glowEffect 1s ease-out;
    }
    
    .artist-portrait {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .portrait-frame {
      position: relative;
      width: 350px;
      height: 450px;
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      border: 5px solid #F7E733;
      transform: rotate(2deg);
      overflow: hidden;
    }
    
    .portrait-image {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #1C1C1C 0%, #000 100%);
      position: relative;
    }
    
    .portrait-image::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, #C90000 0%, #A00000 100%);
      border-radius: 50%;
      opacity: 0.8;
    }
    
    .portrait-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(45deg, transparent 30%, rgba(247, 231, 51, 0.1) 50%, transparent 70%),
        radial-gradient(circle at 30% 70%, rgba(201, 0, 0, 0.2) 0%, transparent 50%);
      animation: overlayPulse 3s ease-in-out infinite;
    }
    
    .portrait-tags {
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    .tag {
      padding: 5px 10px;
      font-size: 0.8rem;
      font-weight: bold;
      color: #000;
      background: #F7E733;
      transform: rotate(-15deg);
      border: 2px solid #000;
      animation: tagFloat 4s ease-in-out infinite;
    }
    
    .tag-2 {
      background: #C90000;
      color: #F5F5F5;
      animation-delay: 1s;
    }
    
    .tag-3 {
      background: #F5F5F5;
      color: #000;
      animation-delay: 2s;
    }
    
    .about-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      text-align: center;
    }
    
    .stat-item {
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      border: 3px solid #F7E733;
      padding: 2rem;
      transform: rotate(-1deg);
      transition: all 0.3s ease;
    }
    
    .stat-item:hover {
      transform: rotate(0deg) scale(1.05);
      box-shadow: 0 10px 20px rgba(201, 0, 0, 0.3);
    }
    
    .stat-number {
      font-size: 3rem;
      font-weight: 900;
      color: #F5F5F5;
      font-family: 'Black Ops One', cursive;
      text-shadow: 2px 2px 4px #000;
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      font-size: 1.2rem;
      font-weight: bold;
      color: #F7E733;
      letter-spacing: 0.1rem;
    }
    
    @keyframes splashEffect {
      0% { width: 0; height: 0; background: rgba(201, 0, 0, 0.8); }
      100% { width: 200px; height: 200px; background: rgba(201, 0, 0, 0); }
    }
    
    @keyframes explosionEffect {
      0% { width: 0; height: 0; background: rgba(247, 231, 51, 0.8); }
      100% { width: 250px; height: 250px; background: rgba(247, 231, 51, 0); }
    }
    
    @keyframes glowEffect {
      0% { width: 0; height: 0; background: rgba(245, 245, 245, 0.6); }
      100% { width: 300px; height: 300px; background: rgba(245, 245, 245, 0); }
    }
    
    @keyframes overlayPulse {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }
    
    @keyframes tagFloat {
      0%, 100% { transform: rotate(-15deg) translateY(0); }
      50% { transform: rotate(-15deg) translateY(-5px); }
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .portrait-frame {
        width: 250px;
        height: 300px;
      }
      
      .about-stats {
        grid-template-columns: 1fr;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  `]
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