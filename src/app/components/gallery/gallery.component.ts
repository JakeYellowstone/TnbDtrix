import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="gallery" class="gallery-section">
      <div class="container mx-auto px-4">
        <div class="section-header">
          <h2 class="section-title">GALERIE</h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="gallery-tabs">
          <button class="tab-btn" 
                  [class.active]="activeTab === 'clips'" 
                  (click)="setActiveTab('clips')">
            🎬 CLIPS
          </button>
          <button class="tab-btn" 
                  [class.active]="activeTab === 'photos'" 
                  (click)="setActiveTab('photos')">
            📸 PHOTOS
          </button>
          <button class="tab-btn" 
                  [class.active]="activeTab === 'behind'" 
                  (click)="setActiveTab('behind')">
            🎭 COULISSES
          </button>
        </div>
        
        <div class="gallery-content">
          <!-- Clips Tab -->
          <div class="clips-grid" *ngIf="activeTab === 'clips'">
            <div class="clip-card" *ngFor="let clip of clips" (click)="playClip(clip)">
              <div class="clip-thumbnail">
                <div class="clip-overlay"></div>
                <div class="play-button">
                  <span class="play-icon">▶</span>
                </div>
                <div class="clip-info">
                  <h3 class="clip-title">{{ clip.title }}</h3>
                  <p class="clip-views">{{ clip.views }} vues</p>
                </div>
              </div>
              <div class="clip-border"></div>
              <div class="clip-splash"></div>
            </div>
          </div>
          
          <!-- Photos Tab -->
          <div class="photos-grid" *ngIf="activeTab === 'photos'">
            <div class="photo-card" *ngFor="let photo of photos; let i = index" 
                 (click)="openPhoto(photo, i)">
              <div class="photo-frame">
                <div class="photo-image" [style.background-image]="'url(' + photo.url + ')'"></div>
                <div class="photo-overlay"></div>
                <div class="photo-caption">{{ photo.caption }}</div>
              </div>
              <div class="photo-graffiti"></div>
            </div>
          </div>
          
          <!-- Behind Tab -->
          <div class="behind-grid" *ngIf="activeTab === 'behind'">
            <div class="behind-card" *ngFor="let item of behindScenes">
              <div class="behind-content">
                <div class="behind-image"></div>
                <div class="behind-text">
                  <h3 class="behind-title">{{ item.title }}</h3>
                  <p class="behind-description">{{ item.description }}</p>
                  <span class="behind-date">{{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Photo Modal -->
        <div class="photo-modal" *ngIf="selectedPhoto" (click)="closePhoto()">
          <div class="modal-content" (click)="$event.stopPropagation()">
            <button class="modal-close" (click)="closePhoto()">✕</button>
            <div class="modal-image" [style.background-image]="'url(' + selectedPhoto.url + ')'"></div>
            <div class="modal-info">
              <h3 class="modal-title">{{ selectedPhoto.caption }}</h3>
              <p class="modal-description">{{ selectedPhoto.description }}</p>
            </div>
            <div class="modal-navigation">
              <button class="nav-btn prev" (click)="previousPhoto()">‹</button>
              <button class="nav-btn next" (click)="nextPhoto()">›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-section {
      min-height: 100vh;
      background: linear-gradient(135deg, #000 0%, #1C1C1C 50%, #000 100%);
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }
    
    .gallery-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 25% 25%, rgba(247, 231, 51, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(201, 0, 0, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
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
    
    .gallery-tabs {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
    }
    
    .tab-btn {
      background: linear-gradient(135deg, #1C1C1C 0%, #000 100%);
      color: #F5F5F5;
      border: 2px solid #C90000;
      padding: 1rem 2rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      font-size: 1.1rem;
      transform: rotate(-1deg);
    }
    
    .tab-btn.active {
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      border-color: #F7E733;
      transform: rotate(0deg) scale(1.05);
      box-shadow: 0 5px 15px rgba(201, 0, 0, 0.3);
    }
    
    .tab-btn:hover {
      background: linear-gradient(135deg, #F7E733 0%, #E6D000 100%);
      color: #000;
      transform: rotate(0deg) scale(1.02);
    }
    
    .gallery-content {
      min-height: 600px;
    }
    
    .clips-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }
    
    .clip-card {
      position: relative;
      cursor: pointer;
      transform: rotate(-1deg);
      transition: all 0.3s ease;
    }
    
    .clip-card:hover {
      transform: rotate(0deg) scale(1.05);
    }
    
    .clip-thumbnail {
      position: relative;
      background: linear-gradient(135deg, #1C1C1C 0%, #000 100%);
      border: 3px solid #C90000;
      height: 200px;
      overflow: hidden;
    }
    
    .clip-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(45deg, rgba(201, 0, 0, 0.3) 0%, transparent 50%, rgba(247, 231, 51, 0.3) 100%);
      transition: all 0.3s ease;
    }
    
    .clip-card:hover .clip-overlay {
      background: 
        linear-gradient(45deg, rgba(201, 0, 0, 0.1) 0%, transparent 50%, rgba(247, 231, 51, 0.1) 100%);
    }
    
    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      border: 3px solid #F7E733;
    }
    
    .clip-card:hover .play-button {
      transform: translate(-50%, -50%) scale(1.2);
      background: linear-gradient(135deg, #F7E733 0%, #E6D000 100%);
    }
    
    .play-icon {
      color: #F5F5F5;
      font-size: 1.5rem;
      margin-left: 3px;
    }
    
    .clip-card:hover .play-icon {
      color: #000;
    }
    
    .clip-info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
      padding: 1rem;
      color: #F5F5F5;
    }
    
    .clip-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    
    .clip-views {
      font-size: 0.9rem;
      color: #F7E733;
    }
    
    .clip-border {
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      border: 2px solid #F7E733;
      pointer-events: none;
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    .clip-card:hover .clip-border {
      opacity: 1;
    }
    
    .clip-splash {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .clip-card:active .clip-splash {
      animation: clipSplash 0.6s ease-out;
    }
    
    .photos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    
    .photo-card {
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .photo-card:hover {
      transform: scale(1.05) rotate(1deg);
    }
    
    .photo-frame {
      position: relative;
      background: #1C1C1C;
      border: 3px solid #F7E733;
      padding: 10px;
      transform: rotate(-2deg);
      transition: all 0.3s ease;
    }
    
    .photo-card:hover .photo-frame {
      transform: rotate(0deg);
      border-color: #C90000;
    }
    
    .photo-image {
      width: 100%;
      height: 200px;
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      background-size: cover;
      background-position: center;
      position: relative;
    }
    
    .photo-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%, rgba(247, 231, 51, 0.2) 100%);
      transition: all 0.3s ease;
    }
    
    .photo-card:hover .photo-overlay {
      background: linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0%, transparent 50%, rgba(247, 231, 51, 0.1) 100%);
    }
    
    .photo-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
      color: #F5F5F5;
      padding: 0.5rem;
      font-size: 0.9rem;
      font-weight: bold;
    }
    
    .photo-graffiti {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 20px;
      height: 20px;
      background: #C90000;
      transform: rotate(45deg);
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    .photo-card:hover .photo-graffiti {
      opacity: 1;
    }
    
    .behind-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }
    
    .behind-card {
      background: linear-gradient(135deg, #000 0%, #1C1C1C 100%);
      border: 2px solid #C90000;
      padding: 1.5rem;
      transform: rotate(-0.5deg);
      transition: all 0.3s ease;
    }
    
    .behind-card:hover {
      transform: rotate(0deg) scale(1.02);
      border-color: #F7E733;
      box-shadow: 0 5px 20px rgba(201, 0, 0, 0.2);
    }
    
    .behind-content {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    
    .behind-image {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      border-radius: 50%;
      flex-shrink: 0;
    }
    
    .behind-text {
      flex: 1;
    }
    
    .behind-title {
      color: #F7E733;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    
    .behind-description {
      color: #F5F5F5;
      line-height: 1.5;
      margin-bottom: 0.5rem;
    }
    
    .behind-date {
      color: #C90000;
      font-size: 0.9rem;
      font-weight: bold;
    }
    
    .photo-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: modalFadeIn 0.3s ease;
    }
    
    .modal-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      background: linear-gradient(135deg, #1C1C1C 0%, #000 100%);
      border: 3px solid #C90000;
      display: flex;
      flex-direction: column;
    }
    
    .modal-close {
      position: absolute;
      top: 10px;
      right: 15px;
      background: none;
      border: none;
      color: #F5F5F5;
      font-size: 2rem;
      cursor: pointer;
      z-index: 1001;
      transition: all 0.3s ease;
    }
    
    .modal-close:hover {
      color: #C90000;
      transform: scale(1.2);
    }
    
    .modal-image {
      width: 600px;
      height: 400px;
      background-size: cover;
      background-position: center;
      background-color: #1C1C1C;
    }
    
    .modal-info {
      padding: 1.5rem;
      background: linear-gradient(135deg, #000 0%, #1C1C1C 100%);
    }
    
    .modal-title {
      color: #F7E733;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    
    .modal-description {
      color: #F5F5F5;
      line-height: 1.6;
    }
    
    .modal-navigation {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      transform: translateY(-50%);
    }
    
    .nav-btn {
      background: rgba(201, 0, 0, 0.8);
      color: #F5F5F5;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.5rem;
      transition: all 0.3s ease;
    }
    
    .nav-btn:hover {
      background: rgba(247, 231, 51, 0.8);
      color: #000;
      transform: scale(1.1);
    }
    
    @keyframes clipSplash {
      0% { width: 0; height: 0; background: rgba(201, 0, 0, 0.8); }
      100% { width: 200px; height: 200px; background: rgba(201, 0, 0, 0); }
    }
    
    @keyframes modalFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @media (max-width: 768px) {
      .gallery-tabs {
        flex-direction: column;
        align-items: center;
      }
      
      .clips-grid, .photos-grid {
        grid-template-columns: 1fr;
      }
      
      .behind-grid {
        grid-template-columns: 1fr;
      }
      
      .behind-content {
        flex-direction: column;
        text-align: center;
      }
      
      .modal-image {
        width: 90vw;
        height: 50vh;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class GalleryComponent {
  activeTab = 'clips';
  selectedPhoto: any = null;
  currentPhotoIndex = 0;

  clips = [
    {
      title: 'STREET GENESIS',
      views: '1.2M',
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg'
    },
    {
      title: 'DRILL ANTHEM',
      views: '850K',
      thumbnail: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg'
    },
    {
      title: 'URBAN LEGENDS',
      views: '2.1M',
      thumbnail: 'https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg'
    },
    {
      title: 'FIRE DRILL',
      views: '650K',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
    }
  ];

  photos = [
    {
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      caption: 'Studio Session',
      description: 'Enregistrement du dernier album dans le studio légendaire de Los Angeles.'
    },
    {
      url: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
      caption: 'Concert Paris',
      description: 'Show explosif au Bataclan devant 1500 personnes en délire.'
    },
    {
      url: 'https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg',
      caption: 'Street Art',
      description: 'Collaboration avec des artistes graffeurs locaux pour la pochette d\'album.'
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      caption: 'Backstage',
      description: 'Moments d\'intimité avant le show, concentration et préparation.'
    }
  ];

  behindScenes = [
    {
      title: 'Écriture nocturne',
      description: 'Sessions d\'écriture jusqu\'à 4h du matin pour trouver le flow parfait.',
      date: '15 Jan 2024'
    },
    {
      title: 'Collaboration surprise',
      description: 'Enregistrement secret avec un artiste international, révélation bientôt...',
      date: '20 Jan 2024'
    },
    {
      title: 'Tournage clip',
      description: 'Trois jours de tournage intensif dans les rues de Marseille.',
      date: '25 Jan 2024'
    },
    {
      title: 'Mix final',
      description: 'Derniers réglages avec le meilleur ingénieur son de France.',
      date: '30 Jan 2024'
    }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  playClip(clip: any) {
    console.log('Playing clip:', clip.title);
    // Logique de lecture vidéo
  }

  openPhoto(photo: any, index: number) {
    this.selectedPhoto = photo;
    this.currentPhotoIndex = index;
  }

  closePhoto() {
    this.selectedPhoto = null;
  }

  previousPhoto() {
    this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.photos.length) % this.photos.length;
    this.selectedPhoto = this.photos[this.currentPhotoIndex];
  }

  nextPhoto() {
    this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
    this.selectedPhoto = this.photos[this.currentPhotoIndex];
  }
}